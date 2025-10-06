import React from 'react';
import { GraduationCap } from 'lucide-react';
import { degreeSuggestions } from '../utils/suggestions';

export default function EducationForm({ formData, handleArrayChange, addItem, removeItem }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Education</h2>
        </div>
        <button
          onClick={() => addItem('education', { institution: '', degree: '', fromYear: '', toYear: '', gpa: '', customDegree: '' })}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          + Add
        </button>
      </div>
      {formData.education.map((edu, idx) => {
        const isDegreeOther = edu.degree === 'Other' || (edu.degree && !degreeSuggestions.includes(edu.degree) && edu.degree.toLowerCase() !== 'other');
        
        return (
          <div key={idx} className="mb-4 p-4 bg-slate-50 rounded-lg">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                value={edu.institution}
                onChange={(e) => handleArrayChange(idx, 'institution', e.target.value, 'education')}
                placeholder="Institution"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
              <div>
                <input
                  value={edu.degree}
                  onChange={(e) => handleArrayChange(idx, 'degree', e.target.value, 'education')}
                  placeholder="Degree"
                  list={`degree-list-${idx}`}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
                <datalist id={`degree-list-${idx}`}>
                  {degreeSuggestions.map((degree, didx) => (
                    <option key={didx} value={degree} />
                  ))}
                </datalist>
              </div>
            </div>
            {(edu.degree === 'Other' || isDegreeOther) && (
              <div className="mb-3">
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Please specify your degree:
                </label>
                <input
                  value={edu.customDegree || ''}
                  onChange={(e) => handleArrayChange(idx, 'customDegree', e.target.value, 'education')}
                  placeholder="Enter your specific degree (e.g., B.Sc in Physics)"
                  className="w-full px-3 py-2 border border-blue-300 bg-blue-50 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <div className="grid grid-cols-3 gap-3">
              <input
                value={edu.fromYear}
                onChange={(e) => handleArrayChange(idx, 'fromYear', e.target.value, 'education')}
                placeholder="From Year"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
              <input
                value={edu.toYear}
                onChange={(e) => handleArrayChange(idx, 'toYear', e.target.value, 'education')}
                placeholder="To Year"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
              <input
                value={edu.gpa}
                onChange={(e) => handleArrayChange(idx, 'gpa', e.target.value, 'education')}
                placeholder="GPA (optional)"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            {formData.education.length > 1 && (
              <button
                onClick={() => removeItem(idx, 'education')}
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