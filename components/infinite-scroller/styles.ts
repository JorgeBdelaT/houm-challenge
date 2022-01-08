const styles = {
  loadingBox: {
    alignItems: "center",
    display: "flex",
    height: "100px",
    justifyContent: "center",
    margin: "30px",
    maxWidth: 345,
    py: 3,
    width: "100%",
  },
  loadingIcon: (loading: boolean) => ({ display: loading ? "block" : "none" }),
};

export default styles;
