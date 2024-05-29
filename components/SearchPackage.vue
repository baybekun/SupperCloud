<template>
  <div class="info-form-search inp-search-container">
    <div class="form-group mb-0">
      <button
        type="button"
        class="btn bg-main"
        v-if="displayRs"
        @click="BtnClearClick"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button type="button" class="btn bg-main" v-else>
        <img src="/image/icon-search.png" class="icon" />
      </button>
      <input
        type="text"
        class="form-control"
        v-model="textSearch"
        placeholder="Tìm trong My Drive"
        @keyup="SearchPackage"
      />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.countires-list {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 7px;
  overflow: hidden;
  top: 62px;
  width: 100%;
  z-index: 10;
  padding-top: 10px;
}
.position-absolute {
  position: absolute !important;
}
.countires-list .countries-search-segment {
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
  margin: 9px 20px 9px 19px;
  max-width: 80%;
  text-align: left;
  width: 140px;
}
.countires-list .countries-search-segment p {
  color: #4a4a4a;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 15px;
  margin: 0 auto;
  padding: 7px 20px 6px;
  text-align: center;
}
.countires-list li {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 11px 20px;
}
.country-name {
  padding-left: 12px;
  padding-right: 0;
}
.country-flag {
  height: 28px;
  -o-object-fit: contain;
  object-fit: contain;
  vertical-align: middle;
  width: 37px;
}
.btn {
  height: 45px;
  background: #f0f0f0;
  color: #000;
  font-size: 18px;
}

.form-group,
.form-control {
  background-color: #f0f0f0;
  font-size: 20px;
}

.info-form-search {
  width: 540px;
  height: 55px;
  padding: 8px 8px 8px 18px;
  border-radius: 40px;
  box-shadow: 0px 6px 24px rgb(0 0 0 / 10%);
  font-size: 18px;
  display: flex;
  align-items: center;
  background: #f0f0f0;
}
</style>
