import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("MACBOOK.DfqZUpnr.png");
const _imports_1 = "" + buildAssetsURL("MOCKUP-2.DZNvJ3eo.png");
const _imports_2 = "" + buildAssetsURL("MOCKUP-3.4jb-D3zZ.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))}><div class="document-details text-center mt-[-5rem]"><p class="text-white text-8xl font-thin mb-5">Web Design</p><p class="text-white text-8xl font-thin italic font-serif mb-5">&amp; Framer</p><p class="text-white text-lg font-thin opacity-50">Web Design, Wireframing, and Development services will help your business stand out.</p><div class="more-details flex justify-center items-center mt-[2rem] mb-7"><div class="circle-detail mt-"></div><p class="text-white text-xs font-thin opacity-50">MY SERVICES</p></div><img${ssrRenderAttr("src", _imports_0)} alt="Document Photo 1" class="w-[130rem] mb-[6rem]"><div class="flex justify-center items-center mt-[5rem]"><div class="more-details-info flex flex-col items-center justify-center mb-60"><p class="text-white text-sm font-thin mb-1 opacity-30">Clients</p><p class="text-white text-7xl font-thin opacity-70">12</p></div><div class="more-details-info flex flex-col items-center justify-center mb-60"><p class="text-white text-sm font-thin mb-1 opacity-30">Projects</p><p class="text-white text-7xl font-thin opacity-70">10</p></div><div class="more-details-info flex flex-col items-center justify-center mb-60"><p class="text-white text-sm font-thin mb-1 opacity-30">Happy Clients</p><p class="text-white text-7xl font-thin opacity-70">100%</p></div><div class="more-details-info flex flex-col items-center justify-center mb-60"><p class="text-white text-sm font-thin mb-1 opacity-30">Followers</p><p class="text-white text-7xl font-thin opacity-70">1,575</p></div></div><div class="flex justify-center items-center mt-[-6rem]"><div class="details-content text-left flex flex-col items-left justify-left mb-60"><p class="text-white text-sm font-thin mb-5">WEB DESIGN</p><p class="text-white text-6xl font-thin opacity-50 mb-10">Transforming Your Ideas into Reality</p><img${ssrRenderAttr("src", _imports_1)} alt="Document Photo 1" class="mockup3 w-full mb-[8rem]"><div class="flex flex-col gap-5"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70">CONCEPT</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-2">I take time to understand your business needs and audience to develop a unique concept for your website. I&#39;ll create wireframes that serve as the foundation for your site&#39;s design and functionality.</p></div></div><hr class="opacity-20 mb-10"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70">UX / UI DESIGN</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-2">I&#39;ll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand&#39;s needs and goals while ensuring a seamless user experience.</p></div></div><hr class="opacity-20 mb-10"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70">PROTOTYPE</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-5">With an interactive prototype, you&#39;ll have the ability to test your website&#39;s functionality before it goes live. This will ensure that your website&#39;s design and user experience are optimized for your audience&#39;s needs and preferences.</p></div></div></div></div></div><div class="flex justify-center items-center mt-[-6rem]"><div class="details-content text-left flex flex-col items-left justify-left mb-60"><p class="text-white text-sm font-thin mb-5">DEVELOPMENT</p><p class="text-white text-6xl font-thin opacity-50 mb-10">Developing High-Performance Websites and Web Applications</p><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="mockup3 w-full mb-[8rem]"><div class="flex flex-col gap-5"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70">FRAMER</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-2">I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.</p></div></div><hr class="opacity-20 mb-10"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70"> INTEGRATION</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-2">I can help you streamline your content management process by integrating your website. Say goodbye to manual updates and hello to efficiency.</p></div></div><hr class="opacity-20 mb-10"><div class="grid grid-cols-4 mt-[-1rem] gap-4"><div class="text-white text-sm font-thin text-left"><p class="text-sm mb-3 opacity-70">WEB DESIGN SYSTEM</p></div><div class="text-white text-sm text-left font-thin col-span-3"><p class="text-sm opacity-30 mb-5">I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.</p></div></div></div></div></div><div class="px-[80px]"><p class="text-6xl mb-6 opacity-70 font-thin text-white">GALLERY</p><p class="text-lg mb-10 font-thin text-white opacity-30">Step into the visual narrative of success as you peruse through the gallery showcasing a tapestry of past clients. Each frame encapsulates a unique story of collaboration, dedication, and achievement. </p><div class="grid grid-cols-4 gap-4 mb-4 galleries"><div class="h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div><div class="h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div><div class="col-span-2 h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div></div><div class="grid grid-cols-5 gap-4 galleries"><div class="col-span-2 h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div><div class="h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div><div class="col-span-2 h-[250px] overflow-hidden rounded-xs"><img${ssrRenderAttr("src", _imports_2)} alt="Document Photo 1" class="w-100"></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/moredetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const moredetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { moredetails as default };
//# sourceMappingURL=moredetails-BEDvcZg6.mjs.map
