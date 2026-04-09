"use client";

import React, { useState } from 'react';

export default function PropertyGallery({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Стейты для свайпа на мобилках
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Минимальная дистанция свайпа в пикселях
  const minSwipeDistance = 50;

  const galleryImages = images.length > 0 ? images : ['https://via.placeholder.com/1200x800?text=No+Image+Available'];

  const closeLightbox = () => setLightboxIndex(null);

  const showNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // --- ЛОГИКА СВАЙПОВ ---
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Сбрасываем конец свайпа при новом касании
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showNextImage(); // Свайп влево -> следующая
    }
    if (isRightSwipe) {
      showPrevImage(); // Свайп вправо -> предыдущая
    }
  };

  return (
    <>
      <section className="property-gallery">
        <div className="property-gallery__grid">
          {galleryImages.slice(0, 3).map((img, index) => {
            const isLarge = index === 0;
            const isLastVisible = index === 2;
            const hasMoreImages = galleryImages.length > 3;

            return (
              <div 
                key={index}
                className={`property-gallery__item ${isLarge ? 'property-gallery__item--large' : ''}`} 
                style={{ backgroundImage: `url('${img}')` }}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="property-gallery__item-overlay"></div>
                
                {isLastVisible && hasMoreImages && (
                  <div className="property-gallery__more">
                    <span>+{galleryImages.length - 3} Photos</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          
          <button className="lightbox__close" onClick={closeLightbox}>
            <span className="material-symbols-outlined">close</span>
          </button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrevImage}>
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>

          {/* Добавляем события onTouch на контейнер с фоткой */}
          <div 
            className="lightbox__content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndEvent}
          >
            <img src={galleryImages[lightboxIndex]} alt={`Property photo ${lightboxIndex + 1}`} />
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={showNextImage}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>

          <div className="lightbox__counter">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
          
        </div>
      )}
    </>
  );
}