import { grayColor, whiteColor } from "../../constants/colors";

const headerLinkContainer = {
  position: "relative",
  color: `${whiteColor} !important`,
  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1,
  textTransform: "uppercase",
  padding: "0.9rem 0.8rem",
  textDecoration: "none",
  cursor: "pointer",
  whiteSpace: "pre",
  "&:hover": {
    color: `${grayColor[1]} !important`
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default () => ({
  headerLinkContainer: {
    ...headerLinkContainer
  },
  headerLinkContainerMobile: {
    ...headerLinkContainer,
    paddingLeft: 0
  },
  chevronBottom: {
    width: 13,
    height: 13
  }
});
