import { grayColor } from "../../constants/colors";

export default () => ({
  categoriesTabsContainer: {
    width: "25%",
    borderRight: `1px solid ${grayColor[4]}`,
    minHeight: 100, // optional
    backgroundColor: grayColor[1],
    padding: "1rem 0 1rem 10%"
  }
});
