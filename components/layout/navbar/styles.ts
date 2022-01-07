export const styles = {
  toolbar: { minHeight: { xs: 48, md: 56 } },
  link: (active: boolean) => ({
    backgroundColor: {
      xs: active ? "secondary.main" : "inherit",
      md: "inherit",
    },
    color: {
      xs: "primary.main",
      md: "white",
    },
    px: { xs: 2, md: 0 },
    py: { xs: 1, md: 0 },
    textDecorationColor: "white",
    textDecorationLine: { xs: "none", md: active ? "underline" : "none" },
  }),
  list: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  listItem: { width: "fit-content" },
  logo: {
    color: "white",
    cursor: "pointer",
    flexGrow: { xs: 1, md: 0 },
    mr: { xs: 0, md: 2 },
  },
  menu: { display: { xs: "block", md: "none" } },
  menuBox: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  menuItem: { p: 0, minHeight: "unset" },
  menuList: { sx: { py: 0 } },
};

export default styles;
