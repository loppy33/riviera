import React from 'react';

export default function Home() {
  return (
    <div className="page-home">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-overlay"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvBPzVqKomGjyd5SVlPaiZbhLJkAWoMCKyGet6gq_5XAnOfce4NWhYxYH8I0e3bukA7VbM3jpJSnMVUMStUxIaJOhlytn4_19tSXKO3SJxQUTo_GvUXirIayrCS6APPFd91EryDgraAraCruSoihxk6ysCTozBULSQgpFKWbe8aEdY0wx7RYIDzxNDz3GuOZeinxK3RESBcfmmtWHaKVCweGm7qJ-Z1lgzSR-wrtBDEl-sGSnbnchjXqhlm8TnhswuZggofJrEdU" 
            alt="Luxury Villa Hero" 
            data-alt="Stunning luxury villa infinity pool overlooking the Mediterranean sea" 
          />
        </div>
        
        <div className="hero__content">
          <h1 className="hero__title">
            Private Real Estate <br /> <span>French Riviera</span>
          </h1>
          <p className="hero__subtitle">
            Exclusive access to the most prestigious off-market properties on the Côte d'Azur.
          </p>
          <div className="hero__actions">
            <button className="btn btn--white">View Collection</button>
            <button className="btn btn--outline">Inquire Now</button>
          </div>
        </div>
        
        <div className="hero__scroll">
          <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="section section--alt collection">
        <div className="container">
          <div className="collection__grid">
            
            <div className="collection__content">
              <span className="section-badge">The Collection</span>
              <h2 className="section-title">
                Curated Private <br /> Collection
              </h2>
              <p className="collection__desc">
                Our portfolio consists of the most prestigious properties, many of which are exclusively managed by our agency and not listed on the public market. We provide a discreet gateway to the world's most sought-after coastal estates.
              </p>
              
              <div className="collection__features">
                <div className="collection__feature-card">
                  <span className="material-symbols-outlined icon">verified_user</span>
                  <h3>Discrete Acquisitions</h3>
                  <p>Access to off-market gems for the most discerning international buyers.</p>
                </div>
                
                <div className="collection__feature-card">
                  <span className="material-symbols-outlined icon">concierge</span>
                  <h3>Tailored Concierge</h3>
                  <p>Bespoke services ensuring a seamless transition to your new Mediterranean life.</p>
                </div>
              </div>
            </div>
            
            <div className="collection__image-wrapper">
              <div className="bg-accent"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbmXM-2ouc6t68kMy_ymBaqIxMkv67pJ4M-ZeYL4vI-73c2J4gfXlwGuxWePnL0o5rFliR10x0JEAh4UTdLCTTag-PCUzGMsrm2z-qCy8SHsFdBRBXPltQz1yZJz3Ihl8BO5peMzLp7xxSh_EXzhOW9kJ55-eu-tG5RVb260nJYjS1K1RqMdVJ7_uKb5LWZQrSlcTbR0WQl5lN4XJnINl6EIWDWewyXLOrOx1xMUqSIkVUPQ1R4GMQQ1DDK0pkYS-RLZ-Ww7lFwE" 
                alt="Luxury Villa Architecture" 
                data-alt="Modern architectural villa exterior with stone accents and lush greenery" 
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section className="section featured">
        <div className="container">
          <div className="featured__header">
            <div>
              <span className="section-badge">Selected Works</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Properties</h2>
            </div>
            <a href="#" className="featured__explore">
              Explore All <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
          
          <div className="featured__grid">
            
            {/* Property Card 1 */}
            <article className="property-card">
              <div className="property-card__image-box">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtdOFJyLf3fiqYRgyLz8D_dOjn6HqfEPTI_DB1iIMKRaOgKM_Qb-WQcyt1OgdOFAb1VHdKm7RR5aiERhvMODBxjCGpwlE-_fSLafBZZLcuqWjnLRLSPn5sPt9mHAYV1Xbu7DTY2PZFjK3cmO_eSs17eA3ogccFqd58_nSJtYllwjij0lrDyyzVjK-pYKC3-Ad0VnGx6uq4OPhTXWR0Bu0eiCii7NX9OfWYywsgP7UZLiNKvEOviDe1FDNMYlgS7KnA0wRP1BQsoKc" alt="Villa L'Horizon" />
                <div className="badge badge--new">New Listing</div>
              </div>
              <div className="property-card__info">
                <div className="property-card__title-row">
                  <h3>Villa L'Horizon, Saint-Tropez</h3>
                  <span className="price">€12.5M</span>
                </div>
                <div className="property-card__specs">
                  <span><span className="material-symbols-outlined">bed</span> 6 Beds</span>
                  <span><span className="material-symbols-outlined">shower</span> 5 Baths</span>
                  <span><span className="material-symbols-outlined">square_foot</span> 450 m²</span>
                </div>
                <p className="property-card__desc">
                  Panoramic sea views and infinity pool overlooking the bay of Saint-Tropez.
                </p>
              </div>
            </article>

            {/* Property Card 2 */}
            <article className="property-card">
              <div className="property-card__image-box">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuwj0fQEzx_9kc-yYm7csfzmH-9O__Ts88zifafaxlbQRzUKvrdRhQoFW5938v-7PkXqQFhM8gluja57ZSb32eypVvNMXXMZM-7Gn8McOht8ZdjdEe_WR2VvspnyssVnk8H-XXxwNzD97mTThkLAKhUjQaGxybkse_7JKCFVPD4AhI0szcAH1-2KvVybOJxacWgDUj4gC6GJGInTmrdVquOOve7IK-_E-LoWiSt2fs1jP81pEzF5RJdDE6vYWut-5mF2KEZk1vn7E" alt="Palais Lumière" />
              </div>
              <div className="property-card__info">
                <div className="property-card__title-row">
                  <h3>Palais Lumière, Cannes</h3>
                  <span className="price">€8.9M</span>
                </div>
                <div className="property-card__specs">
                  <span><span className="material-symbols-outlined">bed</span> 5 Beds</span>
                  <span><span className="material-symbols-outlined">shower</span> 4 Baths</span>
                  <span><span className="material-symbols-outlined">square_foot</span> 380 m²</span>
                </div>
                <p className="property-card__desc">
                  Historic architecture with modern high-end interiors and private wellness center.
                </p>
              </div>
            </article>

            {/* Property Card 3 */}
            <article className="property-card">
              <div className="property-card__image-box">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASSetsQy0fx7SIYi5SRmBL8Ly8yU6Si9-BUZW7PTYi_Rfz0aEH8exXqrNNvH3IRgpKS7j7Bs82b9knXu4tvgArso0GF5MfzD8d1sv7Z51TMW8CTqOT31hJDfUzHcqGnIi7Y-VYXBL-sqXB-MDg9JDmFOsxc6tdzOrjGTRWHCHL5wATpnUL-iYVo6XwgIBvAhSdol3V6VSJEZYke5-tKZgv8inZeiYKSdefMXOlu5K86p5EmkJEJxDeeVN1h_T4sAqH5jerC1CW9MI" alt="Cap d'Ail Estate" />
                <div className="badge badge--exclusive">Exclusive</div>
              </div>
              <div className="property-card__info">
                <div className="property-card__title-row">
                  <h3>Cap d'Ail Estate, Monaco</h3>
                  <span className="price">€15.2M</span>
                </div>
                <div className="property-card__specs">
                  <span><span className="material-symbols-outlined">bed</span> 7 Beds</span>
                  <span><span className="material-symbols-outlined">shower</span> 8 Baths</span>
                  <span><span className="material-symbols-outlined">square_foot</span> 620 m²</span>
                </div>
                <p className="property-card__desc">
                  Cliffside luxury with private elevator and exclusive beach access.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="section inquiry">
        <div className="container" style={{ maxWidth: '1024px' }}>
          <div className="inquiry__card">
            
            <div className="inquiry__sidebar">
              <div>
                <h2>Private Inquiry</h2>
                <p>
                  Connect with our specialists for a private consultation or to receive details on our off-market portfolio.
                </p>
              </div>
              <div className="inquiry__contacts">
                <div className="contact-item">
                  <span className="material-symbols-outlined">call</span>
                  <span>+33 4 93 00 00 00</span>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">mail</span>
                  <span>concierge@luxuryriviera.fr</span>
                </div>
                <div className="contact-item">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>La Croisette, Cannes</span>
                </div>
              </div>
            </div>
            
            <div className="inquiry__form-wrapper">
              <form className="inquiry__form">
                
                <div className="inquiry__form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label>Interest</label>
                  <select>
                    <option>Investment Property</option>
                    <option>Vacation Villa</option>
                    <option>Sell a Property</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={3} placeholder="How can we assist you?"></textarea>
                </div>
                
                <button type="button" className="btn btn--primary">
                  Send Inquiry
                </button>
                
              </form>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}