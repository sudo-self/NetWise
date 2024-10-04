import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
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
  data() {
    return {
      encryptionMethod: "WPA/WPA2",
      ssid: "",
      password: "",
      foregroundColor: "#000000",
      backgroundColor: "#ffffff",
      qrCodeUrl: ""
    };
  },
  methods: {
    generateQRCode() {
      const wifiString = `WIFI:S:${this.ssid};T:${this.encryptionMethod};P:${this.password};;`;
      const colorForeground = this.foregroundColor.replace("#", "");
      const colorBackground = this.backgroundColor.replace("#", "");
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(wifiString)}&size=200x200&color=${colorForeground}&bgcolor=${colorBackground}`;
      this.qrCodeUrl = qrUrl;
    },
    shareQRCode() {
      if (this.qrCodeUrl) {
        if ((void 0).share) {
          (void 0).share({
            title: "WiFi QR Code",
            text: "WiFi Connection Code",
            url: this.qrCodeUrl
          }).then(() => {
            this.$toast.success("QR Code shared successfully!");
          }).catch((error) => {
            this.$toast.error("Error sharing QR Code: " + error);
          });
        } else {
          (void 0).clipboard.writeText(this.qrCodeUrl).then(() => {
            this.$toast.success("QR Code link copied to clipboard!");
          }).catch(() => {
            this.$toast.error("Failed to copy QR Code link.");
          });
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-27a517ad><div class="margins" data-v-27a517ad><div class="header flex items-center justify-between" data-v-27a517ad><h1 class="heading" data-v-27a517ad>WIFI Toolkit</h1>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "home-button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="home-button-style" data-v-27a517ad${_scopeId}>Home</button>`);
      } else {
        return [
          createVNode("button", { class: "home-button-style" }, "Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><p class="description" data-v-27a517ad> Welcome to the Technician WIFI Toolkit. Here you can access a GUI or create a WIFI QR Code. </p><div class="qr-generator tool" data-v-27a517ad><h2 class="sub-heading" data-v-27a517ad>WiFi QR Code Generator</h2><form data-v-27a517ad><div class="mb-4" data-v-27a517ad><label class="block mb-1 gradient__text" data-v-27a517ad>Encryption Method:</label><select class="input-field" data-v-27a517ad><option value="WPA/WPA2" data-v-27a517ad${ssrIncludeBooleanAttr(Array.isArray($data.encryptionMethod) ? ssrLooseContain($data.encryptionMethod, "WPA/WPA2") : ssrLooseEqual($data.encryptionMethod, "WPA/WPA2")) ? " selected" : ""}>WPA/WPA2</option><option value="WEP" data-v-27a517ad${ssrIncludeBooleanAttr(Array.isArray($data.encryptionMethod) ? ssrLooseContain($data.encryptionMethod, "WEP") : ssrLooseEqual($data.encryptionMethod, "WEP")) ? " selected" : ""}>WEP</option><option value="None" data-v-27a517ad${ssrIncludeBooleanAttr(Array.isArray($data.encryptionMethod) ? ssrLooseContain($data.encryptionMethod, "None") : ssrLooseEqual($data.encryptionMethod, "None")) ? " selected" : ""}>None</option></select></div><div class="mb-4" data-v-27a517ad><label class="block mb-1 gradient__text" data-v-27a517ad>SSID:</label><input type="text"${ssrRenderAttr("value", $data.ssid)} class="input-field" required data-v-27a517ad></div><div class="mb-4" data-v-27a517ad><label class="block mb-1 gradient__text" data-v-27a517ad>Password:</label><input type="password"${ssrRenderAttr("value", $data.password)} class="input-field" required data-v-27a517ad></div><div class="mb-4" data-v-27a517ad><label class="block mb-1 gradient__text" data-v-27a517ad>Foreground Color:</label><input type="color"${ssrRenderAttr("value", $data.foregroundColor)} class="color-picker-input" data-v-27a517ad></div><div class="mb-4" data-v-27a517ad><label class="block mb-1 gradient__text" data-v-27a517ad>Background Color:</label><input type="color"${ssrRenderAttr("value", $data.backgroundColor)} class="color-picker-input" data-v-27a517ad></div><button type="submit" class="action-button gradient__button" data-v-27a517ad>Generate QR Code</button></form>`);
  if ($data.qrCodeUrl) {
    _push(`<div class="mt-6" data-v-27a517ad><h3 class="sub-heading" data-v-27a517ad>Scan to Connect</h3><img${ssrRenderAttr("src", $data.qrCodeUrl)} alt="WiFi QR Code" class="qr-code" data-v-27a517ad><button class="share-button gradient__button" data-v-27a517ad>Share QR Code</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="tool wifi-channels" data-v-27a517ad><table class="mac-table" data-v-27a517ad><thead data-v-27a517ad><tr data-v-27a517ad><th data-v-27a517ad>Frequency Band</th><th data-v-27a517ad>Channel Number</th><th data-v-27a517ad>Bandwidth (MHz)</th></tr></thead><tbody data-v-27a517ad><tr data-v-27a517ad><td rowspan="3" data-v-27a517ad>2.4 GHz</td><td data-v-27a517ad>1</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td data-v-27a517ad>6</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td data-v-27a517ad>11</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td rowspan="3" data-v-27a517ad>5 GHz</td><td data-v-27a517ad>36</td><td data-v-27a517ad>20 / 40</td></tr><tr data-v-27a517ad><td data-v-27a517ad>44</td><td data-v-27a517ad>20 / 40</td></tr><tr data-v-27a517ad><td data-v-27a517ad>149</td><td data-v-27a517ad>20 / 40</td></tr></tbody></table></div><footer class="margins footer" data-v-27a517ad><div class="social" data-v-27a517ad><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-27a517ad><span class="gradient__text" data-v-27a517ad>@iLostmyipad</span></a></div></footer></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/WifiToolkit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WifiToolkit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-27a517ad"]]);

export { WifiToolkit as default };
//# sourceMappingURL=WifiToolkit-BczDfwBB.mjs.map
