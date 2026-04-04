'use client';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ComponentContainer, Container } from './ui/Container';
import Typography from './ui/Typography';
import ProjectRow, { Divider } from './ui/Card/ProjectRow';

const ProjectsContainer = styled(ComponentContainer)({
  background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
  padding: '100px 0 120px',
  position: 'relative',
  overflow: 'hidden',
});

const SectionLabel = styled(Typography)({
  textAlign: 'center',
  fontWeight: '700',
  letterSpacing: '4px',
  fontSize: '12px',
  color: '#667eea',
  textTransform: 'uppercase',
  marginBottom: '12px',
});

const SectionTitle = styled(Typography)({
  textAlign: 'center',
  fontWeight: '800',
  marginBottom: '80px',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #667eea 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  lineHeight: 1.1,
});

const ProjectsStack = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  '@media (max-width: 768px)': {
    gap: '60px',
  },
});

export const Projects = ({ projects }) => {
  return (
    <ProjectsContainer id='projects'>
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <SectionLabel>What I&apos;ve Built</SectionLabel>
          <SectionTitle variant='h2'>Selected Projects</SectionTitle>
        </motion.div>

        <ProjectsStack>
          {projects?.map((project, index) => (
            <div key={`project-${project.title}-${index}`}>
              <ProjectRow {...project} index={index} />
              {index < projects.length - 1 && (
                <Divider sx={{ marginTop: '80px', '@media (max-width: 768px)': { marginTop: '60px' } }} />
              )}
            </div>
          ))}
        </ProjectsStack>
      </Container>
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
