import {
  blackColor,
  greenColor,
  redColor,
  whiteColor
} from "../../constants/colors";

export default () => ({
  container: {
    padding: "0.2rem 0",
    marginLeft: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    color: whiteColor
  },
  name: {
    lineHeight: "1.25",
    fontSize: "1rem"
  },
  role: {
    marginLeft: "0.25rem",
    lineHeight: "1.25",
    fontSize: "0.75rem",
    textTransform: "capitalize"
  },
  button: {
    fontSize: "0.75rem",
    lineHeight: "1.25",
    cursor: "pointer",
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  roleContainer: {
    display: "flex",
    alignItems: "center"
  },
  dot: {
    borderRadius: "50%",
    width: 6,
    height: 6
  },
  admin: {
    backgroundColor: blackColor
  },
  journalist: {
    backgroundColor: redColor
  },
  user: {
    backgroundColor: greenColor
  }
});
