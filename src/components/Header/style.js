import { primaryColor, whiteColor } from "../../constants/colors";
import { fade } from "@material-ui/core/styles";

export default () => ({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: `rgba(0, 0, 0, 0) linear-gradient(to right, ${primaryColor[0]} 0px, ${primaryColor[1]} 100%) repeat scroll 0 0 !important`,
    padding: "0.2rem 10%"
  },
  headerPartContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: 3,
    backgroundColor: fade(whiteColor, 0.25),
    "&:hover": {
      backgroundColor: fade(whiteColor, 0.45)
    },
    marginRight: 20,
    width: "15rem"
  },
  searchIcon: {
    paddingLeft: 10,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: 10,
    paddingLeft: "25%",
    width: "100%"
  }
});
