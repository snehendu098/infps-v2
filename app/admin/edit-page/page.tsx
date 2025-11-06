'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Save, Eye, ArrowLeft } from 'lucide-react';

// Existing page configurations
const EXISTING_PAGES = {
  home: {
    id: 'home',
    name: 'Homepage',
    url: '/',
    sections: [
      {
        id: 'hero',
        name: 'Hero Section',
        type: 'hero',
        editable: {
          heading: 'Transform, Innovate',
          subheading: 'Transform Your Digital Future',
          description: 'Leading provider of Data Center Management, Custom Software Development, Smart City Solutions, CRM, ERP, POS systems, and comprehensive Web & Mobile App Development',
          showParticles: true,
        }
      },
      {
        id: 'services',
        name: 'Services Section',
        type: 'services',
        editable: {
          heading: 'Our Services',
          services: [
            {
              title: 'Data Center Management',
              description: 'Comprehensive MDC software solutions',
              icon: '🏢'
            },
            {
              title: 'Custom Software Development',
              description: 'Tailored solutions for your business',
              icon: '💻'
            },
            {
              title: 'Smart City Solutions',
              description: 'Building intelligent urban infrastructure',
              icon: '🌆'
            },
            {
              title: 'CRM & ERP Systems',
              description: 'Streamline your business operations',
              icon: '📊'
            },
            {
              title: 'POS Solutions',
              description: 'Modern point-of-sale systems',
              icon: '💳'
            },
            {
              title: 'Web & Mobile Development',
              description: 'Cross-platform applications',
              icon: '📱'
            },
          ]
        }
      },
      {
        id: 'features',
        name: 'Why Choose Us',
        type: 'features',
        editable: {
          heading: 'Why Choose InfiniTech Partners',
          features: [
            {
              icon: '⚡',
              title: 'Fast Delivery',
              description: 'Quick turnaround times'
            },
            {
              icon: '🔒',
              title: 'Secure Solutions',
              description: 'Enterprise-grade security'
            },
            {
              icon: '💡',
              title: 'Innovation',
              description: 'Cutting-edge technology'
            },
          ]
        }
      },
    ]
  },
  about: {
    id: 'about',
    name: 'About Us',
    url: '/about',
    sections: [
      {
        id: 'hero',
        name: 'About Hero',
        type: 'hero',
        editable: {
          heading: 'About InfiniTech Partners',
          description: 'Your trusted technology partner since 2020',
        }
      },
      {
        id: 'text',
        name: 'Company Story',
        type: 'text',
        editable: {
          heading: 'Our Story',
          content: '<p>Founded in 2020, InfiniTech Partners has grown to become a leading provider of enterprise software solutions...</p>'
        }
      }
    ]
  },
  services: {
    id: 'services',
    name: 'Services',
    url: '/services',
    sections: []
  },
  contact: {
    id: 'contact',
    name: 'Contact',
    url: '/contact',
    sections: []
  }
};

