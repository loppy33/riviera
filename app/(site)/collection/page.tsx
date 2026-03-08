
export default function Collection() {
  return (
    <main className="collection-page">
      
      {/* HEADER СЕКЦИИ */}
      <div className="collection-top">
        <div className="collection-top__info">
          <h2 className="collection-top__title">The French Riviera Collection</h2>
          <p className="collection-top__desc">
            Curated ultra-luxury villas across the Côte d'Azur, from the heights of Eze to the shores of Saint-Tropez.
          </p>
        </div>
        
        <div className="collection-top__sort">
          <label>Sort By</label>
          <div className="select-wrapper">
            <select defaultValue="Price: High to Low">
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Newest Arrivals</option>
              <option>Most Popular</option>
            </select>
            <span className="material-symbols-outlined icon">unfold_more</span>
          </div>
        </div>
      </div>

      {/* СЕТКА КАРТОЧЕК */}
      <div className="collection-grid">
        
        {/* Villa 1 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <div className="villa-card__skeleton"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVhLsGQBtCMyxiNa1uaIvQFa_tVktTv9eNlnztARLjn7iJnqvmyzev1cna-C0kkxZ79--yKfrE3QRabqqM3nzhR6hwsvG68cXWZjkpANXf119WM6VbMZUnRtDGOix8ctzAZ9V2gTMUlELdUt42tWSCLpRJ_PxVuXukpALanH19VKemW_zmTYFSAbUdyQ7qy0j2cHSGjKGipCPRPLbZJdmryXa0HrcSYoGLs24HndnVm3BQI5FK15wyaGAf0cg39jVid2Sa99Wkdyo" 
              alt="Luxury Villa" 
              className="villa-card__img" 
            />
            <div className="villa-card__badge villa-card__badge--exclusive">Exclusive</div>
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Saint-Jean-Cap-Ferrat</span>
            <h3 className="villa-card__price">€12,500,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 6</span>
                <span><span className="material-symbols-outlined">shower</span> 8</span>
                <span><span className="material-symbols-outlined">square_foot</span> 850m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Villa 2 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi1jdyWG2iseABDXerK2zHDsVWnr9KbjLQFyUe5WbnRCrIPt22TrRRtNjtxb6E0ItBdyJ_W2G37uUcBcE1LKjvaA1KXo2H7A1Hsp_62yOt1kVY3WSTJ6NPv7UXPawOe23OC5Uqo7ncsPTOU16h9YNNBV_EoiNu99oVRYDDvws-Gx0Lsp7cV-JCIRngueG_FEZ1opIcdp-zOdPxhaJBO5_9uwW1lDq12GPQNvJhgd7Ur0akANGJU3oNnwKLgPr9UzIe4xoZ5Eyb87U" 
              alt="Luxury Villa Antibes" 
              className="villa-card__img" 
            />
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Antibes</span>
            <h3 className="villa-card__price">€8,900,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 5</span>
                <span><span className="material-symbols-outlined">shower</span> 5</span>
                <span><span className="material-symbols-outlined">square_foot</span> 420m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Villa 3 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1FNn7Ui8t2MNkWatEFbWRbzNS-rHx-2aX2CSLtu-PTBpWnCYKTajiXaAr6kQOc6ixblR9wpc0KJJ00k2GTBTpbLRsBVG5HS-NrfRi7qjUFcWQ0qAc7bu0Lhf5viWm1v9iwlelMChJrdgP3AZjWDOTM1oEEho2MSJ1u1oFvj1S1Q-_yxk-SiVLqpNg9AByCJqwTs6PWCB_uWktZ3ZAb8F9RVH3tHr7jqUgURE0l3hUZ0cSCfCy7Ly2r8MXDUOYw0kpKueVsYwb4k" 
              alt="Villa Villefranche" 
              className="villa-card__img" 
            />
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Villefranche-sur-Mer</span>
            <h3 className="villa-card__price">€15,200,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 8</span>
                <span><span className="material-symbols-outlined">shower</span> 10</span>
                <span><span className="material-symbols-outlined">square_foot</span> 1,200m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Villa 4 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSe58pAibarWPlSjfCCCUrJEPwG4yaAXE9uNW8Z4zl3pJKuj_bsRsrv_GBbEOomSD_8Oqs3lwET40yfDsRWnD-DJ-SOMVg_ZjLpZtFn8DSvcroQoSCGItOi587mNdi2Pc0i-FIC5GxuBiIltDnj5jYdA3f5Pk9otNtzTK2BI0bgm1oKWQOpJn571wYWOHPlgHF0Hwz6OJmtmVR3vE6rqIcQyXVRDGWhX_hAZUAszJGy9vaodqrntzHRsBmdZCNTEgDJSXY8zG6Io" 
              alt="Villa Cannes" 
              className="villa-card__img" 
            />
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Cannes Hills</span>
            <h3 className="villa-card__price">€6,750,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 4</span>
                <span><span className="material-symbols-outlined">shower</span> 4</span>
                <span><span className="material-symbols-outlined">square_foot</span> 380m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Villa 5 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_IV054O1f9aSVnuWFyaDwroj5Q5MazQsWBiSUdYci2qLH_s_BoTY9WEYz4IkA28aE5CnjXIcR-ndbdP462JUs-bjwIo4NgghRxxjX4F3c1JNHKAg3ZdVMe9owcy_bDU6G-E3GB4I3IEdP9-ZIxtgQvSAs4y6UT8vJO0NCSYkGfex39AX3lffp-2-7xN8QrXZabXATBzg7F-B86QAxNM3-KO0fTfc8LFnnROcw8HZBdBr5PNDjrydjy25NPzVSk5bgOsVW58Spt7s" 
              alt="Villa Saint Tropez" 
              className="villa-card__img" 
            />
            <div className="villa-card__badge villa-card__badge--hot">Hot Property</div>
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Saint-Tropez</span>
            <h3 className="villa-card__price">€22,000,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 10</span>
                <span><span className="material-symbols-outlined">shower</span> 12</span>
                <span><span className="material-symbols-outlined">square_foot</span> 1,500m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Villa 6 */}
        <div className="villa-card">
          <div className="villa-card__image-box">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXw3DN4gltJARCvYwMnlRtBiIaCDUy_ADYW25vWqRgau5tza2DjvFkmtfLFYX5csSKERqT8h3PWlecYa0SPudig_qiCgApDmmrAwAvwnOjNEEFCPbRl0DrWdpjqcixw_v9jrli0yb1tKfUtpI53l8jTQwr9xXBpNVkpekkxPo-wrc1q0YLiuS7_2HXYVWMeASmfnxU5dsyA5YKR4lqwLrkDyQspXxPfVyjM71N2UgWKZlXXZPatA2YUMW-_T7OtQQF6swKK_xXkxk" 
              alt="Villa Nice" 
              className="villa-card__img" 
            />
          </div>
          <div className="villa-card__content">
            <span className="villa-card__location">Nice Hills</span>
            <h3 className="villa-card__price">€9,400,000</h3>
            
            <div className="villa-card__footer">
              <div className="villa-card__specs">
                <span><span className="material-symbols-outlined">bed</span> 7</span>
                <span><span className="material-symbols-outlined">shower</span> 6</span>
                <span><span className="material-symbols-outlined">square_foot</span> 560m²</span>
              </div>
              <button className="villa-card__btn">
                View Details 
                <span className="material-symbols-outlined villa-card__btn-icon">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ПАГИНАЦИЯ */}
      <div className="pagination">
        <button className="pagination__btn pagination__btn--outline">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="pagination__btn pagination__btn--number pagination__btn--active">1</button>
        <button className="pagination__btn pagination__btn--number">2</button>
        <button className="pagination__btn pagination__btn--number">3</button>
        <button className="pagination__btn pagination__btn--number">4</button>
        <button className="pagination__btn pagination__btn--outline">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

    </main>
  );
}