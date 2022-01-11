import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
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
      <ArrowUpwardIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
