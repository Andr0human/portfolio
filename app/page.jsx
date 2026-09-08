import { resumeData } from '../data/resumeData';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { Experience } from '../components/Experience';
import { OpenSource } from '../components/OpenSource';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { ContactMe } from '../components/Contact';

export default function Home() {
  const { aboutme, education, experiences, openSource, skills, projects } = resumeData;

  return (
    <>
      <Navbar />
      <HeroSection aboutme={aboutme} />
      <Experience experiences={experiences} education={education} />
      <OpenSource openSource={openSource} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ContactMe />
    </>
  );
}
