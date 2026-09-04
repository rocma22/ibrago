import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { restaurants } from '../data/restaurants.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const WHATSAPP = 'https://wa.me/212722765010'

export default function RestaurantDetails() {
  const { key } = useParams()
  const { t } = useLanguage()
  const [selectedMenuPhoto, setSelectedMenuPhoto] = useState(null)
  const restaurant = restaurants.find((item) => item.key === key)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [key])

  useEffect(() => {
    if (!selectedMenuPhoto) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedMenuPhoto(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selectedMenuPhoto])

  if (!restaurant) {
    return <main className="detail-page"><div className="detail-empty"><h1>{t('rest.not_found')}</h1><Link className="btn btn-primary" to="/#restaurants">{t('rest.back')}</Link></div></main>
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.coordinates}`
  const orderUrl = `${WHATSAPP}?text=${encodeURIComponent(`Bonjour, je voudrais commander depuis ${restaurant.order}`)}`
  const gallery = restaurant.gallery.length ? restaurant.gallery : [restaurant.cover]

  return (
    <main className="detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${restaurant.cover})` }}>
        <div className="detail-hero-inner">
          <Link className="detail-back" to="/#restaurants">← {t('rest.back')}</Link>
          <span className="section-eyebrow">{t('rest.detail_eyebrow')}</span>
          <h1>{restaurant.name}</h1>
          <div className="detail-rating">{restaurant.rating} {t('rest.rating')}</div>
        </div>
      </div>
      <section className="detail-gallery-section">
        <div className="detail-gallery-heading">
          <span className="section-eyebrow">{t('rest.gallery_eyebrow')}</span>
          <h2>{t('rest.gallery_title')}</h2>
        </div>
        <div className="detail-gallery" aria-label={t('rest.gallery_title')}>
          {gallery.map((photo, index) => (
            <img key={photo} className={index === 0 ? 'detail-gallery-feature' : ''} src={photo} alt={`${restaurant.name} ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </section>
      <div className="detail-content">
        <div className="detail-main">
          <span className="restaurant-tag">{t(`rest.${restaurant.key}.tag`)}</span>
          <h2>{t('rest.discover')} {restaurant.name}</h2>
          <p className="detail-description">{t(`rest.${restaurant.key}.desc`)}</p>
          <div className="detail-actions">
            <a className="btn btn-primary" href={orderUrl} target="_blank" rel="noopener noreferrer">{t('rest.order_btn')}</a>
          </div>
        </div>
        <aside className="detail-facts">
          <div><span>{t('rest.address')}</span><strong>{restaurant.address}</strong></div>
          <div><span>{t('rest.hours')}</span><strong>{restaurant.hours}</strong></div>
          <div><span>{t('rest.price_from')}</span><strong>{restaurant.price || t('rest.ask_price')}</strong></div>
          <a className="detail-map" href={mapUrl} target="_blank" rel="noopener noreferrer"><span>⌖</span>{t('rest.see_gps')}</a>
        </aside>
      </div>
      <section className="detail-menu">
        <div>
          <span className="section-eyebrow">{t('rest.menu_eyebrow')}</span>
          <h2>{t('rest.menu_heading')}</h2>
          <p>{t('rest.menu_desc')}</p>
        </div>
        <div className="menu-preview">
          <div><span>01</span><strong>{t('rest.menu_item1')}</strong><p>{t('rest.menu_item1_desc')}</p></div>
          <div><span>02</span><strong>{t('rest.menu_item2')}</strong><p>{t('rest.menu_item2_desc')}</p></div>
          <div><span>03</span><strong>{t('rest.menu_item3')}</strong><p>{t('rest.menu_item3_desc')}</p></div>
        </div>
        <div className="menu-gallery" aria-label={t('rest.menu_title')}>
          {restaurant.menu.map((photo, index) => (
            <button className="menu-photo-button" key={photo} type="button" onClick={() => setSelectedMenuPhoto(photo)} aria-label={`${t('rest.menu_title')} ${index + 1}`}>
              <img src={photo} alt={`${t('rest.menu_title')} ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </section>
      {selectedMenuPhoto && createPortal(
        <div className="menu-lightbox" role="dialog" aria-modal="true" aria-label={t('rest.menu_title')} onClick={() => setSelectedMenuPhoto(null)}>
          <button className="menu-lightbox-close" type="button" onClick={() => setSelectedMenuPhoto(null)} aria-label="Close menu photo">×</button>
          <img src={selectedMenuPhoto} alt={t('rest.menu_title')} onClick={(event) => event.stopPropagation()} />
        </div>,
        document.body,
      )}
    </main>
  )
}