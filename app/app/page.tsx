'use client';

import React, { useState } from 'react';

const SAMPLE_JOBS = [
  {
    id: 1,
    title: 'Senior Smart Contract Engineer',
    company: 'Solana Ecosystem',
    location: 'Remote',
    type: 'Full-Time',
    salary: '$160k - $220k',
    tags: ['Web3', 'Rust', 'Solana'],
    featured: true,
  },
  {
    id: 2,
    title: 'AI Infra & Systems Architect',
    company: 'TensorFlow Core Lab',
    location: 'San Francisco, CA / Remote',
    type: 'Full-Time',
    salary: '$180k - $250k',
    tags: ['AI/ML', 'Python', 'C++'],
    featured: true,
  },
  {
    id: 3,
    title: 'Frontend Engineer (Next.js & Web3)',
    company: 'Decentralized Data Co.',
    location: 'Remote',
    type: 'Contract',
    salary: '$90/hr - $120/hr',
    tags: ['Next.js', 'TypeScript', 'Ethers.js'],
    featured: false,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState('');

  const filteredJobs = SAMPLE_JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">
              ⚡
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Tech<span className="text-indigo-400">Board</span>
            </span>
          </div>
          <a
            href="/post-job"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/20 text-sm"
          >
            Post a Job ($149)
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-block bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs px-3 py-1 rounded-full mb-6 font-semibold tracking-wide uppercase">
          Elite Tech Talent Network
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Find Your Next Role in <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Web3, AI & Systems
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Connecting top-tier software engineers with high-growth Web3, Artificial Intelligence, and systems teams. No recruiter spam, no noise.
        </p>

        {/* Search Input */}
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search roles or technologies (e.g., Rust, Next.js, AI)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition shadow-inner"
          />
        </div>
      </section>

      {/* Job Listings Section */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Latest Openings</h2>
          <span className="text-xs text-slate-400">
            Showing {filteredJobs.length} active listings
          </span>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`p-6 rounded-xl border transition hover:border-slate-700 bg-slate-900/60 ${
                job.featured
                  ? 'border-indigo-500/40 bg-indigo-950/10'
                  : 'border-slate-800'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold px-2 py-0.5 rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mb-3">
                    {job.company} • <span className="text-slate-300">{job.location}</span> • {job.salary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="self-start md:self-center bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-4 py-2 rounded-lg border border-slate-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Tech Job Board. Built with Next.js & Supabase.</p>
      </footer>
    </div>
  );
}
