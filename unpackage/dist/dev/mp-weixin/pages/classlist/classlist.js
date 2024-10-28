"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _component_uni_load_more = common_vendor.resolveComponent("uni-load-more");
  _component_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const noData = common_vendor.ref(false);
    const status = common_vendor.ref("more");
    const paramQuery = {
      pageSize: 12,
      pageNum: 1
    };
    common_vendor.onLoad((e) => {
      const { id, name } = e;
      paramQuery.classid = id;
      getClass();
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      paramQuery.pageNum++;
      getClass();
    });
    const getClass = async () => {
      status.value = "loading";
      const res = await api_api.apiGetClass(paramQuery);
      if (res.data.data.length < paramQuery.pageSize) {
        noData.value = true;
        status.value = "noMore";
      } else
        status.value = "more";
      classList.value = [...classList.value, ...res.data.data];
      common_vendor.index.setStorageSync("classList", classList.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: `/pages/preview/preview?id=${item._id}`,
            c: item._id
          };
        }),
        b: common_vendor.p({
          status: status.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
