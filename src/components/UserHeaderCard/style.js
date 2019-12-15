import {
  blackColor,
  greenColor,
  redColor,
  whiteColor
} from "../../constants/colors";

export default () => ({
  image: {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    objectFit: "cover",
    marginLeft: "1rem"
  },
  userInfoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  userTextInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  container: {
    padding: "0.2rem 0",
    marginLeft: "2rem",
    color: whiteColor
  },
  name: {
    lineHeight: "1.5",
    fontSize: "1rem"
  },
  role: {
    marginLeft: "0.25rem",
    lineHeight: "1.5",
    fontSize: "0.75rem",
    textTransform: "capitalize"
  },
  button: {
    fontSize: "0.75rem",
    lineHeight: "1.5",
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
  },
  link: {
    textDecoration: "none",
    color: whiteColor,
    fontWeight: "bold",
    textAlign: "right"
  }
});
