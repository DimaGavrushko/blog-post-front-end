import { grayColor, blackColor } from "../../../constants/colors";

export default () => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "0.8rem",
    marginRight: "1rem"
  },
  label: {
    color: grayColor[0],
    fontSize: 12,
    textTransform: "capitalize"
  },
  text: {
    color: blackColor,
    fontSize: 16
  },
  editIcon: {
    color: `${blackColor} !important`,
    marginLeft: "0.2rem"
  },
  editIconContainer: {
    display: "flex"
  },
  input: {
    "& label.Mui-focused": {
      color: grayColor[0]
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: grayColor[0]
      }
    },
    "& .MuiOutlinedInput-input": {
      padding: "6px 14px"
    }
  }
});
