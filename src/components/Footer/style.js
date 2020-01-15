import { blackColor, grayColor, whiteColor } from "../../constants/colors";

const footerContainer = {
  background: blackColor,
  padding: "1rem 10%",
  display: "flex",
  justifyContent: "space-between"
};

export default () => ({
  footerContainer: {
    ...footerContainer
  },
  footerContainerMobile: {
    ...footerContainer,
    flexDirection: "column"
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    maxWidth: "50%"
  },
  footerText: {
    color: grayColor[0],
    marginBottom: 0,
    fontSize: 14,
    fontWeight: "bold",
    padding: "1rem 0 1.2rem"
  },
  contactUs: {
    color: grayColor[0],
    paddingBottom: "1.5rem"
  },
  contactUsText: {
    fontSize: 14,
    marginBottom: 10
  },
  logoImg: {
    width: 24,
    height: 24,
    marginRight: "0.5rem",
    marginBottom: 3
  },
  logoWithLink: {
    display: "flex",
    alignItems: "center",
    fontSize: 12
  },
  link: {
    margin: "5px 0"
  },
  rightContainer: {
    color: whiteColor
  },
  rightContainerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "0.3rem",
    marginBottom: "1rem"
  },
  category: {
    fontSize: 14,
    borderBottom: `1px dashed ${grayColor[0]}`,
    marginBottom: "0.5rem"
  }
});
