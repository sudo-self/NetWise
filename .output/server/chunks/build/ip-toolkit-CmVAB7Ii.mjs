import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ip-toolkit",
  __ssrInlineRender: true,
  setup(__props) {
    const publicIP = ref("");
    const ipInput = ref("");
    const ipv4Input = ref("");
    const ipInfo = ref("");
    const convertedResults = ref(null);
    const ipError = ref("");
    const conversionError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-738c2ed5><div class="margins" data-v-738c2ed5><div class="header" data-v-738c2ed5><h1 class="heading" data-v-738c2ed5>IP Toolkit</h1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "home-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="action-button" data-v-738c2ed5${_scopeId}>Home</button>`);
          } else {
            return [
              createVNode("button", { class: "action-button" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="description" data-v-738c2ed5>check, lookup, and convert IPs to other formats.</p><div class="toolkit" data-v-738c2ed5><div class="tool" data-v-738c2ed5><h2 class="tool-title" data-v-738c2ed5>Check Public IP</h2><p class="tool-description" data-v-738c2ed5>Find out your current public IP address.</p><button class="action-button" data-v-738c2ed5>Check IP</button>`);
      if (publicIP.value) {
        _push(`<p class="result" data-v-738c2ed5>Your Public IP: <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(publicIP.value)}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tool" data-v-738c2ed5><h2 class="tool-title" data-v-738c2ed5>IP Lookup</h2><p class="tool-description" data-v-738c2ed5>Look up information about a specific IP address.</p><input${ssrRenderAttr("value", ipInput.value)} type="text" placeholder="Enter IP Address" class="ip-input" data-v-738c2ed5><button class="action-button" data-v-738c2ed5>Lookup IP</button>`);
      if (ipInfo.value) {
        _push(`<p class="result" data-v-738c2ed5>IP Info: <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(ipInfo.value)}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      if (ipError.value) {
        _push(`<p class="error-message" data-v-738c2ed5>${ssrInterpolate(ipError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tool" data-v-738c2ed5><h2 class="tool-title" data-v-738c2ed5>IP Converter</h2><p class="tool-description" data-v-738c2ed5>Convert IPv4 address to different formats.</p><input${ssrRenderAttr("value", ipv4Input.value)} type="text" placeholder="Enter IPv4 Address" class="ip-input" data-v-738c2ed5><button class="action-button" data-v-738c2ed5>Convert IP</button>`);
      if (convertedResults.value) {
        _push(`<div class="converter-results" data-v-738c2ed5><p data-v-738c2ed5><strong data-v-738c2ed5>Decimal:</strong> <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(convertedResults.value.decimal)}</span></p><p data-v-738c2ed5><strong data-v-738c2ed5>Hexadecimal:</strong> <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(convertedResults.value.hex)}</span></p><p data-v-738c2ed5><strong data-v-738c2ed5>Binary:</strong> <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(convertedResults.value.binary)}</span></p><p data-v-738c2ed5><strong data-v-738c2ed5>IPv6:</strong> <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(convertedResults.value.ipv6)}</span></p><p data-v-738c2ed5><strong data-v-738c2ed5>IPv6 (short):</strong> <span class="gradient__text" data-v-738c2ed5>${ssrInterpolate(convertedResults.value.ipv6Short)}</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (conversionError.value) {
        _push(`<p class="error-message" data-v-738c2ed5>${ssrInterpolate(conversionError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tool" data-v-738c2ed5><h2 class="tool-title" data-v-738c2ed5>IP Classes</h2><p class="tool-description" data-v-738c2ed5>Classes, Ranges, and Uses.</p><table class="ip-classes-table" data-v-738c2ed5><thead data-v-738c2ed5><tr data-v-738c2ed5><th data-v-738c2ed5>Class</th><th data-v-738c2ed5>Range</th><th data-v-738c2ed5>Use</th><th data-v-738c2ed5>Public/Private</th><th data-v-738c2ed5>Potential Addresses</th></tr></thead><tbody data-v-738c2ed5><tr data-v-738c2ed5><td data-v-738c2ed5>A</td><td data-v-738c2ed5>1.0.0.0 to 126.0.0.0</td><td data-v-738c2ed5>Large networks, unicast</td><td data-v-738c2ed5>Public</td><td data-v-738c2ed5>16,777,216</td></tr><tr data-v-738c2ed5><td data-v-738c2ed5>B</td><td data-v-738c2ed5>128.0.0.0 to 191.255.0.0</td><td data-v-738c2ed5>Medium networks, unicast</td><td data-v-738c2ed5>Public</td><td data-v-738c2ed5>65,536</td></tr><tr data-v-738c2ed5><td data-v-738c2ed5>C</td><td data-v-738c2ed5>192.0.0.0 to 223.255.255.0</td><td data-v-738c2ed5>Small networks, unicast (small businesses)</td><td data-v-738c2ed5>Public</td><td data-v-738c2ed5>256</td></tr><tr data-v-738c2ed5><td data-v-738c2ed5>D</td><td data-v-738c2ed5>224.0.0.0 to 239.255.255.255</td><td data-v-738c2ed5>Multicast</td><td data-v-738c2ed5>Public</td><td data-v-738c2ed5>N/A</td></tr><tr data-v-738c2ed5><td data-v-738c2ed5>E</td><td data-v-738c2ed5>240.0.0.0 to 255.255.255.255</td><td data-v-738c2ed5>Reserved for future use</td><td data-v-738c2ed5>Reserved</td><td data-v-738c2ed5>N/A</td></tr></tbody></table></div></div></div><footer class="margins footer" data-v-738c2ed5><div class="social" data-v-738c2ed5><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-738c2ed5><span class="gradient__text" data-v-738c2ed5>@iLostmyipad</span></a></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ip-toolkit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ipToolkit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-738c2ed5"]]);

export { ipToolkit as default };
//# sourceMappingURL=ip-toolkit-CmVAB7Ii.mjs.map
