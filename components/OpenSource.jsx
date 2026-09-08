'use client';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ComponentContainer, Container } from './ui/Container';
import Typography from './ui/Typography';
import Box from './ui/Box';
import { GithubIcon } from './ui/Icons';

const OpenSourceContainer = styled(ComponentContainer)({
  background: 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 100%)',
  padding: '100px 0',
  position: 'relative',
  overflow: 'hidden',
});

const SectionLabel = styled(Typography)({
  textAlign: 'center',
  fontWeight: '700',
  letterSpacing: '4px',
  fontSize: '12px',
  color: '#667eea',
  textTransform: 'uppercase',
  marginBottom: '12px',
});

const SectionTitle = styled(Typography)({
  textAlign: 'center',
  fontWeight: '800',
  marginBottom: '60px',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #667eea 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  lineHeight: 1.1,
});

const ContributionCard = styled(motion.article)({
  background: 'rgba(255, 255, 255, 0.92)',
  backdropFilter: 'blur(20px)',
  borderRadius: '18px',
  border: '1px solid rgba(102, 126, 234, 0.18)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
  padding: '36px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
  },
  '@media (max-width: 768px)': {
    padding: '26px 20px',
  },
});

const CardHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '12px',
  marginBottom: '18px',
});

const RepoName = styled(Typography)({
  fontSize: '22px',
  fontWeight: '800',
  color: '#1a1a2e',
  lineHeight: 1.2,
});

const StatusBadge = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  color: '#15803d',
  background: 'rgba(34, 197, 94, 0.12)',
  border: '1px solid rgba(34, 197, 94, 0.35)',
});

const MetaText = styled(Typography)({
  fontSize: '13px',
  fontWeight: '500',
  color: '#64748b',
});

const ContributionTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: '700',
  color: '#1a1a2e',
  lineHeight: 1.45,
  marginBottom: '24px',
  paddingLeft: '14px',
  borderLeft: '3px solid',
  borderImage: 'linear-gradient(180deg, #667eea, #764ba2) 1',
});

const NarrativeBlock = styled(Box)({
  marginBottom: '20px',
});

const NarrativeLabel = styled(Typography)({
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  color: '#667eea',
  marginBottom: '6px',
});

const NarrativeText = styled(Typography)({
  fontSize: '15px',
  color: '#475569',
  lineHeight: 1.7,
});

const HighlightGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',
  margin: '28px 0',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const HighlightCard = styled(Box)({
  padding: '14px 16px',
  borderRadius: '12px',
  background:
    'linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.06) 100%)',
  border: '1px solid rgba(102,126,234,0.18)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: 'rgba(102,126,234,0.45)',
    boxShadow: '0 8px 20px rgba(102,126,234,0.15)',
  },
});

const HighlightValue = styled(Typography)({
  fontSize: '20px',
  fontWeight: '800',
  lineHeight: 1.1,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '2px',
});

const HighlightLabel = styled(Typography)({
  fontSize: '11px',
  fontWeight: '600',
  color: '#64748b',
  letterSpacing: '0.3px',
  textTransform: 'uppercase',
});

const ChipRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '26px',
});

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
    color: '#fff',
    borderColor: 'transparent',
  },
});

const PrLink = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  borderRadius: '25px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
  textDecoration: 'none',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 22px rgba(102, 126, 234, 0.45)',
  },
  '& svg': { fontSize: '18px' },
});

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const OpenSource = ({ openSource }) => {
  if (!openSource?.length) return null;

  return (
    <OpenSourceContainer id='opensource'>
      <Container maxWidth='md' sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Upstream Contributions</SectionLabel>
          <SectionTitle variant='h2'>Open Source</SectionTitle>
        </motion.div>

        <Box display='flex' flexDirection='column' gap='32px'>
          {openSource.map((item, index) => (
            <ContributionCard
              key={`opensource-${item.prNumber}-${index}`}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15 }}
            >
              <CardHeader>
                <RepoName variant='h5'>{item.project}</RepoName>
                {item.status && (
                  <StatusBadge>
                    <span>&#10003;</span>
                    {item.status}
                  </StatusBadge>
                )}
              </CardHeader>

              <MetaText sx={{ marginBottom: '20px' }}>
                {[item.org, item.milestone, `PR ${item.prNumber}`, item.date]
                  .filter(Boolean)
                  .join('  ·  ')}
              </MetaText>

              <ContributionTitle>{item.title}</ContributionTitle>

              {item.problem && (
                <NarrativeBlock>
                  <NarrativeLabel>The Bug</NarrativeLabel>
                  <NarrativeText>{item.problem}</NarrativeText>
                </NarrativeBlock>
              )}

              {item.solution && (
                <NarrativeBlock>
                  <NarrativeLabel>The Fix</NarrativeLabel>
                  <NarrativeText>{item.solution}</NarrativeText>
                </NarrativeBlock>
              )}

              {item.highlights?.length > 0 && (
                <HighlightGrid>
                  {item.highlights.map((highlight, idx) => (
                    <HighlightCard key={`highlight-${idx}`}>
                      <HighlightValue>{highlight.value}</HighlightValue>
                      <HighlightLabel>{highlight.label}</HighlightLabel>
                    </HighlightCard>
                  ))}
                </HighlightGrid>
              )}

              {item.techStack?.length > 0 && (
                <ChipRow>
                  {item.techStack.map((tech) => (
                    <TechChip key={tech}>{tech}</TechChip>
                  ))}
                </ChipRow>
              )}

              {item.prLink && (
                <PrLink href={item.prLink} target='_blank' rel='noopener noreferrer'>
                  <GithubIcon />
                  View PR {item.prNumber}
                </PrLink>
              )}
            </ContributionCard>
          ))}
        </Box>
      </Container>

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', top: '12%', left: '6%',
          width: '28px', height: '28px',
          background: 'linear-gradient(135deg, #667eea30, #764ba230)',
          borderRadius: '8px', zIndex: 1,
        }}
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 20, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: '12%', right: '7%',
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, #764ba230, #667eea30)',
          borderRadius: '50%', zIndex: 1,
        }}
      />
    </OpenSourceContainer>
  );
};

OpenSource.propTypes = {
  openSource: PropTypes.array.isRequired,
};
