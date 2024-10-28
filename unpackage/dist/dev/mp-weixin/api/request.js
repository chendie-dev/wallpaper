"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_UERL = "https://tea.qingnian8.com/api/bizhi";
function request(config = {}) {
  const { url, data, method = "get" } = config;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_UERL + url,
      header: {
        "access-key": "788320"
      },
      data,
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.data.errMsg
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
