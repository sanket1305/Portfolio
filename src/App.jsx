import { useState, useEffect } from 'react';
import data from './data/portfolio.json';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WorkExperience from './components/sections/WorkExperience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Hackathons from './components/sections/Hackathons';
import Certifications from './components/sections/Certifications';
import Awards from './components/sections/Awards';
import CompetitiveProgramming from './components/sections/CompetitiveProgramming';
import Contact from './components/sections/Contact';

export default function App() {
  const { personal, workExperience, education, skills, projects, hackathons, certifications, awards, competitiveProgramming } = data;

  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      <Navbar name={personal.name} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero personal={personal} />
        <WorkExperience data={workExperience} />
        <Hackathons data={hackathons} />
        <Projects data={projects} />
        <Skills data={skills} />
        <Education data={education} />
        <Certifications data={certifications} />
        <Awards data={awards} />
        <CompetitiveProgramming data={competitiveProgramming} />
        <Contact personal={personal} />
      </main>

      <Footer personal={personal} />
    </div>
  );
}
