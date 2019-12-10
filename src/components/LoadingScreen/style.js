import { primaryColor, whiteColor } from "../../constants/colors";

export default {
  loadingScreenContainer: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  progressBar: {
    backgroundColor: primaryColor[0]
  },
  whiteColor: {
    backgroundColor: whiteColor
  }
};
