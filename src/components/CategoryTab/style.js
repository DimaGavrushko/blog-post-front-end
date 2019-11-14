import { blackColor, whiteColor } from "../../constants/colors";

export default () => ({
  category: {
    minWidth: "5rem",
    maxWidth: "12rem",
    color: blackColor,
    textAlign: "right",
    display: "block",
    padding: "0.5rem 1rem",
    border: 0,
    outline: "none",
    cursor: "pointer",
    fontSize: 15,
    marginBottom: 1,
    lineHeight: 1,
    textTransform: "capitalize",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: whiteColor
    }
  },
  selected: {
    backgroundColor: whiteColor
  }
});
