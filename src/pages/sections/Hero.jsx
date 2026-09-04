import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" /> <span>{t('hero.eyebrow')}</span>
          </div>
          <h1>
            <span>{t('hero.h1_line1')}</span>
            <br />
            <span>{t('hero.h1_line2')}</span>
            <span className="accent">{t('hero.h1_accent')}</span>
          </h1>
          <p className="lead">{t('hero.lead')}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/212722765010" target="_blank" rel="noopener noreferrer">
              {t('hero.btn_primary')}
            </a>
            <a className="btn btn-ghost" href="#services">{t('hero.btn_ghost')}</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><b>24/24</b><span>{t('hero.stat1_label')}</span></div>
            <div className="stat"><b>4</b><span>{t('hero.stat2_label')}</span></div>
            <div className="stat"><b>{t('hero.stat3_num')}</b><span>{t('hero.stat3_label')}</span></div>
          </div>
        </div>

        <div className="route-card reveal">
          <div className="badge-24">{t('route.badge')}</div>
          <svg className="route-svg" viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">
            <path d="M40,150 C120,40 260,230 380,90" fill="none" stroke="#5C2CA3" strokeWidth="3" />
            <path className="route-dash" d="M40,150 C120,40 260,230 380,90" fill="none" stroke="#F7A81B" strokeWidth="3" />
            <circle cx="40" cy="150" r="7" fill="#FFFFFF" />
            <circle cx="380" cy="90" r="7" fill="#F7A81B" />
            <circle className="route-dot" r="6" fill="#FFFFFF" style={{ offsetRotate: '0deg' }} />
            <text x="20" y="180" className="route-pin-label">{t('route.entrepot_label')}</text>
            <text x="20" y="196" className="route-city">{t('route.entrepot_city')}</text>
            <text x="330" y="70" className="route-pin-label">{t('route.client_label')}</text>
            <text x="330" y="86" className="route-city">{t('route.client_city')}</text>
          </svg>
          <div className="route-caption">
            <div className="eta"><b className="ltr-nums">~28 min</b><span>{t('route.eta1_label')}</span></div>
            <div className="eta"><b className="ltr-nums">2.4 km</b><span>{t('route.eta2_label')}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
