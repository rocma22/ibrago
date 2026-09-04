import { useLanguage } from '../../i18n/LanguageContext.jsx'

const BRANDS = [
  { name: 'Marjane', tone: 'marjane', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Logo_marjane_market.svg' },
  { name: 'Kazyon', tone: 'kazyon', logo: 'https://www.kazyon.com/logo.svg' },
  { name: 'BIM', tone: 'bim', logo: 'https://www.bim.ma/uploads/ma/templates/page/bimtr/css/images/logo.fw.png' },
  { name: 'Carrefour', tone: 'carrefour', logo: 'https://carrefour.ma/images/logos/logo-mini-carrefour.svg' },
  { name: 'Supeco', tone: 'supeco' },
  { name: 'Liya', tone: 'liya' },
  { name: 'Aswak Assalam', tone: 'aswak', logo: 'https://aswakassalam.com/wp-content/uploads/2021/11/logo-1.png' },
]

const SHOPPING_STEPS = [
  {
    key: 'choose',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z" /><path d="m8 12 2.5 2.5L16 9" /></svg>,
  },
  {
    key: 'shop',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M2.5 3H5l2.2 11.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 7H6" /></svg>,
  },
  {
    key: 'deliver',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="1.5" /><circle cx="18" cy="19" r="1.5" /></svg>,
  },
]

export default function Brands() {
  const { t } = useLanguage()

  return (
    <section className="brands-section section" id="shopping">
      <div className="brands-shell reveal">
        <div className="brands-copy">
          <div className="section-eyebrow">{t('brands.eyebrow')}</div>
          <h2>{t('brands.title')}</h2>
          <p>{t('brands.desc')}</p>
          <div className="shopping-steps" aria-label={t('brands.steps_label')}>
            {SHOPPING_STEPS.map((step, index) => (
              <div className="shopping-step" key={step.key}>
                <span className="shopping-step-icon">{step.icon}</span>
                <span className="shopping-step-number">0{index + 1}</span>
                <strong>{t(`brands.step_${step.key}`)}</strong>
              </div>
            ))}
          </div>
          <a className="btn btn-primary" href="https://wa.me/212722765010" target="_blank" rel="noopener noreferrer">
            {t('brands.cta')}
          </a>
        </div>

        <div className="brands-panel">
          <div className="brands-panel-top">
            <span className="brands-step">01</span>
            <strong>{t('brands.panel_title')}</strong>
          </div>
          <p>{t('brands.panel_desc')}</p>
          <div className="brand-list" aria-label={t('brands.list_label')}>
            {BRANDS.map((brand) => (
              <div className={`brand-tile brand-${brand.tone}`} key={brand.name}>
                <span className="brand-logo-wrap">
                  {brand.logo ? (
                    <img className="brand-logo" src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
                  ) : (
                    <span className="brand-wordmark" aria-label={`${brand.name} logo`}>{brand.name}</span>
                  )}
                </span>
                <strong>{brand.name}</strong>
              </div>
            ))}
          </div>
          <div className="brands-delivery-note">
            <span className="delivery-arrow" aria-hidden="true">→</span>
            <span>{t('brands.delivery_note')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}