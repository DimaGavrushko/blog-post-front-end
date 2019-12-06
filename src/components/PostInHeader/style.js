import { blackColor } from "../../constants/colors";

export default {
  container: {
    width: "100%",
    height: "160px",
    display: "flex",
    marginRight: "3rem",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  imageContainer: {
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
};
