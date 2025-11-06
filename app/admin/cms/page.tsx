'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, Eye, EyeOff } from 'lucide-react';
import { CMSPopup, CMSContent } from '@/lib/cms/types';
import { getCMSContent, saveCMSContent } from '@/lib/cms/data';

export default function CMSAdminPage() {
  const [content, setContent] = useState<CMSContent | null>(null);
  const [activeTab, setActiveTab] = useState<'popups' | 'settings'>('popups');
  const [editingPopup, setEditingPopup] = useState<CMSPopup | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Simple auth check
    const auth = localStorage.getItem('cms_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const loadContent = () => {
    const data = getCMSContent();
    setContent(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (use proper auth in production)
    if (password === 'admin123') {
      localStorage.setItem('cms_auth', 'authenticated');
      setIsAuthenticated(true);
      loadContent();
    } else {
      alert('Invalid password');
    }
  };

  const handleSave = () => {
    if (content) {
      saveCMSContent(content);
      alert('Content saved successfully!');
    }
  };

  const handleAddPopup = () => {
    const newPopup: CMSPopup = {
      id: `popup_${Date.now()}`,
      title: 'New Popup',
      message: 'Enter your message here',
      active: false,
      type: 'festive',
    };
    setEditingPopup(newPopup);
  };

  const handleSavePopup = () => {
    if (content && editingPopup) {
      const existingIndex = content.popups.findIndex(p => p.id === editingPopup.id);
      if (existingIndex >= 0) {
        content.popups[existingIndex] = editingPopup;
      } else {
        content.popups.push(editingPopup);
      }
      setContent({ ...content });
      setEditingPopup(null);
    }
  };

  const handleDeletePopup = (id: string) => {
    if (content && confirm('Are you sure you want to delete this popup?')) {
      content.popups = content.popups.filter(p => p.id !== id);
      setContent({ ...content });
    }
  };

  const togglePopupActive = (id: string) => {
    if (content) {
      const popup = content.popups.find(p => p.id === id);
      if (popup) {
        popup.active = !popup.active;
        setContent({ ...content });
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
        <div className="bg-card p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/10">
          <h1 className="text-3xl font-bold mb-6 gradient-text">CMS Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Login
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              Default password: admin123 (change this in production!)
            </p>
          </form>
        </div>
      </div>
    );
  }

  if (!content) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">CMS Admin Panel</h1>
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Save size={20} />
            Save All Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab('popups')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'popups'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Popups & Announcements
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'settings'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Site Settings
          </button>
        </div>

        {/* Popups Tab */}
        {activeTab === 'popups' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Popups</h2>
              <button
                onClick={handleAddPopup}
                className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                Add New Popup
              </button>
            </div>

            {/* Popup List */}
            <div className="grid gap-4">
              {content.popups.map((popup) => (
                <div
                  key={popup.id}
                  className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{popup.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            popup.active
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-gray-500/20 text-gray-500'
                          }`}
                        >
                          {popup.active ? 'Active' : 'Inactive'}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                          {popup.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{popup.message}</p>
                      {popup.startDate && (
                        <p className="text-sm text-muted-foreground">
                          Start: {new Date(popup.startDate).toLocaleDateString()}
                        </p>
                      )}
                      {popup.endDate && (
                        <p className="text-sm text-muted-foreground">
                          End: {new Date(popup.endDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => togglePopupActive(popup.id)}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        title={popup.active ? 'Deactivate' : 'Activate'}
                      >
                        {popup.active ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                      <button
                        onClick={() => setEditingPopup({ ...popup })}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={20} />
                      </button>
                      <button
                        onClick={() => handleDeletePopup(popup.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {content.popups.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No popups created yet. Click "Add New Popup" to get started!
                </div>
              )}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Site Settings</h2>
            <div className="bg-card p-6 rounded-xl border border-white/10 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Site Title</label>
                <input
                  type="text"
                  value={content.settings.siteTitle}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      settings: { ...content.settings, siteTitle: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Site Description</label>
                <textarea
                  value={content.settings.siteDescription}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      settings: { ...content.settings, siteDescription: e.target.value },
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Contact Email</label>
                <input
                  type="email"
                  value={content.settings.contact.email}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      settings: {
                        ...content.settings,
                        contact: { ...content.settings.contact, email: e.target.value },
                      },
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Popup Modal */}
      {editingPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card p-8 rounded-2xl shadow-2xl max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Edit Popup</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={editingPopup.title}
                  onChange={(e) =>
                    setEditingPopup({ ...editingPopup, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={editingPopup.message}
                  onChange={(e) =>
                    setEditingPopup({ ...editingPopup, message: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  value={editingPopup.type}
                  onChange={(e) =>
                    setEditingPopup({
                      ...editingPopup,
                      type: e.target.value as CMSPopup['type'],
                    })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                >
                  <option value="festive">Festive</option>
                  <option value="offer">Offer</option>
                  <option value="announcement">Announcement</option>
                  <option value="alert">Alert</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Date</label>
                  <input
                    type="date"
                    value={editingPopup.startDate || ''}
                    onChange={(e) =>
                      setEditingPopup({ ...editingPopup, startDate: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">End Date</label>
                  <input
                    type="date"
                    value={editingPopup.endDate || ''}
                    onChange={(e) =>
                      setEditingPopup({ ...editingPopup, endDate: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CTA Button Text</label>
                <input
                  type="text"
                  value={editingPopup.ctaText || ''}
                  onChange={(e) =>
                    setEditingPopup({ ...editingPopup, ctaText: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  placeholder="e.g., Learn More"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CTA Link</label>
                <input
                  type="text"
                  value={editingPopup.ctaLink || ''}
                  onChange={(e) =>
                    setEditingPopup({ ...editingPopup, ctaLink: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  placeholder="e.g., /services"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Background Color</label>
                  <input
                    type="color"
                    value={editingPopup.backgroundColor || '#ffffff'}
                    onChange={(e) =>
                      setEditingPopup({ ...editingPopup, backgroundColor: e.target.value })
                    }
                    className="w-full h-12 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Text Color</label>
                  <input
                    type="color"
                    value={editingPopup.textColor || '#000000'}
                    onChange={(e) =>
                      setEditingPopup({ ...editingPopup, textColor: e.target.value })
                    }
                    className="w-full h-12 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSavePopup}
                className="flex-1 bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Save Popup
              </button>
              <button
                onClick={() => setEditingPopup(null)}
                className="flex-1 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
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
