import { grayColor, whiteColor } from "../../constants/colors";

export default () => ({
  categoriesDropDownContainer: {
    display: "flex",
    position: "absolute",
    width: "100%",
    minHeight: 100, // optional
    backgroundColor: whiteColor,
    borderBottom: `1px solid ${grayColor[4]}`
  }
});
