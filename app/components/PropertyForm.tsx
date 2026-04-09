"use client";

import React, { useState } from 'react';
import { createInquiry } from '@/actions/inquiry';

export default function PropertyForm({ propertyTitle }: { propertyTitle: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");
    // Автоматически добавляем название виллы как интерес
    formData.append("interest", `Inquiry about: ${propertyTitle}`);
    
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
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '0.5rem', border: '1px solid #10b981', color: '#065f46' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '2rem', marginBottom: '1rem' }}>check_circle</span>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Inquiry Sent!</h4>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="property-inquiry__form">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="fullName" placeholder="John Doe" required />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="john@example.com" required />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="+33 4 93 00 00 00" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows={4} placeholder={`I am interested in ${propertyTitle}...`} required></textarea>
      </div>
      
      {status === "error" && <p style={{ color: "red", fontSize: "0.875rem" }}>{message}</p>}

      <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
        <span className="material-symbols-outlined">send</span>
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}