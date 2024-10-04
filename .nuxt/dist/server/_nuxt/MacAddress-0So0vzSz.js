import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MacAddress",
  __ssrInlineRender: true,
  setup(__props) {
    const macInput = ref("");
    const macInfo = ref("");
    const ouiInfo = ref("");
    const macError = ref("");
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-c25266fd><div class="margins" data-v-c25266fd><div class="header" data-v-c25266fd><h1 class="heading" data-v-c25266fd>MAC Address Toolkit</h1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "home-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="action-button" data-v-c25266fd${_scopeId}>Home</button>`);
          } else {
            return [
              createVNode("button", { class: "action-button" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="description" data-v-c25266fd> Welcome to the Technician MAC Address Toolkit. Here you can manage MAC address information and tools. </p><div class="toolkit" data-v-c25266fd><div class="tool" data-v-c25266fd><h2 class="tool-title" data-v-c25266fd>MAC Address Lookup</h2><p class="tool-description" data-v-c25266fd>Look up information about a specific MAC address.</p><input${ssrRenderAttr("value", macInput.value)} type="text" placeholder="Enter MAC Address" class="mac-input"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-c25266fd><button class="action-button"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-c25266fd>`);
      if (isLoading.value) {
        _push(`<span data-v-c25266fd>Loading...</span>`);
      } else {
        _push(`<span data-v-c25266fd>Lookup MAC</span>`);
      }
      _push(`</button>`);
      if (macInfo.value) {
        _push(`<p class="result" data-v-c25266fd> MAC Info: <span class="gradient__text" data-v-c25266fd>${ssrInterpolate(macInfo.value)}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      if (macError.value) {
        _push(`<p class="error-message" data-v-c25266fd>${ssrInterpolate(macError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (ouiInfo.value) {
        _push(`<div class="tool" data-v-c25266fd><h2 class="tool-title" data-v-c25266fd>OUI Breakdown</h2><p class="tool-description" data-v-c25266fd>Details about the OUI of the MAC address.</p><pre class="result" data-v-c25266fd><code data-v-c25266fd>${ssrInterpolate(ouiInfo.value)}</code></pre></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="toolkit" data-v-c25266fd><h2 class="tool-title" data-v-c25266fd><span class="gradient__text" data-v-c25266fd>Media Access Control</span></h2><p class="tool-description" data-v-c25266fd>The mac address identifies different devices that share the same local network.</p><table class="mac-table" data-v-c25266fd><thead data-v-c25266fd><tr data-v-c25266fd><th data-v-c25266fd>Component</th><th data-v-c25266fd>Description</th></tr></thead><tbody data-v-c25266fd><tr data-v-c25266fd><td data-v-c25266fd>Organizationally Unique Identifier (OUI)</td><td data-v-c25266fd>The first 6 characters of a MAC address identify the manufacturer.</td></tr><tr data-v-c25266fd><td data-v-c25266fd>Universally Administered Address (UAA)</td><td data-v-c25266fd>The last 6 characters uniquely identify a device within the OUI.</td></tr></tbody></table></div><footer class="margins footer" data-v-c25266fd><div class="social" data-v-c25266fd><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-c25266fd><span class="gradient__text" data-v-c25266fd>@iLostmyipad</span></a></div></footer></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MacAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MacAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c25266fd"]]);
export {
  MacAddress as default
};
//# sourceMappingURL=MacAddress-0So0vzSz.js.map
