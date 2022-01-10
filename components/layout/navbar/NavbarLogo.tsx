import * as React from "react";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import styles from "./styles";

const NavbarLogo = () => {
  return (
    <Link passHref href="/">
      <MUILink
        noWrap
        component="div"
        sx={styles.logo}
        underline="none"
        variant="h6"
      >
        BrewDogBeers
      </MUILink>
    </Link>
  );
};

export default NavbarLogo;
