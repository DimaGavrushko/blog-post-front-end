import { blackColor, whiteColor } from "../../constants/colors";

export default () => ({
  postContainer: {
    position: "relative",
    padding: "0.2rem",
    height: "50vh"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  postBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: blackColor,
    margin: "0.2rem",
    opacity: 0.75,
    "&:hover": {
      opacity: 0.9
    }
  },
  postInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    padding: "1rem 1.5rem",
    color: whiteColor
  },
  title: {
    textDecoration: "none",
    color: whiteColor,
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "0.8rem 0 0.5rem !important"
  },
  dateAndAuthor: {
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "0.7rem"
  },
  date: {
    marginRight: "0.7rem"
  },
  author: {
    marginLeft: "0.7rem",
    textDecoration: "none",
    color: whiteColor
  }
});
