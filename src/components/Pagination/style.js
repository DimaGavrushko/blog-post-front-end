import { grayColor, primaryColor, whiteColor } from "../../constants/colors";

export default () => ({
  paginationContainer: {
    display: "flex"
  },
  paginationButtonContainer: {
    cursor: "pointer",
    backgroundColor: grayColor[1],
    border: `0 dashed ${grayColor[6]}`,
    borderRadius: 0,
    color: `${grayColor[3]} !important`,
    fontSize: 14,
    lineHeight: "1",
    marginLeft: 6,
    padding: "0.8rem 0.8rem",
    textTransform: "capitalize",
    "&:hover": {
      background: `rgba(0, 0, 0, 0) linear-gradient(to right, ${primaryColor[0]} 0px, ${primaryColor[1]} 100%) repeat scroll 0 0 !important`,
      color: `${whiteColor} !important`
    }
  },
  selected: {
    background: `rgba(0, 0, 0, 0) linear-gradient(to right, ${primaryColor[0]} 0px, ${primaryColor[1]} 100%) repeat scroll 0 0 !important`,
    color: `${whiteColor} !important`
  }
});
