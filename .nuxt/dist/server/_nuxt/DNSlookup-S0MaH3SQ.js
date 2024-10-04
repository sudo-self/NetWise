import { ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "DNSlookup",
  __ssrInlineRender: true,
  setup(__props) {
    const domain = ref("");
    const dnsRecords = ref([]);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-92573548><div class="margins" data-v-92573548><h2 class="sub-heading" data-v-92573548>DNS Lookup Tool</h2><form data-v-92573548><div class="mb-4" data-v-92573548><div class="flex justify-end mt-4" data-v-92573548>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "home-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="action-button" data-v-92573548${_scopeId}>Home</button>`);
          } else {
            return [
              createVNode("button", { class: "action-button" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><label class="block mb-1 gradient__text" data-v-92573548>Domain:</label><input type="text"${ssrRenderAttr("value", domain.value)} class="input-field" placeholder="enter a domain" required data-v-92573548></div><button type="submit" class="action-button gradient__button" data-v-92573548>Lookup DNS Records</button></form><div class="record-types mt-4" data-v-92573548><h3 class="sub-heading" data-v-92573548>Record Types</h3><ul class="record-list" data-v-92573548><li data-v-92573548><span class="gradient__text" data-v-92573548>A:</span> Maps a domain to an IPv4 address.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>AAAA:</span> Maps a domain to an IPv6 address.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>CNAME:</span> Canonical name record that aliases one domain to another.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>MX:</span> Mail exchange record that specifies the mail server for the domain.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>NS:</span> Name server record that indicates which server is authoritative for the domain.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>TXT:</span> Text record that can hold arbitrary text data for various uses, such as verification.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>SOA:</span> Start of authority record that provides information about the domain&#39;s DNS zone.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>SRV:</span> Service record that specifies the location of servers for specified services.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>PTR:</span> Pointer record used for reverse DNS lookups, mapping an IP address to a domain name.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>SPF:</span> Sender Policy Framework record that defines which mail servers are permitted to send email on behalf of the domain.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>DKIM:</span> DomainKeys Identified Mail record that provides a method for validating the authenticity of email messages.</li><li data-v-92573548><span class="gradient__text" data-v-92573548>DMARC:</span> Domain-based Message Authentication, Reporting, and Conformance record that helps protect against email spoofing.</li></ul></div>`);
      if (dnsRecords.value.length) {
        _push(`<div class="mt-6" data-v-92573548><h3 class="sub-heading" data-v-92573548>DNS Records for ${ssrInterpolate(domain.value)}</h3><table class="mac-table" data-v-92573548><thead data-v-92573548><tr data-v-92573548><th data-v-92573548>Type</th><th data-v-92573548>Record</th><th data-v-92573548>TTL</th></tr></thead><tbody data-v-92573548><!--[-->`);
        ssrRenderList(dnsRecords.value, (record, index) => {
          _push(`<tr data-v-92573548><td data-v-92573548>${ssrInterpolate(record.type)}</td><td data-v-92573548>${ssrInterpolate(record.value)}</td><td data-v-92573548>${ssrInterpolate(record.ttl)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="error-message mt-4" data-v-92573548>${ssrInterpolate(errorMessage.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DNSlookup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DNSlookup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92573548"]]);
export {
  DNSlookup as default
};
//# sourceMappingURL=DNSlookup-S0MaH3SQ.js.map
