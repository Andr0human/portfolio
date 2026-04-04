'use client';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "./ui/Box";
import Typography from "./ui/Typography";
import { styled } from "@mui/material/styles";

const NavContainer = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isvisible",
})(({ isvisible }) => ({
  display: isvisible ? "flex" : "none",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(102, 126, 234, 0.15)",
  position: "fixed",
  top: 20,
  right: 20,
  width: "fit-content",
  borderRadius: "50px",
  zIndex: 1000,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  padding: "8px 20px",
}));

const NavItemContainer = styled(motion.div)({
  position: "relative",
  margin: "0 1px",
});

const NavItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  color: isactive ? "#667eea" : "#475569",
  textTransform: "uppercase",
  fontSize: "13px",
  fontWeight: "600",
  padding: "8px 12px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "25px",
  position: "relative",
  zIndex: 2,
  "&:hover": {
    color: "#667eea",
    background: "rgba(255, 255, 255, 0.1)",
  },
}));

const ActiveIndicator = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
  borderRadius: "25px",
  zIndex: 1,
});

const ScrollToTopButton = styled(motion.button)({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  border: "none",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
  "&:hover": {
    boxShadow: "0 6px 25px rgba(102, 126, 234, 0.6)",
  },
});

const navbarVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200 },
  },
  exit: { scale: 0, rotate: 180, transition: { duration: 0.3 } },
  hover: { scale: 1.1, rotate: 360, transition: { duration: 0.3 } },
  tap: { scale: 0.9 },
};

const navItems = [
  { label: "HOME", to: "home", icon: "🏠" },
  { label: "EXPERIENCE", to: "experience", icon: "💼" },
  { label: "PROJECTS", to: "projects", icon: "🚀" },
  { label: "SKILLS", to: "skills", icon: "⚡" },
  { label: "CONTACT", to: "contact", icon: "📧" },
];

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
      setShowScrollTop(scrollPosition > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.to))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = navItems.find((item) => item.to === entry.target.id)?.label;
            if (label) setActiveTab(label);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <NavContainer
            isvisible={isVisible}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.02 }}
          >
            <Box display="flex" alignItems="center" gap="2px">
              {navItems.map((item) => (
                <NavItemContainer key={item.label}>
                  <motion.div
                    style={{ position: "relative" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveTab(item.label);
                      scrollToSection(item.to);
                    }}
                  >
                    <AnimatePresence>
                      {activeTab === item.label && (
                        <ActiveIndicator
                          layoutId="activeIndicator"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <NavItem isactive={activeTab === item.label}>
                      <span style={{ marginRight: "6px" }}>{item.icon}</span>
                      {item.label}
                    </NavItem>
                  </motion.div>
                </NavItemContainer>
              ))}
            </Box>
          </NavContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            ↑
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </>
  );
};
