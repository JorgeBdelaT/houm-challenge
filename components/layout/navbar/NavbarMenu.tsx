import * as React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pagesInfo } from "../../../constants";
import NavbarLink from "./NavbarLink";

const NavbarMenu = ({}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        aria-label="appbar menu"
        color="inherit"
        onClick={handleOpenNavMenu}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        id="menu-appbar"
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
        transformOrigin={{
          horizontal: "left",
          vertical: "top",
        }}
      >
        {pagesInfo.pages.map(({ name, path }) => (
          <MenuItem key={name} onClick={handleCloseNavMenu}>
            <NavbarLink activeColor="primary" name={name} path={path} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarMenu;
