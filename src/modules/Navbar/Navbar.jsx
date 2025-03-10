import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Box, styled, Toolbar, Typography } from '../../components';

const NavContainer = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isvisible',
})(({ isvisible }) => ({
  display: isvisible ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(17, 17, 17, 0.8)',
  backdropFilter: 'blur(5px)',
  position: 'fixed',
  top: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'fit-content',
  borderRadius: '100px',
  transition: 'opacity 0.5s ease-in-out',
}));

const NavItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isactive',
})(({ isactive }) => ({
  color: isactive ? '#FF7300' : '#fff',
  textTransform: 'uppercase',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 15px',
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#FF7300',
  },
}));

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isVisible, setIsVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label) => {
    setActiveTab(label);
    if (hideTimeout) clearTimeout(hideTimeout);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    setHideTimeout(timeout);
  };

  const navItems = [
    { label: 'HOME', to: 'home' },
    { label: 'EXPERIENCE', to: 'experience' },
    { label: 'PROJECTS', to: 'projects' },
    { label: 'SKILLS', to: 'skills' },
    { label: 'CONTACT', to: 'contact' },
  ];

  return (
    <NavContainer isvisible={isVisible}>
      <Toolbar>
        <Box display='flex'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => handleNavClick(item.label)}
            >
              <NavItem isactive={activeTab === item.label}>{item.label}</NavItem>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </NavContainer>
  );
};

export default Navbar;
