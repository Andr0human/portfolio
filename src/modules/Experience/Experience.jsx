import { motion, AnimatePresence } from 'framer-motion';
import { Box, ComponentContainer, Container, Typography } from '../../components';
import { SchoolIcon, WorkIcon } from '../../components/Icons';
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '../../components/Timeline';

const ExperienceContainer = styled(ComponentContainer)({
  background: 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 50%, #e2e8f0 100%)',
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
    background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23667eea" fill-opacity="0.02"%3E%3Cpath d="M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/%3E%3C/g%3E%3C/svg%3E")',
    zIndex: 1,
  },
});

const SectionHeader = styled(motion.div)({
  background: 'linear-gradient(135deg, #667eea40, #764ba240)',
  backdropFilter: 'blur(20px)',
  borderRadius: '25px',
  padding: '15px 30px',
  marginBottom: '30px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 2,
  display: 'inline-block',
});

const SectionTitle = styled(Typography)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 'bold',
  margin: 0,
  textAlign: 'center',
});

const StyledTimeline = styled(Timeline)({
  position: 'relative',
  zIndex: 2,
  '& .MuiTimelineItem-root': {
    '&::before': {
      content: 'none',
    },
    marginBottom: '25px',
  },
  '& .MuiTimelineConnector-root': {
    background: 'linear-gradient(180deg, #667eea, #764ba2)',
    width: '3px',
  },
});

const StyledTimelineDot = styled(TimelineDot)(({ dotcolor }) => ({
  background: dotcolor === 'work' 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
  border: '3px solid white',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '24px',
    color: 'white',
  },
}));

const ContentCard = styled(motion.div)({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  borderRadius: '15px',
  padding: '25px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    borderRadius: '15px 15px 0 0',
  },
});

const AchievementList = styled('ul')({
  paddingLeft: '20px',
  marginTop: '15px',
  '& li': {
    marginBottom: '8px',
    position: 'relative',
    '&::marker': {
      color: '#667eea',
    },
  },
});

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = (props) => {
  const { experiences, education: educationData } = props;

  return (
    <ExperienceContainer id='experience'>
      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <Typography 
            variant='h3' 
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            💼 MY JOURNEY
          </Typography>
        </motion.div>

        <StyledTimeline position='alternate-reverse'>
          <TimelineItem>
            <TimelineSeparator>
              <SectionHeader
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <SectionTitle variant='h5'>
                  🚀 WORK EXPERIENCE
                </SectionTitle>
              </SectionHeader>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>

          {experiences?.map((exp, index) => (
            <TimelineItem key={`experience-${exp.company}-${index}`}>
              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <StyledTimelineDot dotcolor="work">
                    <WorkIcon />
                  </StyledTimelineDot>
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ContentCard
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Typography 
                    variant='h6' 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2d3748',
                      marginBottom: '8px',
                    }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography 
                    variant='subtitle1' 
                    sx={{ 
                      color: '#667eea',
                      fontWeight: '600',
                      marginBottom: '5px',
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography 
                    variant='subtitle2' 
                    sx={{ 
                      color: '#718096',
                      marginBottom: '15px',
                      fontStyle: 'italic',
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <AchievementList>
                    {exp?.achievements?.map((achievement, idx) => (
                      <li key={idx}>
                        <Typography 
                          variant='body2' 
                          sx={{ 
                            color: '#4a5568',
                            lineHeight: 1.6,
                          }}
                        >
                          {achievement}
                        </Typography>
                      </li>
                    ))}
                  </AchievementList>
                </ContentCard>
              </TimelineContent>
            </TimelineItem>
          ))}

          <TimelineItem>
            <TimelineSeparator>
              <SectionHeader
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              >
                <SectionTitle variant='h5'>
                  🎓 EDUCATION
                </SectionTitle>
              </SectionHeader>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>

          {educationData?.map((edu, index) => (
            <TimelineItem key={`education-${edu.school}-${index}`}>
              <TimelineSeparator>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  <StyledTimelineDot dotcolor="education">
                    <SchoolIcon />
                  </StyledTimelineDot>
                </motion.div>
                {index !== educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <ContentCard
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.3 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" },
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Typography 
                    variant='h6' 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2d3748',
                      marginBottom: '8px',
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography 
                    variant='subtitle1' 
                    sx={{ 
                      color: '#ff6b6b',
                      fontWeight: '600',
                      marginBottom: '5px',
                    }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography 
                    variant='subtitle2' 
                    sx={{ 
                      color: '#718096',
                      marginBottom: '15px',
                      fontStyle: 'italic',
                    }}
                  >
                    {edu.year}
                  </Typography>
                  <Typography 
                    variant='body2' 
                    sx={{ 
                      color: '#4a5568',
                      lineHeight: 1.6,
                    }}
                  >
                    {edu.description}
                  </Typography>
                </ContentCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </StyledTimeline>
      </Container>

      {/* Floating background elements */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '25px',
          height: '25px',
          background: 'linear-gradient(135deg, #667eea30, #764ba230)',
          borderRadius: '6px',
          zIndex: 1,
        }}
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
          rotate: [0, -60, -120, -180, -240, -300, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '35px',
          height: '35px',
          background: 'linear-gradient(135deg, #764ba230, #667eea30)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
    </ExperienceContainer>
  );
};

export default Experience;
