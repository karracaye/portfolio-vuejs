import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-CJTjZsXs.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_3$1 } from "./virtual_public-CXbBRG9e.js";
import { _ as _imports_3 } from "./virtual_public-DRzQPXW0.js";
import { _ as _imports_4$1 } from "./virtual_public-Cmuws4Fh.js";
import { _ as _imports_7 } from "./virtual_public-DsrEbBNu.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _imports_1 = publicAssetsURL("/img/JCI-Mockup02.jpg");
const _imports_4 = publicAssetsURL("/img/Lawsys-calendar.png");
const _imports_5 = publicAssetsURL("/img/phone.png");
const _imports_10 = publicAssetsURL("/img/Document-photo1.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))}><div class="document text-center top-0 left-0 right-0"><p class="text-white text-8xl font-thin mb-5">GALLERY</p><p class="text-white text-lg font-thin opacity-50 mb-4">Explore my collection of user-centered design projects, where creativity meets functionality. Each piece reflects my commitment to intuitive, seamless user experiences that solve real-world problems. Discover how I blend design thinking with a keen eye for detail to create impactful digital interfaces!</p><div class="flex flex-wrap -mx-2 pt-10"><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_0)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_1)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"><img${ssrRenderAttr("src", _imports_0$1)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"><img${ssrRenderAttr("src", _imports_3)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"></div><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_4)} class="w-full shadow-lg rounded mb-4" alt="Mountains in the Clouds"><img${ssrRenderAttr("src", _imports_5)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_4$1)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_7)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"></div><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_1$1)} class="w-full shadow-lg rounded mb-4" alt="Waves at Sea"><img${ssrRenderAttr("src", _imports_3$1)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"><img${ssrRenderAttr("src", _imports_10)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"><img${ssrRenderAttr("src", _imports_3$1)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolio as default
};
//# sourceMappingURL=portfolio-B1EDAktW.js.map
