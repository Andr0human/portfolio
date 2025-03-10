import './App.css';
import { Contact, Experience, Home, Navbar, Projects, Skills } from './modules';
import { resumeData } from './resumeData';

const App = () => {
  const { aboutme, education, experiences, skills, projects } = resumeData;

  return (
    <div className='App'>
      <Navbar />
      <Home aboutme={aboutme} />
      <Experience experiences={experiences} education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
};

export default App;
