import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
