import { useLanguage } from '../../i18n/LanguageContext.jsx'

const STEPS = ['step1', 'step2', 'step3']

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="section" id="how">
      <div className="section-head reveal">
        <div className="section-eyebrow">{t('how.eyebrow')}</div>
        <h2>{t('how.title')}</h2>
        <p>{t('how.desc')}</p>
      </div>

      <div className="steps">
        {STEPS.map((key, i) => (
          <div className="step reveal" key={key}>
            <div className="num">{i + 1}</div>
            <h3>{t(`${key}.title`)}</h3>
            <p>{t(`${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
