import { useLanguage } from '../../i18n/LanguageContext.jsx'

const ICONS = {
  medicaments: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 3h4v4h-4z" /><path d="M9 7h6v11a3 3 0 0 1-3 3 3 3 0 0 1-3-3z" /><path d="M9 13h6" />
    </svg>
  ),
  nourriture: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 8h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8z" /><path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </svg>
  ),
  documents: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M9 12h6M9 16h6M9 8h2" />
    </svg>
  ),
  ecommerce: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" />
      <path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20 7H6" />
    </svg>
  ),
}

const ITEMS = ['medicaments', 'nourriture', 'documents', 'ecommerce']

export default function Services() {
  const { t } = useLanguage()

  return (
    <section className="section" id="services">
      <div className="section-head reveal">
        <div className="section-eyebrow">{t('services.eyebrow')}</div>
        <h2>{t('services.title')}</h2>
        <p>{t('services.desc')}</p>
      </div>

      <div className="services">
        {ITEMS.map((key) => (
          <div className="service-card reveal" key={key}>
            <div className="service-icon">{ICONS[key]}</div>
            <h3>{t(`service.${key}.title`)}</h3>
            <p>{t(`service.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
