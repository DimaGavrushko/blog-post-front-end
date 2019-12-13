import {
  dangerColor,
  grayColor,
  primaryColor,
  whiteColor
} from "../../constants/colors";

export default {
  categoryTitleContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2rem"
  },
  imageContainer: {
    border: `1px solid ${grayColor[2]}`,
    width: "25%",
    height: "10vh"
  },
  formControl: {
    minWidth: "20%"
  },
  input: {
    width: "100%",
    "& label.Mui-focused": {
      color: primaryColor[0]
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: primaryColor[0]
      }
    },
    marginLeft: "2rem"
  },
  select: {},
  button: {
    minWidth: "20%",
    marginTop: "1rem",
    borderRadius: "0 !important",
    backgroundColor: `${primaryColor[0]} !important`,
    marginBottom: "3rem"
  },
  disabledButton: {
    backgroundColor: `${dangerColor} !important`,
    color: `${whiteColor} !important`
  },
  container: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  gridContainer: {
    height: "80vh"
  },
  editor: {
    overflow: "auto",
    minHeight: "25vh",
    maxHeight: "50vh",
    padding: "0.5rem",
    border: `1px solid ${grayColor[2]}`
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }
};
