import React from 'react';
import { Award, Wand2 } from 'lucide-react';
import { generateTechnicalSkills, generateSoftSkills } from '../utils/skillExtractor';

export default function SkillsForm({ formData, handleInputChange }) {
  const autoGenerateSkills = () => {
    const technicalSkills = generateTechnicalSkills(formData);
    const softSkills = generateSoftSkills(formData);
    
    // Create synthetic events to update both fields
    handleInputChange({ target: { name: 'technicalSkills', value: technicalSkills } });
    handleInputChange({ target: { name: 'softSkills', value: softSkills } });
  };

  const hasEnoughData = () => {
    return formData.experience.some(exp => exp.role || exp.description) || 
           formData.education.some(edu => edu.degree) ||
           formData.projects.some(proj => proj.technologies) ||
           formData.currentRole ||
           formData.targetRole;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Skills</h2>
        </div>
        {hasEnoughData() && (
          <button
            type="button"
            onClick={autoGenerateSkills}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-sm hover:shadow-md"
          >
            <Wand2 className="w-4 h-4" />
            Auto-Generate Skills
          </button>
        )}
      </div>
      
      {hasEnoughData() && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-900">
            💡 <strong>Tip:</strong> Click "Auto-Generate Skills" to automatically extract skills from your work experience, education, and projects!
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Technical Skills (comma-separated)
          </label>
          <textarea
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleInputChange}
            placeholder="e.g., JavaScript, Python, React, Node.js, SQL, AWS (or auto-generate)"
            rows="3"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Soft Skills (comma-separated)
          </label>
          <textarea
            name="softSkills"
            value={formData.softSkills}
            onChange={handleInputChange}
            placeholder="e.g., Leadership, Communication, Problem-solving, Team Collaboration (or auto-generate)"
            rows="3"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}