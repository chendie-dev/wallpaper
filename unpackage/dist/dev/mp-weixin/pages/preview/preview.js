"use strict";
const common_vendor = require("../../common/vendor.js");
const util_system = require("../../util/system.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _component_uni_rate = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _component_uni_rate + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskShow = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const currentIndex = common_vendor.ref();
    const currentItem = common_vendor.ref();
    common_vendor.ref([]);
    const userScore = common_vendor.ref(0);
    const isScore = common_vendor.ref(false);
    let classList = common_vendor.index.getStorageSync("classList");
    classList = classList.map((item) => ({ ...item, picurl: item.smallPicurl.replace("_small.webp", ".jpg") }));
    common_vendor.onLoad((e) => {
      const { id } = e;
      let index = classList.findIndex((item) => item._id === id);
      currentIndex.value = index;
      currentItem.value = classList[index];
    });
    const submitScore = async () => {
      const res = await api_api.apiSetupScore({ classid: currentItem.value.classid, wallId: currentItem.value._id, userScore: userScore.value });
      console.log(res, "abc");
      if (res.statusCode === 200) {
        clickStarClose();
        common_vendor.index.showToast({
          title: "评论成功",
          icon: "none"
        });
      }
    };
    const swiperChange = (e) => {
      const { detail: { current } } = e;
      currentIndex.value = current;
      currentItem.value = classList[current];
    };
    const maskChange = () => {
      maskShow.value = !maskShow.value;
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickInfoOpen = () => {
      infoPopup.value.open();
    };
    const clickStarOpen = () => {
      scorePopup.value.open();
    };
    const clickStarClose = () => {
      scorePopup.value.close();
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(classList), (item, index, i0) => {
          return {
            a: common_vendor.o(maskChange, item._id),
            b: item.picurl,
            c: item._id
          };
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskShow.value
      }, maskShow.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(util_system.getStatusBarHeight)() + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(common_vendor.unref(classList).length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "yyyy年MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfoOpen),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.o(clickStarOpen),
        p: common_vendor.p({
          type: "download",
          size: "28"
        })
      } : {}, {
        q: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        r: common_vendor.o(clickInfoClose),
        s: common_vendor.t(currentItem.value._id),
        t: common_vendor.t(currentItem.value.nickname),
        v: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentItem.value.score,
          size: "16"
        }),
        w: common_vendor.t(currentItem.value.score),
        x: common_vendor.t(currentItem.value.description),
        y: common_vendor.f(currentItem.value.tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        z: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        A: common_vendor.p({
          type: "bottom"
        }),
        B: common_vendor.t(isScore.value ? "评分过了~" : "壁纸评分"),
        C: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        D: common_vendor.o(clickStarClose),
        E: common_vendor.o(($event) => userScore.value = $event),
        F: common_vendor.p({
          allowHalf: "true",
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: userScore.value
        }),
        G: common_vendor.t(userScore.value),
        H: common_vendor.o(submitScore),
        I: !userScore.value || isScore.value,
        J: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        K: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
