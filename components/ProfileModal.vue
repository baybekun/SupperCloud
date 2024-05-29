<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="profile-card">
      <div class="profile-pic">
        <img class="profile-image" :src="profileImageUrl" alt="Profile Image" />
      </div>
      <div class="usernameText">
        <h1>{{ username }}</h1>
      </div>
      <table class="profile-table">
        <tr>
          <td><strong>Ngày lập:</strong></td>
          <td>
            <input type="date" v-model="creationDate" />
          </td>
        </tr>
        <tr>
          <td><strong>Gmail:</strong></td>
          <td>
            <input type="email" v-model="email" />
          </td>
        </tr>
        <tr>
          <td><strong>Trạng thái:</strong></td>
          <td>{{ accountStatus }}</td>
        </tr>
        <tr>
          <td><strong>Dung lượng:</strong></td>
          <td>{{ storageCapacity }}</td>
        </tr>
      </table>
      <div class="actions">
        <button @click="saveProfile" style="color: green">Lưu</button>
        <!-- <button @click="complete" style="color: red">Xong</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profileImageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/025/181/412/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg",
      fullName: "Nguyễn Tuấn Anh",
      username: "tuananhdz1102",
      creationDate: "1992-07-20", // Adjusted to match the input date format (YYYY-MM-DD)
      email: "NguyenTuanAnh@gmail.com",
      role: 0, // Default role, will be updated from server
      accountStatus: "Tài khoản miễn phí",
      storageCapacity: "15GB",
    };
  },
  methods: {
    fetchUserRole() {
      // Replace the URL with your actual endpoint
      axios
        .get("/api/user/role")
        .then((response) => {
          this.role = response.data.role;
          this.updateAccountInfo();
        })
        .catch((error) => {
          console.error("There was an error fetching the user role:", error);
        });
    },
    updateAccountInfo() {
      if (this.role === 0) {
        this.accountStatus = "Tài khoản miễn phí";
        this.storageCapacity = "15GB";
      } else if (this.role === 1) {
        this.accountStatus = "Tài khoản đã nâng cấp";
        this.storageCapacity = "Không giới hạn";
      }
    },
    saveProfile() {
      // Logic to save the updated profile data goes here
      console.log("Profile saved:", {
        creationDate: this.creationDate,
        email: this.email,
      });
      // Optionally close the modal after saving
      this.closeModal();
    },
    // complete() {
    //   this.$router.push("/bodymain");
    // },
    closeModal() {
      this.$emit("close");
    },
  },
  mounted() {
    this.fetchUserRole();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-card {
  width: 413px;
  height: 390px;
  padding: 20px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}
.profile-pic {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  background-color: bisque;
}
.usernameText {
  font-size: 24px;
  font-family: "Inria Serif", serif;
  font-weight: bold;
  text-align: center;
}
.profile-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: separate;
  font-family: "Inria Serif", serif;
}
.profile-table td:nth-child(2) {
  max-width: 150px;
  word-wrap: break-word;
}
.profile-table input {
  width: 100%;
  padding: 5px;
  font-family: "Inria Serif", serif;
}
.action {
  text-align: center;
}
.actions button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Inria Serif", serif;
}
.actions button:hover {
  background-color: #ddd;
}
</style>
