import * as React from "react";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "../../link";
import styles from "./styles";

export const Footer = () => (
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
