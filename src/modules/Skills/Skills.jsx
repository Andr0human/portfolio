import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  LinearProgress,
  Container,
  ComponentContainer,
} from '../../components';

const getColor = () => {
  const colors = ['#4A90E2', '#1ABC9C', '#FF6F61', '#F39C12', '#7D7F7D', '#3CB371'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Skills = (props) => {
  const { skills } = props;
  const { primary, secondary } = skills;

  return (
    <ComponentContainer id='skills'>
      <Container
        maxWidth='md'
        style={{
          margin: '2rem 0',
        }}
      >
        <Typography variant='h4' textAlign='center' fontWeight='bold' gutterBottom>
          SKILLS
        </Typography>
        <Grid container spacing={4}>
          {primary?.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={index}
              display='flex'
              flexDirection='column'
              alignItems='center'
              sx={{ '&:hover': { transform: 'scale(1.05)', transition: '0.3s' } }}
            >
              <Box position='relative' display='flex' alignItems='center' justifyContent='center'>
                <CircularProgress variant='determinate' value={skill.level} size={140} />
                <Typography
                  variant='body1'
                  sx={{
                    position: 'absolute',
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}
                >
                  {skill.name}
                  <br />
                  {skill.level}%
                </Typography>
              </Box>
              <Typography variant='body1' sx={{ mt: 1, fontWeight: 'medium' }}>
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4} mt={4}>
          {secondary?.map((skill, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant='body1' sx={{ fontWeight: 'medium' }}>
                {skill.name}
              </Typography>
              <LinearProgress
                variant='determinate'
                value={skill.level}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  mt: 1,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: getColor(),
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ComponentContainer>
  );
};

export default Skills;
