'use client'

import type { TestimonialsSection as TestimonialsSectionType } from '@/lib/sanity/types'
import { SanityImage } from '../common/SanityImage'
import { cn } from '@/lib/utils'
import { Star, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  data: TestimonialsSectionType
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const {
    eyebrow,
    heading,
    subheading,
    testimonials,
    layout = 'grid',
    columns = 3,
    cardStyle = 'elevated',
    showRating = true,
    showQuoteIcon = true,
  } = data

  const columnClasses: Record<number, string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const cardStyleClasses: Record<string, string> = {
    simple: 'p-6',
    bordered: 'border border-gray-200 rounded-xl p-6',
    elevated: 'bg-white rounded-xl shadow-lg p-6',
    glass: 'bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6',
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'w-4 h-4',
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            )}
          />
        ))}
      </div>
    )
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

      {/* Testimonials */}
      {layout === 'grid' && (
        <div className={cn('grid gap-6', columnClasses[columns])}>
          {testimonials?.map((testimonial) => (
            <div key={testimonial._key} className={cardStyleClasses[cardStyle]}>
              {/* Quote Icon */}
              {showQuoteIcon && (
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
              )}

              {/* Rating */}
              {showRating && testimonial.rating && (
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
              )}

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <SanityImage
                      image={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ', '}
                      {testimonial.company}
                    </p>
                  )}
                </div>
                {testimonial.companyLogo && (
                  <div className="ml-auto">
                    <SanityImage
                      image={testimonial.companyLogo}
                      alt={testimonial.company || ''}
                      width={80}
                      height={32}
                      className="h-8 w-auto object-contain opacity-50"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Single/Featured Layout */}
      {layout === 'single' && testimonials?.[0] && (
        <div className="max-w-3xl mx-auto text-center">
          {showQuoteIcon && (
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          )}
          <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
            &ldquo;{testimonials[0].quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {testimonials[0].avatar && (
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <SanityImage
                  image={testimonials[0].avatar}
                  alt={testimonials[0].author}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="text-left">
              <p className="font-semibold text-gray-900">
                {testimonials[0].author}
              </p>
              {(testimonials[0].role || testimonials[0].company) && (
                <p className="text-sm text-gray-500">
                  {testimonials[0].role}
                  {testimonials[0].role && testimonials[0].company && ', '}
                  {testimonials[0].company}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
