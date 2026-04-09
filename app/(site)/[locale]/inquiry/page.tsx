"use client"; // Обязательно, так как добавляем интерактивность

import React, { useState } from 'react';
import { createInquiry } from '@/actions/inquiry'; // Импортируем наш бэкенд

export default function Inquiry() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Клиентский обработчик формы
  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");

    // Вызываем серверную функцию напрямую!
    const result = await createInquiry(formData);

    if (result?.error) {
      setStatus("error");
      setMessage(result.error);
    } else if (result?.success) {
      setStatus("success");
      setMessage(result.message);
      // Опционально: очистить форму можно через useRef
    }
  };
  return (
    <>
      <main className="page-inquiry">
        <div className="inquiry-card">

          {/* --- HERO СЕКЦИЯ ФОРМЫ --- */}
          <div className="inquiry-hero">
            <span className="inquiry-hero__badge">Tailored Excellence</span>
            <h1 className="inquiry-hero__title">Bespoke Inquiry</h1>
            <p className="inquiry-hero__subtitle">
              Connect with our architectural specialists to find your sanctuary on the French Riviera.
            </p>
          </div>

          {/* --- КОНТАКТНЫЕ ДАННЫЕ --- */}
          <div className="inquiry-channels">
            <div className="inquiry-channels__item inquiry-channels__item--email">
              <div className="inquiry-channels__label">
                <span className="material-symbols-outlined icon">mail</span>
                <span>Email Us</span>
              </div>
              <p className="inquiry-channels__value">arsen.gousseynov@gmail.com</p>
            </div>

            <div className="inquiry-channels__item inquiry-channels__item--phone">
              <div className="inquiry-channels__label">
                <span className="material-symbols-outlined icon">call</span>
                <span>Call Us</span>
              </div>
              <p className="inquiry-channels__value">+33 6 26 26 49 15</p>
            </div>
          </div>

          {/* --- ФОРМА ЗАЯВКИ --- */}
          <form action={handleSubmit} className="inquiry-form">

            <div className="inquiry-form__row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" placeholder="Johnathan Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="j.doe@example.com" required />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your architectural preferences..."
                required
              ></textarea>
            </div>

            {/* Статус отправки */}
            {status === "success" && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
            {status === "error" && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Inquiry"}
              <span className="material-symbols-outlined icon">arrow_forward</span>
            </button>

          </form>

          {/* --- СНОСКА --- */}
          <div className="inquiry-note">
            <p>Our response time is typically within 24 business hours. Confidentiality is our cornerstone.</p>
          </div>

        </div>
      </main>

      {/* --- КРАСИВЫЙ БАННЕР СНИЗУ --- */}
      <section className="inquiry-context">
        <div className="inquiry-context__card">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq5wV0gyc7o2l7-ENp4wsuuAYrHzqFRKli8wZud3AxRvjl0YLGOh8LNRi_PbG2RnflrkEvMEpMtC5ONdzwvb4IezM5pgucHOhxBiGXYxOT9qNTtabY7pNUTbnefqI3DX9W4fwZcj3ao93G8S0vdfXPAL9ZFtdOLlU2iWrxCE-vRUXLeUGdVv9HiWrMB649YZvC15MZ5UVLOCwmL-jwBl9jrtEsCKH4ZRa9FjhzIrswQt52x7lxQg5jwOVRKKONj3JrQpfGQokwvpg"
            alt="Luxury villa overlooking the Mediterranean Sea"
            className="inquiry-context__img"
            data-alt="Modern luxury villa with infinity pool at dusk"
          />
          <div className="inquiry-context__overlay">
            <div className="inquiry-context__text">
              <h3>Cap d'Antibes</h3>
              <p>View our exclusive off-market portfolio</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}