import React from 'react';
import { Briefcase } from 'lucide-react';
import { roleSuggestions } from '../utils/suggestions';

export default function ProfessionalSummaryForm({ formData, handleInputChange }) {
  const isCurrentRoleOther = formData.currentRole === 'Other' || 
    (formData.currentRole && !roleSuggestions.includes(formData.currentRole));
  
  const isTargetRoleOther = formData.targetRole === 'Other' || 
    (formData.targetRole && !roleSuggestions.includes(formData.targetRole));

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold">Professional Summary</h2>
      </div>
      <div className="space-y-4">
        <div>
          <input
            name="currentRole"
            value={formData.currentRole}
            onChange={handleInputChange}
            placeholder="Current Role (e.g., Software Engineer)"
            list="role-list"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg"
          />
          <datalist id="role-list">
            {roleSuggestions.map((role, idx) => (
              <option key={idx} value={role} />
            ))}
          </datalist>
          {isCurrentRoleOther && formData.currentRole && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Please specify your current role:
              </label>
              <input
                name="customCurrentRole"
                value={formData.customCurrentRole || ''}
                onChange={handleInputChange}
                placeholder="Enter your specific role"
                className="w-full px-4 py-2 border border-blue-300 bg-blue-50 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={handleInputChange}
            placeholder="Years of Experience"
            className="px-4 py-2 border border-slate-300 rounded-lg"
          />
          <div>
            <input
              name="targetRole"
              value={formData.targetRole}
              onChange={handleInputChange}
              placeholder="Target Role"
              list="target-role-list"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg"
            />
            <datalist id="target-role-list">
              {roleSuggestions.map((role, idx) => (
                <option key={idx} value={role} />
              ))}
            </datalist>
          </div>
        </div>
        {isTargetRoleOther && formData.targetRole && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Please specify your target role:
            </label>
            <input
              name="customTargetRole"
              value={formData.customTargetRole || ''}
              onChange={handleInputChange}
              placeholder="Enter your specific target role"
              className="w-full px-4 py-2 border border-blue-300 bg-blue-50 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}