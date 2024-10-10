import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
  name: "FloatingButton",
  data() {
    return {
      showPopup: false,
      buttonImage: "https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/EmojioneMonotoneOwl.png",
      isDragging: false,
      offset: { x: 0, y: 0 },
      startX: 0,
      startY: 0
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    handleMouseDown(event) {
      const isTouch = event.type === "touchstart";
      const clientX = isTouch ? event.touches[0].clientX : event.clientX;
      const clientY = isTouch ? event.touches[0].clientY : event.clientY;
      this.startX = clientX;
      this.startY = clientY;
      this.offset.x = clientX - this.$refs.floatingButton.getBoundingClientRect().left;
      this.offset.y = clientY - this.$refs.floatingButton.getBoundingClientRect().top;
      (void 0).addEventListener("mousemove", this.onDrag);
      (void 0).addEventListener("touchmove", this.onDrag);
      (void 0).addEventListener("mouseup", this.handleMouseUp);
      (void 0).addEventListener("touchend", this.handleMouseUp);
    },
    onDrag(event) {
      const clientX = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
      const clientY = event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
      const deltaX = Math.abs(clientX - this.startX);
      const deltaY = Math.abs(clientY - this.startY);
      if (deltaX > 5 || deltaY > 5) {
        this.isDragging = true;
        const button = this.$refs.floatingButton;
        const x = clientX - this.offset.x;
        const y = clientY - this.offset.y;
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
      }
    },
    handleMouseUp(event) {
      (void 0).removeEventListener("mousemove", this.onDrag);
      (void 0).removeEventListener("touchmove", this.onDrag);
      (void 0).removeEventListener("mouseup", this.handleMouseUp);
      (void 0).removeEventListener("touchend", this.handleMouseUp);
      if (!this.isDragging) {
        this.togglePopup();
      }
      this.isDragging = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7d4b4014><div class="tooltip-container" data-v-7d4b4014><button class="floating-button" style="${ssrRenderStyle({ backgroundImage: `url(${$data.buttonImage})` })}" data-v-7d4b4014><span class="tooltip" data-v-7d4b4014>Speed Test</span></button></div>`);
  if ($data.showPopup) {
    _push(`<div class="popup" data-v-7d4b4014><div class="popup-content" data-v-7d4b4014><iframe src="https://Fast.com" class="popup-iframe" frameborder="0" data-v-7d4b4014></iframe></div></div>`);
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
const FloatingButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7d4b4014"]]);

export { FloatingButton as default };
//# sourceMappingURL=FloatingButton-KjcgKoT5.mjs.map
