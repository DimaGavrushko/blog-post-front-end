import { grayColor } from "../../constants/colors";

export default () => ({
  container: {
    border: `1px dashed ${grayColor[2]}`,
    padding: "3rem 2rem"
  },
  label: {
    background: grayColor[1],
    fontSize: 16,
    lineHeight: "1",
    margin: 0,
    padding: "0.6rem 1.5rem",
    position: "absolute",
    textAlign: "center",
    top: -18,
    fontWeight: 600
  }
});
