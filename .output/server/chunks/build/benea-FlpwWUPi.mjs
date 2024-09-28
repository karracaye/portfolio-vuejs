import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './footer-DHW0VvlC.mjs';
import { ref, onUnmounted, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("BENEA.h3m6ufRe.png");
const _sfc_main = {
  __name: "benea",
  __ssrInlineRender: true,
  setup(__props) {
    const sticky = ref(false);
    const handleScroll = () => {
      sticky.value = (void 0).pageYOffset > 1300;
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))} data-v-2f83489f><div class="document text-center top-0 left-0 right-0" data-v-2f83489f><p class="text-white text-8xl font-thin mb-5" data-v-2f83489f>BENEA</p><p class="text-white text-lg font-thin opacity-50 mb-4" data-v-2f83489f>&quot;Building Beyond, Crafting Your Future Home&quot;</p><p class="text-white text-lg font-thin opacity-50" data-v-2f83489f>Our highly experienced painters at Benea Painting Contractors can transform any space for you. <br data-v-2f83489f> Dedicated to making sure that you are completely satisfied and happy with our prices and the quality of our results.</p><div class="flex justify-center items-center mt-[5rem]" data-v-2f83489f><div class="box-document flex flex-col items-center justify-center mb-60" data-v-2f83489f><p class="text-white text-sm font-thin mb-1" data-v-2f83489f>CLIENT</p><p class="text-white text-sm font-thin opacity-50" data-v-2f83489f>Benea Painting Ltd.</p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-2f83489f><p class="text-white text-sm font-thin mb-1" data-v-2f83489f>TIMELINE</p><p class="text-white text-sm font-thin opacity-50" data-v-2f83489f>2 weeks</p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-2f83489f><p class="text-white text-sm font-thin mb-1" data-v-2f83489f>SERVICES</p><p class="text-white text-sm font-thin opacity-50" data-v-2f83489f> Web Design </p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-2f83489f><p class="text-white text-sm font-thin mb-1" data-v-2f83489f>UI LINK</p><p class="text-white text-sm font-thin opacity-50" data-v-2f83489f>https://rb.gy/2z5kl6</p></div></div><div class="more-details flex justify-center items-center mt-[-10rem] mb-7" data-v-2f83489f><div class="circle" data-v-2f83489f></div><p class="text-white text-xs font-thin opacity-50 ml-2" data-v-2f83489f>MORE DETAILS</p></div><img${ssrRenderAttr("src", _imports_0)} alt="Document Photo 1" class="document-photo w-full document-photo mb-[6rem]" data-v-2f83489f><div class="grid grid-cols-2 mt-10 gap-4" data-v-2f83489f>`);
      if (sticky.value) {
        _push(`<div class="text-white text-sm font-thin text-left transition-all sticky" data-v-2f83489f><p class="mb-3 opacity-50" data-v-2f83489f>CLIENT</p><p class="text-4xl" data-v-2f83489f>Concept, Design, and Development. All-in-one.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-white text-sm font-thin text-left transition-all" style="${ssrRenderStyle(sticky.value ? "visibility:hidden" : "")}" data-v-2f83489f><p class="mb-3 opacity-50" data-v-2f83489f>CLIENT</p><p class="text-4xl" data-v-2f83489f>Concept, Design, and Development. All-in-one.</p></div><div class="box-text text-white text-sm text-left font-thin" data-v-2f83489f><p class="text-2xl mb-3" data-v-2f83489f>Challenge</p><p class="text-sm opacity-30" data-v-2f83489f>Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn&#39;t align with their brand identity.</p></div><div class="text-white text-sm font-thin text-left" data-v-2f83489f></div><div class="box-text text-white text-sm text-left font-thin" data-v-2f83489f><p class="text-2xl mb-3" data-v-2f83489f>Goal</p><p class="text-sm opacity-30" data-v-2f83489f>Our goal was to create a modern and visually appealing website that reflected the client&#39;s brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p></div><div class="text-white text-sm font-thin text-left" data-v-2f83489f></div><div class="box-text text-white text-sm text-left font-thin" data-v-2f83489f><p class="text-2xl mb-3" data-v-2f83489f>Result</p><p class="text-sm opacity-30" data-v-2f83489f>Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client&#39;s website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/benea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f83489f"]]);

export { benea as default };
//# sourceMappingURL=benea-FlpwWUPi.mjs.map
