import { ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "Ping",
  __ssrInlineRender: true,
  setup(__props) {
    const pingUrl = ref("");
    const loading = ref(false);
    const pingResult = ref(null);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-52f782ca><div class="margins" data-v-52f782ca><h2 class="sub-heading" data-v-52f782ca>PING Toolkit</h2><div class="flex justify-end mt-4" data-v-52f782ca>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "home-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="action-button" data-v-52f782ca${_scopeId}>Home</button>`);
          } else {
            return [
              createVNode("button", { class: "action-button" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="description" data-v-52f782ca>Check the reachability of a host by sending ping requests.</p><div class="input-group" data-v-52f782ca><input type="text"${ssrRenderAttr("value", pingUrl.value)} placeholder="Enter URL to ping https://" class="input-field" data-v-52f782ca><button class="action-button" data-v-52f782ca>Ping</button></div>`);
      if (loading.value) {
        _push(`<div class="loading" data-v-52f782ca>Pinging...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (pingResult.value) {
        _push(`<div class="record-types" data-v-52f782ca><h3 class="sub-heading" data-v-52f782ca>Ping Result:</h3><p data-v-52f782ca><strong data-v-52f782ca>IP:</strong> ${ssrInterpolate(pingResult.value.ip)}</p><p data-v-52f782ca><strong data-v-52f782ca>Requests:</strong> ${ssrInterpolate(pingResult.value.requests)}</p><p data-v-52f782ca><strong data-v-52f782ca>Loss:</strong> ${ssrInterpolate(pingResult.value.loss)}%</p><p data-v-52f782ca><strong data-v-52f782ca>Latency:</strong> ${ssrInterpolate(pingResult.value.latency)} ms</p><p data-v-52f782ca><strong data-v-52f782ca>Min:</strong> ${ssrInterpolate(pingResult.value.min)} ms</p><p data-v-52f782ca><strong data-v-52f782ca>Max:</strong> ${ssrInterpolate(pingResult.value.max)} ms</p><p data-v-52f782ca><strong data-v-52f782ca>Avg:</strong> ${ssrInterpolate(pingResult.value.avg)} ms</p><p data-v-52f782ca><strong data-v-52f782ca>Standard Deviation:</strong> ${ssrInterpolate(pingResult.value.stdDev)} ms</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="error-message" data-v-52f782ca>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Ping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ping = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52f782ca"]]);

export { Ping as default };
//# sourceMappingURL=Ping-BI_2cYTc.mjs.map
