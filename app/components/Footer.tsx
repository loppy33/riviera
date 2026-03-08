import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        
        <div className="footer__brand">
          <span className="material-symbols-outlined icon">architecture</span>
          <span className="brand-name">Riviera Estates</span>
        </div>

        <nav className="footer__nav">
          <Link href="/">Home</Link>
          <Link href="/collection">Collection</Link>
          <Link href="/inquiry">Contact Us</Link>
        </nav>

        <div className="footer__copy">
          © {new Date().getFullYear()} Riviera Estates. All rights reserved.
        </div>

      </div>
    </footer>
  );
}