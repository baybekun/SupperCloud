<template>
  <div class="login-register pad">
    <div class="section-user">
      <ul>
        <li @click="toggleDropdown">
          <i class="fa-regular fa-circle-user"></i>
          <span> User </span>
          <!-- kiểm tra tk thường hay vip, biến này lấy bên trang profile -->
          <div v-if="isFormSuccess">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <!-- end -->
          <i class="fa-solid fa-caret-right"></i>
        </li>
      </ul>
      <div v-if="showDropdown" class="show-dropdown">
        <ul>
          <li><NuxtLink to="/updateaccount">Update</NuxtLink></li>
        </ul>
        <hr />
        <ul>
          <li><NuxtLink to="/profile">Profile</NuxtLink></li>
        </ul>
        <hr />
        <ul>
          <li><NuxtLink to="/">Log Out</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// check xem tk này đã nạp vip chưa
import { ref, onMounted } from "vue";

const isFormSuccess = ref(false);

onMounted(() => {
  isFormSuccess.value = localStorage.getItem("formSuccess") === "true";
});
// end
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    },
  },
};
</script>

<style scoped>
.pad {
  padding-right: 14%;
}
.show-dropdown {
  width: 53%;
  position: absolute;
  left: 33%;
  top: -25px;
  background-color: #fff;
  border: 2px #d4d4d4 solid;
  border-radius: 5px;
  display: grid;
  justify-content: center;
}
.section-user ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}
.section-user ul li {
  margin-right: 10px;
}
.section-user ul li:last-child {
  margin-right: 0;
}
.login-register {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: -35%;
}
</style>
