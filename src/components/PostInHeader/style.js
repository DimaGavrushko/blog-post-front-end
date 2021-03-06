import { blackColor, whiteColor } from "../../constants/colors";

export default {
  container: {
    maxWidth: "25%",
    height: "160px",
    display: "flex",
    marginRight: "3rem",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  imageContainer: {
    position: "relative",
    height: "70%",
    marginBottom: "0.7rem"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  link: {
    textDecoration: "none",
    color: blackColor,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  title: {
    fontSize: 14,
    fontWeight: 600
  },
  postBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "0.2rem",
    background: blackColor,
    color: whiteColor,
    fontSize: 10,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};
