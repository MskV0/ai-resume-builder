import React from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase, GraduationCap, Code, Award, Trophy, FileText } from 'lucide-react';

const colorSchemes = {
  blue: { primary: '#3b82f6', secondary: '#2563eb', light: '#dbeafe' },
  green: { primary: '#10b981', secondary: '#059669', light: '#d1fae5' },
  purple: { primary: '#a855f7', secondary: '#9333ea', light: '#ede9fe' },
  red: { primary: '#ef4444', secondary: '#dc2626', light: '#fee2e2' },
  slate: { primary: '#475569', secondary: '#334155', light: '#e2e8f0' },
  indigo: { primary: '#6366f1', secondary: '#4f46e5', light: '#e0e7ff' },
  teal: { primary: '#14b8a6', secondary: '#0d9488', light: '#ccfbf1' },
  orange: { primary: '#f97316', secondary: '#ea580c', light: '#ffedd5' },
  cyan: { primary: '#06b6d4', secondary: '#0891b2', light: '#cffafe' },
  emerald: { primary: '#059669', secondary: '#047857', light: '#d1fae5' }
};

export default function ResumePreview({ formData, generatedResume, setActiveTab }) {
  const currentColor = colorSchemes[formData.color];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border overflow-hidden print-container">
        {/* Header */}
        <div 
          className="p-8 text-white relative"
          style={{ background: `linear-gradient(135deg, ${currentColor.primary}, ${currentColor.secondary})` }}
        >
          <div className="flex items-start gap-6">
            {/* Profile Photo */}
            {formData.profilePhoto && (
              <div className="flex-shrink-0">
                <img 
                  src={formData.profilePhoto} 
                  alt={formData.fullName}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            )}
            
            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">
                {formData.fullName || 'Your Name'}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                {formData.currentRole || formData.targetRole || 'Professional Title'}
              </p>
              <div className="flex flex-wrap gap-4 text-sm opacity-90">
                {formData.email && (
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {formData.email}
                  </div>
                )}
                {formData.phone && (
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {formData.phone}
                  </div>
                )}
                {formData.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {formData.location}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {formData.linkedin && (
                  <a href={formData.linkedin} className="flex items-center gap-1 text-sm opacity-90 hover:opacity-100">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {formData.github && (
                  <a href={formData.github} className="flex items-center gap-1 text-sm opacity-90 hover:opacity-100">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {formData.portfolio && (
                  <a href={formData.portfolio} className="flex items-center gap-1 text-sm opacity-90 hover:opacity-100">
                    <Globe className="w-4 h-4" />
                    Portfolio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Professional Summary */}
          {generatedResume?.summary && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <FileText className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Professional Summary
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-11">
                {generatedResume.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {generatedResume?.enhancedExperience && generatedResume.enhancedExperience.some(exp => exp.company) && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Work Experience
                </h2>
              </div>
              <div className="ml-11 space-y-4">
                {generatedResume.enhancedExperience.map((exp, index) => (
                  exp.company && (
                    <div key={index} className="relative pl-6 border-l-2" style={{ borderColor: currentColor.light }}>
                      <div 
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: currentColor.primary }}
                      />
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                          <p className="text-slate-700">{exp.company}</p>
                        </div>
                        <span className="text-sm text-slate-600">{exp.duration}</span>
                      </div>
                      {exp.bullets && (
                        <div className="text-slate-700 space-y-1">
                          {exp.bullets.map((bullet, i) => (
                            <p key={i} className="leading-relaxed">{bullet}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {formData.education.some(e => e.institution) && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <GraduationCap className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Education
                </h2>
              </div>
              <div className="ml-11 space-y-4">
                {formData.education.map((edu, idx) => (
                  edu.institution && (
                    <div key={idx} className="relative pl-6 border-l-2" style={{ borderColor: currentColor.light }}>
                      <div 
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: currentColor.primary }}
                      />
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                          <p className="text-slate-700">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          {edu.fromYear && edu.toYear ? (
                            <span className="text-sm text-slate-600">{edu.fromYear} - {edu.toYear}</span>
                          ) : edu.fromYear ? (
                            <span className="text-sm text-slate-600">{edu.fromYear}</span>
                          ) : null}
                          {edu.gpa && <p className="text-sm text-slate-600">GPA: {edu.gpa}</p>}
                        </div>
                      </div>
                      {generatedResume?.education[idx]?.description && (
                        <p className="text-sm text-slate-600 italic">{generatedResume.education[idx].description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {generatedResume?.skills && (generatedResume.skills.technical.length > 0 || generatedResume.skills.soft.length > 0) && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <Code className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Skills
                </h2>
              </div>
              <div className="ml-11 space-y-3">
                {generatedResume.skills.technical.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {generatedResume.skills.technical.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: currentColor.light, color: currentColor.secondary }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {generatedResume.skills.soft.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {generatedResume.skills.soft.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: currentColor.light, color: currentColor.secondary }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Projects */}
          {formData.projects.some(p => p.name) && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <Award className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Projects
                </h2>
              </div>
              <div className="ml-11 space-y-4">
                {generatedResume.projects.map((proj, idx) => (
                  proj.name && (
                    <div key={idx} className="relative pl-6 border-l-2" style={{ borderColor: currentColor.light }}>
                      <div 
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: currentColor.primary }}
                      />
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-slate-900">{proj.name}</h3>
                        {proj.link && (
                          <a href={proj.link} className="text-sm hover:underline" style={{ color: currentColor.primary }}>
                            View →
                          </a>
                        )}
                      </div>
                      {proj.description && <p className="text-slate-700 mb-2">{proj.description}</p>}
                      {proj.technologies && (
                        <p className="text-sm text-slate-600">
                          <strong>Technologies:</strong> {proj.technologies}
                        </p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {formData.achievements.some(a => a.title) && (
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: currentColor.light }}
                >
                  <Trophy className="w-5 h-5" style={{ color: currentColor.secondary }} />
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: currentColor.secondary }}
                >
                  Achievements & Certifications
                </h2>
              </div>
              <div className="ml-11 text-slate-700 space-y-2">
                {formData.achievements.map((achievement, idx) => (
                  achievement.title && (
                    <div key={idx} className="flex justify-between items-start">
                      <p className="flex-1">• {achievement.title}</p>
                      {achievement.date && (
                        <span className="text-sm text-slate-600 ml-4">{achievement.date}</span>
                      )}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4 justify-center no-print">
        <button
          onClick={() => setActiveTab('input')}
          className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300"
        >
          ← Edit Resume
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>

      {/* AI Enhancement Info */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 no-print">
        <div className="flex items-center gap-2 mb-2">
          <Download className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-slate-900">AI-Enhanced Resume</h3>
        </div>
        <p className="text-sm text-slate-700 mb-2">
          Your resume has been optimized with AI to enhance professional language, improve readability, and increase ATS compatibility.
        </p>
        <div className="p-3 bg-white rounded-lg border border-blue-100 mt-3">
          <p className="text-xs font-semibold text-blue-900 mb-1">Translation Support:</p>
          <p className="text-xs text-slate-600">
            ✓ Converts Roman/Hinglish to professional English<br/>
            ✓ Translates informal text to formal language<br/>
            ✓ Optimizes messaging shortcuts to complete words<br/>
            ✓ Smart single-word to sentence enhancement
          </p>
        </div>
      </div>
    </div>
  );
}