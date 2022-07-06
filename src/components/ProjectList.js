import React from 'react'
import { ProjectCard } from './ProjectCard';

const mockProject = {
  title: 'Mock project',
  description: 'Baseball ipsum dolor sit amet cellar rubber win hack tossed.Slugging catcher slide bench league, left fielder nubber.',
  link: 'https://github.com/marwanbardaji/backgammon-api',
  tags:['C++','Eigen','Make']
};


export const ProjectList = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Other noteworthy projects</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
          <ProjectCard title = {mockProject.title} description = {mockProject.description} link = {mockProject.link} tags = {mockProject.tags}></ProjectCard>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-cyan transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Show more
          </a>
        </div>
      </div>
    );
  };