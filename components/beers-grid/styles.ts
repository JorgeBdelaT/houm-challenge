const styles = {
  cardMedia: {
    box: { display: "flex", justifyContent: "center", py: 2.5 },
    img: {
      height: 300,
      width: 100,
    },
  },
  grid: {},
  gridBox: {
    maxHeight: "90%",
    flexGrow: 1,
  },
  gridSpacing: 2,
  item: { xs: 12, md: 3 },
  noBeers: {
    backgroundColor: "white",
    borderRadius: 1,
    boxShadow: 1,
    display: "flex",
    fontWeight: 600,
    justifyContent: "center",
    p: 3,
    width: "100%",
  },
  stack: { top: "16px", right: "16px" },
  text: {
    tagLine: { color: "text.secondary" },
    ibu: { color: "text.secondary" },
    abv: { color: "text.secondary" },
  },
};

export default styles;
