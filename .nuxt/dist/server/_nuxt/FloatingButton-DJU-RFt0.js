import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  name: "FloatingButton",
  data() {
    return {
      showPopup: false,
      buttonImage: "https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/EmojioneMonotoneOwl.png",
      isDragging: false,
      offset: { x: 0, y: 0 }
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    startDrag(event) {
      this.isDragging = true;
      event.preventDefault();
      const button = this.$refs.floatingButton;
      this.offset.x = (event.clientX || event.touches[0].clientX) - button.getBoundingClientRect().left;
      this.offset.y = (event.clientY || event.touches[0].clientY) - button.getBoundingClientRect().top;
      (void 0).addEventListener("mousemove", this.onDrag);
      (void 0).addEventListener("mouseup", this.stopDrag);
      (void 0).addEventListener("touchmove", this.onDrag);
      (void 0).addEventListener("touchend", this.stopDrag);
    },
    onDrag(event) {
      if (!this.isDragging) return;
      event.preventDefault();
      const button = this.$refs.floatingButton;
      const x = (event.clientX || event.touches[0].clientX) - this.offset.x;
      const y = (event.clientY || event.touches[0].clientY) - this.offset.y;
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    },
    stopDrag() {
      this.isDragging = false;
      (void 0).removeEventListener("mousemove", this.onDrag);
      (void 0).removeEventListener("mouseup", this.stopDrag);
      (void 0).removeEventListener("touchmove", this.onDrag);
      (void 0).removeEventListener("touchend", this.stopDrag);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ba85c0e1><button class="floating-button" style="${ssrRenderStyle({ backgroundImage: `url(${$data.buttonImage})` })}" data-v-ba85c0e1></button>`);
  if ($data.showPopup) {
    _push(`<div class="popup" data-v-ba85c0e1><div class="popup-content" data-v-ba85c0e1><iframe src="https://play.vuejs.org/" class="popup-iframe" frameborder="0" data-v-ba85c0e1></iframe></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/FloatingButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FloatingButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ba85c0e1"]]);
export {
  FloatingButton as default
};
//# sourceMappingURL=FloatingButton-DJU-RFt0.js.map
