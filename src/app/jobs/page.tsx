"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';

interface Job {
  id: string | number;
  title: string;
  description: string;
  location: string;
  department?: string;
  category?: string;
  specialization?: string;
  experience?: string;
  experience_required?: string;
  experienceRequired?: string;
  status: string;
  created_at?: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://api.bhaktimanagement.com/api/jobs');
        if (!res.ok) {
          throw new Error(`Failed to fetch jobs (Status: ${res.status})`);
        }
        const data = await res.json();
        
        // Ensure data is an array
        const jobsList = Array.isArray(data) ? data : (data.jobs || []);
        
        // Filter only PUBLISHED status jobs
        const published = jobsList.filter((job: Job) => job.status === 'PUBLISHED');
        setJobs(published);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while loading job openings.');
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  // Compute unique departments for filter dropdown
  const departments = ['All', ...Array.from(new Set(jobs.map(job => 
    job.department || job.category || job.specialization || 'Other'
  )))];

  // Filter jobs based on search query and selected department
  const filteredJobs = jobs.filter(job => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const dept = job.department || job.category || job.specialization || 'Other';
    const deptMatch = selectedDept === 'All' || dept === selectedDept;
    return (titleMatch || locationMatch) && deptMatch;
  });

  return (
    <div className="w-full bg-white font-sans box-border overflow-x-hidden min-h-screen">
      
      {/* Top Page Header Banner */}
      <section className="bg-brand-navy text-white py-16 px-6 box-border relative overflow-hidden">
        {/* Decorative Grid Layer */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
            backgroundSize: '10% 100%'
          }}
        />
        <Container className="relative z-10 text-left">
          <div className="text-brand-gold text-[11px] font-extrabold tracking-widest mb-4 uppercase">
            Careers at BMSPL
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 font-serif m-0">
            Current Job Openings
          </h1>
          <p className="text-base text-slate-400 leading-relaxed max-w-[650px] m-0">
            Find stable, verified, and completely free placement opportunities with India's leading industrial, corporate, and governmental employers.
          </p>
        </Container>
      </section>

      {/* Main Jobs Listing Content */}
      <Section className="bg-slate-50">
        <Container>
          
          {/* Search & Filtering Control Bar */}
          <div className="bg-white border border-slate-200 rounded-card p-6 shadow-flat mb-10 flex flex-col md:flex-row gap-4 items-center justify-between box-border">
            <div className="w-full md:flex-1 relative">
              <input
                type="text"
                placeholder="Search jobs by title, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-slate-300 rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">🔍</span>
            </div>
            
            <div className="w-full md:w-64 flex items-center gap-2">
              <label className="text-xs font-bold text-brand-navy uppercase shrink-0 font-sans">Category:</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full p-3 border border-slate-300 bg-white rounded-button text-[13px] box-border focus:outline-none focus:border-brand-navy font-sans"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Openings Grid List */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="bg-white border border-slate-200 rounded-card p-8 text-left shadow-card animate-pulse box-border">
                  <div className="h-5 bg-slate-200 rounded w-2/3 mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/3 mb-6"></div>
                  <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/5 mb-6"></div>
                  <div className="h-10 bg-slate-200 rounded w-28"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-white border border-slate-200 rounded-card p-12 text-center shadow-card box-border max-w-xl mx-auto">
              <span className="text-4xl text-amber-500 block mb-4">⚠️</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2 font-sans">Failed to Load Openings</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {error}. Please check your connection or contact our recruitment team directly.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-brand-navy text-white border-none py-3 px-6 text-xs font-bold rounded-button cursor-pointer hover:brightness-110 transition-all uppercase"
              >
                Reload Jobs
              </button>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-card p-12 text-center shadow-card box-border max-w-xl mx-auto">
              <span className="text-4xl block mb-4">📂</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2 font-sans">No Job Openings Found</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {searchTerm || selectedDept !== 'All' 
                  ? "We couldn't find any openings matching your search criteria. Try modifying your filters." 
                  : "We are currently updating our database with new job profiles. Submit your resume to get notified."}
              </p>
              <Link 
                href="/upload-resume" 
                className="no-underline inline-block bg-brand-gold text-brand-navy border-none py-3.5 px-7 font-bold text-xs tracking-widest rounded-button text-center hover:brightness-110 transition-all uppercase shadow-flat"
              >
                Submit General Application
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => {
                const dept = job.department || job.category || job.specialization || 'General';
                const exp = job.experience || job.experience_required || job.experienceRequired || 'Freshers / Experienced';
                
                return (
                  <div key={job.id} className="bg-white border border-slate-200 rounded-card p-8 text-left shadow-card hover:shadow-elevated hover:border-slate-300 transition-all flex flex-col justify-between min-h-[250px] box-border">
                    <div>
                      {/* Top Badges */}
                      <div className="flex gap-2 mb-3.5 flex-wrap">
                        <span className="bg-slate-100 text-brand-navy border border-slate-200 py-1 px-2.5 rounded-[2px] text-[10px] font-bold uppercase tracking-wider">
                          {dept}
                        </span>
                        <span className="bg-amber-50 text-brand-gold border border-amber-100 py-1 px-2.5 rounded-[2px] text-[10px] font-bold uppercase tracking-wider">
                          {exp}
                        </span>
                      </div>
                      
                      {/* Job Info */}
                      <h3 className="text-xl font-bold text-brand-navy mt-0 mb-2 font-sans leading-snug">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold mb-4 uppercase tracking-wide">
                        <span>📍</span> {job.location}
                      </div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-6 m-0 line-clamp-3 font-sans font-normal">
                        {job.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                      <Link 
                        href={`/upload-resume?jobTitle=${encodeURIComponent(job.title)}`}
                        className="no-underline inline-block bg-brand-navy text-white border-none py-3 px-6 text-xs font-bold rounded-button text-center hover:brightness-110 shadow-elevated transition-all uppercase"
                      >
                        Apply Now
                      </Link>
                      
                      {job.created_at && (
                        <span className="text-[10px] text-slate-400">
                          Posted: {new Date(job.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
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
