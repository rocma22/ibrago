import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">Ibra<span className="go">Go</span></div>
          <p>{t('footer.tagline')}</p>
        </div>

        <div>
          <h4>{t('footer.services_heading')}</h4>
          <ul>
            <li><a href="/#services">{t('service.medicaments.title')}</a></li>
            <li><a href="/#services">{t('service.nourriture.title')}</a></li>
            <li><a href="/#services">{t('service.documents.title')}</a></li>
            <li><a href="/#services">{t('service.ecommerce.title')}</a></li>
          </ul>
        </div>

        <div>
          <h4>{t('footer.company_heading')}</h4>
          <ul>
            <li><a href="/#restaurants">{t('nav.restaurants')}</a></li>
            <li><a href="/#how">{t('nav.how')}</a></li>
            <li><a href="/#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>

        <div>
          <h4>{t('footer.contact_heading')}</h4>
          <ul>
            <li><a href="tel:+212722765010" className="ltr-nums">+212 722-765010</a></li>
            <li><a href="https://wa.me/212722765010" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li>{t('footer.location')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.tagline2')}</span>
      </div>
    </footer>
  )
}
