import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { updateProperty } from '@/actions/property';

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: { id },
  });

  if (!property) notFound();

  const updateAction = updateProperty.bind(null, property.id);

  return (
    <>
      <div className="admin-header">
        <div>
          <Link
            href="/admin/properties"
            style={{
              color: 'var(--c-text-muted)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              arrow_back
            </span>
            Back to Properties
          </Link>
          <h1>Edit Property</h1>
        </div>
      </div>

      <div className="admin-detail" style={{ maxWidth: '800px' }}>
        <form action={updateAction} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label>Property Title</label>
              <input type="text" name="title" defaultValue={property.title} required />
            </div>
            
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" defaultValue={property.location} required />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div className="form-group">
              <label>Price (€)</label>
              <input type="number" name="price" defaultValue={property.price} required />
            </div>
            
            <div className="form-group">
              <label>Bedrooms</label>
              <input type="number" name="bedrooms" defaultValue={property.bedrooms} required />
            </div>

            <div className="form-group">
              <label>Bathrooms</label>
              <input type="number" name="bathrooms" defaultValue={property.bathrooms} required />
            </div>

            <div className="form-group">
              <label>Area (m²)</label>
              <input type="number" name="livingArea" defaultValue={property.livingArea} required />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" defaultValue={property.description} required rows={6}></textarea>
          </div>

          <div className="form-group">
            <label>Image URLs (comma separated)</label>
            {/* Превращаем массив обратно в строку через запятую для инпута */}
            <textarea name="images" defaultValue={property.images.join(', ')} required rows={3}></textarea>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" name="isExclusive" defaultChecked={property.isExclusive} style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Exclusive Listing Badge</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" name="isHot" defaultChecked={property.isHot} style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Hot Property Badge</span>
            </label>
          </div>

          <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color-input)', paddingTop: '2rem' }}>
            <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '1rem', margin: 0 }}>
              Update Property
            </button>
          </div>
          
        </form>
      </div>
    </>
  );
}