"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Функция добавления новой виллы
export async function createProperty(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const price = parseFloat(formData.get("price") as string);
    const bedrooms = parseInt(formData.get("bedrooms") as string, 10);
    const bathrooms = parseInt(formData.get("bathrooms") as string, 10);
    const livingArea = parseInt(formData.get("livingArea") as string, 10);
    const description = formData.get("description") as string;
    
    // Получаем строку с URL картинок (разделенных запятыми) и делаем из нее массив
    const imagesString = formData.get("images") as string;
    const images = imagesString.split(",").map((url) => url.trim()).filter(Boolean);

    // Чекбоксы
    const isExclusive = formData.get("isExclusive") === "on";
    const isHot = formData.get("isHot") === "on";

    // Генерируем slug (красивую ссылку) из названия, например: "Villa Serenity" -> "villa-serenity"
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    await prisma.property.create({
      data: {
        title,
        slug,
        location,
        price,
        bedrooms,
        bathrooms,
        livingArea,
        description,
        images,
        isExclusive,
        isHot,
      },
    });

    revalidatePath("/admin/properties");
    revalidatePath("/collection"); // Обновляем и публичный каталог
    
  } catch (error) {
    console.error("Failed to create property:", error);
    return { error: "Failed to create property." };
  }
  
  // Редирект должен быть вне блока try/catch
  redirect("/admin/properties");
}

// Функция удаления виллы
export async function deleteProperty(id: string) {
  try {
    await prisma.property.delete({
      where: { id },
    });
    revalidatePath("/admin/properties");
    revalidatePath("/collection");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete property." };
  }
}

export async function updateProperty(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const price = parseFloat(formData.get("price") as string);
    const bedrooms = parseInt(formData.get("bedrooms") as string, 10);
    const bathrooms = parseInt(formData.get("bathrooms") as string, 10);
    const livingArea = parseInt(formData.get("livingArea") as string, 10);
    const description = formData.get("description") as string;

    const imagesString = formData.get("images") as string;
    const images = imagesString.split(",").map((url) => url.trim()).filter(Boolean);

    const isExclusive = formData.get("isExclusive") === "on";
    const isHot = formData.get("isHot") === "on";

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await prisma.property.update({
      where: { id },
      data: {
        title,
        slug,
        location,
        price,
        bedrooms,
        bathrooms,
        livingArea,
        description,
        images,
        isExclusive,
        isHot,
      },
    });

    revalidatePath("/admin/properties");
    revalidatePath("/collection");
    revalidatePath(`/collection/${slug}`);

  } catch (error) {
    console.error("Failed to update property:", error);
    throw new Error("Failed to update property");
  }

  redirect("/admin/properties");
}