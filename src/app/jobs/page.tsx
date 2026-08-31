"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';

interface Job {
  id: string | number;
  title: string;
  description: string;
  department?: string;
  location: string;
  type?: string;
  salaryRange?: string;
  status: string;
  requirements?: string | string[];
  benefits?: string | string[];
  createdAt?: string;
  created_at?: string;
  updatedAt?: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filtering States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Fetch jobs dynamically from backend API
  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://api.bhaktimanagement.com/api/jobs');
      if (!res.ok) {
        throw new Error(`Server returned status: ${res.status}`);
      }
      const data = await res.json();
      
      const jobsList: Job[] = Array.isArray(data) ? data : (data.jobs || []);
      
      // Strict constraint: Only display jobs whose status is PUBLISHED
      const published = jobsList.filter(job => job.status === 'PUBLISHED');
      setJobs(published);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Unable to load job openings. The recruitment API might be undergoing scheduled maintenance.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Convert enums to human-friendly job type labels
  const formatJobType = (type?: string) => {
    if (!type) return '';
    const typeMap: Record<string, string> = {
      'FULL_TIME': 'Full Time',
      'PART_TIME': 'Part Time',
      'CONTRACT': 'Contract',
      'INTERNSHIP': 'Internship'
    };
    return typeMap[type.toUpperCase()] || type;
  };

