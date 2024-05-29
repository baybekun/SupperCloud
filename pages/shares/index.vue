<script setup>
definePageMeta({
  layout: "",
});
</script>
<template>
  <div>
    <header class="top-menu shadow-sm bg-white">
      <div class="row flex items-center">
        <nav class="container flex items-center">
          <div class="row logo pad">
            <img
              src="/image/logo.png"
              alt="logo"
              class="logo-detail col-lg-1"
            />
            <NuxtLink to="/" class="header-name col-lg-6">SuperCloud</NuxtLink>
          </div>
          <div class="searchs pad">
            <SearchPackage />
          </div>
          <UserDropDown />
        </nav>
      </div>
    </header>
    <main>
      <div class="color-main">
        <div class="row">
          <div class="nav-bar col-6">
            <ul class="navbar-vertical">
              <li :class="{ active: currentPage === 'home' }">
                <NuxtLink to="/bodymain" @click="navigateToPage('home')"
                  >Trang Chủ</NuxtLink
                >
              </li>
              <li :class="{ active: currentPage === 'recently' }">
                <NuxtLink to="/recently" @click="navigateToPage('recently')"
                  >Gần Đây</NuxtLink
                >
              </li>
              <li :class="{ active: currentPage === 'mydrive' }">
                <NuxtLink to="/mydrive" @click="navigateToPage('mydrive')"
                  >Của tôi</NuxtLink
                >
              </li>
              <li :class="{ active: currentPage === 'shares' }">
                <NuxtLink to="/shares" @click="navigateToPage('shares')"
                  >Được Chia Sẻ</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="show-main col-8">
            <!-- Hiển thị file -->
            <div class="cards"></div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="row">
        <div class="col-lg-8 col-12">
          <ul class="list-menu-footer">
            <li class="menu-item-footer">
              <nuxt-link to="/" title="Giới thiệu SuperCloudFake"
                >@2024 Super Cloud</nuxt-link
              >
            </li>
            <li class="menu-item-footer">
              <nuxt-link to="/more-info/privacy-policy" target="_self"
                >Privacy Policy</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  data() {
    return {
      currentPage: "shares",
    };
  },
  methods: {
    navigateToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>
<style>
.header-name {
  color: #353b39;
  font-size: 50px;
  font-family: Labernia Condensed Light;
}
.row {
  display: flex;
  padding: 10px;
}
.top-menu {
  background-color: #e1e1e1;
}
.logo-detail {
  height: 100px;
  padding-right: 10px;
}
.nav-bar {
  width: 20%;
  position: relative;
  top: 45px;
}
.color-main {
  background-color: #e1e1e1;
  z-index: -1;
}
.show-main {
  background-color: #fff;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.navbar-vertical {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.navbar-vertical li {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
.navbar-vertical li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #353b39;
  font-size: 25px;
}
.navbar-vertical li a:hover {
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: #353b39;
  color: #fff;
  border-radius: 20px;
}
.navbar-vertical li.active a {
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: #353b39;
  color: #fff;
  border-radius: 20px;
}
.login-register {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: -35%;
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
.list-menu-footer {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
}
.menu-item-footer {
  display: inline-block;
  margin-right: 20px;
}
.menu-item-footer:last-child {
  margin-right: 0;
}
.cards {
  min-height: 500px;
}
.pad {
  padding-right: 14%;
}
</style>
