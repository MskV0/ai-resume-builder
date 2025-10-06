import React, { useState, useEffect } from 'react';
import { Briefcase, Lightbulb } from 'lucide-react';
import { roleSuggestions, companySuggestions } from '../utils/suggestions';
import { getResponsibilitiesForRole } from '../utils/responsibilitySuggestions';

export default function ExperienceForm({ formData, handleArrayChange, addItem, removeItem }) {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState({});

  const toggleSuggestions = (idx) => {
    setShowSuggestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const addResponsibility = (idx, responsibility) => {
    const currentDesc = formData.experience[idx].description;
    const newDesc = currentDesc ? `${currentDesc}\n${responsibility}` : responsibility;
    handleArrayChange(idx, 'description', newDesc, 'experience');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Work Experience</h2>
        </div>
        <button
          onClick={() => addItem('experience', { company: '', role: '', duration: '', description: '', customRole: '' })}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          + Add
        </button>
      </div>
      {formData.experience.map((exp, idx) => {
        const isRoleOther = exp.role === 'Other' || (exp.role && !roleSuggestions.includes(exp.role));
        const responsibilities = exp.role ? getResponsibilitiesForRole(exp.role) : [];
        
        return (
          <div key={idx} className="mb-4 p-4 bg-slate-50 rounded-lg">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <input
                  value={exp.company}
                  onChange={(e) => handleArrayChange(idx, 'company', e.target.value, 'experience')}
                  placeholder="Company"
                  list={`company-list-${idx}`}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
                <datalist id={`company-list-${idx}`}>
                  {companySuggestions.map((company, cidx) => (
                    <option key={cidx} value={company} />
                  ))}
                </datalist>
              </div>
              <div>
                <input
                  value={exp.role}
                  onChange={(e) => handleArrayChange(idx, 'role', e.target.value, 'experience')}
                  placeholder="Job Title"
                  list={`exp-role-list-${idx}`}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
                <datalist id={`exp-role-list-${idx}`}>
                  {roleSuggestions.map((role, ridx) => (
                    <option key={ridx} value={role} />
                  ))}
                </datalist>
              </div>
            </div>
            
            {isRoleOther && exp.role && (
              <div className="mb-3">
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Please specify your role:
                </label>
                <input
                  value={exp.customRole || ''}
                  onChange={(e) => handleArrayChange(idx, 'customRole', e.target.value, 'experience')}
                  placeholder="Enter your specific role"
                  className="w-full px-3 py-2 border border-blue-300 bg-blue-50 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            
            <input
              value={exp.duration}
              onChange={(e) => handleArrayChange(idx, 'duration', e.target.value, 'experience')}
              placeholder="Duration (e.g., Jan 2020 - Present)"
              className="w-full mb-3 px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
            
            {/* Responsibility Suggestions */}
            {exp.role && responsibilities.length > 0 && (
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => toggleSuggestions(idx)}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Lightbulb className="w-4 h-4" />
                  {showSuggestions[idx] ? 'Hide' : 'Show'} Responsibility Suggestions for {exp.role}
                </button>
                
                {showSuggestions[idx] && (
                  <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg max-h-60 overflow-y-auto">
                    <p className="text-xs font-semibold text-amber-900 mb-2">Click to add:</p>
                    <div className="space-y-2">
                      {responsibilities.map((resp, ridx) => (
                        <button
                          key={ridx}
                          type="button"
                          onClick={() => addResponsibility(idx, resp)}
                          className="w-full text-left p-2 text-xs bg-white hover:bg-amber-100 border border-amber-200 rounded transition-colors"
                        >
                          {resp}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <textarea
              value={exp.description}
              onChange={(e) => handleArrayChange(idx, 'description', e.target.value, 'experience')}
              placeholder="Responsibilities (one per line) - or use suggestions above"
              rows="3"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
            />
            
            {formData.experience.length > 1 && (
              <button
                onClick={() => removeItem(idx, 'experience')}
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