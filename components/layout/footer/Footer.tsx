import * as React from "react";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "../../link/Link";
import styles from "./styles";

const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    Made with <FavoriteBorderIcon sx={styles.favoriteIcon} /> by
    <Link
      href={process.env.GITHUB_URL || ""}
      sx={styles.link}
      target="_blank"
      text="Jorge"
    />
  </Box>
);

export default Footer;
