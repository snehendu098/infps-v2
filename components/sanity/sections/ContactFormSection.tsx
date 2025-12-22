'use client'

import { useState, FormEvent } from 'react'
import type { ContactFormSection as ContactFormSectionType } from '@/lib/sanity/types'
import { ResponsiveImage } from '../common/SanityImage'
import { PortableTextRenderer } from '../common/PortableText'
import { SanityButton, SanityLink } from '../common/SanityButton'
import { cn } from '@/lib/utils'
import { Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react'

interface ContactFormSectionProps {
  data: ContactFormSectionType
}

// Extract form field type from the section type
type FormField = NonNullable<ContactFormSectionType['formFields']>[number]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  clock: Clock,
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState<Record<string, string>>({})

  const {
    eyebrow,
    heading,
    description,
    contactInfo,
    image,
    formFields,
    submitButton,
    successMessage,
    formEndpoint,
    layout = 'split',
    formStyle = 'card',
  } = data

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    try {
      if (formEndpoint) {
        await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      }
      setFormState('success')
      setFormData({})
    } catch {
      setFormState('error')
    }
  }

  const formStyleClasses: Record<string, string> = {
    simple: '',
    boxed: 'border border-gray-200 p-6 rounded-xl',
    card: 'bg-white shadow-lg p-6 md:p-8 rounded-2xl',
  }

  const renderFormField = (field: FormField) => {
    const baseInputClasses =
      'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            rows={4}
            className={baseInputClasses}
            value={formData[field.name] || ''}
            onChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
          />
        )
      case 'select':
        return (
          <select
            name={field.name}
            required={field.required}
            className={baseInputClasses}
            value={formData[field.name] || ''}
            onChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
          >
            <option value="">{field.placeholder || 'Select an option'}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )
      case 'checkbox':
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name={field.name}
              required={field.required}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={formData[field.name] === 'true'}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field.name]: e.target.checked ? 'true' : 'false',
                })
              }
            />
            <span className="text-gray-700">{field.label}</span>
          </label>
        )
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className={baseInputClasses}
            value={formData[field.name] || ''}
            onChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
          />
        )
    }
  }

  const formContent = (
    <form onSubmit={handleSubmit} className={formStyleClasses[formStyle]}>
      {formState === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg text-gray-700">{successMessage}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields?.map((field) => (
              <div
                key={field._key}
                className={field.width === 'full' ? 'md:col-span-2' : ''}
              >
                {field.type !== 'checkbox' && (
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                )}
                {renderFormField(field)}
              </div>
            ))}
          </div>

          {formState === 'error' && (
            <p className="text-red-500 text-sm mt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="mt-6">
            {submitButton ? (
              <button
                type="submit"
                disabled={formState === 'loading'}
                className={cn(
                  'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all',
                  'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  submitButton.label
                )}
              </button>
            ) : (
              <button
                type="submit"
                disabled={formState === 'loading'}
                className={cn(
                  'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all',
                  'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            )}
          </div>
        </>
      )}
    </form>
  )

  const infoContent = (
    <div className="space-y-8">
      {eyebrow && (
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {heading}
        </h2>
      )}
      {description && (
        <div className="text-gray-600">
          <PortableTextRenderer value={description} />
        </div>
      )}

      {contactInfo && contactInfo.length > 0 && (
        <ul className="space-y-4">
          {contactInfo.map((info) => {
            const IconComponent = info.icon ? iconMap[info.icon] : null

            const content = (
              <li className="flex items-start gap-4">
                {IconComponent && (
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                )}
                <div>
                  {info.label && (
                    <p className="text-sm text-gray-500">{info.label}</p>
                  )}
                  <p className="font-medium text-gray-900">{info.value}</p>
                </div>
              </li>
            )

            if (info.link) {
              return (
                <SanityLink
                  key={info._key}
                  link={info.link}
                  className="block hover:opacity-80 transition-opacity"
                >
                  {content}
                </SanityLink>
              )
            }

            return <div key={info._key}>{content}</div>
          })}
        </ul>
      )}
    </div>
  )

  return (
    <div>
      {layout === 'form-only' && formContent}

      {layout === 'split' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {infoContent}
          {formContent}
        </div>
      )}

      {layout === 'with-image' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {infoContent}
            <div className="mt-8">{formContent}</div>
          </div>
          {image && (
            <ResponsiveImage
              data={image}
              className="w-full h-auto"
              containerClassName="rounded-2xl overflow-hidden shadow-lg"
            />
          )}
        </div>
      )}

      {layout === 'two-columns' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">{infoContent}</div>
          <div className="lg:col-span-2">{formContent}</div>
        </div>
      )}
    </div>
  )
}
