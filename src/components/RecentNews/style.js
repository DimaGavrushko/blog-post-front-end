import { blackColor, grayColor, whiteColor } from "../../constants/colors";

export default () => ({
  container: {
    display: "flex",
    width: "100%",
    marginBottom: "2rem"
  },
  imageContainer: {
    width: "35%",
    height: "25vh",
    paddingRight: 15
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  metaContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "0.2rem",
    paddingLeft: 15,
    width: "100%"
  },
  titleContainer: {
    backgroundColor: whiteColor,
    padding: "1rem 1.5rem 1rem",
    marginLeft: "-20%",
    marginTop: "1rem"
  },
  link: {
    textDecoration: "none",
    color: blackColor,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  title: {
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
  },
  additionalInfoContainer: {
    display: "flex",
    alignItems: "center",
    "&:> *": {
      marginRight: "1rem"
    }
  }
});