  // Get unique departments, locations, and types for filters
  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department).filter(Boolean)))];
  const locations = ['All', ...Array.from(new Set(jobs.map(job => job.location).filter(Boolean)))];
  const jobTypes = ['All', 'FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP'];

  // Handle arrays/strings of requirements or benefits dynamically
  const renderListSection = (title: string, listData?: string | string[], icon: string = '✓') => {
    if (!listData) return null;
    let list: string[] = [];
    
    if (Array.isArray(listData)) {
      list = listData;
    } else if (typeof listData === 'string') {
      list = listData.split(/[\n,;]+/).map(item => item.trim()).filter(Boolean);
    }

    if (list.length === 0) return null;

    return (
      <div className="mt-3">
        <h5 className="text-[11px] font-extrabold text-brand-navy uppercase tracking-wider mb-1 font-sans">
          {title}
        </h5>
        <ul className="m-0 pl-0 list-none text-xs text-slate-500 space-y-1 font-sans">
          {list.map((item, idx) => (
            <li key={idx} className="flex gap-2 items-start leading-relaxed">
              <span className="text-brand-gold font-bold shrink-0">{icon}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Filtering Logic
  const filteredJobs = jobs.filter(job => {
    // 1. Search by title
    const titleMatches = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Department filter
    const deptMatches = selectedDept === 'All' || job.department === selectedDept;
    
    // 3. Location filter
    const locMatches = selectedLocation === 'All' || job.location === selectedLocation;
    
    // 4. Job type filter
    const typeMatches = selectedType === 'All' || job.type === selectedType;

    return titleMatches && deptMatches && locMatches && typeMatches;
  });

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden min-h-screen">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="bg-brand-navy text-white py-10 md:py-12 px-6 box-border relative overflow-hidden">
        {/* Subtle decorative grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
            backgroundSize: '12.5% 100%'
          }}
        />
        <Container className="relative z-10 text-left">
          
          {/* Back Nav Link */}
          <Link 
            href="/job-seekers"
            className="no-underline text-brand-gold hover:text-white text-xs font-bold tracking-widest inline-flex items-center gap-2 mb-4 uppercase transition-colors"
          >
            <span>←</span> <span>Back to Job Seekers</span>
          </Link>
          
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-2.5 uppercase">
            Careers at BMSPL
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 font-serif m-0">
            Open Opportunities
          </h1>
          <p className="text-base text-slate-400 leading-relaxed max-w-[650px] m-0">
            BMSPL connects verified job seekers with stable placement options across India. Placements are entirely free for all candidates.
          </p>
        </Container>
      </section>

      {/* SECTION 2: FILTERS & JOB CARD LIST */}
      <Section className="bg-slate-50">
        <Container>
          
          {/* Comprehensive Filter Control Panel */}
          <div className="bg-white border border-slate-200 rounded-card p-4 md:p-5 shadow-flat mb-8 box-border">
            <h4 className="text-[11px] font-extrabold text-brand-navy uppercase tracking-widest mb-4 mt-0">
              Filter Opportunities
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end justify-between box-border">
              {/* Search input */}
              <div className="w-full text-left">
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Search Title</label>
                <input
                  type="text"
                  placeholder="e.g. Security Officer, Factory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
                />
              </div>

              {/* Department Selector */}
              <div className="w-full text-left">
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Department</label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 bg-white rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
                >
                  <option value="All">All Departments</option>
                  {departments.filter(d => d !== 'All').map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Location Selector */}
              <div className="w-full text-left">
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 bg-white rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
                >
                  <option value="All">All Locations</option>
                  {locations.filter(l => l !== 'All').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Job Type Selector */}
              <div className="w-full text-left">
                <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">Job Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 bg-white rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
                >
                  <option value="All">All Job Types</option>
                  {jobTypes.filter(t => t !== 'All').map(type => (
                    <option key={type} value={type}>{formatJobType(type)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Jobs Display Area */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="bg-white border border-slate-200 rounded-card p-6 text-left shadow-card animate-pulse box-border">
                  <div className="h-5 bg-slate-200 rounded w-2/3 mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/3 mb-6"></div>
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/5 mb-6"></div>
                  <div className="h-10 bg-slate-200 rounded w-28 mt-4"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-white border border-slate-200 rounded-card p-12 text-center shadow-card box-border max-w-xl mx-auto">
              <span className="text-4xl text-amber-500 block mb-4">⚠️</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2 font-sans">Failed to Load Openings</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {error}
              </p>
              <button 
                onClick={loadJobs}
                className="bg-brand-navy text-white border-none py-3 px-6 text-xs font-bold rounded-button cursor-pointer hover:brightness-110 shadow-elevated transition-all uppercase"
              >
                Retry Loading
              </button>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-card p-12 text-center shadow-card box-border max-w-xl mx-auto">
              <span className="text-4xl block mb-4">📂</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2 font-sans">No Job Openings Found</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {searchTerm || selectedDept !== 'All' || selectedLocation !== 'All' || selectedType !== 'All'
                  ? "We couldn't find any published openings matching your search criteria. Try modifying your filter choices." 
                  : "We are currently updates our job databank listings. You can still upload your resume to be mapped when matching roles go active."}
              </p>
              <Link 
                href="/upload-resume" 
                className="no-underline inline-block bg-brand-gold text-brand-navy border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button text-center hover:brightness-110 shadow-elevated transition-all uppercase"
              >
                Submit General Application
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => {
                const jobTypeLabel = formatJobType(job.type);
                const salary = job.salaryRange || 'As per industry standards';
                const createdDate = job.createdAt || job.created_at;

                return (
                  <div 
                    key={job.id} 
                    className="bg-white border border-slate-200 rounded-card p-6 text-left shadow-card hover:shadow-elevated hover:border-slate-300 transition-all flex flex-col justify-between box-border min-h-[250px]"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex gap-2 mb-3.5 flex-wrap">
                        {job.department && (
                          <span className="bg-slate-100 text-brand-navy border border-slate-200 py-1 px-2.5 rounded-[2px] text-[10px] font-bold uppercase tracking-wider font-sans">
                            {job.department}
                          </span>
                        )}
                        {jobTypeLabel && (
                          <span className="bg-amber-50 text-brand-gold border border-amber-100 py-1 px-2.5 rounded-[2px] text-[10px] font-bold uppercase tracking-wider font-sans">
                            {jobTypeLabel}
                          </span>
                        )}
                      </div>
                      
                      {/* Job Title & Location */}
                      <h3 className="text-lg font-bold text-brand-navy mt-0 mb-1.5 font-sans leading-snug">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold mb-4 uppercase tracking-wide">
                        <span>📍</span> {job.location}
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 m-0 font-sans font-normal">
                        {job.description}
                      </p>

                      {/* Dynamic Lists: Requirements & Benefits */}
                      {renderListSection('Requirements', job.requirements, '✓')}
                      {renderListSection('Benefits & Perks', job.benefits, '✦')}

                      {/* Salary Range */}
                      <div className="mt-4 flex gap-1.5 items-center text-xs font-bold text-brand-navy">
                        <span className="text-slate-400">Salary Range:</span>
                        <span>{salary}</span>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-slate-100 mt-6 pt-4 flex justify-between items-center">
                      <Link 
                        href={`/upload-resume?jobId=${job.id}&jobTitle=${encodeURIComponent(job.title)}`}
                        className="no-underline inline-block bg-brand-navy text-white border-none py-3 px-6 text-xs font-bold rounded-button text-center hover:brightness-110 shadow-elevated transition-all uppercase"
                      >
                        Apply Now
                      </Link>
                      
                      {createdDate && (
                        <span className="text-[10px] text-slate-400">
                          Posted: {new Date(createdDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </Container>
      </Section>
    </div>
  );
}
