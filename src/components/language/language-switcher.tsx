import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common')
  const nextLanguage = i18n.language.startsWith('ar') ? 'en' : 'ar'
  const label =
    nextLanguage === 'ar' ? t('language.arabic') : t('language.english')

  return (
    <Button
      className="border bg-white shadow-sm"
      type="button"
      variant="ghost"
      onClick={() => void i18n.changeLanguage(nextLanguage)}
      aria-label={t('language.switcherLabel')}
    >
      <Languages className="size-4" aria-hidden="true" />
      {label}
    </Button>
  )
}
