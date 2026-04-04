'use client';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Box from '../Box';
import Typography from '../Typography';

// ─── Browser mockup shell ───────────────────────────────────────────────────

const MockupShell = styled(Box)({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(102,126,234,0.15)',
  background: '#1e1e2e',
  flexShrink: 0,
  width: '100%',
});

const MockupBar = styled(Box)({
  background: '#2a2a3e',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const MockupDot = styled('span')(({ color }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
  flexShrink: 0,
}));

const MockupAddressBar = styled(Box)({
  flex: 1,
  background: '#1e1e2e',
  borderRadius: '6px',
  padding: '4px 10px',
  marginLeft: '8px',
  fontSize: '11px',
  color: '#6b7280',
  fontFamily: 'monospace',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const MockupImage = styled('img')({
  width: '100%',
  display: 'block',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
});

// ─── Number backdrop ─────────────────────────────────────────────────────────

const ProjectNumber = styled(Typography)({
  position: 'absolute',
  top: '-20px',
  fontSize: '120px',
  fontWeight: '900',
  lineHeight: 1,
  background: 'linear-gradient(135deg, #667eea18 0%, #764ba218 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  userSelect: 'none',
  pointerEvents: 'none',
  zIndex: 0,
});

// ─── Tech chip ───────────────────────────────────────────────────────────────

const TechChip = styled('span')({
  display: 'inline-block',
  padding: '5px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '600',
  color: '#667eea',
  border: '1px solid #667eea40',
  background: '#667eea0d',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: '1px solid transparent',
  },
});

// ─── Action buttons ───────────────────────────────────────────────────────────

const PrimaryButton = styled(motion.a)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px 22px',
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  boxShadow: '0 4px 15px rgba(102,126,234,0.35)',
  transition: 'box-shadow 0.2s ease',
  '&:hover': { boxShadow: '0 6px 20px rgba(102,126,234,0.5)' },
});

const SecondaryButton = styled(motion.a)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px 22px',
  borderRadius: '8px',
  background: 'transparent',
  color: '#667eea',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  border: '1.5px solid #667eea50',
  transition: 'all 0.2s ease',
  '&:hover': { background: '#667eea10', borderColor: '#667eea' },
});

// ─── Row wrapper ──────────────────────────────────────────────────────────────

const RowWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
});

const Divider = styled(Box)({
  width: '100%',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, #667eea30, #764ba230, transparent)',
});

// ─── Component ───────────────────────────────────────────────────────────────

const ProjectRow = ({ title, description, url, demoLink, githubLink, techStack, index }) => {
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, '0');

  const contentSide = (
    <Box sx={{ position: 'relative', paddingTop: '20px' }}>
      <ProjectNumber>{num}</ProjectNumber>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#667eea',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '11px',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          PROJECT {num}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: '800',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
            fontSize: { xs: '1.6rem', md: '2rem' },
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#4a5568',
            lineHeight: 1.8,
            fontSize: '15px',
            marginBottom: '24px',
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {techStack?.map((tech, i) => (
            <TechChip key={i}>{tech}</TechChip>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {demoLink && (
            <PrimaryButton
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>↗</span> Live Demo
            </PrimaryButton>
          )}
          <SecondaryButton
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>⌥</span> GitHub
          </SecondaryButton>
        </Box>
      </Box>
    </Box>
  );

  const imageSide = (
    <MockupShell>
      <MockupBar>
        <MockupDot color="#ff5f57" />
        <MockupDot color="#febc2e" />
        <MockupDot color="#28c840" />
        <MockupAddressBar>
          {demoLink || `github.com/Andr0human/${title}`}
        </MockupAddressBar>
      </MockupBar>
      <MockupImage src={url.startsWith('/') || url.startsWith('http') ? url : `/${url}`} alt={title} />
    </MockupShell>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <RowWrapper>
        {isEven ? (
          <>
            {imageSide}
            {contentSide}
          </>
        ) : (
          <>
            {contentSide}
            {imageSide}
          </>
        )}
      </RowWrapper>
    </motion.div>
  );
};

ProjectRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export { Divider };
export default ProjectRow;
