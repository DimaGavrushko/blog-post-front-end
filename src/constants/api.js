const getApiURL = () => {
  if (process.env.NODE_ENV === "production") {
    return "http://api-blogpost.herokuapp.com";
  }

  return "http://localhost:8001";
};

export const API_URL = getApiURL();
