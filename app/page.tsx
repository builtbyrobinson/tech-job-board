import React, { useState } from 'react';
import { Search, Code2, Cpu, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';

const SAMPLE_JOBS = [
  {
    id: "1",
    title: "Senior Solidity & Smart Contract Engineer",
    company: "Aave Labs",
    category: "Web3",
    location: "Remote",
    salary: "$160k - $220k • 0.25% Equity",
    tags: ["Solidity", "EVM", "Foundry", "DeFi"],
    featured: true,
    logo: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: "2",
    title: "LLM Systems & Infrastructure Engineer",
    company: "Anthropic Partner",
    category: "AI/ML",
    location: "Remote (US)",
    salary: "$180k - $250k",
    tags: ["Python", "PyTorch", "CUDA", "vLLM"],
    featured: true,
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: "3",
    title: "Zero-Knowledge Proof (ZKP) Researcher",
    company: "Starknet Ecosystem",
    category: "Web3",
    location: "Remote (EU/US)",
    salary: "$150k - $200k",
    tags: ["Rust", "Cairo", "ZKP", "Cryptography"],
    featured: false,
    logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=faces"
  }
];

export default function HighTechJobBoard() {
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = SAMPLE_JOBS.filter(job => {
    const matchesFilter = filter === 'ALL' || job.category === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              DevPulse.ai
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-slate-400 hover:text-white transition">
              Candidate Login
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/20">
              Post a Job ($99)
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800 text-indigo-300 text-xs font-semibold mb-6">
          <CheckCircle2 className="w-3.5 h-3.5" /> Curated Web3 & AI Engineering Talent
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Where <span className="text-indigo-400">Deep Tech</span> Teams Hire Elite Engineers.
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Skip generic job boards. Get direct access to verified Solidity, Rust, PyTorch, and CUDA specialists.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-3 bg-slate-900 p-2 rounded-xl border border-slate-800 shadow-2xl max-w-2xl mx-auto">
          <div className="flex-1 flex items-center gap-2 px-3 bg-slate-950 rounded-lg border border-slate-800/80">
            <Search className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by skill (e.g. Solidity, PyTorch, Rust)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full py-3 text-sm focus:outline-none text-white placeholder-slate-500"
            />
          </div>
          <div className="flex gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800/80">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${filter === 'ALL' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('Web3')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition ${filter === 'Web3' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Code2 className="w-3 h-3" /> Web3
            </button>
            <button
              onClick={() => setFilter('AI/ML')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition ${filter === 'AI/ML' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Cpu className="w-3 h-3" /> AI / ML
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Feed */}
      <main className="max-w-4xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Active Engineering Roles ({filteredJobs.length})
          </h2>
        </div>

        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`group relative p-5 rounded-xl border transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                job.featured
                  ? 'bg-slate-900/90 border-indigo-500/40 hover:border-indigo-500 shadow-lg shadow-indigo-950/20'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover border border-slate-700 bg-slate-800"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">{job.company}</span>
                    {job.featured && (
                      <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition flex items-center gap-1">
                    {job.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">{job.salary}</span>
                  </div>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-800/80 text-slate-300 text-[11px] px-2.5 py-1 rounded-md font-mono border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition flex items-center gap-1">
                  Apply <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
