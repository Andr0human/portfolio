import { useState } from 'react';
import { Box, Card, CardContent, Typography } from '../../components';

const ProjectCard = ({ title, description, url, demoLink, githubLink, techStack }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: '#444',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box sx={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
          <img
            src={url}
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px 8px 0 0',
              transition: 'filter 0.3s ease-in-out',
              filter: hovered ? 'blur(5px)' : 'none',
            }}
          />

          {hovered && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              {demoLink && (
                <a href={demoLink} target='_blank' rel='noopener noreferrer'>
                  <button
                    style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      padding: '15px 30px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                  >
                    Live Demo
                  </button>
                </a>
              )}
              <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                <button
                  style={{
                    backgroundColor: '#ff9800',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e68900')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff9800')}
                >
                  GitHub
                </button>
              </a>
            </Box>
          )}
        </Box>

        <Typography variant='h6' component='h2' sx={{ margin: '10px 0' }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: '10px', opacity: 0.9 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
          {techStack.map((tech, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'rgba(6, 115, 179, 0.5)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: '12px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s, background-color 0.2s',
                '&:hover': {
                  backgroundColor: '#333',
                  transform: 'scale(1.05)',
                },
                marginLeft: '5px',
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
