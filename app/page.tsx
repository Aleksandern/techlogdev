'use client'

import React from 'react';

import LinkedIn from './comps/LinkedIn';

const  Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="w-full items-center justify-between font-mono text-sm">
        <LinkedIn />
      </div>
    </main>
  )
};

export default Home;
