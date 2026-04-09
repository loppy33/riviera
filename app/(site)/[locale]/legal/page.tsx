"use client";

import React, { useState } from 'react';
import { createInquiry } from '@/actions/inquiry';
import { useTranslations } from 'next-intl';

export default function Legal() {
  const t = useTranslations('legal');
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleLegalSubmit = async (formData: FormData) => {
    setStatus("loading");
    const result = await createInquiry(formData);
    if (result?.error) {
      setStatus("error");
      setMessage(result.error);
    } else if (result?.success) {
      setStatus("success");
      setMessage(result.message);
    }
  };

  return (
    <div className="page-legal">

      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <span className="legal-hero__badge">{t('hero.badge')}</span>
          <h1 className="legal-hero__title">{t('hero.title')}</h1>
          <p className="legal-hero__subtitle">{t('hero.subtitle')}</p>
          <div className="legal-hero__actions">
            <button className="btn btn--primary" style={{ margin: 0 }}>{t('hero.consultBtn')}</button>
            <button className="btn btn--outline" style={{ color: 'var(--c-text-main)', borderColor: 'var(--border-color-input)' }}>
              {t('hero.guideBtn')}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="legal-services">
        <div className="legal-services__inner">

          <div className="legal-services__content">
            <h2 className="legal-services__title">{t('services.title')}</h2>
            <p className="legal-services__desc">{t('services.desc')}</p>

            <div className="legal-services__list">
              <div className="legal-services__item">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <div>
                  <h3>{t('services.item1Title')}</h3>
                  <p>{t('services.item1Desc')}</p>
                </div>
              </div>

              <div className="legal-services__item">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <h3>{t('services.item2Title')}</h3>
                  <p>{t('services.item2Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="legal-services__image">
            <div
              className="bg-img"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAupjlRS-jx05SzDQZxXbQI9CBXvZvEu69N92aAEkDKXf0aucJQCbCjdluAEaPJw4CEJfXEinu_F9wzjc8Fr-Fw7t7NAUEvHzafZ1ype6qXgj-PD3Z5PUwLupcx3Fj0bgpPOX4nQHAg-__qMc4fOVTR6uHpxg9XB1nOxraFSNrg5LEVKSmaZ2te2I3inyBA2DsQiZTvNYzHWJCZfuxTvHngwARbj8c4ki0xXvmeLt-PjzatRhHqC8YJwD76mcB8J3kY-OnmN2JYWiI')" }}
              data-alt="Minimal architectural office interior with large windows"
            ></div>
          </div>

        </div>
      </section>

      {/* STRUCTURED OWNERSHIP */}
      <section className="legal-ownership">
        <div className="legal-ownership__inner">

          <div className="legal-ownership__header">
            <h2>{t('ownership.title')}</h2>
            <p>{t('ownership.subtitle')}</p>
          </div>

          <div className="legal-ownership__grid">
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">shield_with_heart</span>
              <h3>{t('ownership.card1Title')}</h3>
              <p>{t('ownership.card1Desc')}</p>
            </div>
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">family_history</span>
              <h3>{t('ownership.card2Title')}</h3>
              <p>{t('ownership.card2Desc')}</p>
            </div>
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">lock</span>
              <h3>{t('ownership.card3Title')}</h3>
              <p>{t('ownership.card3Desc')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* ACQUISITION JOURNEY */}
      <section className="legal-journey">
        <div className="legal-journey__inner">
          <h2 className="legal-journey__title">{t('journey.title')}</h2>

          <div className="legal-journey__timeline">
            <div className="legal-journey__line"></div>
            <div className="legal-journey__grid">
              <div className="legal-journey__step">
                <div className="number">1</div>
                <h4>{t('journey.step1Title')}</h4>
                <p>{t('journey.step1Sub')}</p>
              </div>
              <div className="legal-journey__step">
                <div className="number">2</div>
                <h4>{t('journey.step2Title')}</h4>
                <p>{t('journey.step2Sub')}</p>
              </div>
              <div className="legal-journey__step">
                <div className="number">3</div>
                <h4>{t('journey.step3Title')}</h4>
                <p>{t('journey.step3Sub')}</p>
              </div>
              <div className="legal-journey__step">
                <div className="number">4</div>
                <h4>{t('journey.step4Title')}</h4>
                <p>{t('journey.step4Sub')}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section className="legal-consultation">
        <div className="legal-consultation__inner">

          <div className="legal-consultation__header">
            <h2>{t('form.title')}</h2>
            <p>{t('form.subtitle')}</p>
          </div>

          {status === "success" ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>check_circle</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--c-text-main)' }}>{t('form.successTitle')}</h3>
              <p style={{ color: 'var(--c-text-light)' }}>{message}</p>
            </div>
          ) : (
            <form action={handleLegalSubmit} className="legal-consultation__form">

              <div className="legal-consultation__row">
                <div className="form-group">
                  <label>{t('form.fullName')}</label>
                  <input type="text" name="fullName" placeholder={t('form.fullNamePlaceholder')} required />
                </div>
                <div className="form-group">
                  <label>{t('form.email')}</label>
                  <input type="email" name="email" placeholder={t('form.emailPlaceholder')} required />
                </div>
              </div>

              <div className="form-group">
                <label>{t('form.interest')}</label>
                <select name="interest" defaultValue="default">
                  <option disabled value="default">{t('form.interestDefault')}</option>
                  <option value="Luxury Villa - Saint-Tropez">{t('form.opt1')}</option>
                  <option value="Penthouse - Cannes">{t('form.opt2')}</option>
                  <option value="Estate - Mougins">{t('form.opt3')}</option>
                  <option value="Other">{t('form.opt4')}</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('form.message')}</label>
                <textarea name="message" rows={4} placeholder={t('form.messagePlaceholder')} required></textarea>
              </div>

              {status === "error" && <p style={{ color: "red", fontSize: "0.875rem" }}>{message}</p>}

              <button type="submit" className="submit-btn" disabled={status === "loading"}>
                <span className="material-symbols-outlined">send</span>
                {status === "loading" ? t('form.sending') : t('form.submit')}
              </button>

              <p className="legal-consultation__note">{t('form.gdpr')}</p>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}