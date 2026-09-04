import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import LanguageSwitch from './LanguageSwitch.jsx'

const WHATSAPP = 'https://wa.me/212722765010'

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const { t } = useLanguage()

  function close() {
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    function onKeyDown(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
      <button
        className="mobile-menu-close"
        type="button"
        aria-label={t('aria.menu_close')}
        onClick={close}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <LanguageSwitch />

      <a href="/#services" onClick={close}>{t('nav.services')}</a>
      <a href="/#restaurants" onClick={close}>{t('nav.restaurants')}</a>
      <a href="/#how" onClick={close}>{t('nav.how')}</a>
      <a href="/#contact" onClick={close}>{t('nav.contact')}</a>
      <a
        className="mobile-cta"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
      >
        {t('nav.cta')}
      </a>
    </div>
  )
}
