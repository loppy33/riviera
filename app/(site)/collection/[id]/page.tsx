"use client";

import React, { useState } from 'react';

// Моковые данные для галереи. Можешь заменить их на пропсы в будущем.
const GALLERY_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPeTrr7EQNIb7OHYa-qxjtPTjAvMwCXi0qf4IL16Dui9XbpwHzkfrEHHYUuzAZbEeZTmG9KitcfG-w_HFeiiTsuWF6DuOc0TjGTtFLGtZMyCF7fVhxW3QeFP6naajBlaSvwXMqBgAnVaw-3iqW-jBYU0Xo5_2lQC-qFbmK00DWzY3yX6hL_8jpfUr44_bGwZgo1AynuR9b1HvTccGaHbSX2Bc1tEZRIKvhSMBfcB46dVFcDIKUmf8lwGqC8lJ-tyTw0M6X-WA05JM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC408K8DEpNLciDYmlVUOXYpd5bdypuUZbC03nWntFI7LYC5sL3Zg4BI7R-dHdrZIe1P3ggihvh8-btlBB-CNBA36bN3tMGnSTkvF0TXJftF8xDknMIOWQvczmn-WIJYkWLjWTDUKiJgwtGB8DpO81dm7xdrsj3bHZ-M3bvRYR9gfvitQXtZj9sWAk9-oIBp7OLqkhq3lfYB_-QgHSDk_MyEIs_jTgnwFtrttUxktb1cqrUXAlUndEeU2P_hzfoDsi7GtiRPiA8Npg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTDcxsd_Arj2Mbo83AMU5-0WZafKzLwBFWvrKt8MXUeyMO_6IsNNzp-SXRgIrZsPA_vjktkwzq4NNSVecgAUldTweVqXnqZI7TLP2xOkVrRQbx7utzqSP1prFJL4kiVtWmLFU4_wpJ3LrG84aBtzzWVblQXI17NUv9hbKn3tiA87XOKr6oBkOB9O4nf5MV2SPjevelGYchhsRVz5U0u1z_KlQa6h40LEAffGQ3AANwMFu8ZU7R3D5LWdjjUJKOxAChTrvM16ECjjg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8GxGlnBgzh4zWCFKCquIosmJCZav9eIfeEBBxes60dzcgZ_O4aS1WozY9XOqiuVu0x35_8linVZaVIN9cM-OJneD6EPV72gaiCXyRYQbpGE5H6FXlIJe9GtOvDEx8MxH2DX1FNlvULb7OqRX-xBNxy1Sdbiymh66z9V5Ko13IeE6JTTuBw6A379S6QNR3-Nfjjl7HyWpQlRlk0zmwL_A4r3HowjqYzgAjiyBGaK5AZiQ76zx2bAYBouWhQS6z4Veoi4S3YVSQhlQ", // Доп. фото для демонстрации
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxvBPzVqKomGjyd5SVlPaiZbhLJkAWoMCKyGet6gq_5XAnOfce4NWhYxYH8I0e3bukA7VbM3jpJSnMVUMStUxIaJOhlytn4_19tSXKO3SJxQUTo_GvUXirIayrCS6APPFd91EryDgraAraCruSoihxk6ysCTozBULSQgpFKWbe8aEdY0wx7RYIDzxNDz3GuOZeinxK3RESBcfmmtWHaKVCweGm7qJ-Z1lgzSR-wrtBDEl-sGSnbnchjXqhlm8TnhswuZggofJrEdU7", // Доп. фото для демонстрации
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxvBPzVqKomGjyd5SVlPaiZbhLJkAWoMCKyGet6gq_5XAnOfce4NWhYxYH8I0e3bukA7VbM3jpJSnMVUMStUxIaJOhlytn4_19tSXKO3SJxQUTo_GvUXirIayrCS6APPFd91EryDgraAraCruSoihxk6ysCTozBULSQgpFKWbe8aEdY0wx7RYIDzxNDz3GuOZeinxK3RESBcfmmtWHaKVCweGm7qJ-Z1lgzSR-wrtBDEl-sGSnbnchjXqhlm8TnhswuZggofJrEdU8", // Доп. фото для демонстрации
];

