import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function TrustStrip() {
  const { t } = useLanguage()

  return (
    <div className="trust">
      <div className="trust-inner">
        <div className="trust-item reveal"><b>24/24</b><span>{t('trust.item1_label')}</span></div>
        <div className="trust-item reveal"><b>4</b><span>{t('trust.item2_label')}</span></div>
        <div className="trust-item reveal"><b>100%</b><span>{t('trust.item3_label')}</span></div>
        <div className="trust-item reveal"><b>{t('trust.item4_num')}</b><span>{t('trust.item4_label')}</span></div>
      </div>
    </div>
  )
}
