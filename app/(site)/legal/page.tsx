import React from 'react';

export default function Legal() {
  return (
    <div className="page-legal">
      
      {/* --- HERO СЕКЦИЯ --- */}
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <span className="legal-hero__badge">Boutique Advisory</span>
          <h1 className="legal-hero__title">
            Legal & Tax Advisory for Property Acquisition in France
          </h1>
          <p className="legal-hero__subtitle">
            Expert guidance for high-net-worth individuals acquiring premium real estate on the French Riviera, ensuring security and fiscal efficiency.
          </p>
          <div className="legal-hero__actions">
            <button className="btn btn--primary" style={{ margin: 0 }}>
              Consult Our Experts
            </button>
            <button className="btn btn--outline" style={{ color: 'var(--c-text-main)', borderColor: 'var(--border-color-input)' }}>
              View Guide
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES OVERVIEW --- */}
      <section className="legal-services">
        <div className="legal-services__inner">
          
          <div className="legal-services__content">
            <h2 className="legal-services__title">Services Overview</h2>
            <p className="legal-services__desc">
              We provide a comprehensive legal and fiscal framework tailored to international investors, managing every nuance of the French property law system.
            </p>
            
            <div className="legal-services__list">
              <div className="legal-services__item">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <div>
                  <h3>Legal Due Diligence</h3>
                  <p>A rigorous audit of property titles, urban planning certificates, and environmental assessments to guarantee your peace of mind.</p>
                </div>
              </div>
              
              <div className="legal-services__item">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <h3>SCI Formation</h3>
                  <p>Strategic establishment of 'Société Civile Immobilière' entities to optimize ownership structures for management and inheritance.</p>
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

      {/* --- STRUCTURED OWNERSHIP (BEIGE BG) --- */}
      <section className="legal-ownership">
        <div className="legal-ownership__inner">
          
          <div className="legal-ownership__header">
            <h2>Structured Ownership</h2>
            <p>Sophisticated solutions for long-term asset preservation.</p>
          </div>
          
          <div className="legal-ownership__grid">
            
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">shield_with_heart</span>
              <h3>Wealth Tax (IFI)</h3>
              <p>Bespoke debt-structuring strategies to legally minimize exposure to the French Real Estate Wealth Tax.</p>
            </div>
            
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">family_history</span>
              <h3>Succession Planning</h3>
              <p>Protecting your legacy through cross-border inheritance optimization and gift planning mechanisms.</p>
            </div>
            
            <div className="legal-ownership__card">
              <span className="material-symbols-outlined icon">lock</span>
              <h3>Asset Protection</h3>
              <p>Isolating property assets from personal liability through secure legal frameworks and specialized holdings.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- THE ACQUISITION JOURNEY (TIMELINE) --- */}
      <section className="legal-journey">
        <div className="legal-journey__inner">
          <h2 className="legal-journey__title">The Acquisition Journey</h2>
          
          <div className="legal-journey__timeline">
            {/* Горизонтальная линия, соединяющая шаги */}
            <div className="legal-journey__line"></div>
            
            <div className="legal-journey__grid">
              
              <div className="legal-journey__step">
                <div className="number">1</div>
                <h4>Structure Design</h4>
                <p>Initial Consult</p>
              </div>
              
              <div className="legal-journey__step">
                <div className="number">2</div>
                <h4>Due Diligence</h4>
                <p>Legal Verification</p>
              </div>
              
              <div className="legal-journey__step">
                <div className="number">3</div>
                <h4>Notary Liaison</h4>
                <p>Signing Support</p>
              </div>
              
              <div className="legal-journey__step">
                <div className="number">4</div>
                <h4>Final Closing</h4>
                <p>Post-Sale Tax Set-up</p>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* --- CONSULTATION FORM --- */}
      <section className="legal-consultation">
        <div className="legal-consultation__inner">
          
          <div className="legal-consultation__header">
            <h2>Request a Confidential Consultation</h2>
            <p>Our senior partners are available for a private briefing on your acquisition project.</p>
          </div>
          
          <form className="legal-consultation__form">
            
            <div className="legal-consultation__row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Property Interest</label>
              <select defaultValue="Select an option">
                <option disabled>Select an option</option>
                <option>Luxury Villa - Saint-Tropez</option>
                <option>Penthouse - Cannes</option>
                <option>Estate - Mougins</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Message / Requirements</label>
              <textarea rows={4} placeholder="How can our legal team assist you?"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span className="material-symbols-outlined">send</span>
              Submit Enquiry
            </button>
            
            <p className="legal-consultation__note">
              All inquiries are handled with the strictest confidentiality in accordance with GDPR.
            </p>
            
          </form>
          
        </div>
      </section>

    </div>
  );
}