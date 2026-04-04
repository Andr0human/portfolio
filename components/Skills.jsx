'use client';
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Box from "./ui/Box";
import { ComponentContainer, Container } from "./ui/Container";
import Typography from "./ui/Typography";

const SkillsContainer = styled(ComponentContainer)({
  background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
  padding: "80px 0",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23667eea" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.5,
    zIndex: 1,
  },
});

const SectionHeader = styled(motion.div)({
  background: "linear-gradient(135deg, #667eea40, #764ba240)",
  backdropFilter: "blur(20px)",
  borderRadius: "25px",
  padding: "15px 30px",
  marginBottom: "30px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  position: "relative",
  zIndex: 2,
  display: "inline-block",
});

const SectionTitle = styled(Typography)({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: "bold",
  margin: 0,
  textAlign: "center",
});

const SectionSubtitle = styled(Typography)({
  color: "#64748b",
  textAlign: "center",
  marginBottom: "40px",
  position: "relative",
  zIndex: 2,
});

const BentoGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "20px",
  position: "relative",
  zIndex: 2,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const FeaturedCard = styled(motion.div)({
  gridColumn: "1 / -1",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  borderRadius: "20px",
  padding: "32px",
  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.35)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "rgba(255, 255, 255, 0.25)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-60px",
    right: "-60px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.06)",
    pointerEvents: "none",
  },
});

const StandardCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "28px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    borderRadius: "20px 20px 0 0",
  },
});

const FeaturedGroupName = styled(Typography)({
  fontWeight: "800",
  fontSize: "13px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.95)",
});

const StandardGroupName = styled(Typography)({
  fontWeight: "700",
  fontSize: "13px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#475569",
});

const FeaturedBadge = styled(Box)({
  display: "inline-block",
  background: "rgba(255, 255, 255, 0.2)",
  color: "rgba(255, 255, 255, 0.92)",
  fontSize: "11px",
  fontWeight: "600",
  padding: "3px 12px",
  borderRadius: "20px",
  letterSpacing: "0.04em",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  marginLeft: "10px",
});

const FeaturedChip = styled(motion.span)({
  display: "inline-block",
  padding: "7px 18px",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: "600",
  background: "rgba(255, 255, 255, 0.18)",
  color: "white",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(8px)",
  cursor: "default",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.30)",
    borderColor: "rgba(255, 255, 255, 0.6)",
  },
  transition: "background 0.15s, border-color 0.15s",
});

const Chip = styled(motion.span)({
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: "500",
  background: "rgba(255, 255, 255, 0.9)",
  color: "#334155",
  border: "1px solid #e2e8f0",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
  cursor: "default",
  "&:hover": {
    background: "rgba(102, 126, 234, 0.08)",
    borderColor: "#667eea",
    color: "#4f46e5",
  },
  transition: "background 0.15s, border-color 0.15s, color 0.15s",
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut", delay: i * 0.04 },
  }),
};

export const Skills = ({ skills }) => {
  const featuredGroup = skills.find((g) => g.label != null);
  const standardGroups = skills.filter((g) => g.label == null);

  return (
    <SkillsContainer id="skills">
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
          <SectionHeader
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle variant="h3">My Skills</SectionTitle>
          </SectionHeader>
          <SectionSubtitle variant="h6">
            Technologies I use across production systems, side projects, and beyond.
          </SectionSubtitle>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BentoGrid>
            {featuredGroup && (
              <FeaturedCard
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <FeaturedGroupName variant="body2">
                    {featuredGroup.group}
                  </FeaturedGroupName>
                  <FeaturedBadge>{featuredGroup.label}</FeaturedBadge>
                </Box>
                <Box display="flex" flexWrap="wrap" gap="10px">
                  {featuredGroup.items.map((item, i) => (
                    <FeaturedChip
                      key={item}
                      variants={chipVariants}
                      custom={i}
                      whileHover={{ scale: 1.06 }}
                    >
                      {item}
                    </FeaturedChip>
                  ))}
                </Box>
              </FeaturedCard>
            )}

            {standardGroups.map((group) => (
              <StandardCard
                key={group.group}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <StandardGroupName variant="body2">{group.group}</StandardGroupName>
                </Box>
                <Box display="flex" flexWrap="wrap" gap="10px">
                  {group.items.map((item, i) => (
                    <Chip
                      key={item}
                      variants={chipVariants}
                      custom={i}
                      whileHover={{ scale: 1.06 }}
                    >
                      {item}
                    </Chip>
                  ))}
                </Box>
              </StandardCard>
            ))}
          </BentoGrid>
        </motion.div>
      </Container>
    </SkillsContainer>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.string.isRequired,
      label: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
