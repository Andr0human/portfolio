import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';
import Box from './ui/Box';
import Avatar from './ui/Avatar';
import IconButton from './ui/IconButton';
import Typography from './ui/Typography';
import { styled } from '@mui/material/styles';
import { EmailIcon, GithubIcon, LinkedInIcon } from './ui/Icons';

const HomeContainer = styled(Box)({
  minHeight: '100vh',
  height: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: "url('/background.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
});

const GlassCard = styled(Box)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  maxWidth: '700px',
  textAlign: 'center',
});

const StyledAvatar = styled(Avatar)({
  width: '200px',
  height: '200px',
  margin: '0 auto 20px',
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
});

const IconContainer = styled(Box)({
  marginTop: '20px',
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
});

const iconVariants = {
  hover: { scale: 1.2, transition: { type: 'spring', stiffness: 300 } },
};

export const HeroSection = (props) => {
  const { aboutme } = props;

  const { name, summary } = aboutme;

  return (
    <HomeContainer id='home'>
      <GlassCard
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }} // Ensures center alignment
        >
          <StyledAvatar src='/avatar.webp' alt='Ayush Sinha' />
        </motion.div>

        <Typography variant='h2' fontWeight='bold'>
          <TypeAnimation
            sequence={[`I am ${name}.`, 2000]}
            speed={40} // Typing speed
            wrapper='span'
            repeat={0}
          />
        </Typography>
        <Typography
          variant='h6'
          sx={{ mt: 2, maxWidth: '600px' }}
          component={motion.div}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {summary}
        </Typography>
        <IconContainer>
          <motion.div 
            variants={iconVariants} 
            whileHover='hover'
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <IconButton
              href='https://www.linkedin.com/in/ayushsinha3199'
              target='_blank'
              sx={{ color: 'white' }}
            >
              <LinkedInIcon size={30} />
            </IconButton>
          </motion.div>
          <motion.div 
            variants={iconVariants} 
            whileHover='hover'
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <IconButton
              href='https://github.com/Andr0human'
              target='_blank'
              sx={{ color: 'white' }}
            >
              <GithubIcon size={30} />
            </IconButton>
          </motion.div>
          <motion.div 
            variants={iconVariants} 
            whileHover='hover'
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <IconButton href='mailto:ayushsinha3199@gmail.com' sx={{ color: 'white' }}>
              <EmailIcon size={30} />
            </IconButton>
          </motion.div>
        </IconContainer>
      </GlassCard>
    </HomeContainer>
  );
};

HeroSection.propTypes = {
  aboutme: PropTypes.object.isRequired,
};
