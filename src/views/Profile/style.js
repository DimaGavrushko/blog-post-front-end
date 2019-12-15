import { grayColor } from "../../constants/colors";

export default {
  gridContainer: {
    marginTop: "5rem",
    position: "relative"
  },
  container: {
    display: "flex",
    alignItems: "flex-start"
  },
  leftContainer: {
    maxWidth: "9rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: "1rem"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "1rem"
  },
  imageContainer: {
    width: "9rem",
    height: "9rem",
    marginBottom: "1rem"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover"
  },
  firstAndLast: {
    display: "flex"
  },
  button: {
    marginBottom: "1rem",
    fontSize: 11,
    fontWeight: 600,
    borderRadius: "0 !important",
    border: `2px solid ${grayColor[1]} !important`
  }
};
