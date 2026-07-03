import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  showText?: boolean
  textClassName?: string
}

export function BrandLogo({
  className,
  imageClassName,
  showText = true,
  textClassName,
}: BrandLogoProps) {
  const { t } = useTranslation('common')

  return (
    <div className={cn('flex min-w-0 items-center gap-3', className)}>
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white shadow-sm">
        <img
          src="/logo.png"
          alt={t('brand.logoAlt')}
          className={cn('h-full w-full object-contain', imageClassName)}
        />
      </div>
      {showText ? (
        <div className={cn('min-w-0', textClassName)}>
          <p className="truncate text-base font-semibold leading-none">
            {t('brand.name')}
          </p>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {t('brand.tagline')}
          </p>
        </div>
      ) : null}
    </div>
  )
}
