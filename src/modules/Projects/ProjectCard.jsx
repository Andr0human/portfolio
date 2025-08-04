import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Card, CardContent, Typography } from '../../components';
import { styled } from '@mui/material/styles';

const StyledCard = styled(motion.div)({
  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-15px) scale(1.02)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
  },
});

const ImageContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: '200px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.6s ease',
});

const OverlayContainer = styled(motion.div)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
});

const ActionButton = styled(motion.button)(({ variant }) => ({
  background: variant === 'primary' 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
  border: 'none',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '25px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  textDecoration: 'none',
  display: 'inline-block',
  minWidth: '80px',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
  },
}));

const ContentContainer = styled(CardContent)({
  padding: '25px',
  background: 'white',
  position: 'relative',
});

const TechChip = styled(motion.span)({
  display: 'inline-block',
  background: 'linear-gradient(135deg, #667eea20, #764ba240)',
  color: '#667eea',
  padding: '6px 12px',
  borderRadius: '15px',
  fontSize: '12px',
  fontWeight: '600',
  margin: '4px',
  border: '1px solid #667eea30',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    transform: 'scale(1.05)',
  },
});

const GradientBar = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '4px',
  background: 'linear-gradient(90deg, #667eea, #764ba2, #667eea)',
  backgroundSize: '200% 100%',
  animation: 'gradient 3s ease infinite',
  '@keyframes gradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
});

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 200 },
  },
  hover: { 
    scale: 1.1,
    transition: { type: "spring", stiffness: 400 },
  },
  tap: { scale: 0.95 },
};

const ProjectCard = ({ title, description, url, demoLink, githubLink, techStack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledCard
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <GradientBar />
      
      <ImageContainer>
        <ProjectImage 
          src={url} 
          alt={title}
          style={{
            filter: isHovered ? 'blur(2px) brightness(0.7)' : 'none',
          }}
        />
        
        <OverlayContainer
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          {demoLink && (
            <ActionButton
              as={motion.a}
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              🚀 Live Demo
            </ActionButton>
          )}
          <ActionButton
            as={motion.a}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            📚 GitHub
          </ActionButton>
        </OverlayContainer>
      </ImageContainer>

      <ContentContainer>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#666',
            lineHeight: 1.6,
            marginBottom: '20px',
            fontSize: '14px',
          }}
        >
          {description}
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          marginTop: '15px',
        }}>
          {techStack?.map((tech, index) => (
            <TechChip
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </TechChip>
          ))}
        </Box>
      </ContentContainer>
    </StyledCard>
  );
};

export default ProjectCard;
