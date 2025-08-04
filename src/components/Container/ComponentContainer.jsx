import { styled } from '@mui/material';
import { Box } from '../Box';

const ComponentContainer = styled(Box)(({ minHeight }) => ({
  width: '100%',
  minHeight: minHeight || '100vh',
  height: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  flexDirection: 'column',
}));

export default ComponentContainer;
