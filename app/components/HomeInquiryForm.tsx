"use client";

import React, { useState } from 'react';
import { createInquiry } from '@/actions/inquiry';

export default function HomeInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleHomeSubmit = async (formData: FormData) => {
    setStatus("loading");
    
    // Склеиваем имя и фамилию в одно поле fullName для базы
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    formData.set("fullName", `${firstName} ${lastName}`);

    const result = await createInquiry(formData);

    if (result?.error) {
      setStatus("error");
      setMessage(result.error);
    } else if (result?.success) {
      setStatus("success");
      setMessage(result.message);
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>check_circle</span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You</h3>
        <p style={{ color: 'var(--c-text-light)' }}>{message}</p>
      </div>
    );
  }

  return (
    <form action={handleHomeSubmit} className="inquiry__form">
      <div className="inquiry__form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" placeholder="John" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" placeholder="Doe" required />
        </div>
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="john@example.com" required />
      </div>
      
      <div className="form-group">
        <label>Interest</label>
        <select name="interest">
          <option value="Investment Property">Investment Property</option>
          <option value="Vacation Villa">Vacation Villa</option>
          <option value="Sell a Property">Sell a Property</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows={3} placeholder="How can we assist you?" required></textarea>
      </div>
      
      {status === "error" && <p style={{ color: "red", fontSize: "0.875rem" }}>{message}</p>}

      <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}