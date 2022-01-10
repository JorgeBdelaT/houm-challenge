const styles = {
  loadingBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "30px",
    py: 3,
  },
  loadingIcon: (loading: boolean) => ({ display: loading ? "block" : "none" }),
};

export default styles;
