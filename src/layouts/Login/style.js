import { dangerColor, primaryColor } from "../../constants/colors";

export default {
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "auto"
  },
  loginContainer: {
    width: "25vw",
    height: "30vh",
    position: "absolute",
    top: "25vh",
    right: 0,
    bottom: 0,
    left: 0,
    margin: "0 auto"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column"
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
    minWidth: "30%",
    maxWidth: "50%",
    marginTop: "1rem",
    borderRadius: "0 !important",
    backgroundColor: `${primaryColor[0]} !important`
  },
  error: {
    borderRadius: 4,
    padding: "1rem",
    marginBottom: "1rem",
    border: `1px solid ${dangerColor}`
  },
  sizeLetter: {
    fontSize: 16
  }
};
