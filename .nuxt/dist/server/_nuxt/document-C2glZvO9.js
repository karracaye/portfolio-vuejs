import { _ as __nuxt_component_0 } from "./footer-DHW0VvlC.js";
import { ref, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
const _imports_0 = "" + __buildAssetsURL("document-photo2.-xN-3bxy.png");
const _sfc_main = {
  __name: "document",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))} data-v-e84c755b><div class="document text-center top-0 left-0 right-0" data-v-e84c755b><p class="text-white text-8xl font-thin mb-5" data-v-e84c755b>Legal Document</p><p class="text-white text-lg font-thin opacity-50" data-v-e84c755b>Legal Document streamlines legal document creation, management, and storage <br data-v-e84c755b>with a user-friendly interface and robust features, simplifying the complex and <br data-v-e84c755b>time-consuming process of drafting agreements, contracts, and forms.</p><div class="flex justify-center items-center mt-[5rem]" data-v-e84c755b><div class="box-document flex flex-col items-center justify-center mb-60" data-v-e84c755b><p class="text-white text-sm font-thin mb-1" data-v-e84c755b>CLIENT</p><p class="text-white text-sm font-thin opacity-50" data-v-e84c755b>Intelliseven Inc.</p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-e84c755b><p class="text-white text-sm font-thin mb-1" data-v-e84c755b>TIMELINE</p><p class="text-white text-sm font-thin opacity-50" data-v-e84c755b>2 weeks</p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-e84c755b><p class="text-white text-sm font-thin mb-1" data-v-e84c755b>SERVICES</p><p class="text-white text-sm font-thin opacity-50" data-v-e84c755b> Mobile </p></div><div class="box-document flex flex-col items-center justify-center mb-60" data-v-e84c755b><p class="text-white text-sm font-thin mb-1" data-v-e84c755b>WEBSITE</p><p class="text-white text-sm font-thin opacity-50" data-v-e84c755b>Private</p></div></div><div class="more-details flex justify-center items-center mt-[-10rem] mb-7" data-v-e84c755b><a href="/moredetails" class="circle" data-v-e84c755b></a><a href="/moredetails" class="text-white text-xs font-thin opacity-50 ml-2" data-v-e84c755b>MORE DETAILS</a></div><img${ssrRenderAttr("src", _imports_0)} alt="Document Photo 1" class="document-photo w-full document-photo mb-[6rem]" data-v-e84c755b><div class="grid grid-cols-2 mt-10 gap-4" data-v-e84c755b>`);
      if (sticky.value) {
        _push(`<div class="text-white text-sm font-thin text-left transition-all sticky" data-v-e84c755b><p class="mb-3 opacity-50" data-v-e84c755b>CLIENT</p><p class="text-4xl" data-v-e84c755b>Concept, Design, and Development. All-in-one.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-white text-sm font-thin text-left transition-all" style="${ssrRenderStyle(sticky.value ? "visibility:hidden" : "")}" data-v-e84c755b><p class="mb-3 opacity-50" data-v-e84c755b>CLIENT</p><p class="text-4xl" data-v-e84c755b>Concept, Design, and Development. All-in-one.</p></div><div class="box-text text-white text-sm text-left font-thin" data-v-e84c755b><p class="text-2xl mb-3" data-v-e84c755b>Challenge</p><p class="text-sm opacity-30" data-v-e84c755b>Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn&#39;t align with their brand identity.</p></div><div class="text-white text-sm font-thin text-left" data-v-e84c755b></div><div class="box-text text-white text-sm text-left font-thin" data-v-e84c755b><p class="text-2xl mb-3" data-v-e84c755b>Goal</p><p class="text-sm opacity-30" data-v-e84c755b>Our goal was to create a modern and visually appealing website that reflected the client&#39;s brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p></div><div class="text-white text-sm font-thin text-left" data-v-e84c755b></div><div class="box-text text-white text-sm text-left font-thin" data-v-e84c755b><p class="text-2xl mb-3" data-v-e84c755b>Result</p><p class="text-sm opacity-30" data-v-e84c755b>Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client&#39;s website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/document.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const document = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e84c755b"]]);
export {
  document as default
};
//# sourceMappingURL=document-C2glZvO9.js.map
