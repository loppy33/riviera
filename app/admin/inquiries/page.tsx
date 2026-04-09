import React from 'react';
import prisma from '@/lib/prisma'; // Подключаем наш инстанс Prisma
import Link from 'next/link';

// Эта строка заставляет Next.js не кэшировать страницу намертво,
// а запрашивать свежие данные при каждом открытии админки.
export const dynamic = 'force-dynamic';

export default async function InquiriesPage() {
    // МАГИЯ: Запрашиваем данные из Postgres напрямую
    const inquiries = await prisma.inquiry.findMany({
        orderBy: {
            createdAt: 'desc', // Сортируем: новые сверху
        },
    });

    return (
        <>
            <div className="admin-header">
                <div>
                    <h1>Inquiries & Leads</h1>
                    <p>Manage contact requests and property inquiries from clients.</p>
                </div>
            </div>

            <div className="admin-table-wrapper">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Client Details</th>
                            <th>Interest</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Отрисовываем данные из базы */}
                        {inquiries.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem' }}>
                                    No inquiries found.
                                </td>
                            </tr>
                        ) : (
                            inquiries.map((inquiry) => (
                                <tr key={inquiry.id}>

                                    <td>
                                        <strong>{inquiry.fullName}</strong>
                                        <div className="email">{inquiry.email}</div>
                                        {inquiry.phone && <div className="email">{inquiry.phone}</div>}
                                    </td>

                                    <td>{inquiry.interest || 'General Inquiry'}</td>

                                    {/* Обрезаем длинное сообщение */}
                                    <td style={{ maxWidth: '300px' }}>
                                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {inquiry.message}
                                        </div>
                                    </td>

                                    {/* Красиво форматируем дату */}
                                    <td>{new Date(inquiry.createdAt).toLocaleDateString('en-GB')}</td>

                                    <td>
                                        {/* Класс статуса зависит от значения в базе (NEW, CONTACTED, CLOSED) */}
                                        <span className={`status-badge status-badge--${inquiry.status.toLowerCase()}`}>
                                            {inquiry.status}
                                        </span>
                                    </td>

                                    <td>
                                        <Link
                                            href={`/admin/inquiries/${inquiry.id}`}
                                            className="btn btn--outline"
                                            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', color: 'var(--c-primary)', borderColor: 'var(--border-color-input)', display: 'inline-block', textDecoration: 'none' }}
                                        >
                                            View
                                        </Link>
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