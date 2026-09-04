import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { restaurants } from '../../data/restaurants.js'
import { Link } from 'react-router-dom'

const STAR = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l2.9 6.9 7.1.6-5.5 4.6 1.7 7-6.2-4-6.2 4 1.7-7-5.5-4.6 7.1-.6z" />
  </svg>
)

export default function Restaurants() {
  const { t } = useLanguage()

  return (
    <section className="section" id="restaurants">
      <div className="section-head reveal">
        <div className="section-eyebrow">{t('rest.eyebrow')}</div>
        <h2>{t('rest.title')}</h2>
        <p>{t('rest.desc')}</p>
      </div>
      <p className="section-note reveal">{t('rest.note')}</p>

      <div className="restaurant-rail-wrap">
        <div className="restaurant-list" tabIndex="0" aria-label={t('rest.rail_label')}>
        {restaurants.map((r) => (
          <div className="restaurant-card reveal" key={r.key}>
            <div className="restaurant-cover" style={{ backgroundImage: `url(${r.cover})` }} />
            <div className="restaurant-content">
              <div className="restaurant-top">
                <h3>{r.name}</h3>
                <span className="restaurant-rating">{STAR} {r.rating}</span>
              </div>
              <span className="restaurant-tag">{t(`rest.${r.key}.tag`)}</span>
              <p>{t(`rest.${r.key}.desc`)}</p>
              <div className="restaurant-footer">
                <span className="restaurant-price">
                  {r.price && (
                    <>{t('rest.price_from')} <b>{r.price}</b>/{t('rest.price_person')}</>
                  )}
                </span>
                <Link className="restaurant-order" to={`/restaurants/${r.key}`}>{t('rest.details_btn')}</Link>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="restaurant-rail-hint"><span>{t('rest.rail_hint')}</span><span aria-hidden="true">→</span></div>
      </div>
    </section>
  )
}
