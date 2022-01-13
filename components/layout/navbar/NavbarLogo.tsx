import * as React from "react";
import MUILink from "@mui/material/Link";
import Link from "next/link";
import styles from "./styles";

const NavbarLogo = () => {
  return (
    <Link passHref href="/">
      <MUILink noWrap sx={styles.logo} underline="none" variant="h6">
        BrewDogBeers
      </MUILink>
    </Link>
  );
};

export default NavbarLogo;
