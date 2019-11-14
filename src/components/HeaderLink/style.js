import { grayColor, whiteColor } from "../../constants/colors";

export default () => ({
  headerLinkContainer: {
    color: `${whiteColor} !important`,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1,
    textTransform: "uppercase",
    padding: "0.9rem 0.8rem",
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "pre",
    "&:hover": {
      color: `${grayColor[1]} !important`
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  chevronBottom: {
    width: 13,
    height: 13
  }
});
