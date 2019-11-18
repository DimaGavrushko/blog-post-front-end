import { redColor, whiteColor } from "../../../constants/colors";

export default () => ({
  labelContainer: {
    marginRight: "1rem",
    width: "fit-content",
    height: "fit-content",
    fontSize: 12,
    borderRadius: 3,
    padding: "0.1rem 1rem",
    backgroundColor: redColor,
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    color: whiteColor
  }
});
