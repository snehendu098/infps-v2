'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  Save,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Copy,
  Layout,
  Type,
  Image as ImageIcon,
  Users,
  MessageSquare,
  DollarSign,
  Video,
  Grid,
  Code,
} from 'lucide-react';
import { CMSPage, CMSSection, CMSContent } from '@/lib/cms/section-types';

// Section type icons mapping
const SECTION_ICONS: Record<string, React.ReactNode> = {
  hero: <Layout size={20} />,
  text: <Type size={20} />,
  image: <ImageIcon size={20} />,
  features: <Grid size={20} />,
  services: <Grid size={20} />,
  testimonials: <MessageSquare size={20} />,
  cta: <Layout size={20} />,
  stats: <Grid size={20} />,
  faq: <MessageSquare size={20} />,
  team: <Users size={20} />,
  contact: <MessageSquare size={20} />,
  pricing: <DollarSign size={20} />,
  blog: <Grid size={20} />,
  logos: <Grid size={20} />,
  video: <Video size={20} />,
  spacer: <Layout size={20} />,
  'custom-html': <Code size={20} />,
};

export default function PageBuilderAdmin() {
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<CMSPage | null>(null);
  const [editingSection, setEditingSection] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showAddSection, setShowAddSection] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('cms_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
      loadPages();
    }
  }, []);

  const loadPages = () => {
    const stored = localStorage.getItem('cms_pages');
    if (stored) {
      setPages(JSON.parse(stored));
    } else {
      // Initialize with homepage
      const defaultPage: CMSPage = {
        id: 'home',
        slug: '/',
        title: 'Home',
        metaDescription: 'Welcome to InfiniTech Partners',
        sections: [],
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setPages([defaultPage]);
      localStorage.setItem('cms_pages', JSON.stringify([defaultPage]));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('cms_auth', 'authenticated');
      setIsAuthenticated(true);
      loadPages();
    } else {
      alert('Invalid password');
    }
  };

  const savePage = (page: CMSPage) => {
    const updated = pages.map((p) => (p.id === page.id ? page : p));
    setPages(updated);
    localStorage.setItem('cms_pages', JSON.stringify(updated));
    setSelectedPage(page);
    alert('Page saved successfully!');
  };

  const addNewPage = () => {
    const slug = prompt('Enter page slug (e.g., about, services, contact):');
    if (!slug) return;

    const newPage: CMSPage = {
      id: `page_${Date.now()}`,
      slug: slug.startsWith('/') ? slug : `/${slug}`,
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      metaDescription: '',
      sections: [],
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updated = [...pages, newPage];
    setPages(updated);
    localStorage.setItem('cms_pages', JSON.stringify(updated));
    setSelectedPage(newPage);
  };

  const deletePage = (pageId: string) => {
    if (pageId === 'home') {
      alert('Cannot delete homepage!');
      return;
    }
    if (confirm('Are you sure you want to delete this page?')) {
      const updated = pages.filter((p) => p.id !== pageId);
      setPages(updated);
      localStorage.setItem('cms_pages', JSON.stringify(updated));
      if (selectedPage?.id === pageId) setSelectedPage(null);
    }
  };

  const addSection = (type: CMSSection['type']) => {
    if (!selectedPage) return;

    const newSection: any = {
      id: `section_${Date.now()}`,
      type,
      order: selectedPage.sections.length,
      ...getDefaultSectionContent(type),
    };

    const updated = {
      ...selectedPage,
      sections: [...selectedPage.sections, newSection],
      updatedAt: new Date().toISOString(),
    };

    savePage(updated);
    setShowAddSection(false);
  };

  const getDefaultSectionContent = (type: string) => {
    switch (type) {
      case 'hero':
        return {
          heading: 'Your Heading Here',
          description: 'Your description here',
          backgroundType: 'gradient',
          buttons: [{ text: 'Get Started', link: '/contact', style: 'primary' }],
          showParticles: false,
        };
      case 'text':
        return {
          heading: 'Section Heading',
          content: 'Your content here...',
          alignment: 'left',
        };
      case 'features':
        return {
          heading: 'Our Features',
          features: [
            { icon: '⚡', title: 'Feature 1', description: 'Description here' },
            { icon: '🚀', title: 'Feature 2', description: 'Description here' },
            { icon: '💡', title: 'Feature 3', description: 'Description here' },
          ],
          layout: 'grid',
          columns: 3,
        };
      case 'services':
        return {
          heading: 'Our Services',
          services: [
            { icon: '💻', title: 'Service 1', description: 'Description here' },
            { icon: '📱', title: 'Service 2', description: 'Description here' },
          ],
          layout: 'cards',
        };
      case 'cta':
        return {
          heading: 'Ready to Get Started?',
          description: 'Contact us today!',
          buttons: [{ text: 'Contact Us', link: '/contact', style: 'primary' }],
          backgroundColor: '#FF6B35',
          textColor: '#FFFFFF',
        };
      case 'testimonials':
        return {
          heading: 'What Our Clients Say',
          testimonials: [
            {
              name: 'John Doe',
              role: 'CEO',
              company: 'Company Name',
              quote: 'Great service!',
              rating: 5,
            },
          ],
          layout: 'carousel',
        };
      case 'stats':
        return {
          heading: 'Our Impact',
          stats: [
            { number: '100', label: 'Projects', suffix: '+' },
            { number: '50', label: 'Clients', suffix: '+' },
            { number: '10', label: 'Years', suffix: '+' },
          ],
          animated: true,
        };
      case 'faq':
        return {
          heading: 'Frequently Asked Questions',
          faqs: [
            { question: 'Question 1?', answer: 'Answer 1' },
            { question: 'Question 2?', answer: 'Answer 2' },
          ],
          layout: 'accordion',
        };
      case 'team':
        return {
          heading: 'Meet Our Team',
          members: [
            { name: 'Team Member', role: 'Position', bio: 'Bio here' },
          ],
          layout: 'grid',
        };
      case 'pricing':
        return {
          heading: 'Our Pricing',
          plans: [
            {
              name: 'Basic',
              price: '$99',
              period: 'month',
              features: ['Feature 1', 'Feature 2'],
              highlighted: false,
              buttonText: 'Get Started',
              buttonLink: '/contact',
            },
          ],
        };
      case 'spacer':
        return { height: 60 };
      default:
        return {};
    }
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (!selectedPage) return;

    const sections = [...selectedPage.sections];
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= sections.length) return;

    [sections[index], sections[newIndex]] = [sections[newIndex], sections[index]];
    sections.forEach((s, i) => (s.order = i));

    savePage({ ...selectedPage, sections });
  };

  const deleteSection = (sectionId: string) => {
    if (!selectedPage) return;
    if (confirm('Delete this section?')) {
      const sections = selectedPage.sections.filter((s) => s.id !== sectionId);
      sections.forEach((s, i) => (s.order = i));
      savePage({ ...selectedPage, sections });
    }
  };

  const duplicateSection = (section: any) => {
    if (!selectedPage) return;
    const newSection = {
      ...section,
      id: `section_${Date.now()}`,
      order: selectedPage.sections.length,
    };
    savePage({
      ...selectedPage,
      sections: [...selectedPage.sections, newSection],
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
        <div className="bg-card p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/10">
          <h1 className="text-3xl font-bold mb-6 gradient-text">Page Builder Login</h1>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="flex h-screen">
        {/* Sidebar - Pages List */}
        <div className="w-80 bg-card border-r border-white/10 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Pages</h2>
            <button
              onClick={addNewPage}
              className="w-full bg-primary text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mb-4 hover:bg-primary/90"
            >
              <Plus size={20} />
              New Page
            </button>

            <div className="space-y-2">
              {pages.map((page) => (
                <div
                  key={page.id}
                  onClick={() => setSelectedPage(page)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedPage?.id === page.id
                      ? 'bg-primary/20 border-primary'
                      : 'bg-muted/20 hover:bg-muted/40'
                  } border border-white/10`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{page.title}</h3>
                      <p className="text-sm text-muted-foreground">{page.slug}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {page.sections.length} sections
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {page.published ? (
                        <Eye size={16} className="text-green-500" />
                      ) : (
                        <EyeOff size={16} className="text-gray-500" />
                      )}
                      {page.id !== 'home' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deletePage(page.id);
                          }}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Section Editor */}
        <div className="flex-1 overflow-y-auto">
          {selectedPage ? (
            <div className="p-6">
              {/* Page Header */}
              <div className="bg-card p-6 rounded-xl border border-white/10 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={selectedPage.title}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, title: e.target.value })
                      }
                      className="text-3xl font-bold bg-transparent border-none outline-none w-full"
                    />
                    <input
                      type="text"
                      value={selectedPage.slug}
                      onChange={(e) =>
                        setSelectedPage({ ...selectedPage, slug: e.target.value })
                      }
                      className="text-sm text-muted-foreground bg-transparent border-none outline-none mt-2"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        savePage({
                          ...selectedPage,
                          published: !selectedPage.published,
                        })
                      }
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                        selectedPage.published
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-gray-500/20 text-gray-500'
                      }`}
                    >
                      {selectedPage.published ? <Eye size={16} /> : <EyeOff size={16} />}
                      {selectedPage.published ? 'Published' : 'Draft'}
                    </button>
                    <button
                      onClick={() => savePage(selectedPage)}
                      className="bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Save size={16} />
                      Save Page
                    </button>
                  </div>
                </div>
                <textarea
                  value={selectedPage.metaDescription}
                  onChange={(e) =>
                    setSelectedPage({
                      ...selectedPage,
                      metaDescription: e.target.value,
                    })
                  }
                  placeholder="Meta description for SEO..."
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  rows={2}
                />
              </div>

              {/* Add Section Button */}
              <div className="mb-6">
                <button
                  onClick={() => setShowAddSection(!showAddSection)}
                  className="w-full bg-primary/10 border-2 border-dashed border-primary text-primary px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
                >
                  <Plus size={20} />
                  Add New Section
                </button>

                {/* Section Type Picker */}
                {showAddSection && (
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      'hero',
                      'text',
                      'features',
                      'services',
                      'cta',
                      'testimonials',
                      'stats',
                      'faq',
                      'team',
                      'pricing',
                      'spacer',
                    ].map((type) => (
                      <button
                        key={type}
                        onClick={() => addSection(type as any)}
                        className="bg-card border border-white/10 p-4 rounded-lg hover:border-primary transition-colors flex flex-col items-center gap-2"
                      >
                        {SECTION_ICONS[type]}
                        <span className="text-sm capitalize">{type}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sections List */}
              <div className="space-y-4">
                {selectedPage.sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="bg-card p-6 rounded-xl border border-white/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        {SECTION_ICONS[section.type]}
                        <div>
                          <h3 className="font-semibold capitalize">{section.type} Section</h3>
                          <p className="text-sm text-muted-foreground">
                            Order: {section.order + 1}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => moveSection(index, 'up')}
                          disabled={index === 0}
                          className="p-2 rounded-lg hover:bg-primary/10 disabled:opacity-30"
                        >
                          <ArrowUp size={16} />
                        </button>
                        <button
                          onClick={() => moveSection(index, 'down')}
                          disabled={index === selectedPage.sections.length - 1}
                          className="p-2 rounded-lg hover:bg-primary/10 disabled:opacity-30"
                        >
                          <ArrowDown size={16} />
                        </button>
                        <button
                          onClick={() => duplicateSection(section)}
                          className="p-2 rounded-lg hover:bg-primary/10"
                        >
                          <Copy size={16} />
                        </button>
                        <button
                          onClick={() => setEditingSection(section)}
                          className="p-2 rounded-lg hover:bg-primary/10"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteSection(section.id)}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Section Preview */}
                    <div className="bg-muted/20 p-4 rounded-lg text-sm">
                      <pre className="whitespace-pre-wrap text-xs overflow-auto max-h-40">
                        {JSON.stringify(section, null, 2)}
                      </pre>
                    </div>
                  </div>
                ))}

                {selectedPage.sections.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No sections yet. Click "Add New Section" to get started!
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Select a page to edit
            </div>
          )}
        </div>
      </div>

      {/* Section Editor Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
            <h2 className="text-2xl font-bold mb-6">
              Edit {editingSection.type} Section
            </h2>
            <div className="space-y-4">
              <textarea
                value={JSON.stringify(editingSection, null, 2)}
                onChange={(e) => {
                  try {
                    setEditingSection(JSON.parse(e.target.value));
                  } catch {}
                }}
                className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none font-mono text-sm"
                rows={20}
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => {
                  if (selectedPage) {
                    const sections = selectedPage.sections.map((s) =>
                      s.id === editingSection.id ? editingSection : s
                    );
                    savePage({ ...selectedPage, sections });
                  }
                  setEditingSection(null);
                }}
                className="flex-1 bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingSection(null)}
                className="flex-1 bg-muted text-foreground px-6 py-3 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
