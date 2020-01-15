import { grayColor } from "../../constants/colors";

const container = {
  display: "flex",
  alignItems: "flex-start"
};

const rightContainerMobile = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};

export default {
  gridContainer: {
    marginTop: "5rem",
    position: "relative"
  },
  container: {
    ...container
  },
  mobileContainer: {
    ...container,
    flexDirection: "column"
  },
  leftContainer: {
    maxWidth: "9rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: "1rem"
  },
  rightContainer: {
    ...rightContainerMobile,
    marginLeft: "1rem"
  },
  rightContainerMobile: {
    ...rightContainerMobile
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
