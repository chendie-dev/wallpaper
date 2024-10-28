"use strict";
const api_request = require("./request.js");
function apiGetBanner() {
  return api_request.request({ url: "/homeBanner" });
}
function apiGetDayRandom() {
  return api_request.request({ url: "/randomWall" });
}
function apiGetNotice(data = {}) {
  return api_request.request({ url: "/wallNewsList", data });
}
function apiGetClassify(data = {}) {
  return api_request.request({ url: "/classify", data });
}
function apiGetClass(data = {}) {
  return api_request.request({ url: "/wallList", data });
}
function apiSetupScore(data = {}) {
  return api_request.request({ url: "/setupScore", data });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClass = apiGetClass;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetNotice = apiGetNotice;
exports.apiSetupScore = apiSetupScore;
