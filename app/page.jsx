import { resumeData } from '../data/resumeData';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { ContactMe } from '../components/Contact';

export default function Home() {
  const { aboutme, education, experiences, skills, projects } = resumeData;

  return (
    <>
      <Navbar />
      <HeroSection aboutme={aboutme} />
      <Experience experiences={experiences} education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ContactMe />
    </>
  );
}
