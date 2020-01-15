import { whiteColor } from "../../../constants/colors";

const logoContainer = {
  display: "flex",
  color: whiteColor,
  fontSize: 32,
  marginRight: "4rem",
  padding: "0.3rem 0",
  textDecoration: "none"
};

export default () => ({
  logoContainer: {
    ...logoContainer
  },
  logoContainerMobile: {
    ...logoContainer,
    marginRight: 0
  },
  bold: {
    fontWeight: "bold"
  }
});
