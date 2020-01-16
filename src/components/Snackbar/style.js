import { blackColor, dangerColor, greenColor, primaryColor, whiteColor } from "../../constants/colors";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

export const snackbarContentStyle = theme => ({
  container: {
    width: "100%",
    top: 0,
    left: 0,
    transform: "none",
    position: "relative",
    opacity: "0.9"
  },
  root: {
    width: "100%",
    flexWrap: "unset",
    position: "relative",
    padding: "20px 30px",
    lineHeight: "20px",
    fontSize: 14,
    backgroundColor: "white",
    color: "#555555",
    borderRadius: 0,
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  top20: {
    top: 20
  },
  top40: {
    top: 40
  },
  info: {
    backgroundColor: "#00d3ee",
    color: whiteColor,
    ...infoBoxShadow
  },
  success: {
    backgroundColor: "#C1E3E6",
    color: blackColor
  },
  warning: {
    backgroundColor: "#ffa21a",
    color: "#ffffff",
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: "#FFEAEB",
    color: "#E91A21"
  },
  primary: {
    backgroundColor: "#af2cc5",
    color: "#ffffff",
    ...primaryBoxShadow
  },
  rose: {
    backgroundColor: "#eb3573",
    color: "#ffffff",
    ...roseBoxShadow
  },
  message: {
    width: "100%",
    textAlign: "center",
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: 16,
    height: 16
  },
  iconButton: {
    width: 20,
    height: 20,
    padding: 0,
    color: "#8895A5"
  },
  icon: {
    display: "block",
    left: 15,
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: 30,
    height: 30
  },
  infoIcon: {
    color: "#00d3ee"
  },
  successIcon: {
    color: "#5cb860"
  },
  warningIcon: {
    color: "#ffa21a"
  },
  dangerIcon: {
    color: "#f55a4e"
  },
  primaryIcon: {
    color: "#af2cc5"
  },
  roseIcon: {
    color: "#eb3573"
  },
  iconMessage: {
    paddingLeft: 50,
    display: "block"
  }
});

export const snackbarContentMobileStyle = theme => ({
  container: {
    width: "100%",
    top: 0,
    left: 0,
    transform: "none",
    position: "relative",
  },
  root: {
    width: "100%",
    flexWrap: "unset",
    position: "relative",
    padding: "20px 30px",
    lineHeight: "20px",
    fontSize: 14,
    backgroundColor: "white",
    color: "#555555",
    borderRadius: 0,
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  top20: {
    top: 20
  },
  top40: {
    top: 40
  },
  info: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...infoBoxShadow
  },
  success: {
    backgroundColor: greenColor,
    color: whiteColor
  },
  warning: {
    backgroundColor: "#ffa21a",
    color: whiteColor,
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: whiteColor
  },
  primary: {
    backgroundColor: "#af2cc5",
    color: whiteColor,
    ...primaryBoxShadow
  },
  rose: {
    backgroundColor: "#eb3573",
    color: "#ffffff",
    ...roseBoxShadow
  },
  message: {
    width: "100%",
    textAlign: "center",
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: 16,
    height: 16
  },
  iconButton: {
    width: 20,
    height: 20,
    padding: 0,
    color: whiteColor
  },
  icon: {
    display: "block",
    left: 15,
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: 30,
    height: 30
  },
  infoIcon: {
    color: "#00d3ee"
  },
  successIcon: {
    color: "#5cb860"
  },
  warningIcon: {
    color: "#ffa21a"
  },
  dangerIcon: {
    color: "#f55a4e"
  },
  primaryIcon: {
    color: "#af2cc5"
  },
  roseIcon: {
    color: "#eb3573"
  },
  iconMessage: {
    paddingLeft: 50,
    display: "block"
  }
});