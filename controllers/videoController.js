import { dummy } from "../db";
import routes from "../routes";
// GLOBAL ROUTER
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", dummy });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, dummy });
};

// VIDEO ROUTER
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //TODO : Upload and save video
  console.log("TODO: Upload and save video");
  res.redirect(routes.videoDetail(1341));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
