import { styled } from "@mui/material/styles";
import Box from "./ui/Box";
import IconButton from "./ui/IconButton";
import Typography from "./ui/Typography";
import {
  CodechefIcon,
  EmailIcon,
  GithubIcon,
  HackerRankIcon,
  LeetcodeIcon,
  LinkedInIcon,
} from "./ui/Icons";
import { ComponentContainer } from "./ui/Container";

const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1rem",
});

const Footer = styled(Box)({
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  textAlign: "center",
});

const StyledIconButton = styled(IconButton)({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.7)",
  },
});

const contacts = [
  {
    href: "mailto:ayushsinha3199@gmail.com",
    icon: <EmailIcon fontSize="large" />,
    color: "#D44638",
  },
  {
    href: "https://github.com/Andr0human",
    icon: <GithubIcon fontSize="large" />,
    color: "#333",
  },
  {
    href: "https://www.linkedin.com/in/ayushsinha3199/",
    icon: <LinkedInIcon fontSize="large" />,
    color: "#0077b5",
  },
  {
    href: "https://codechef.com/users/hyperfury",
    icon: <CodechefIcon fontSize="large" />,
    color: "#E44D26",
  },
  {
    href: "https://leetcode.com/hyperfury",
    icon: <LeetcodeIcon fontSize="large" />,
    color: "#FFA116",
  },
  {
    href: "https://www.hackerrank.com/profile/HyperFury",
    icon: <HackerRankIcon fontSize="large" />,
    color: "#00EA64",
  },
];

export const ContactMe = () => {
  return (
    <>
      <ComponentContainer minHeight="30vh" id="contact">
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#6b4f7f" }}>
          CONNECT WITH ME!
        </Typography>

        <IconContainer>
          {contacts.map(({ href, icon, color }, index) => (
            <StyledIconButton
              key={index}
              href={href}
              target="_blank"
              sx={{ color, "&:hover": { color: "#6b4f7f" } }}
            >
              {icon}
            </StyledIconButton>
          ))}
        </IconContainer>
      </ComponentContainer>

      <Footer>
        <Typography variant="h6">Ayush Portfolio</Typography>
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} Ayush - All Rights Reserved.
        </Typography>
      </Footer>
    </>
  );
};
