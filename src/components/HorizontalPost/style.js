import {
  blackColor,
  dangerColor,
  grayColor,
  greenColor,
  redColor,
  whiteColor
} from "../../constants/colors";

const optionsButton = {
  minWidth: 50,
  padding: "0.4rem",
  fontSize: 12,
  borderRadius: 2,
  color: `${whiteColor} !important`
};

const imageContainer = {
  width: "35%",
  height: "25vh",
  paddingRight: 15
};
const container = {
  display: "flex",
  width: "100%",
  marginBottom: "3rem"
};

const mobileTitleContainer = {
  marginTop: "1rem",
  backgroundColor: whiteColor
};

const metaContainerMobile = {
  display: "flex",
  flexDirection: "column",
  width: "100%"
};

export default () => ({
  container: {
    ...container
  },
  mobileContainer: {
    ...container,
    display: "block"
  },
  imageContainer: {
    ...imageContainer
  },
  mobileImageContainer: {
    ...imageContainer,
    width: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  metaContainer: {
    ...metaContainerMobile,
    paddingRight: "0.2rem",
    paddingLeft: 15
  },
  metaContainerMobile: {
    ...metaContainerMobile
  },
  titleContainer: {
    ...mobileTitleContainer,
    padding: "1rem 1.5rem 1rem",
    marginLeft: "-20%"
  },
  mobileTitleContainer: {
    ...mobileTitleContainer
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
    alignItems: "center"
  },
  separator: {
    width: "1rem"
  },
  mobileButtonsBar: {
    marginTop: "0.5rem"
  },
  buttonsBar: {
    display: "flex",
    flexDirection: "column"
  },
  yesButton: {
    ...optionsButton,
    backgroundColor: `${greenColor} !important`
  },
  mobileNoButton: {
    ...optionsButton,
    backgroundColor: `${redColor} !important`,
    marginRight: "0.5rem"
  },
  noButton: {
    ...optionsButton,
    backgroundColor: `${redColor} !important`,
    marginBottom: "0.5rem"
  },
  editButtonLink: {
    textDecoration: "none"
  },
  editIcon: {
    color: `${blackColor} !important`
  },
  deleteIcon: {
    color: `${dangerColor} !important`
  }
});
