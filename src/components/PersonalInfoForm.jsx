import React, { useState } from 'react';
import { User, Upload, X, AlertCircle } from 'lucide-react';
import { locationSuggestions } from '../utils/suggestions';

export default function PersonalInfoForm({ formData, handleInputChange, errors, setFormData }) {
  const [showImageConsent, setShowImageConsent] = useState(false);
  const [tempImage, setTempImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result);
        setShowImageConsent(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmImageUpload = () => {
    setFormData(prev => ({ ...prev, profilePhoto: tempImage }));
    setShowImageConsent(false);
    setTempImage(null);
  };

  const cancelImageUpload = () => {
    setShowImageConsent(false);
    setTempImage(null);
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, profilePhoto: null }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold">Personal Information</h2>
      </div>

      {/* Profile Picture Section */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {formData.profileImage ? (
              <div className="relative">
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  title="Remove photo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center border-4 border-white shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 mb-1">Profile Photo (Optional)</h3>
            <p className="text-xs text-slate-600 mb-3">
              Add a professional photo to make your resume stand out. Maximum size: 2MB
            </p>
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors font-medium text-sm">
              <Upload className="w-4 h-4" />
              {formData.profileImage ? 'Change Photo' : 'Upload Photo'}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Image Consent Modal */}
      {showImageConsent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Add Profile Photo to Resume?
                </h3>
                <p className="text-sm text-slate-600">
                  Your photo will appear on your resume. Make sure it's professional and appropriate.
                </p>
              </div>
            </div>

            {tempImage && (
              <div className="mb-4 flex justify-center">
                <img
                  src={tempImage}
                  alt="Preview"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
                />
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-amber-900">
                <strong>Note:</strong> Including a photo is optional. Some countries/industries prefer resumes without photos. Consider your target job market.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelImageUpload}
                className="flex-1 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmImageUpload}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
              >
                Yes, Add Photo
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name *"
            className={`w-full px-4 py-2 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone (e.g., +1-234-567-8900)"
            className={`w-full px-4 py-2 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location (e.g., New York, USA)"
            list="location-list"
            className={`w-full px-4 py-2 border rounded-lg ${errors.location ? 'border-red-500' : 'border-slate-300'}`}
          />
          <datalist id="location-list">
            {locationSuggestions.map((loc, idx) => (
              <option key={idx} value={loc} />
            ))}
          </datalist>
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>
        {formData.location && !locationSuggestions.includes(formData.location) && 
         !['Remote', 'Hybrid'].includes(formData.location) && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Please specify your location:
            </label>
            <input
              name="customLocation"
              value={formData.customLocation || ''}
              onChange={handleInputChange}
              placeholder="Enter your specific location"
              className="w-full px-4 py-2 border border-blue-300 bg-blue-50 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        <div>
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="LinkedIn URL (e.g., linkedin.com/in/username)"
            className={`w-full px-4 py-2 border rounded-lg ${errors.linkedin ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin}</p>}
        </div>
        <div>
          <input
            name="github"
            value={formData.github}
            onChange={handleInputChange}
            placeholder="GitHub URL (e.g., github.com/username)"
            className={`w-full px-4 py-2 border rounded-lg ${errors.github ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.github && <p className="text-red-500 text-xs mt-1">{errors.github}</p>}
        </div>
        <div className="md:col-span-2">
          <input
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            placeholder="Portfolio URL (e.g., yourwebsite.com)"
            className={`w-full px-4 py-2 border rounded-lg ${errors.portfolio ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
        </div>
      </div>
    </div>
  );
}