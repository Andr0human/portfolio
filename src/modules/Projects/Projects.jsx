import { styled } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, ComponentContainer, Container, Typography } from '../../components';
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled(ComponentContainer)({
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  padding: '80px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23667eea" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.5,
    zIndex: 1,
  },
});

const SectionTitle = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '60px',
  position: 'relative',
  zIndex: 2,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
});

const StyledCarousel = styled(Carousel)({
  position: 'relative',
  zIndex: 2,
  '& .react-multi-carousel-dot-list': {
    position: 'relative',
    bottom: '-30px',
  },
  '& .react-multi-carousel-dot': {
    button: {
      background: '#cbd5e0',
      border: 'none',
      borderRadius: '50%',
      width: '12px',
      height: '12px',
      transition: 'all 0.3s ease',
    },
  },
  '& .react-multi-carousel-dot--active': {
    button: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      transform: 'scale(1.3)',
    },
  },
  '& .react-multi-carousel-arrow': {
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    minWidth: '45px',
    minHeight: '45px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'white',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      transform: 'scale(1.1)',
    },
    '&::before': {
      color: '#667eea',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
  '& .react-multi-carousel-arrow--left': {
    left: '20px',
  },
  '& .react-multi-carousel-arrow--right': {
    right: '20px',
  },
});

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = ({ projects }) => {
  return (
    <ProjectsContainer id='projects'>
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle variant='h3'>
            🚀 MY PROJECTS
          </SectionTitle>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key="projects-carousel"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <StyledCarousel 
              responsive={responsive} 
              infinite 
              autoPlay 
              autoPlaySpeed={4000}
              showDots
              arrows
              swipeable
              draggable
              partialVisible={false}
              itemClass="project-carousel-item"
            >
              {projects?.map((project, index) => (
                <Box key={`project-${project.title}-${index}`} sx={{ padding: '0 15px', height: '100%' }}>
                  <ProjectCard {...project} />
                </Box>
              ))}
            </StyledCarousel>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Floating background elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #667eea40, #764ba240)',
          borderRadius: '8px',
          zIndex: 1,
        }}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '8%',
          width: '30px',
          height: '30px',
          background: 'linear-gradient(135deg, #764ba240, #667eea40)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
