import { monthNames } from "../constants";

export const toPostDate = dateString => {
  const completeToDoubleDigit = text => {
    if (text.length === 1) {
      text = "0" + text;
    }

    return text;
  };

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = completeToDoubleDigit(date.getDate());

  return `${day} ${month},${year}`;
};

export const getPostDescription = (text = "") => {
  const subText = text.substring(0, 200);
  return subText.substring(0, subText.lastIndexOf(".") + 1 || subText.length);
};

export const getPostShortName = (text = "") => {
  let name;
  if (text.length > 50) {
    name = text.substring(0, 50);
    name = name.substring(0, name.lastIndexOf(" ") + 1);
    return name + "...";
  }

  return text;
};

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const sortByDateDesc = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  return dateB - dateA;
};

export const getRecentPosts = (posts = [], count = 3) => {
  return stableSort(posts, sortByDateDesc).slice(0, count);
};

export const getPopularPosts = (posts = [], count = 3) => {
  return getRecentPosts(posts
    .filter(
      post =>
        Math.ceil(
          Math.abs(Date.now() - new Date(post.createdAt).getTime()) /
            (1000 * 3600 * 24)
        ) < 7
    )
    .sort((a, b) => +b.likes.length - +a.likes.length)
    .slice(0, Math.max(count, posts.length)), count);
};
