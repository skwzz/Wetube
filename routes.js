//GLOBAL STUFF
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USERS STUFF
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//VIDEOS STUFF
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; // /videos/123
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  // global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  // users
  users: USERS,
  user_detail: USER_DETAIL,
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,
  //videos
  videos: VIDEOS,
  upload: UPLOAD,
  video_detail: VIDEO_DETAIL,
  edit_video: EDIT_VIDEO,
  delete_video: DELETE_VIDEO
};

export default routes;
