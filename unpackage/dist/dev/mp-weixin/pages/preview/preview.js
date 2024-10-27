"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const util_system = require("../../util/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _component_uni_rate = common_vendor.resolveComponent("uni-rate");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_popup2 + _component_uni_rate)();
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
    const maskChange = () => {
      maskShow.value = !maskShow.value;
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickInfoOpen = () => {
      infoPopup.value.open();
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$2,
        d: maskShow.value
      }, maskShow.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(util_system.getStatusBarHeight)() + "px",
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "yyyy年MM月dd日"
        }),
        j: common_vendor.p({
          type: "info",
          size: "28"
        }),
        k: common_vendor.o(clickInfoOpen),
        l: common_vendor.p({
          type: "star",
          size: "28"
        }),
        m: common_vendor.p({
          type: "download",
          size: "28"
        })
      } : {}, {
        n: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        o: common_vendor.o(clickInfoClose),
        p: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.t(_ctx.isScore ? "评分过了~" : "壁纸评分"),
        s: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        t: common_vendor.o((...args) => _ctx.clickScoreClose && _ctx.clickScoreClose(...args)),
        v: common_vendor.o(($event) => _ctx.userScore = $event),
        w: common_vendor.p({
          allowHalf: true,
          disabled: _ctx.isScore,
          ["disabled-color"]: "#FFCA3E",
          modelValue: _ctx.userScore
        }),
        x: common_vendor.t(_ctx.userScore),
        y: common_vendor.o((...args) => _ctx.submitScore && _ctx.submitScore(...args)),
        z: !_ctx.userScore || _ctx.isScore,
        A: common_vendor.sr("scorePopup", "2dad6c07-8"),
        B: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
