"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { createProperty } from '@/actions/property';

export default function NewPropertyPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    // Функция createProperty сама сделает редирект при успехе
    await createProperty(formData);
    setIsLoading(false);
  };

  return (
    <>
      <div className="admin-header">
        <div>
          <Link href="/admin/properties" style={{ color: 'var(--c-text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span>
            Back to Properties
          </Link>
          <h1>Add New Property</h1>
        </div>
      </div>

      <div className="admin-detail" style={{ maxWidth: '800px' }}>
        <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Property Title</label>
              <input type="text" name="title" required placeholder="e.g. Villa Serenity" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>
            
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Location</label>
              <input type="text" name="location" required placeholder="e.g. Cannes, France" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Price (€)</label>
              <input type="number" name="price" required placeholder="12500000" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>
            
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Bedrooms</label>
              <input type="number" name="bedrooms" required placeholder="6" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Bathrooms</label>
              <input type="number" name="bathrooms" required placeholder="8" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>

            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Area (m²)</label>
              <input type="number" name="livingArea" required placeholder="850" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)' }} />
            </div>
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Description</label>
            <textarea name="description" required rows={6} placeholder="Describe the property..." style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)', resize: 'vertical' }}></textarea>
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-text-muted)' }}>Image URLs (comma separated)</label>
            <textarea name="images" required rows={3} placeholder="https://image1.jpg, https://image2.jpg" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color-input)', backgroundColor: 'var(--bg-main)', resize: 'vertical' }}></textarea>
            <span style={{ fontSize: '0.75rem', color: 'var(--c-text-light)' }}>Paste direct links to images separated by commas for now.</span>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" name="isExclusive" style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Exclusive Listing Badge</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" name="isHot" style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Hot Property Badge</span>
            </label>
          </div>

          <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color-input)', paddingTop: '2rem' }}>
            <button type="submit" className="btn btn--primary" disabled={isLoading} style={{ width: '100%', padding: '1rem', margin: 0 }}>
              {isLoading ? 'Creating Property...' : 'Save Property'}
            </button>
          </div>
          
        </form>
      </div>
    </>
  );
}