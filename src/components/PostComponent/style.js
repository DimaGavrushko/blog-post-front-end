export default () => ({
  container: {
    marginTop: "3.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 36,
    lineHeight: "50px",
    marginTop: "0.5rem",
    fontWeight: "bold",
    overflowWrap: "break-word"
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
    margin: "2rem 0"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  content: {
    padding: "0 5%",
    textAlign: "left",
    fontSize: 16,
    marginBottom: "2rem"
  }
});
