import { dangerColor, primaryColor, whiteColor } from "../../constants/colors";

export default {
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    borderRadius: 4,
    padding: "1rem",
    marginBottom: "1rem",
    border: `1px solid ${dangerColor}`
  },
  modal: {
    maxWidth: "30%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    backgroundColor: whiteColor,
    padding: "3rem"
  },
  input: {
    "& label.Mui-focused": {
      color: primaryColor[0]
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: primaryColor[0]
      }
    }
  },
  button: {
    width: "30%",
    padding: "0.5rem",
    marginTop: "1rem",
    borderRadius: "0 !important",
    backgroundColor: `${primaryColor[0]} !important`
  },
  disabledButton: {
    marginTop: "1rem",
    padding: "0.5rem",
    backgroundColor: `${dangerColor} !important`,
    color: `${whiteColor} !important`
  },
  sizeLetter: {
    fontSize: 16
  }
};
