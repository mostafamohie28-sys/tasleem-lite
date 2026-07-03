import { futurePricingCards } from '@/mocks'

type FuturePlaceholderCardsProps = {
  t: (key: string) => string
}

export function FuturePlaceholderCards({ t }: FuturePlaceholderCardsProps) {
  return (
    <section className="grid gap-4 rounded-lg border bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-base font-semibold text-foreground">
          {t('future.title')}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('future.description')}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {futurePricingCards.map((card) => (
          <article className="rounded-lg border bg-muted/30 p-4" key={card}>
            <p className="text-sm font-semibold">{t(`future.cards.${card}`)}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('common:labels.plannedFuture')}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
