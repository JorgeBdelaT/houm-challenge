import * as React from "react";
import { Link as MUILink, SxProps, Theme } from "@mui/material";
import NextLink from "next/link";

interface NavbarLinkProps {
  href: string;
  sx?: SxProps<Theme> | undefined;
  target?: string;
  text: string;
}

const Link: React.FC<NavbarLinkProps> = ({ href, sx, target, text }) => (
  <NextLink passHref href={href}>
    <MUILink sx={sx} target={target}>
      {text}
    </MUILink>
  </NextLink>
);

export default Link;
