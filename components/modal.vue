<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <button class="close-button" @click="close">Close</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  position: relative;
  height: 65%;
}

.close-button {
  background-color: #e22a2a;
  color: #fff;
  width: 8%;
  height: 8%;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
