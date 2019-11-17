const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    height: "100vh",
    width: "100vw"
  },
  leftColumn: {
    height: "100%",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rightColumn: {
    height: "100%",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  midColumn: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default styles;
