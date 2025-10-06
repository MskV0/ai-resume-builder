import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfessionalSummaryForm from "./components/ProfessionalSummaryForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import AchievementsForm from "./components/AchievementsForm";
import Sidebar from "./components/Sidebar";
import ResumePreview from "./components/ResumePreview";
import { validateField } from "./utils/validator";
import { translateToEnglish } from "./utils/translator";
import {
  enhanceDescription,
  enhanceProjectDescription,
  enhanceEducationDescription,
  generateEnhancedSummary,
} from "./utils/enhancer";

export default function App() {
  const [activeTab, setActiveTab] = useState("input");
  const [generatedResume, setGeneratedResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    profilePhoto: null,
    tempProfilePhoto: null,
    currentRole: "",
    yearsExperience: "",
    targetRole: "",

    // Custom fields for "Other" selections
    customLocation: "",
    customCurrentRole: "",
    customTargetRole: "",

    experience: [
      { company: "", role: "", duration: "", description: "", customRole: "" },
    ],
    education: [
      {
        institution: "",
        degree: "",
        fromYear: "",
        toYear: "",
        gpa: "",
        customDegree: "",
      },
    ],
    technicalSkills: "",
    softSkills: "",
    projects: [{ name: "", description: "", technologies: "", link: "" }],
    achievements: [{ title: "", date: "", customTitle: "" }],
    color: "blue",
  });

  // Back to top visibility handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reload/Reset function
  const handleReload = () => {
    if (
      window.confirm(
        "Are you sure you want to start over? All data will be lost."
      )
    ) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
        profileImage: null,
        currentRole: "",
        yearsExperience: "",
        targetRole: "",
        customLocation: "",
        customCurrentRole: "",
        customTargetRole: "",
        experience: [
          {
            company: "",
            role: "",
            duration: "",
            description: "",
            customRole: "",
          },
        ],
        education: [
          {
            institution: "",
            degree: "",
            fromYear: "",
            toYear: "",
            gpa: "",
            customDegree: "",
          },
        ],
        technicalSkills: "",
        softSkills: "",
        projects: [{ name: "", description: "", technologies: "", link: "" }],
        achievements: [{ title: "", date: "", customTitle: "" }],
        color: "blue",
      });
      setGeneratedResume(null);
      setErrors({});
      setActiveTab("input");
      scrollToTop();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleArrayChange = (index, field, value, arrayName) => {
    const newArray = [...formData[arrayName]];
    newArray[index][field] = value;
    setFormData((prev) => ({ ...prev, [arrayName]: newArray }));
  };

  const addItem = (arrayName, template) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], template],
    }));
  };

  const removeItem = (index, arrayName) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }));
  };

  const generateResume = () => {
    if (!formData.fullName.trim()) {
      setErrors({ fullName: "Name is required" });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Check for validation errors
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const translated = {
      ...formData,
      currentRole: translateToEnglish(formData.currentRole),
      targetRole: translateToEnglish(formData.targetRole),
      experience: formData.experience.map((e) => ({
        ...e,
        company: translateToEnglish(e.company),
        role: translateToEnglish(e.role),
        description: translateToEnglish(e.description),
      })),
      education: formData.education.map((e) => ({
        ...e,
        institution: translateToEnglish(e.institution),
        degree: translateToEnglish(e.degree),
        description: enhanceEducationDescription(e.degree, e.institution),
      })),
      projects: formData.projects.map((p) => ({
        ...p,
        name: translateToEnglish(p.name),
        description: enhanceProjectDescription(
          translateToEnglish(p.description),
          p.technologies
        ),
        technologies: translateToEnglish(p.technologies),
      })),
    };

    const summary = generateEnhancedSummary(translated);

    const enhanced = translated.experience.map((exp) => ({
      ...exp,
      bullets: exp.description
        .split("\n")
        .filter(Boolean)
        .map((b) => {
          const enhanced = enhanceDescription(translateToEnglish(b.trim()));
          return enhanced.startsWith("•") ? enhanced : `• ${enhanced}`;
        }),
    }));

    const skills = {
      technical: translated.technicalSkills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      soft: translated.softSkills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    setGeneratedResume({
      ...translated,
      summary,
      enhancedExperience: enhanced,
      skills,
    });

    setActiveTab("preview");
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onGenerateResume={generateResume}
          onReload={handleReload}
        />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === "input" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <PersonalInfoForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  errors={errors}
                  setFormData={setFormData}
                />
                <ProfessionalSummaryForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <ExperienceForm
                  formData={formData}
                  handleArrayChange={handleArrayChange}
                  addItem={addItem}
                  removeItem={removeItem}
                />
                <EducationForm
                  formData={formData}
                  handleArrayChange={handleArrayChange}
                  addItem={addItem}
                  removeItem={removeItem}
                />
                <SkillsForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <ProjectsForm
                  formData={formData}
                  handleArrayChange={handleArrayChange}
                  addItem={addItem}
                  removeItem={removeItem}
                />
                <AchievementsForm
                  formData={formData}
                  handleArrayChange={handleArrayChange}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              </div>

              <div className="space-y-6">
                <Sidebar
                  formData={formData}
                  setFormData={setFormData}
                  onGenerateResume={generateResume}
                />
              </div>
            </div>
          ) : (
            <ResumePreview
              formData={formData}
              generatedResume={generatedResume}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 no-print animate-bounce-slow"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