export default function EditExistingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageName = searchParams?.get('page') || 'home';

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState<any>(null);
  const [editingSection, setEditingSection] = useState<any>(null);

  useEffect(() => {
    const auth = localStorage.getItem('cms_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
      loadPage();
    }
  }, [pageName]);

  const loadPage = () => {
    // Load from localStorage or use default
    const stored = localStorage.getItem(`page_content_${pageName}`);
    if (stored) {
      setCurrentPage(JSON.parse(stored));
    } else {
      setCurrentPage(EXISTING_PAGES[pageName as keyof typeof EXISTING_PAGES] || EXISTING_PAGES.home);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('cms_auth', 'authenticated');
      setIsAuthenticated(true);
      loadPage();
    } else {
      alert('Invalid password');
    }
  };

  const savePage = () => {
    localStorage.setItem(`page_content_${pageName}`, JSON.stringify(currentPage));
    alert('✅ Page saved! Refresh your website to see changes.');
  };

  const updateSectionField = (sectionId: string, field: string, value: any) => {
    setCurrentPage((prev: any) => ({
      ...prev,
      sections: prev.sections.map((s: any) =>
        s.id === sectionId
          ? {
              ...s,
              editable: {
                ...s.editable,
                [field]: value,
              },
            }
          : s
      ),
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
        <div className="bg-card p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/10">
          <h1 className="text-3xl font-bold mb-6 gradient-text">Page Editor Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!currentPage) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-card p-6 rounded-xl border border-white/10 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-muted/20 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                Editing: {currentPage.name}
              </h1>
              <p className="text-sm text-muted-foreground">{currentPage.url}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={currentPage.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600"
            >
              <Eye size={20} />
              Preview
            </a>
            <button
              onClick={savePage}
              className="bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </div>

        {/* Page Selector */}
        <div className="bg-card p-4 rounded-xl border border-white/10 mb-6">
          <label className="block text-sm font-medium mb-2">Switch Page:</label>
          <select
            value={pageName}
            onChange={(e) => router.push(`/admin/edit-page?page=${e.target.value}`)}
            className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
          >
            {Object.entries(EXISTING_PAGES).map(([key, page]) => (
              <option key={key} value={key}>
                {page.name} ({page.url})
              </option>
            ))}
          </select>
        </div>

        {/* Sections Editor */}
        <div className="space-y-6">
          {currentPage.sections.map((section: any) => (
            <div
              key={section.id}
              className="bg-card p-6 rounded-xl border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-primary">✏️</span>
                {section.name}
              </h2>

              {/* Hero Section Fields */}
              {section.type === 'hero' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Heading</label>
                    <input
                      type="text"
                      value={section.editable.heading || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'heading', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none text-lg font-semibold"
                    />
                  </div>
                  {section.editable.subheading !== undefined && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Subheading</label>
                      <input
                        type="text"
                        value={section.editable.subheading || ''}
                        onChange={(e) =>
                          updateSectionField(section.id, 'subheading', e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={section.editable.description || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'description', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Text Section Fields */}
              {section.type === 'text' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Heading</label>
                    <input
                      type="text"
                      value={section.editable.heading || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'heading', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Content (HTML)</label>
                    <textarea
                      value={section.editable.content || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'content', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none font-mono text-sm"
                      rows={8}
                    />
                  </div>
                </div>
              )}

              {/* Services Section Fields */}
              {section.type === 'services' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Section Heading</label>
                    <input
                      type="text"
                      value={section.editable.heading || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'heading', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Services</label>
                    <div className="space-y-4">
                      {(section.editable.services || []).map((service: any, idx: number) => (
                        <div key={idx} className="bg-muted/20 p-4 rounded-lg space-y-3">
                          <div className="flex gap-3">
                            <input
                              type="text"
                              value={service.icon || ''}
                              onChange={(e) => {
                                const newServices = [...section.editable.services];
                                newServices[idx].icon = e.target.value;
                                updateSectionField(section.id, 'services', newServices);
                              }}
                              placeholder="Icon (emoji)"
                              className="w-20 px-3 py-2 rounded-lg bg-background border border-white/10 text-center text-2xl"
                            />
                            <input
                              type="text"
                              value={service.title || ''}
                              onChange={(e) => {
                                const newServices = [...section.editable.services];
                                newServices[idx].title = e.target.value;
                                updateSectionField(section.id, 'services', newServices);
                              }}
                              placeholder="Service Title"
                              className="flex-1 px-4 py-2 rounded-lg bg-background border border-white/10 font-semibold"
                            />
                          </div>
                          <textarea
                            value={service.description || ''}
                            onChange={(e) => {
                              const newServices = [...section.editable.services];
                              newServices[idx].description = e.target.value;
                              updateSectionField(section.id, 'services', newServices);
                            }}
                            placeholder="Service Description"
                            className="w-full px-4 py-2 rounded-lg bg-background border border-white/10"
                            rows={2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features Section Fields */}
              {section.type === 'features' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Section Heading</label>
                    <input
                      type="text"
                      value={section.editable.heading || ''}
                      onChange={(e) =>
                        updateSectionField(section.id, 'heading', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Features</label>
                    <div className="space-y-4">
                      {(section.editable.features || []).map((feature: any, idx: number) => (
                        <div key={idx} className="bg-muted/20 p-4 rounded-lg space-y-3">
                          <div className="flex gap-3">
                            <input
                              type="text"
                              value={feature.icon || ''}
                              onChange={(e) => {
                                const newFeatures = [...section.editable.features];
                                newFeatures[idx].icon = e.target.value;
                                updateSectionField(section.id, 'features', newFeatures);
                              }}
                              placeholder="Icon"
                              className="w-20 px-3 py-2 rounded-lg bg-background border border-white/10 text-center text-2xl"
                            />
                            <input
                              type="text"
                              value={feature.title || ''}
                              onChange={(e) => {
                                const newFeatures = [...section.editable.features];
                                newFeatures[idx].title = e.target.value;
                                updateSectionField(section.id, 'features', newFeatures);
                              }}
                              placeholder="Feature Title"
                              className="flex-1 px-4 py-2 rounded-lg bg-background border border-white/10"
                            />
                          </div>
                          <input
                            type="text"
                            value={feature.description || ''}
                            onChange={(e) => {
                              const newFeatures = [...section.editable.features];
                              newFeatures[idx].description = e.target.value;
                              updateSectionField(section.id, 'features', newFeatures);
                            }}
                            placeholder="Feature Description"
                            className="w-full px-4 py-2 rounded-lg bg-background border border-white/10"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {currentPage.sections.length === 0 && (
            <div className="bg-card p-12 rounded-xl border border-white/10 text-center">
              <p className="text-muted-foreground text-lg">
                No sections configured for this page yet.
                <br />
                <br />
                Use the <a href="/admin/page-builder" className="text-primary hover:underline">Page Builder</a> to create new pages with sections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
