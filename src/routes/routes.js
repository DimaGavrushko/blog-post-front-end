import {
  CATEGORY_PATH,
  CREATE_POST_PATH,
  NEWS_PATH,
  PATH_INDEX,
  POST_PATH,
  POSTS_APPROVAL_PATH,
  PROFILE_PATH
} from "../constants/routes";
import News from "../views/News";
import Category from "../views/Category";
import Profile from "../views/Profile";
import Post from "../views/Post";
import CreatePost from "../views/CreatePost";
import PostsApproval from "../views/PostsApproval";

const guestRoutes = [
  {
    path: NEWS_PATH,
    name: "News",
    component: News,
    layout: PATH_INDEX
  },
  {
    path: CATEGORY_PATH,
    name: "Category",
    component: Category,
    layout: PATH_INDEX
  },
  {
    path: PROFILE_PATH,
    name: "Profile",
    component: Profile,
    layout: PATH_INDEX
  },
  {
    path: POST_PATH,
    name: "Post",
    component: Post,
    layout: PATH_INDEX
  }
];

const userRoutes = [...guestRoutes];

const journalistRoutes = [
  ...guestRoutes,
  {
    path: CREATE_POST_PATH,
    name: "Create post",
    component: CreatePost,
    layout: PATH_INDEX
  }
];

const adminRoutes = [
  ...guestRoutes,
  {
    path: POSTS_APPROVAL_PATH,
    name: "Posts approval",
    component: PostsApproval,
    layout: PATH_INDEX
  }
];

export default {
  guest: guestRoutes,
  user: userRoutes,
  journalist: journalistRoutes,
  admin: adminRoutes
};
