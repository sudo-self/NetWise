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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-e189b2ad><div class="margins" data-v-e189b2ad><h2 class="sub-heading" data-v-e189b2ad>PING Toolkit</h2><div class="flex justify-end mt-4" data-v-e189b2ad>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "home-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="action-button" data-v-e189b2ad${_scopeId}>Home</button>`);
          } else {
            return [
              createVNode("button", { class: "action-button" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h4 class="description" data-v-e189b2ad>Check the reachability of a host by sending ping requests.</h4><div class="input-group" data-v-e189b2ad><input type="text"${ssrRenderAttr("value", pingUrl.value)} placeholder="Enter URL to ping https://" class="input-field" data-v-e189b2ad><button class="action-button" data-v-e189b2ad>Ping</button></div>`);
      if (loading.value) {
        _push(`<div class="loading" data-v-e189b2ad>Pinging...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (pingResult.value) {
        _push(`<div class="record-types" data-v-e189b2ad><h3 class="sub-heading" data-v-e189b2ad>Ping Result:</h3><p data-v-e189b2ad><strong data-v-e189b2ad>IP:</strong> ${ssrInterpolate(pingResult.value.ip)}</p><p data-v-e189b2ad><strong data-v-e189b2ad>Requests:</strong> ${ssrInterpolate(pingResult.value.requests)}</p><p data-v-e189b2ad><strong data-v-e189b2ad>Loss:</strong> ${ssrInterpolate(pingResult.value.loss)}%</p><p data-v-e189b2ad><strong data-v-e189b2ad>Latency:</strong> ${ssrInterpolate(pingResult.value.latency)} ms</p><p data-v-e189b2ad><strong data-v-e189b2ad>Min:</strong> ${ssrInterpolate(pingResult.value.min)} ms</p><p data-v-e189b2ad><strong data-v-e189b2ad>Max:</strong> ${ssrInterpolate(pingResult.value.max)} ms</p><p data-v-e189b2ad><strong data-v-e189b2ad>Avg:</strong> ${ssrInterpolate(pingResult.value.avg)} ms</p><p data-v-e189b2ad><strong data-v-e189b2ad>Standard Deviation:</strong> ${ssrInterpolate(pingResult.value.stdDev)} ms</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="error-message" data-v-e189b2ad>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="sub-heading mt-8" data-v-e189b2ad>Ping Command</h3><p class="description" data-v-e189b2ad> Ping is a network utility tool used to test the reachability of a host on an Internet Protocol (IP) network. It sends Internet Control Message Protocol (ICMP) Echo Request messages to the target host and waits for an Echo Reply. The results provide information on the IP address of the host, the number of requests sent, the packet loss percentage, and the round-trip time it takes for the packets to travel to the host and back. </p><h3 class="sub-heading mt-8" data-v-e189b2ad>Examples</h3><ul class="record-list" data-v-e189b2ad><li data-v-e189b2ad><span class="gradient__text" data-v-e189b2ad>Example 1:</span><pre data-v-e189b2ad>PING google.com (142.250.190.14): 56 data bytes
64 bytes from 142.250.190.14: icmp_seq=1 ttl=117 time=14.3 ms</pre></li><li data-v-e189b2ad><span class="gradient__text" data-v-e189b2ad>Example 2:</span><pre data-v-e189b2ad>PING example.com (93.184.216.34): 56 data bytes
64 bytes from 93.184.216.34: icmp_seq=1 ttl=59 time=15.7 ms</pre></li><li data-v-e189b2ad><span class="gradient__text" data-v-e189b2ad>Example 3:</span><pre data-v-e189b2ad>PING localhost (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</pre></li><li data-v-e189b2ad><span class="gradient__text" data-v-e189b2ad>Example 4:</span><pre data-v-e189b2ad>PING non-existent-domain.com (0.0.0.0): 56 data bytes
ping: non-existent-domain.com: Name or service not known</pre></li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Ping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ping = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e189b2ad"]]);

export { Ping as default };
//# sourceMappingURL=Ping-HvHaB_uv.mjs.map
