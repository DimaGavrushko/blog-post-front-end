import { blackColor, grayColor } from "../../constants/colors";

export default () => ({
  container: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 36,
    lineHeight: "50px",
    marginTop: "0.5rem",
    fontWeight: "bold",
    overflowWrap: "break-word"
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
    margin: "2rem 0"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  content: {
    padding: "0 2%",
    textAlign: "left",
    fontSize: 18
  },
  options: {
    display: "flex",
    margin: "1.5rem 0"
  },
  editButton: {
    width: 100,
    borderRadius: "0 !important",
    backgroundColor: `${grayColor[1]} !important`,
    color: `${blackColor} !important`
  },
  editButtonLink: {
    textDecoration: "none"
  }
});
