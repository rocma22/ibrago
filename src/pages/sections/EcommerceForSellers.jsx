import { useLanguage } from '../../i18n/LanguageContext.jsx'

const SELLER_BENEFITS = [
  {
    key: 'pickup',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="1.5" /><circle cx="18" cy="19" r="1.5" /></svg>,
  },
  {
    key: 'updates',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-11.6 6.3L4 19l1.2-3.8A7.5 7.5 0 1 1 20 11.5z" /><path d="m8 11.5 2.2 2.2 4.8-5" /></svg>,
  },
  {
    key: 'growth',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9M10 19V5M16 19v-7M22 19V3" /><path d="m3 6 5-3 5 4 7-5" /></svg>,
  },
]

export default function EcommerceForSellers() {
  const { t } = useLanguage()

  return (
    <section className="seller-section section" id="sellers">
      <div className="seller-shell reveal">
        <div className="seller-intro">
          <span className="section-eyebrow">{t('seller.eyebrow')}</span>
          <h2>{t('seller.title')}</h2>
          <p>{t('seller.desc')}</p>
          <a className="btn btn-primary" href="https://wa.me/212722765010" target="_blank" rel="noopener noreferrer">
            {t('seller.cta')}
          </a>
        </div>

        <div className="seller-content">
          <div className="seller-visual">
            <img src="/photos/e-commerce.png" alt={t('seller.title')} />
          </div>

          <div className="seller-benefits" aria-label={t('seller.benefits_label')}>
            {SELLER_BENEFITS.map((benefit, index) => (
              <div className="seller-benefit" key={benefit.key}>
                <span className="seller-benefit-icon">{benefit.icon}</span>
                <div>
                  <span className="seller-benefit-number">0{index + 1}</span>
                  <h3>{t(`seller.${benefit.key}.title`)}</h3>
                  <p>{t(`seller.${benefit.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}