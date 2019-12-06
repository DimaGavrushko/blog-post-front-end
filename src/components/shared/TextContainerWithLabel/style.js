import { grayColor, blackColor } from "../../../constants/colors";

export default () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "0.8rem",
    marginRight: "1rem"
  },
  label: {
    color: grayColor[0],
    fontSize: 12,
    textTransform: "capitalize"
  },
  text: {
    color: blackColor,
    fontSize: 16
  }
});
