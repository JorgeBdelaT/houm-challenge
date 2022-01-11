import * as React from "react";
import MUILink from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";
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
