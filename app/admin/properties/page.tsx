import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import DeletePropertyBtn from '@/app/components/admin/DeletePropertyBtn';

export const dynamic = 'force-dynamic';

export default async function PropertiesPage() {
    const properties = await prisma.property.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <>
            <div className="admin-header">
                <div>
                    <h1>Properties</h1>
                    <p>Manage your real estate portfolio.</p>
                </div>
                <Link href="/admin/properties/new" className="btn btn--primary" style={{ padding: '0.75rem 1.5rem', margin: 0 }}>
                    <span className="material-symbols-outlined" style={{ marginRight: '0.5rem', fontSize: '1.25rem' }}>add</span>
                    Add New Property
                </Link>
            </div>

            <div className="admin-table-wrapper">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Details</th>
                            <th>Specs</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem' }}>
                                    No properties found. Click "Add New Property" to start.
                                </td>
                            </tr>
                        ) : (
                            properties.map((property) => (
                                <tr key={property.id}>

                                    {/* Миниатюра первого фото */}
                                    <td>
                                        <div style={{ width: '80px', height: '60px', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: 'var(--border-color-input)' }}>
                                            {property.images[0] && (
                                                <img src={property.images[0]} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            )}
                                        </div>
                                    </td>

                                    <td>
                                        <strong>{property.title}</strong>
                                        <div className="email">{property.location}</div>
                                    </td>

                                    <td>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--c-text-muted)' }}>
                                            {property.bedrooms} Beds • {property.bathrooms} Baths • {property.livingArea}m²
                                        </span>
                                    </td>

                                    <td><strong>€{property.price.toLocaleString('en-US')}</strong></td>

                                    <td>
                                        <span className="status-badge status-badge--new">
                                            {property.status}
                                        </span>
                                    </td>

                                    <td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                {/* Кнопка "Смотреть на сайте" */}
                                                <Link href={`/collection/${property.slug}`} target="_blank" className="btn btn--outline" style={{ padding: '0.5rem', color: 'var(--c-text-muted)', borderColor: 'var(--border-color-input)' }} title="View on site">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>visibility</span>
                                                </Link>

                                                {/* Кнопка "Редактировать" */}
                                                <Link href={`/admin/properties/${property.id}/edit`} className="btn btn--outline" style={{ padding: '0.5rem', color: 'var(--c-primary)', borderColor: 'var(--border-color-input)' }} title="Edit Property">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>edit</span>
                                                </Link>

                                                {/* Наша новая кнопка "Удалить" */}
                                                <DeletePropertyBtn id={property.id} />
                                            </div>
                                        </td>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}