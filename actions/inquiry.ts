"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Функция для создания заявки
export async function createInquiry(formData: FormData) {
  try {
    // Достаем данные из формы (name атрибуты инпутов)
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const interest = formData.get("interest") as string | null;
    const message = formData.get("message") as string;

    // Валидация (минимальная)
    if (!fullName || !email || !message) {
      return { error: "Name, email, and message are required." };
    }

    // Запись в базу данных
    await prisma.inquiry.create({
      data: {
        fullName,
        email,
        phone,
        interest,
        message,
      },
    });

    // Обновляем кэш админки, чтобы заявка сразу появилась там
    revalidatePath("/admin/inquiries");

    return { success: true, message: "Inquiry sent successfully!" };
  } catch (error) {
    console.error("Failed to create inquiry:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}

export async function updateInquiryStatus(id: string, status: "NEW" | "CONTACTED" | "CLOSED") {
  try {
    await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    // Обновляем кэш страниц, чтобы увидеть изменения мгновенно
    revalidatePath("/admin/inquiries");
    revalidatePath(`/admin/inquiries/${id}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to update status:", error);
    return { error: "Failed to update status" };
  }
}