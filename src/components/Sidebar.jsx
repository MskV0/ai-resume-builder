import React, { useMemo } from 'react';
import { Sparkles, Lightbulb } from 'lucide-react';

const colorSchemes = {
  blue: { primary: '#3b82f6', secondary: '#2563eb', light: '#dbeafe', name: 'Professional Blue' },
  green: { primary: '#10b981', secondary: '#059669', light: '#d1fae5', name: 'Fresh Green' },
  purple: { primary: '#a855f7', secondary: '#9333ea', light: '#ede9fe', name: 'Creative Purple' },
  red: { primary: '#ef4444', secondary: '#dc2626', light: '#fee2e2', name: 'Bold Red' },
  slate: { primary: '#475569', secondary: '#334155', light: '#e2e8f0', name: 'Corporate Gray' },
  indigo: { primary: '#6366f1', secondary: '#4f46e5', light: '#e0e7ff', name: 'Executive Indigo' },
  teal: { primary: '#14b8a6', secondary: '#0d9488', light: '#ccfbf1', name: 'Modern Teal' },
  orange: { primary: '#f97316', secondary: '#ea580c', light: '#ffedd5', name: 'Energetic Orange' },
  cyan: { primary: '#06b6d4', secondary: '#0891b2', light: '#cffafe', name: 'Tech Cyan' },
  emerald: { primary: '#059669', secondary: '#047857', light: '#d1fae5', name: 'Finance Emerald' }
};

export default function Sidebar({ formData, setFormData, onGenerateResume }) {
  // Get recommended themes based on current role
  const recommendedThemes = useMemo(() => {
    const role = formData.currentRole?.toLowerCase() || '';
    if (role.includes('engineer') || role.includes('developer')) return ['cyan', 'blue', 'teal'];
    if (role.includes('manager') && role.includes('product')) return ['blue', 'slate', 'indigo'];
    if (role.includes('marketing') || role.includes('sales')) return ['orange', 'red', 'purple'];
    if (role.includes('design')) return ['purple', 'teal', 'orange'];
    if (role.includes('finance') || role.includes('accounting')) return ['emerald', 'slate', 'blue'];
    if (role.includes('data')) return ['indigo', 'cyan', 'purple'];
    return ['blue', 'slate', 'indigo'];
  }, [formData.currentRole]);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-6">
      <h3 className="text-lg font-bold mb-4">Customize Style</h3>
      
      {/* Recommended Themes */}
      {formData.currentRole && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-900">Recommended for your role</span>
          </div>
          <div className="flex gap-2">
            {recommendedThemes.map(themeKey => (
              <button
                key={themeKey}
                onClick={() => setFormData(prev => ({ ...prev, color: themeKey }))}
                className={`flex-1 h-8 rounded border-2 transition-all ${
                  formData.color === themeKey ? 'border-amber-600 scale-105' : 'border-amber-300'
                }`}
                style={{ background: `linear-gradient(135deg, ${colorSchemes[themeKey].primary}, ${colorSchemes[themeKey].secondary})` }}
                title={colorSchemes[themeKey].name}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-3">All Themes</label>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(colorSchemes).map(([key, scheme]) => (
            <button
              key={key}
              onClick={() => setFormData(prev => ({ ...prev, color: key }))}
              className={`relative h-12 rounded-lg border-2 transition-all overflow-hidden group ${
                formData.color === key ? 'border-slate-900 scale-105 shadow-lg' : 'border-slate-200 hover:border-slate-400'
              }`}
              style={{ background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary})` }}
              title={scheme.name}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                {scheme.name}
              </span>
              {formData.color === key && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Generate Button */}
      <button
        onClick={onGenerateResume}
        className="fizzy-button w-full py-4 relative overflow-hidden rounded-xl font-bold text-white text-lg shadow-2xl transform transition-transform hover:scale-105 active:scale-95"
      >
        <span className="fizzy-button-content relative z-10 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 animate-pulse" />
          Generate Resume
          <Sparkles className="w-6 h-6 animate-pulse" />
        </span>
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">AI Features</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Multi-language translation</li>
          <li>• Roman/Hinglish conversion</li>
          <li>• Professional formatting</li>
          <li>• Action verb optimization</li>
          <li>• Skills categorization</li>
          <li>• ATS-friendly</li>
          <li>• URL validation</li>
          <li>• Smart suggestions</li>
          <li>• 10 professional themes</li>
          <li>• Role-based recommendations</li>
        </ul>
      </div>
    </div>
  );
}