import { styled } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';
import { ContactMe } from './components/Contact';
import { Experience } from './components/Experience';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import Typography from './components/ui/Typography';
import { resumeData } from './resumeData';

const LoadingContainer = styled(motion.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

const LoadingSpinner = styled(motion.div)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: '4px solid rgba(255, 255, 255, 0.2)',
  borderTop: '4px solid white',
  marginBottom: '30px',
});

const LoadingText = styled(Typography)({
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '10px',
});

const LoadingSubtext = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '16px',
  textAlign: 'center',
});

const MainContainer = styled(motion.div)({
  minHeight: '100vh',
});

const loadingVariants = {
  hidden: { opacity: 1 },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { aboutme, education, experiences, skills, projects } = resumeData;

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingContainer
            key="loading"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <LoadingSpinner
              variants={spinnerVariants}
              animate="animate"
            />
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <LoadingText>Welcome to My Portfolio</LoadingText>
              <LoadingSubtext>Crafting amazing experiences...</LoadingSubtext>
            </motion.div>
          </LoadingContainer>
        ) : (
          <MainContainer
            key="main"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Navbar />
            <HeroSection aboutme={aboutme} />
            <Experience experiences={experiences} education={education} />
            <Projects projects={projects} />
            <Skills skills={skills} />
            <ContactMe />
          </MainContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