export default function PropertyDetails() {
  // Состояние для лайтбокса (модального окна с галереей)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Функции управления галереей
  const closeLightbox = () => setLightboxIndex(null);

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <>
      <main className="page-property">
        
        {/* --- ХЛЕБНЫЕ КРОШКИ --- */}
        <nav className="breadcrumbs">
          <a href="#">Home</a>
          <span className="material-symbols-outlined icon">chevron_right</span>
          <a href="#">French Riviera</a>
          <span className="material-symbols-outlined icon">chevron_right</span>
          <span className="current">Villa Serenity</span>
        </nav>

        {/* --- ГАЛЕРЕЯ (Отображаем только первые 3 картинки) --- */}
        <section className="property-gallery">
          <div className="property-gallery__grid">
            
            {GALLERY_IMAGES.slice(0, 3).map((img, index) => {
              const isLarge = index === 0;
              const isLastVisible = index === 2;
              const hasMoreImages = GALLERY_IMAGES.length > 3;

              return (
                <div 
                  key={index}
                  className={`property-gallery__item ${isLarge ? 'property-gallery__item--large' : ''}`} 
                  style={{ backgroundImage: `url('${img}')` }}
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="property-gallery__item-overlay"></div>
                  
                  {/* Кнопка "+X Photos" поверх 3-й картинки */}
                  {isLastVisible && hasMoreImages && (
                    <div className="property-gallery__more">
                      <span>+{GALLERY_IMAGES.length - 3} Photos</span>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </section>

        {/* --- ОСНОВНОЙ КОНТЕНТ И САЙДБАР --- */}
        <div className="property-layout">
          
          {/* ЛЕВАЯ КОЛОНКА (Детали виллы) */}
          <div className="property-layout__main">
            
            <div className="property-header">
              <div className="property-header__top">
                <h2 className="property-header__title">Villa Serenity</h2>
                <div className="property-header__price-block">
                  <p className="price">€12,500,000</p>
                  <p className="status">Available for Sale</p>
                </div>
              </div>
              <p className="property-header__location">
                <span className="material-symbols-outlined icon">location_on</span>
                Saint-Jean-Cap-Ferrat, French Riviera, France
              </p>
            </div>

            <div className="property-desc">
              <p>
                This breathtaking Belle Époque estate offers unparalleled views of the Mediterranean. Meticulously restored with the finest materials, the property features sprawling terraces, a private botanical garden, and a heated infinity pool overlooking the bay. Experience the pinnacle of luxury living in one of the world's most exclusive locations.
              </p>
              <p>
                The main residence spans three levels, connected by a grand marble staircase and a private elevator. Floor-to-ceiling windows bathe the interior in natural light, seamlessly blending the indoor living spaces with the azure horizons of the Côte d'Azur.
              </p>
              <p>
                Featuring eight ensuite bedrooms, a professional-grade kitchen, a private cinema, and a wellness spa including a sauna and hammam, Villa Serenity is designed for those who demand the absolute best in comfort and privacy.
              </p>
            </div>

            <div className="property-map">
              <h3 className="property-map__title">
                <span className="material-symbols-outlined icon">map</span>
                Location
              </h3>
              <div className="property-map__box">
                <div 
                  className="property-map__bg" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8GxGlnBgzh4zWCFKCquIosmJCZav9eIfeEBBxes60dzcgZ_O4aS1WozY9XOqiuVu0x35_8linVZaVIN9cM-OJneD6EPV72gaiCXyRYQbpGE5H6FXlIJe9GtOvDEx8MxH2DX1FNlvULb7OqRX-xBNxy1Sdbiymh66z9V5Ko13IeE6JTTuBw6A379S6QNR3-Nfjjl7HyWpQlRlk0zmwL_A4r3HowjqYzgAjiyBGaK5AZiQ76zx2bAYBouWhQS6z4Veoi4S3YVSQhlQ')" }}
                ></div>
                <div className="property-map__pin">
                  <div className="icon-wrapper">
                    <span className="material-symbols-outlined icon">pin_drop</span>
                  </div>
                  <div className="info">
                    <p>Saint-Jean-Cap-Ferrat</p>
                    <p>French Riviera</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА (Сайдбар) */}
          <aside className="property-layout__sidebar">
            <div className="sidebar-sticky">
              
              {/* Блок характеристик */}
              <div className="property-features">
                <h4 className="property-features__title">Key Features</h4>
                <div className="property-features__grid">
                  
                  <div className="property-features__item">
                    <span className="material-symbols-outlined icon">square_foot</span>
                    <span className="label">Living Area</span>
                    <span className="value">850 m²</span>
                  </div>
                  
                  <div className="property-features__item">
                    <span className="material-symbols-outlined icon">landscape</span>
                    <span className="label">Land Size</span>
                    <span className="value">3,200 m²</span>
                  </div>
                  
                  <div className="property-features__item">
                    <span className="material-symbols-outlined icon">bed</span>
                    <span className="label">Bedrooms</span>
                    <span className="value">8 Suites</span>
                  </div>
                  
                  <div className="property-features__item">
                    <span className="material-symbols-outlined icon">bathtub</span>
                    <span className="label">Bathrooms</span>
                    <span className="value">10</span>
                  </div>

                </div>
              </div>

              {/* Форма заявки */}
              <div className="property-inquiry">
                <h4 className="property-inquiry__title">Request Information</h4>
                <p className="property-inquiry__desc">Contact our specialist for a private viewing or more details.</p>
                
                <form className="property-inquiry__form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows={4} placeholder="I am interested in Villa Serenity..."></textarea>
                  </div>
                  
                  {/* Замени на кнопку, которая используется в проекте */}
                  <button type="submit" className="btn btn--primary">
                    <span className="material-symbols-outlined">send</span>
                    Send Inquiry
                  </button>
                </form>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* --- ПОЛНОЭКРАННЫЙ LIGHTBOX --- */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          
          {/* Кнопка закрытия */}
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close gallery">
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Стрелка влево */}
          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrevImage} aria-label="Previous image">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>

          {/* Само изображение (останавливаем всплытие, чтобы клик по картинке не закрывал окно) */}
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[lightboxIndex]} 
              alt={`Property photo ${lightboxIndex + 1}`} 
            />
          </div>

          {/* Стрелка вправо */}
          <button className="lightbox__nav lightbox__nav--next" onClick={showNextImage} aria-label="Next image">
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>

          {/* Счетчик картинок */}
          <div className="lightbox__counter">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
          
        </div>
      )}
    </>
  );
}