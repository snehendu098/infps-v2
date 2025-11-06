'use client';

import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Eye, Settings } from 'lucide-react';

interface EditModeWrapperProps {
  children: React.ReactNode;
  pageName?: string;
}

export default function EditModeWrapper({ children, pageName = 'home' }: EditModeWrapperProps) {
  const [editMode, setEditMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('cms_auth');
    setIsAuthenticated(auth === 'authenticated');
  }, []);

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Floating Edit Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center gap-2 group"
            title="Enter Edit Mode"
          >
            <Edit3 size={24} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
              Edit This Page
            </span>
          </button>
        ) : (
          <>
            <button
              onClick={() => setEditMode(false)}
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
              title="Exit Edit Mode"
            >
              <X size={24} />
            </button>
            <a
              href={`/admin/edit-page?page=${pageName}`}
              className="bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
              title="Advanced Editor"
            >
              <Settings size={24} />
            </a>
          </>
        )}
      </div>

      {/* Edit Mode Indicator */}
      {editMode && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#FF9966] to-[#FF6B35] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-pulse">
          <Edit3 size={20} />
          <span className="font-semibold">EDIT MODE - Click on any section to edit</span>
        </div>
      )}

      {/* Content with edit overlay */}
      <div className={editMode ? 'edit-mode-active' : ''}>
        {children}
      </div>

      {/* Edit Mode Styles */}
      <style jsx global>{`
        .edit-mode-active section,
        .edit-mode-active > div {
          position: relative;
          outline: 2px dashed transparent;
          transition: outline 0.2s;
        }

        .edit-mode-active section:hover,
        .edit-mode-active > div:hover {
          outline: 2px dashed #FF6B35;
          background: rgba(255, 107, 53, 0.05);
          cursor: pointer;
        }

        .edit-mode-active section::before,
        .edit-mode-active > div::before {
          content: 'Click to edit';
          position: absolute;
          top: 10px;
          right: 10px;
          background: #FF6B35;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          z-index: 10;
        }

        .edit-mode-active section:hover::before,
        .edit-mode-active > div:hover::before {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
