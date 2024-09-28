import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './BENEA-BR_zXXuL.mjs';
import { _ as _imports_0$1, c as _imports_6, a as _imports_1$1, b as _imports_3 } from './lawsys-dgduALWD.mjs';
import { _ as _imports_4$1 } from './mock-up-social-media-Dd1NvbrS.mjs';
import { _ as _imports_7 } from './JCI-Mockup01-CMrjxFXg.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_1 = "" + buildAssetsURL("JCI-Mockup02.D6hhP3K0.jpg");
const _imports_4 = "" + buildAssetsURL("Lawsys-calendar.Bt6qmUpM.png");
const _imports_5 = "" + buildAssetsURL("phone.-xN-3bxy.png");
const _imports_10 = "" + buildAssetsURL("Document-photo1.MWP9eqnJ.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))}><div class="document text-center top-0 left-0 right-0"><p class="text-white text-8xl font-thin mb-5">GALLERY</p><p class="text-white text-lg font-thin opacity-50 mb-4">Explore my collection of user-centered design projects, where creativity meets functionality. Each piece reflects my commitment to intuitive, seamless user experiences that solve real-world problems. Discover how I blend design thinking with a keen eye for detail to create impactful digital interfaces!</p><div class="flex flex-wrap -mx-2 pt-10"><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_0)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_1)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"><img${ssrRenderAttr("src", _imports_0$1)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"><img${ssrRenderAttr("src", _imports_6)} class="w-full shadow-lg rounded mb-4" alt="Wintry Mountain Landscape"></div><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_4)} class="w-full shadow-lg rounded mb-4" alt="Mountains in the Clouds"><img${ssrRenderAttr("src", _imports_5)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_4$1)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"><img${ssrRenderAttr("src", _imports_7)} class="w-full shadow-lg rounded mb-4" alt="Boat on Calm Water"></div><div class="w-full md:w-1/3 px-2 mb-4"><img${ssrRenderAttr("src", _imports_1$1)} class="w-full shadow-lg rounded mb-4" alt="Waves at Sea"><img${ssrRenderAttr("src", _imports_3)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"><img${ssrRenderAttr("src", _imports_10)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"><img${ssrRenderAttr("src", _imports_3)} class="w-full shadow-lg rounded mb-4" alt="Yosemite National Park"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { portfolio as default };
//# sourceMappingURL=portfolio-QV0Kp8JG.mjs.map
