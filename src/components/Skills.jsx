/* eslint-disable react/no-unescaped-entities */
import { styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Box from "./ui/Box";
import { ComponentContainer, Container } from "./ui/Container";
import Typography from "./ui/Typography";

const getSkillIcon = (iconName) => {
  const iconMap = {
    js: "🟨",
    javascript: "🟨",
    typescript: "🔷",
    react: "⚛️",
    nextjs: "▲",
    html: "🧡",
    css: "🎨",
    tailwind: "🌊",
    nodejs: "💚",
    express: "🚀",
    nestjs: "🔴",
    python: "🐍",
    django: "🌿",
    mongodb: "🍃",
    postgresql: "🐘",
    mysql: "🐬",
    redis: "🔴",
    graphql: "💜",
    docker: "🐳",
    aws: "☁️",
    git: "📝",
    github: "🐙",
    cicd: "🔄",
    jest: "🃏",
  };
  return iconMap[iconName.toLowerCase()] || "⚡";
};

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

const FilterContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "50px",
  position: "relative",
  zIndex: 2,
});

const FilterButton = styled(motion.button)(({ active }) => ({
  padding: "12px 24px",
  borderRadius: "25px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  background: active
    ? "linear-gradient(135deg, #667eea, #764ba2)"
    : "rgba(255, 255, 255, 0.9)",
  color: active ? "white" : "#475569",
  boxShadow: active
    ? "0 8px 25px rgba(102, 126, 234, 0.3)"
    : "0 4px 15px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  border: active ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: active
      ? "0 12px 35px rgba(102, 126, 234, 0.4)"
      : "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
}));

const SkillsGrid = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "20px",
  position: "relative",
  zIndex: 2,
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "15px",
  },
});

const SkillCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "20px",
  padding: "25px",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  // Removed CSS hover effects to prevent conflicts with Framer Motion
});

const SkillIcon = styled(motion.div)({
  fontSize: "40px",
  marginBottom: "15px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SkillName = styled(Typography)({
  fontWeight: "600",
  color: "#334155",
  fontSize: "14px",
  margin: 0,
});

export const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);
    setFilteredSkills(filtered);
  }, [activeCategory, skills]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & DevOps" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
            I've worked with a variety of technologies across the full stack
            development spectrum.
          </SectionSubtitle>
        </Box>

        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterContainer>

        <AnimatePresence mode="wait">
          <SkillsGrid
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  background: "rgba(255, 255, 255, 0.95)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <SkillIcon
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {getSkillIcon(skill.icon)}
                </SkillIcon>
                <SkillName variant="body2">{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </AnimatePresence>
      </Container>
    </SkillsContainer>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};
