import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import HomeInquiryForm from '@/app/components/HomeInquiryForm';
import { getTranslations, getLocale } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const t = await getTranslations('home');
  const locale = await getLocale();

  const featuredProperties = await prisma.property.findMany({
    take: 3,
    orderBy: [{ isHot: 'desc' }, { createdAt: 'desc' }]
  });

  return (
    <div className="page-home">

      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-overlay"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvBPzVqKomGjyd5SVlPaiZbhLJkAWoMCKyGet6gq_5XAnOfce4NWhYxYH8I0e3bukA7VbM3jpJSnMVUMStUxIaJOhlytn4_19tSXKO3SJxQUTo_GvUXirIayrCS6APPFd91EryDgraAraCruSoihxk6ysCTozBULSQgpFKWbe8aEdY0wx7RYIDzxNDz3GuOZeinxK3RESBcfmmtWHaKVCweGm7qJ-Z1lgzSR-wrtBDEl-sGSnbnchjXqhlm8TnhswuZggofJrEdU"
            alt="Luxury Villa Hero"
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            {t('hero.title')} <br /> <span>{t('hero.titleSpan')}</span>
          </h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__actions">
            <Link href={`/${locale}/collection`} className="btn btn--white" style={{ textDecoration: 'none' }}>
              {t('hero.viewCollection')}
            </Link>
            <Link href={`/${locale}/inquiry`} className="btn btn--outline" style={{ textDecoration: 'none' }}>
              {t('hero.inquireNow')}
            </Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      <section className="section section--alt collection">
        <div className="container">
          <div className="collection__grid">
            <div className="collection__content">
              <span className="section-badge">{t('collection.badge')}</span>
              <h2 className="section-title">{t('collection.title')}</h2>
              <p className="collection__desc">{t('collection.desc')}</p>
              <div className="collection__features">
                <div className="collection__feature-card">
                  <span className="material-symbols-outlined icon">verified_user</span>
                  <h3>{t('collection.card1Title')}</h3>
                  <p>{t('collection.card1Desc')}</p>
                </div>
                <div className="collection__feature-card">
                  <span className="material-symbols-outlined icon">concierge</span>
                  <h3>{t('collection.card2Title')}</h3>
                  <p>{t('collection.card2Desc')}</p>
                </div>
              </div>
            </div>
            <div className="collection__image-wrapper">
              <div className="bg-accent"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbmXM-2ouc6t68kMy_ymBaqIxMkv67pJ4M-ZeYL4vI-73c2J4gfXlwGuxWePnL0o5rFliR10x0JEAh4UTdLCTTag-PCUzGMsrm2z-qCy8SHsFdBRBXPltQz1yZJz3Ihl8BO5peMzLp7xxSh_EXzhOW9kJ55-eu-tG5RVb260nJYjS1K1RqMdVJ7_uKb5LWZQrSlcTbR0WQl5lN4XJnINl6EIWDWewyXLOrOx1xMUqSIkVUPQ1R4GMQQ1DDK0pkYS-RLZ-Ww7lFwE"
                alt="Luxury Villa Architecture"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="featured__header">
            <div>
              <span className="section-badge">{t('featured.badge')}</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>{t('featured.title')}</h2>
            </div>
            <Link href={`/${locale}/collection`} className="featured__explore">
              {t('featured.exploreAll')} <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
          <div className="featured__grid">
            {featuredProperties.length === 0 ? (
              <p style={{ gridColumn: '1/-1', color: 'var(--c-text-muted)' }}>{t('featured.noProperties')}</p>
            ) : (
              featuredProperties.map((property) => (
                <article className="property-card" key={property.id}>
                  <Link href={`/${locale}/collection/${property.slug}`} className="property-card__image-box" style={{ display: 'block' }}>
                    <img src={property.images[0] || 'https://via.placeholder.com/800x600'} alt={property.title} />
                    {property.isExclusive && <div className="badge badge--exclusive">{t('featured.exclusive')}</div>}
                    {property.isHot && !property.isExclusive && (
                      <div className="badge badge--hot" style={{ background: '#000', color: '#fff' }}>{t('featured.hot')}</div>
                    )}
                  </Link>
                  <div className="property-card__info">
                    <div className="property-card__title-row">
                      <h3>{property.title}</h3>
                      <span className="price">€{property.price.toLocaleString('en-US')}</span>
                    </div>
                    <div className="property-card__specs">
                      <span><span className="material-symbols-outlined">bed</span> {property.bedrooms} {t('featured.beds')}</span>
                      <span><span className="material-symbols-outlined">shower</span> {property.bathrooms} {t('featured.baths')}</span>
                      <span><span className="material-symbols-outlined">square_foot</span> {property.livingArea} m²</span>
                    </div>
                    <p className="property-card__desc">{property.location}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section inquiry">
        <div className="container" style={{ maxWidth: '1024px' }}>
          <div className="inquiry__card">
            <div className="inquiry__sidebar">
              <div>
                <h2>{t('inquiry.title')}</h2>
                <p>{t('inquiry.desc')}</p>
              </div>
              <div className="inquiry__contacts">
                <div className="contact-item">
                  <span className="material-symbols-outlined">call</span>
                  <span>+33 6 26 26 49 15</span>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">mail</span>
                  <span>arsen.gousseynov@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>{t('inquiry.location')}</span>
                </div>
              </div>
            </div>
            <div className="inquiry__form-wrapper">
              <HomeInquiryForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}