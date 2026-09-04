import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../theme/ThemeContext.jsx'
import LanguageSwitch from './LanguageSwitch.jsx'

const WHATSAPP = 'https://wa.me/212722765010'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site">
      <nav className="nav">
        <div className="logo">Ibra<span className="go">Go</span></div>

        <ul className="navlinks">
          <li><a href="/#services">{t('nav.services')}</a></li>
          <li><a href="/#restaurants">{t('nav.restaurants')}</a></li>
          <li><a href="/#how">{t('nav.how')}</a></li>
          <li><a href="/#contact">{t('nav.contact')}</a></li>
        </ul>

        <div className="nav-right">
          <LanguageSwitch />

          <button
            className="theme-toggle"
            type="button"
            aria-label={t(theme === 'light' ? 'aria.theme_dark' : 'aria.theme_light')}
            onClick={toggleTheme}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
            </svg>
          </button>

          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            {t('nav.cta')}
          </a>

          <button
            className="burger"
            type="button"
            aria-label={t('aria.menu_open')}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="icon-burger" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
