import * as React from "react";
import { AppBar, Container, Toolbar, List, ListItem } from "@mui/material";
import { PAGES_INFO } from "../../../constants";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarLink from "./NavbarLink";
import styles from "./styles";

const Navbar = () => (
  <AppBar position="sticky">
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={styles.toolbar}>
        <NavbarMenu />
        <NavbarLogo />
        <List sx={styles.list}>
          {PAGES_INFO.pages.map(({ name, path }) => (
            <ListItem key={name} sx={styles.listItem}>
              <NavbarLink name={name} path={path} />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
