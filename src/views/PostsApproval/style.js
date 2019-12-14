import { greenColor, redColor, whiteColor } from "../../constants/colors";

const optionsButton = {
  borderRadius: "0 !important",
  color: `${whiteColor} !important`
};

export default {
  messageContainer: {
    marginTop: "2rem"
  },
  buttonsBar: {
    display: "flex",
    flexDirection: "column"
  },
  yesButton: {
    ...optionsButton,
    backgroundColor: `${greenColor} !important`
  },
  noButton: {
    ...optionsButton,
    backgroundColor: `${redColor} !important`,
    marginBottom: "0.5rem"
  }
};
