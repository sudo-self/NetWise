<template>
  <div>
    <div class="tooltip-container">
      <button
        class="floating-button"
        @mousedown="handleMouseDown"
        @touchstart="handleMouseDown"
        ref="floatingButton"
        :style="{ backgroundImage: `url(${buttonImage})` }"
      >
        <span class="tooltip">Speed Test</span>
      </button>
    </div>

    <div v-if="showPopup" class="popup" @click.self="togglePopup">
      <div class="popup-content">
        <iframe
          src="https://Fast.com"
          class="popup-iframe"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingButton",
  data() {
    return {
      showPopup: false,
      buttonImage: "https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/EmojioneMonotoneOwl.png",
      isDragging: false,
      offset: { x: 0, y: 0 },
      startX: 0,
      startY: 0,
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

      // Store the starting position for drag
      this.startX = clientX;
      this.startY = clientY;
      this.offset.x =
        clientX - this.$refs.floatingButton.getBoundingClientRect().left;
      this.offset.y =
        clientY - this.$refs.floatingButton.getBoundingClientRect().top;

      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("touchmove", this.onDrag);
      document.addEventListener("mouseup", this.handleMouseUp);
      document.addEventListener("touchend", this.handleMouseUp);
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
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("touchmove", this.onDrag);
      document.removeEventListener("mouseup", this.handleMouseUp);
      document.removeEventListener("touchend", this.handleMouseUp);

      // Check if it was a drag or a click
      if (!this.isDragging) {
        this.togglePopup();
      }

      // Reset dragging state
      this.isDragging = false;
    },
  },
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  white-space: nowrap;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: none;
  width: 100%;
  max-width: 800px;
  height: 90vh;
  box-shadow: none;
  border: none;
  padding: 0;
}

.popup-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 600px) {
  .floating-button {
    width: 40px;
    height: 40px;
  }
  .popup-content {
    height: 80vh;
  }
}
</style>
