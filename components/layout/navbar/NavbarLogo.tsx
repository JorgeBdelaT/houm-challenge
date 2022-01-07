import * as React from "react";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link passHref href="/">
      <MUILink
        component="div"
        noWrap
        sx={{
          color: "white",
          cursor: "pointer",
          flexGrow: { xs: 1, md: 0 },
          mr: { xs: 0, md: 2 },
        }}
        underline="none"
        variant="h6"
      >
        WikiBeer
      </MUILink>
    </Link>
  );
};

export default NavbarLogo;
