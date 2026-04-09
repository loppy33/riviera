import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import Pagination from '@/app/components/Pagination';
import SortSelect from '@/app/components/SortSelect';
import { getTranslations, getLocale } from 'next-intl/server';

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 6;

export default async function Collection({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; page?: string }>;
}) {
  const t = await getTranslations('collection');
  const locale = await getLocale();

  const params = await searchParams;
  const sort = params.sort || 'price_desc';
  const currentPage = Number(params.page) || 1;

  let orderByQuery: any = { price: 'desc' };
  if (sort === 'price_asc') orderByQuery = { price: 'asc' };
  else if (sort === 'newest') orderByQuery = { createdAt: 'desc' };
  else if (sort === 'popular') orderByQuery = [{ isHot: 'desc' }, { createdAt: 'desc' }];

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const [properties, totalCount] = await Promise.all([
    prisma.property.findMany({ orderBy: orderByQuery, skip, take: ITEMS_PER_PAGE }),
    prisma.property.count(),
  ]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <main className="collection-page">

      <div className="collection-top">
        <div className="collection-top__info">
          <h2 className="collection-top__title">{t('title')}</h2>
          <p className="collection-top__desc">{t('desc')}</p>
        </div>
        <div className="collection-top__sort">
          <label>{t('sortBy')}</label>
          <SortSelect />
        </div>
      </div>

      <div className="collection-grid">
        {properties.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--c-text-muted)' }}>
            <h3>{t('noProperties')}</h3>
          </div>
        ) : (
          properties.map((property: any) => (
            <div className="villa-card" key={property.id}>
              <Link href={`/${locale}/collection/${property.slug}`} className="villa-card__image-box" style={{ display: 'block' }}>
                <div className="villa-card__skeleton"></div>
                <img
                  src={property.images[0] || 'https://via.placeholder.com/800x600?text=No+Image'}
                  alt={property.title}
                  className="villa-card__img"
                />
                {property.isExclusive && <div className="villa-card__badge villa-card__badge--exclusive">{t('exclusive')}</div>}
                {property.isHot && !property.isExclusive && <div className="villa-card__badge villa-card__badge--hot">{t('hot')}</div>}
              </Link>
              <div className="villa-card__content">
                <span className="villa-card__location">{property.location}</span>
                <h3 className="villa-card__price">€{property.price.toLocaleString('en-US')}</h3>
                <div className="villa-card__footer">
                  <div className="villa-card__specs">
                    <span><span className="material-symbols-outlined">bed</span> {property.bedrooms}</span>
                    <span><span className="material-symbols-outlined">shower</span> {property.bathrooms}</span>
                    <span><span className="material-symbols-outlined">square_foot</span> {property.livingArea}m²</span>
                  </div>
                  <Link href={`/${locale}/collection/${property.slug}`} className="villa-card__btn" style={{ textDecoration: 'none' }}>
                    {t('viewDetails')}
                    <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Pagination totalPages={totalPages} />

    </main>
  );
}