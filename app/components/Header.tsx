import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        
        {/* Логотип -> на Главную */}
        <Link href="/" className="header__logo">
          <span className="material-symbols-outlined icon">architecture</span>
          <span className="brand-name">Riviera Estates</span>
        </Link>
        
        {/* Навигация -> Главная и Каталог */}
        <nav className="header__nav">
          <Link href="/">Home</Link>
          <Link href="/collection">The Collection</Link>
          <Link href="/legal">Legal & Tax Advisory</Link>
        </nav>

        {/* Кнопка -> на страницу Заявки */}
        <Link href="/inquiry" className="header__btn">
          Inquire Now
        </Link>

      </div>
    </header>
  );
}