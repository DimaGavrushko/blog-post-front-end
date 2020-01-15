import { blackColor } from "../../constants/colors";

export default () => ({
  blogTop: {
    margin: 0,
    padding: 0,
    lineHeight: "1",
    float: "left",
    fontWeight: 600,
    fontSize: 21
  },
  blogTopContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "4rem"
  },
  paginationContainer: {
    marginBottom: "2rem"
  },
  square: {
    marginRight: 7,
    width: 10,
    height: 10,
    backgroundColor: blackColor
  }
});
