import * as React from "react";
import { AppBar, Container, Toolbar, List, ListItem } from "@mui/material";
import { pagesInfo } from "../../../constants";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarLink from "./NavbarLink";

const Navbar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <NavbarMenu />
        <NavbarLogo />
        <List sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pagesInfo.pages.map(({ name, path }) => (
            <ListItem key={name} sx={{ my: 2, width: "fit-content" }}>
              <NavbarLink activeColor="white" name={name} path={path} />
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
