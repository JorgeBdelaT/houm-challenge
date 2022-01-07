import * as React from "react";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarLinkProps {
  name: string;
  path: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ name, path }) => {
  const router = useRouter();
  const active = router.pathname === path;

  return (
    <Link passHref href={path}>
      <MUILink
        sx={{
          backgroundColor: {
            xs: active ? "secondary.main" : "inherit",
            md: "inherit",
          },
          color: {
            xs: "primary.main",
            md: "white",
          },
          px: { xs: 2 },
          py: { xs: 1 },
          textDecorationColor: "white",
          textDecorationLine: { xs: "none", md: active ? "underline" : "none" },
        }}
      >
        {name}
      </MUILink>
    </Link>
  );
};

export default NavbarLink;
