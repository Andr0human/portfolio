import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, ComponentContainer, Container, Typography } from '../../components';
import ProjectCard from './ProjectCard';

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

const Projects = ({ projects }) => {
  return (
    <ComponentContainer id='projects'>
      <Container maxWidth='lg'>
        <Typography variant='h4' textAlign='center' fontWeight='bold' gutterBottom>
          MY PROJECTS
        </Typography>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {projects.map((project, index) => (
            <Box key={index} sx={{ padding: '10px', height: '100%' }}>
              <ProjectCard {...project} />
            </Box>
          ))}
        </Carousel>
      </Container>
    </ComponentContainer>
  );
};

export default Projects;
