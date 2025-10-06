import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onGenerateResume, onReload }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onReload}
          >
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg">
              <div className="relative">
                <FileText className="w-6 h-6 text-white" strokeWidth={2.5} />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Resume Builder
              </h1>
              <p className="text-sm text-slate-600">Create professional resumes in minutes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('input')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === 'input' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Input
            </button>
            <button
              onClick={() => activeTab === 'preview' ? null : onGenerateResume()}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === 'preview' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}