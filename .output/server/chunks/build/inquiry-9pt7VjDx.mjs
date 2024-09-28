import { _ as __nuxt_component_0 } from './footer-DHW0VvlC.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted", this.formData);
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
      alert("Your inquiry has been submitted!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Footer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden" }, _attrs))} data-v-e6b926db><div class="document text-center top-0 left-0 right-0" data-v-e6b926db><p class="text-white text-8xl font-thin mb-5" data-v-e6b926db>INQUIRE</p><p class="text-white text-lg font-thin opacity-50 mb-4 pb-10" data-v-e6b926db>Thank you for your interest in my work! I\u2019m passionate about creating intuitive and engaging user experiences that meet the unique needs of each project. If you have a question, want to collaborate, or simply wish to discuss design ideas, I\u2019d love to hear from you. Please fill out the inquiry form, and I will get back to you as soon as possible. Let\u2019s create something amazing together!</p><div class="max-w-4xl mx-auto p-8 rounded-lg shadow-lg opacity-3" data-v-e6b926db><h2 class="text-2xl font-thin mb-4 text-center text-white text-" data-v-e6b926db>Inquiry Form</h2><form data-v-e6b926db><div class="mb-4 text-left" data-v-e6b926db><label class="block text-gray-700 pb-3 text-white" for="name" data-v-e6b926db>Name</label><input${ssrRenderAttr("value", $data.formData.name)} type="text" id="name" required class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Juan Dela Cruz" data-v-e6b926db></div><div class="mb-4 text-left" data-v-e6b926db><label class="block text-gray-500 pb-3 text-white" for="email" data-v-e6b926db>Email</label><input${ssrRenderAttr("value", $data.formData.email)} type="email" id="email" required class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="@gmail.com" data-v-e6b926db></div><div class="mb-4 text-left" data-v-e6b926db><label class="block text-gray-700 pb-3 text-white" for="subject" data-v-e6b926db>Subject</label><input${ssrRenderAttr("value", $data.formData.subject)} type="text" id="subject" required class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Subject" data-v-e6b926db></div><div class="mb-4 text-left" data-v-e6b926db><label class="block text-gray-700 pb-3 text-white" for="message" data-v-e6b926db>Message</label><textarea id="message" required class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" rows="4" placeholder="Type here . . . " data-v-e6b926db>${ssrInterpolate($data.formData.message)}</textarea></div><button type="submit" class="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-700" data-v-e6b926db> Send Inquiry </button></form></div><p class="text-gray-500 pt-10" data-v-e6b926db> You can also send inquiries directly to my email address for better communication. </p><p class="text-gray-500 pt-2" data-v-e6b926db> Thank you and have a nice day! </p><p class="text-gray-500 pt-2" data-v-e6b926db> Email Address: karahcaesantillan@gmail.com </p></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inquiry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inquiry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e6b926db"]]);

export { inquiry as default };
//# sourceMappingURL=inquiry-9pt7VjDx.mjs.map
