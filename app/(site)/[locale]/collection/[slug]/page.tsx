import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PropertyForm from '@/app/components/PropertyForm';
import PropertyGallery from '@/app/components/PropertyGallery';
import { useTranslations, useLocale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await prisma.property.findUnique({ where: { slug } });
  if (!property) return { title: "Property Not Found" };
  return { title: property.title, description: property.description };
}

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = useTranslations('property');
  const locale = useLocale();
  const { slug } = await params;

  const property = await prisma.property.findUnique({ where: { slug } });
  if (!property) notFound();

  return (
    <main className="page-property">

      {/* BREADCRUMBS */}
      <nav className="breadcrumbs">
        <Link href={`/${locale}`}>{t('breadcrumbHome')}</Link>
        <span className="material-symbols-outlined icon">chevron_right</span>
        <Link href={`/${locale}/collection`}>{t('breadcrumbCollection')}</Link>
        <span className="material-symbols-outlined icon">chevron_right</span>
        <span className="current">{property.title}</span>
      </nav>

      <PropertyGallery images={property.images} />

      <div className="property-layout">

        {/* LEFT COLUMN */}
        <div className="property-layout__main">

          <div className="property-header">
            <div className="property-header__top">
              <h2 className="property-header__title">{property.title}</h2>
              <div className="property-header__price-block">
                <p className="price">€{property.price.toLocaleString('en-US')}</p>
                <p className="status">{property.status}</p>
              </div>
            </div>
            <p className="property-header__location">
              <span className="material-symbols-outlined icon">location_on</span>
              {property.location}
            </p>
          </div>

          <div className="property-desc">
            {property.description.split('\n').map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="property-map">
            <h3 className="property-map__title">
              <span className="material-symbols-outlined icon">map</span>
              {t('locationLabel')}
            </h3>
            <div className="property-map__box" style={{ padding: 0, border: 'none', backgroundColor: 'transparent' }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location + ', France')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <aside className="property-layout__sidebar">
          <div className="sidebar-sticky">

            <div className="property-features">
              <h4 className="property-features__title">{t('keyFeatures')}</h4>
              <div className="property-features__grid">

                <div className="property-features__item">
                  <span className="material-symbols-outlined icon">square_foot</span>
                  <span className="label">{t('livingArea')}</span>
                  <span className="value">{property.livingArea} m²</span>
                </div>

                {property.landArea && (
                  <div className="property-features__item">
                    <span className="material-symbols-outlined icon">landscape</span>
                    <span className="label">{t('landSize')}</span>
                    <span className="value">{property.landArea} m²</span>
                  </div>
                )}

                <div className="property-features__item">
                  <span className="material-symbols-outlined icon">bed</span>
                  <span className="label">{t('bedrooms')}</span>
                  <span className="value">{property.bedrooms} {t('suites')}</span>
                </div>

                <div className="property-features__item">
                  <span className="material-symbols-outlined icon">bathtub</span>
                  <span className="label">{t('bathrooms')}</span>
                  <span className="value">{property.bathrooms}</span>
                </div>

              </div>
            </div>

            <div className="property-inquiry">
              <h4 className="property-inquiry__title">{t('requestInfo')}</h4>
              <p className="property-inquiry__desc">{t('requestDesc')}</p>
              <PropertyForm propertyTitle={property.title} />
            </div>

          </div>
        </aside>

      </div>
    </main>
  );
}