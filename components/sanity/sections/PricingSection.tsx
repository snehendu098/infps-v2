'use client'

import { useState } from 'react'
import type { PricingSection as PricingSectionType } from '@/lib/sanity/types'
import { SanityButton } from '../common/SanityButton'
import { cn } from '@/lib/utils'
import { Check, X } from 'lucide-react'

interface PricingSectionProps {
  data: PricingSectionType
}

export default function PricingSection({ data }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const {
    eyebrow,
    heading,
    subheading,
    showBillingToggle = false,
    plans,
    columns = 3,
    cardStyle = 'elevated',
    featuredScale = true,
  } = data

  const columnClasses: Record<number, string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const cardStyleClasses: Record<string, string> = {
    simple: 'p-6',
    bordered: 'border border-gray-200 rounded-2xl p-6',
    elevated: 'bg-white rounded-2xl shadow-lg p-6',
    gradient: 'bg-white rounded-2xl shadow-lg p-6',
  }

  return (
    <div>
      {/* Header */}
      {(eyebrow || heading || subheading) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {eyebrow && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg text-gray-600">{subheading}</p>
          )}
        </div>
      )}

      {/* Billing Toggle */}
      {showBillingToggle && (
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={cn(
              'text-sm font-medium',
              billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'
            )}
          >
            Monthly
          </span>
          <button
            onClick={() =>
              setBillingPeriod(
                billingPeriod === 'monthly' ? 'annual' : 'monthly'
              )
            }
            className={cn(
              'relative w-14 h-7 rounded-full transition-colors',
              billingPeriod === 'annual' ? 'bg-blue-600' : 'bg-gray-300'
            )}
          >
            <span
              className={cn(
                'absolute top-1 w-5 h-5 bg-white rounded-full transition-transform',
                billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium',
              billingPeriod === 'annual' ? 'text-gray-900' : 'text-gray-500'
            )}
          >
            Annual
            <span className="ml-1 text-green-600">(Save 20%)</span>
          </span>
        </div>
      )}

      {/* Pricing Cards */}
      <div className={cn('grid gap-8 items-stretch', columnClasses[columns])}>
        {plans?.map((plan) => {
          const price =
            billingPeriod === 'annual' ? plan.priceAnnual : plan.priceMonthly
          const displayPrice = plan.priceLabel || (price !== undefined ? `${plan.currency || '$'}${price}` : null)

          return (
            <div
              key={plan._key}
              className={cn(
                cardStyleClasses[cardStyle],
                plan.featured && featuredScale && 'lg:scale-105 lg:-my-4',
                plan.featured &&
                  cardStyle === 'gradient' &&
                  'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={cn(
                    'inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4',
                    plan.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-700'
                  )}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={cn(
                  'text-2xl font-bold mb-2',
                  plan.featured && cardStyle === 'gradient'
                    ? 'text-white'
                    : 'text-gray-900'
                )}
              >
                {plan.name}
              </h3>

              {/* Description */}
              {plan.description && (
                <p
                  className={cn(
                    'text-sm mb-4',
                    plan.featured && cardStyle === 'gradient'
                      ? 'text-blue-100'
                      : 'text-gray-600'
                  )}
                >
                  {plan.description}
                </p>
              )}

              {/* Price */}
              {displayPrice && (
                <div className="mb-6">
                  <span
                    className={cn(
                      'text-4xl font-bold',
                      plan.featured && cardStyle === 'gradient'
                        ? 'text-white'
                        : 'text-gray-900'
                    )}
                  >
                    {displayPrice}
                  </span>
                  {price !== undefined && (
                    <span
                      className={cn(
                        'text-sm',
                        plan.featured && cardStyle === 'gradient'
                          ? 'text-blue-100'
                          : 'text-gray-500'
                      )}
                    >
                      {plan.billingPeriod || '/month'}
                    </span>
                  )}
                </div>
              )}

              {/* Features */}
              {plan.features && plan.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature._key} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          className={cn(
                            'w-5 h-5 flex-shrink-0',
                            plan.featured && cardStyle === 'gradient'
                              ? 'text-green-300'
                              : 'text-green-500'
                          )}
                        />
                      ) : (
                        <X
                          className={cn(
                            'w-5 h-5 flex-shrink-0',
                            plan.featured && cardStyle === 'gradient'
                              ? 'text-blue-200'
                              : 'text-gray-400'
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          feature.highlight && 'font-semibold',
                          !feature.included && 'opacity-50'
                        )}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              {plan.button && (
                <SanityButton
                  data={{
                    ...plan.button,
                    variant:
                      plan.featured && cardStyle === 'gradient'
                        ? 'white'
                        : plan.featured
                          ? 'primary'
                          : 'secondary',
                    fullWidth: true,
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
