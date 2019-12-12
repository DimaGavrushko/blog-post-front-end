import { blackColor, grayColor } from "../../constants/colors";

export default () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%"
  },
  imageContainer: {
    height: "35vh",
    marginBottom: "2rem"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  link: {
    marginTop: "1.5rem",
    textDecoration: "none",
    color: blackColor,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: 600
  },
  descriptionContainer: {
    marginBottom: "0.5rem",
    paddingBottom: 0
  },
  description: {
    lineHeight: "26px",
    fontSize: 15,
    color: grayColor[5]
  }
});
