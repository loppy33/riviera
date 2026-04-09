import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      
      {/* САЙДБАР */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="material-symbols-outlined icon">shield_person</span>
          Admin Panel
        </div>
        
        <nav className="admin-sidebar__nav">
          <Link href="/admin">
            <span className="material-symbols-outlined icon">dashboard</span>
            Dashboard
          </Link>
          <Link href="/admin/inquiries" className="active">
            <span className="material-symbols-outlined icon">mail</span>
            Inquiries
          </Link>
          <Link href="/admin/properties">
            <span className="material-symbols-outlined icon">villa</span>
            Properties
          </Link>
          <Link href="/" style={{ marginTop: 'auto' }}>
            <span className="material-symbols-outlined icon">language</span>
            Back to Website
          </Link>
        </nav>
      </aside>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="admin-main">
        {children}
      </main>
      
    </div>
  );
}