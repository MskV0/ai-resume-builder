import React from 'react';
import { Award } from 'lucide-react';
import { achievementSuggestions } from '../utils/suggestions';

export default function AchievementsForm({ formData, handleArrayChange, addItem, removeItem }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Achievements & Certifications</h2>
        </div>
        <button
          onClick={() => addItem('achievements', { title: '', date: '', customTitle: '' })}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          + Add
        </button>
      </div>
      {formData.achievements.map((ach, idx) => {
        const isAchievementOther = ach.title === 'Others' || (ach.title && !achievementSuggestions.includes(ach.title));
        
        return (
          <div key={idx} className="mb-4 p-4 bg-slate-50 rounded-lg">
            <div>
              <input
                value={ach.title}
                onChange={(e) => handleArrayChange(idx, 'title', e.target.value, 'achievements')}
                placeholder="Achievement or Certification Title"
                list={`achievement-list-${idx}`}
                className="w-full mb-3 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
              <datalist id={`achievement-list-${idx}`}>
                {achievementSuggestions.map((achievement, aidx) => (
                  <option key={aidx} value={achievement} />
                ))}
              </datalist>
            </div>
            {isAchievementOther && ach.title && (
              <div className="mb-3">
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Please specify your achievement:
                </label>
                <input
                  value={ach.customTitle || ''}
                  onChange={(e) => handleArrayChange(idx, 'customTitle', e.target.value, 'achievements')}
                  placeholder="Enter your specific achievement"
                  className="w-full px-3 py-2 border border-blue-300 bg-blue-50 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <input
              value={ach.date}
              onChange={(e) => handleArrayChange(idx, 'date', e.target.value, 'achievements')}
              placeholder="Date or Valid Until (e.g., Jan 2024 or Valid: 2024-2027)"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
            {formData.achievements.length > 1 && (
              <button
                onClick={() => removeItem(idx, 'achievements')}
                className="mt-2 text-red-500 text-sm hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}