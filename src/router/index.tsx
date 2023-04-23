import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { PostPage } from "../pages/PostPage";
import { Posts } from "../pages/Posts";

export const privateRoutes = [
  { path: "about", component: <About /> },
  { path: "posts/:id", component: <PostPage /> },
  { path: "posts", component: <Posts /> },
  { path: "*", component: <Posts /> },
];

export const publicRoutes = [
  { path: "login", component: <Login /> },
  { path: "*", component: <Login /> },
];
