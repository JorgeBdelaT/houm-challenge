import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import styles from "./styles";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <IconButton
      onClick={scrollToTop}
      aria-label="scroll-to-top"
      sx={{ ...styles.iconBtn, position: "fixed" }}
    >
      <ArrowUpward />
    </IconButton>
  );
};

export default ScrollToTopButton;
