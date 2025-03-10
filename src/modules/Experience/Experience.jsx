import { Box, ComponentContainer, Container, Typography } from '../../components';
import { SchoolIcon, WorkIcon } from '../../components/Icons';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '../../components/Timeline';

const Experience = (props) => {
  const { experiences, education: educationData } = props;

  return (
    <ComponentContainer id='experience'>
      <Container maxWidth='md' style={{ margin: '2rem 0', textAlign: 'center' }}>
        <Timeline position='alternate-reverse'>
          <TimelineItem>
            <TimelineSeparator>
              <Typography
                variant='h5'
                fontWeight='bold'
                sx={{
                  backgroundColor: '#f0f0f0',
                  px: 2,
                  py: 1,
                  width: 'auto',
                  whiteSpace: 'nowrap', // Ensure text stays on one line
                }}
              >
                WORK EXPERIENCE
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} style={{ marginBottom: '10px' }}>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6' fontWeight='bold'>
                  {exp.role} - {exp.company}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                  {exp.duration}
                </Typography>
                <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                  {exp?.achievements?.map((achievement, idx) => (
                    <li key={idx} style={{ marginBottom: '5px' }}>
                      <Typography variant='body2'>{achievement}</Typography>
                    </li>
                  ))}
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
          <TimelineItem>
            <TimelineSeparator>
              <Typography
                variant='h5'
                fontWeight='bold'
                sx={{
                  backgroundColor: '#f0f0f0',
                  px: 2,
                  py: 1,
                  width: 'auto',
                  whiteSpace: 'nowrap', // Ensure text stays on one line
                }}
              >
                EDUCATION
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>

          <TimelineItem style={{ height: '0px', position: 'fixed' }}>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>

          {educationData?.map((edu, index) => (
            <TimelineItem key={index} style={{ marginBottom: '10px' }}>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <SchoolIcon />
                </TimelineDot>
                {index !== educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h6' fontWeight='bold'>
                  {edu.degree}
                </Typography>

                <Box display='flex' flexDirection='column'>
                  <Typography variant='body2' color='textSecondary'>
                    {edu.school}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {edu.year}
                  </Typography>
                </Box>

                <Typography variant='body1' mt={1}>
                  {edu.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ComponentContainer>
  );
};

export default Experience;
