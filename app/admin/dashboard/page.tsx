'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      router.push('/admin/login')
    } else {
      setIsAuthed(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  if (!isAuthed) {
    return null
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-white/60">Infinititech Partners CMS Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sanity Studio */}
          <a
            href="http://localhost:3333"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sanity Studio</h3>
            <p className="text-white/60 text-sm mb-4">
              Create and manage pages, sections, and content
            </p>
            <div className="inline-flex items-center text-primary text-sm font-medium">
              Open Studio
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* View Website */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">View Website</h3>
            <p className="text-white/60 text-sm mb-4">
              See your live website with all changes
            </p>
            <div className="inline-flex items-center text-green-500 text-sm font-medium">
              Open Site
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          {/* Documentation */}
          <div className="p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
            <p className="text-white/60 text-sm mb-4">
              Quick guides and setup instructions
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• QUICK_START_CMS.md</li>
              <li>• FINAL_CHECKLIST.md</li>
              <li>• GET_STARTED.md</li>
            </ul>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-8 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">System Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-white/60 mb-2">Login Credentials</h3>
              <div className="space-y-1 font-mono text-sm">
                <p className="text-white">Username: <span className="text-primary">admin</span></p>
                <p className="text-white">Password: <span className="text-primary">infps2024</span></p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/60 mb-2">Sanity Project</h3>
              <div className="space-y-1 font-mono text-sm">
                <p className="text-white">Project ID: <span className="text-primary">51qjg3ag</span></p>
                <p className="text-white">Dataset: <span className="text-primary">production</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-xl rounded-xl border border-primary/20">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Create Content</h2>
          <ol className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              <span>Click "Sanity Studio" above to open the CMS</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              <span>Click "Pages" in the sidebar, then "Create"</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              <span>Add title, generate slug, add sections with columns and widgets</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              <span>Click "Publish" and view at http://localhost:3000/cms/your-slug</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
