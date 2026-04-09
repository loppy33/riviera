import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StatusUpdater from '@/app/components/admin/StatusUpdater';

export default async function InquiryDetailPage({ params }: { params: { id: string } }) {
    // Ищем заявку в БД по ID из URL
    const { id } = await params;

    const inquiry = await prisma.inquiry.findUnique({
        where: { id },
    });
    // Если вдруг ввели неверный ID, покажем 404
    if (!inquiry) {
        notFound();
    }

    return (
        <>
            <div className="admin-header">
                <div>
                    <Link href="/admin/inquiries" style={{ color: 'var(--c-text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span>
                        Back to Inquiries
                    </Link>
                    <h1>Inquiry Details</h1>
                </div>
            </div>

            <div className="admin-detail">
                <div className="admin-detail__header">
                    <div>
                        <h2>{inquiry.fullName}</h2>
                        <div className="date">
                            Received: {new Date(inquiry.createdAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                        </div>
                    </div>

                    {/* Наш клиентский переключатель статусов */}
                    <StatusUpdater id={inquiry.id} currentStatus={inquiry.status} />
                </div>

                <div className="admin-detail__grid">
                    <div className="admin-detail__group">
                        <label>Email Address</label>
                        <p><a href={`mailto:${inquiry.email}`}>{inquiry.email}</a></p>
                    </div>

                    <div className="admin-detail__group">
                        <label>Phone Number</label>
                        <p>{inquiry.phone ? <a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a> : 'Not provided'}</p>
                    </div>

                    <div className="admin-detail__group">
                        <label>Property Interest</label>
                        <p>{inquiry.interest || 'General Inquiry'}</p>
                    </div>
                </div>

                <div className="admin-detail__message">
                    <label>Message</label>
                    <div className="text-box">
                        {inquiry.message}
                    </div>
                </div>
            </div>
        </>
    );
}