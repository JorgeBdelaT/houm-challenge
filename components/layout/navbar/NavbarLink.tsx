import * as React from "react";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarLinkProps {
  activeColor: string;
  name: string;
  path: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ activeColor, name, path }) => {
  const router = useRouter();
  const active = router.pathname === path;

  return (
    <Link passHref href={path}>
      <MUILink sx={{ color: active ? "green" : activeColor }}>{name}</MUILink>
    </Link>
  );
};

export default NavbarLink;
