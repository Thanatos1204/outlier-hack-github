"use client";
import React from 'react';
import TutorialProjects from '@/components/dashboard/TutorialProjects';
import GitHubEducation from '@/components/dashboard/GithubEducation';
import LatestChanges from '@/components/dashboard/LatestChanges';
import ExploreRepositories from '@/components/dashboard/ExploreRepositories';
import CreateRepository from '@/components/dashboard/CreateRepository';
import RepositoryHelp from '@/components/dashboard/RepositoryHelp';
import TradeTools from '@/components/dashboard/TradeTools';
import GetStarted from '@/components/dashboard/GetStarted';
import DeveloperInsights from '@/components/features/DeveloperInsights';
import SmartTaskHub from '@/components/features/SmartTaskHub';
import RepositoryHealth from '@/components/features/RepositoryHealth';
import { useState } from 'react';


export default function Home() {
  const [activeFeature, setActiveFeature] = useState('insights');
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Home</h1>
      
      {/* Ask Copilot Section */}
      <div className="mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask Copilot" 
            className="w-full bg-card border border-transparent hover:border-border rounded-md h-10 pl-10 pr-10 text-sm transition-colors" 
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.5">
              <path d="M6.5 1.5l4 6-4 6" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex gap-2 mt-3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-card text-xs">
            <svg className="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg>
            Recent commits in <span className="text-[#adbac7] ml-1">torvalds/linux</span>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-card text-xs">
            <svg className="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
              <path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"></path>
            </svg>
            Recent bugs in <span className="text-[#adbac7] ml-1">primer/react</span>
          </div>
        </div>
      </div>

      {/* Navigation for new features */}
      <div className="flex space-x-1 border-b border-gray-700 -mb-2">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-t-md ${
              activeFeature === 'insights' 
                ? 'bg-gray-800 text-white border border-gray-700 border-b-gray-800' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveFeature('insights')}
          >
            Developer Insights
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-t-md ${
              activeFeature === 'tasks' 
                ? 'bg-gray-800 text-white border border-gray-700 border-b-gray-800' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveFeature('tasks')}
          >
            Task Hub
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-t-md ${
              activeFeature === 'health' 
                ? 'bg-gray-800 text-white border border-gray-700 border-b-gray-800' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveFeature('health')}
          >
            Repository Health
          </button>
        </div>
        
        {/* Feature Content */}
        <div className="bg-gray-800 border border-gray-700 rounded-md p-6">
          {activeFeature === 'insights' && <DeveloperInsights />}
          {activeFeature === 'tasks' && <SmartTaskHub />}
          {activeFeature === 'health' && <RepositoryHealth />}
        </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {/* Left Column - Tutorial Projects & Create Repository */}
        <div className="lg:col-span-2 space-y-6">
          <TutorialProjects />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="text-sm text-muted-foreground">Start writing code</span>
            </div>
            <button className="p-1 rounded-md hover:bg-secondary">
              <svg width="16" height="16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreateRepository />
            <RepositoryHelp />
          </div>
          
          <TradeTools />
          <GetStarted />
        </div>
        
        {/* Right Column - Learn, Changes, Explore */}
        <div className="space-y-6">
          <GitHubEducation />
          <LatestChanges />
          <ExploreRepositories />
        </div>
      </div>
    </div>
  );
}