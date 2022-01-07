import * as React from "react";
import { useRouter } from "next/router";
import Link from "../../link";
import styles from "./styles";

interface NavbarLinkProps {
  name: string;
  path: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ name, path }) => {
  const router = useRouter();
  const active = router.pathname === path;

  return <Link href={path} sx={styles.link(active)} text={name} />;
};

export default NavbarLink;
