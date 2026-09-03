"use client";

import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from './Container';
import Section from './Section';

const Vectors = {
  DocIcon: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  CloudUpload: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.2 15c.7-1.1 1-2.3 1-3.5A6.5 6.5 0 0 0 12 7.1 8 8 0 0 0 4.5 13a5.5 5.5 0 0 0 1 10.9h13.8a4.5 4.5 0 0 0 1.9-8.9z"/>
      <polyline points="16 12 12 8 8 12"/>
      <line x1="12" y1="8" x2="12" y2="18"/>
    </svg>
  )
};

function ResumeUploadFormContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  const jobTitle = searchParams.get('jobTitle');

  // Input states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+91 ');
  const [email, setEmail] = useState('');
  const [locationVal, setLocationVal] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [desiredJobType, setDesiredJobType] = useState('');
  const [bio, setBio] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (jobTitle) {
      const titleLower = jobTitle.toLowerCase();
      if (titleLower.includes('security') || titleLower.includes('guard') || titleLower.includes('bouncer') || titleLower.includes('protection')) {
        setDesiredJobType('security');
      } else if (titleLower.includes('factory') || titleLower.includes('worker') || titleLower.includes('operator') || titleLower.includes('helper') || titleLower.includes('packer') || titleLower.includes('production')) {
        setDesiredJobType('factory');
      } else if (titleLower.includes('iti') || titleLower.includes('diploma') || titleLower.includes('electrician') || titleLower.includes('technician') || titleLower.includes('plumber') || titleLower.includes('fitter') || titleLower.includes('trade')) {
        setDesiredJobType('iti');
      } else if (titleLower.includes('admin') || titleLower.includes('office') || titleLower.includes('support') || titleLower.includes('assistant') || titleLower.includes('clerk') || titleLower.includes('receptionist')) {
        setDesiredJobType('admin');
      } else {
        setDesiredJobType('');
      }
    }
  }, [jobTitle]);

  const validateFile = (file: File): boolean => {
    const allowedExtensions = ['.pdf', '.docx'];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    
    const isValidType = allowedExtensions.includes(fileExtension);
    if (!isValidType) {
      setSubmitStatus('error');
      setStatusMessage('Only PDF and DOCX files are allowed.');
      return false;
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      setSubmitStatus('error');
      setStatusMessage('Resume must be smaller than 2MB.');
      return false;
    }

    setSubmitStatus('idle');
    setStatusMessage('');
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setResumeFile(file);
      } else {
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setResumeFile(file);
      } else {
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      setSubmitStatus('error');
      setStatusMessage('Please upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('location', locationVal);
      formData.append('qualification', qualification);
      formData.append('experience', experience);
      formData.append('desiredJobType', desiredJobType);
      
      if (bio) {
        formData.append('bio', bio);
      }
      
      formData.append('resume', resumeFile);
      
      if (jobId) {
        formData.append('jobId', jobId);
      }

      const response = await fetch('https://api.bhaktimanagement.com/api/candidates', {
        method: 'POST',
        body: formData,
        // Browser sets Content-Type automatically with boundary, DO NOT set manually.
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error('API submission failed. Status:', response.status);
        console.error('Response body:', data);
        
        let errorMsg = 'Unable to submit your application. Please try again.';
        if (data) {
          if (data.errors && Array.isArray(data.errors)) {
            errorMsg = `${data.message || 'Validation failed'}: ${data.errors.join(', ')}`;
          } else {
            errorMsg = data.message || data.error || errorMsg;
          }
        }
        throw new Error(errorMsg);
      }

      setSubmitStatus('success');
      setStatusMessage(`Your application was submitted successfully${jobTitle ? ` for the position: ${jobTitle}` : ''}.`);
      
      // Reset Form fields
      setFullName('');
      setPhone('+91 ');
      setEmail('');
      setLocationVal('');
      setQualification('');
      setExperience('');
      setDesiredJobType('');
      setBio('');
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (err) {
      console.error('Submit error:', err);
      setSubmitStatus('error');
      setStatusMessage(err instanceof Error ? err.message : 'Unable to submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="resume-form" className="bg-white scroll-mt-24">
      <Container className="max-w-2xl">
        <div className="rounded-card overflow-hidden shadow-elevated border border-slate-200 w-full box-border">
          
          {/* Header Card Band */}
          <div className="bg-brand-navy text-white py-8 px-10 flex justify-between items-center text-left box-border">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-1.5 leading-snug font-sans">
                {jobTitle ? 'Apply for Position' : 'Upload Your Resume'}
              </h3>
              <p className="text-[13px] text-slate-400 m-0 leading-normal">
                {jobTitle 
                  ? `Position: ${jobTitle} ${jobId ? `(ID: ${jobId})` : ''}` 
                  : 'Our HR experts will get back to you within 48 working hours.'}
              </p>
            </div>
            <div className="shrink-0"><Vectors.DocIcon /></div>
          </div>

          {/* Interactive Input Form Element */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white flex flex-col gap-5 text-left box-border font-sans">
            
            {/* Status alerts */}
            {submitStatus === 'success' && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[4px] p-4 text-xs font-semibold leading-relaxed">
                ✓ {statusMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-[4px] p-4 text-xs font-semibold leading-relaxed">
                ⚠️ {statusMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Phone Number *</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="example@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Location (City, State) *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Mumbai, Maharashtra" 
                  value={locationVal}
                  onChange={(e) => setLocationVal(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Highest Qualification *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Graduate, ITI, Class 12" 
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
              <div>
                <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Total Experience (Years) *</label>
                <input 
                  type="text" 
                  placeholder="e.g. 2" 
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Desired Job Type *</label>
              <select 
                value={desiredJobType}
                onChange={(e) => setDesiredJobType(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-button text-[13px] bg-white box-border focus:outline-none focus:border-brand-navy" 
                required
              >
                <option value="">Select a category</option>
                <option value="security">Security Personnel</option>
                <option value="factory">Factory Workers</option>
                <option value="iti">ITI / Diploma</option>
                <option value="admin">Admin & Office Support</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Brief Bio / Key Skills</label>
              <textarea 
                placeholder="Tell us about your strengths..." 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full h-24 p-3 border border-slate-300 rounded-button text-[13px] box-border resize-y focus:outline-none focus:border-brand-navy" 
              />
            </div>

            <div>
              <label className="text-[11px] font-extrabold text-brand-navy block mb-1.5 uppercase tracking-wider">Upload Resume (PDF/DOCX) *</label>
              
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                style={{ display: 'none' }}
              />

              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 dashed border-slate-300 p-8 rounded-button bg-slate-50 text-center cursor-pointer hover:bg-slate-100/50 transition-colors"
              >
                <div className="flex flex-col items-center gap-2">
                  <Vectors.CloudUpload />
                  {resumeFile ? (
                    <>
                      <div className="text-sm font-semibold text-brand-navy">Selected File: {resumeFile.name}</div>
                      <div className="text-[11px] text-slate-500">File size: {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB (Click or drop another file to replace)</div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-semibold text-brand-navy">Click to select or drag and drop your file here</div>
                      <div className="text-[11px] text-slate-400">Supported formats: PDF, DOCX (Max 2MB)</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-brand-navy text-white border-none p-4 text-[13px] md:text-sm font-bold rounded-button flex items-center justify-center gap-2 mt-3 hover:brightness-110 shadow-elevated transition-all uppercase font-sans ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit My Application'}</span>
              {!isSubmitting && <span className="text-brand-gold text-[10px]">▶</span>}
            </button>
          </form>

        </div>
      </Container>
    </Section>
  );
}

export default function ResumeUploadForm() {
  return (
    <Suspense fallback={
      <div className="text-center py-20 font-sans text-brand-navy font-semibold">
        Loading application portal...
      </div>
    }>
      <ResumeUploadFormContent />
    </Suspense>
  );
}
