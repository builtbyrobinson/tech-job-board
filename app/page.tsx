'use client';

import React, { useState } from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-indigo-400">
        Tech Job Board
      </h1>
      <p className="text-slate-400 text-lg max-w-md text-center">
        Connecting elite Web3, AI, and systems engineers with top-tier tech teams.
      </p>
    </main>
  );
}
