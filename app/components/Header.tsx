import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className="header">
      <div className="header__inner">

        {/* Логотип -> на Главную */}
        <Link href={`/${locale}`} className="header__logo">
          <span className="material-symbols-outlined icon">architecture</span>
          <span className="brand-name">Riviera Estates</span>
        </Link>

        {/* Навигация */}
        <nav className="header__nav">
          <Link href={`/${locale}`}>{t('home')}</Link>
          <Link href={`/${locale}/collection`}>{t('collection')}</Link>
          <Link href={`/${locale}/legal`}>{t('legal')}</Link>
        </nav>

        {/* Правая часть: переключатель языка + кнопка */}
        <div className="header__actions">
          <LangSwitcher />
          <Link href={`/${locale}/inquiry`} className="header__btn">
            {t('inquire')}
          </Link>
        </div>

      </div>
    </header>
  );
}