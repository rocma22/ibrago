import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()
  const langs = ['fr', 'ar', 'en']

  return (
    <div className="lang-switch" role="group" aria-label={t('aria.lang_group')}>
      {langs.map((code) => (
        <button
          key={code}
          type="button"
          data-lang={code}
          className={lang === code ? 'active' : ''}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
