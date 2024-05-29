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
            <div class="cards">
              <div class="title-form">
                <p>Tên</p>
                <p>Ngày</p>
                <p>Size</p>
                <p></p>
              </div>
              <div
                v-for="(file, index) in uploadedFiles"
                :key="index"
                class="file-item"
              >
                <p @click="openModal(index)">{{ file.name }}</p>
                <p>{{ file.date }}</p>
                <p>{{ file.size }}</p>
                <button @click="toggleDropdown(index)">:</button>
                <div v-if="file.showDropdown" class="dropdown">
                  <ul>
                    <li><button @click="editFile(index)">Chia Sẻ</button></li>
                    <hr />
                    <li><button @click="deleteFile(index)">Xóa</button></li>
                    <hr />
                    <li><button @click="renameFile(index)">Đổi tên</button></li>
                  </ul>
                </div>
              </div>
            </div>
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
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <div class="modal-content">
        <div class="title-modal">
          <h3>Files in {{ selectedFolderName }}</h3>
        </div>
        <div class="title-form">
          <p>Tên</p>
          <p>Ngày</p>
          <p>Size</p>
          <p></p>
        </div>
        <div
          v-for="(file, index) in selectedFiles"
          :key="index"
          class="file-item"
        >
          <p>{{ file.name }}</p>
          <p>{{ file.date }}</p>
          <p>{{ file.size }}</p>
          <button @click="toggleDropdownModal(index)">:</button>
          <div v-if="file.showDropdown" class="dropdown">
            <ul>
              <li><button @click="editFileModal(index)">Chia Sẻ</button></li>
              <hr />
              <li><button @click="deleteFileModal(index)">Xóa</button></li>
              <hr />
              <li><button @click="renameFileModal(index)">Đổi tên</button></li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Modal from "../../components/modal.vue";
import axios from "axios";

const currentPage = ref("mydrive");
const uploadedFiles = ref([
  {
    name: "minh1",
    date: "10/3/2024",
    size: "20kb",
    showDropdown: false,
    files: [
      { name: "file a", date: "11/3/2024", size: "5kb", showDropdown: false },
      { name: "flie b", date: "12/3/2024", size: "10kb", showDropdown: false },
      { name: "file c", date: "13/3/2024", size: "15kb", showDropdown: false },
    ],
  },
  {
    name: "minh2",
    date: "1/3/2024",
    size: "1kb",
    showDropdown: false,
    files: [
      { name: "file d", date: "2/3/2024", size: "2kb", showDropdown: false },
      { name: "file e", date: "3/3/2024", size: "4kb", showDropdown: false },
      { name: "file f", date: "4/3/2024", size: "6kb", showDropdown: false },
    ],
  },
]);
const selectedFiles = ref([]);
const selectedFolderName = ref("");
const isModalOpen = ref(false);

const toggleDropdown = (index) => {
  // Đóng tất cả các dropdown khác
  uploadedFiles.value.forEach((file, i) => {
    if (i !== index) file.showDropdown = false;
  });
  // Đảo ngược trạng thái hiển thị dropdown cho file tương ứng
  uploadedFiles.value[index].showDropdown =
    !uploadedFiles.value[index].showDropdown;
};
const toggleDropdownModal = (index) => {
  // Đóng tất cả các dropdown khác
  selectedFiles.value.forEach((file, i) => {
    if (i !== index) file.showDropdown = false;
  });
  // Đảo ngược trạng thái hiển thị dropdown cho file tương ứng
  selectedFiles.value[index].showDropdown =
    !selectedFiles.value[index].showDropdown;
};
const handleClickOutside = (event) => {
  // Đóng dropdown nếu click ra ngoài
  if (!event.target.closest(".dropdown")) {
    uploadedFiles.value.forEach((file) => {
      file.showDropdown = false;
    });
  }
};

const editFile = (index) => {
  // Xử lý tùy chọn "Chia Sẻ"
  console.log("Chia Sẻ", uploadedFiles.value[index]);
};

const deleteFile = (index) => {
  // Xử lý tùy chọn "Xóa"
  console.log("Xóa file", uploadedFiles.value[index]);
};

const renameFile = (index) => {
  // Xử lý tùy chọn "Đổi tên"
  console.log("Đổi tên file", uploadedFiles.value[index]);
};

const openModal = (index) => {
  selectedFiles.value = uploadedFiles.value[index].files;
  selectedFolderName.value = uploadedFiles.value[index].name;
  isModalOpen.value = true;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
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
/* từng khối hiển thị ở đây */
.file-item {
  position: relative;
  width: 90%;
  top: 85px;
  left: 55px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #dedede;
  display: flex;
  justify-content: space-between;
}
.file-item p {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}
.file-item:hover {
  background-color: #eaeaea;
}
.dropdown {
  position: absolute;
  z-index: 3;
  left: 84%;
  background-color: #fff;
  width: 14%;
  height: 81px;
  border: 2px #d4d4d4 solid;
  border-radius: 5px;
  text-align: center;
}
.title-form {
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 70px;
  top: 70px;
  width: 90%;
}
.title-modal {
  font-size: 20px;
  font-weight: 600;
}
</style>
