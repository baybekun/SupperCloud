<template>
  <div class="Wrap">
    <div class="left">
      <div class="logof">
        <img src="/image/logo.png" />
      </div>

      <div class="text">
        <div class="loginTitle" align="center">Đăng Kí</div>
        <div class="subLoginTitle" align="center">Tạo Mới Tài Khoản</div>
      </div>
    </div>
    <div class="right">
      <div class="sub-content">
        <div class="supercloud" align="center">SuperCloud</div>
        <div class="textfield" name="email">
          <input
            class="EmailText"
            type="text"
            name="txtEmail"
            placeholder="Email"
          />
        </div>
        <div class="textfield" name="password">
          <input
            class="PasswordText"
            type="text"
            name="txtPassword"
            placeholder="Password"
          />
        </div>
        <div class="textfield" name="cfpassword">
          <input
            class="PasswordText"
            type="text"
            name="txtCfPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div class="non_acc">
          <a href="/">Đã có Tài Khoản?</a>
        </div>
        <div class="button">
          <button
            class="NextButton"
            type="submit"
            name="butNext"
            @click="navigateToNextPage"
          >
            Tiếp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});
</script>
<script>
export default {
  methods: {
    navigateToNextPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.Wrap {
  background-color: white;
  width: 1254px;
  height: 635px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
}
.left {
  float: left;
  width: 332px;
  height: 477px;
  background-color: white;
  margin-top: 25px;
  margin-left: 20px;
  border-radius: 30px;
}
.right {
  float: right;
  width: 839px;
  height: 578px;
  background-color: #efefef;
  margin-top: 25px;
  margin-right: 49px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); /* Tạo hiệu ứng đổ bóng */
}
.logo {
  margin-left: auto;
  background-color: white;
  border-radius: 30px;
}

.loginTitle {
  font-size: 62px; /* Đặt kích thước font chữ */
  font-family: "Inria Serif", serif; /* Sử dụng font Inria Serif */
  padding-bottom: 20px;
}
.subLoginTitle {
  font-size: 32px;
  font-family: "Inria Serif", serif; /* Sử dụng font Inria Serif */
  color: #696969;
  float: left;
  margin-left: 45px;
}

.supercloud {
  font-size: 68px; /* Đặt kích thước font chữ */
  font-family: "Inria Serif"; /* Sử dụng font Inria Serif */
  margin-top: 10px;
  background: linear-gradient(
    to bottom,
    #697b83,
    #062537
  ); /* Gradient màu từ trắng đến #062537 từ trên xuống dưới */
  -webkit-background-clip: text; /* Cho phép áp dụng background cho text */
  -webkit-text-fill-color: transparent; /* Đặt màu chữ trong suốt */
}
.textfiled input {
  background-color: aqua;
  border-radius: 30px;
  border: none;
  outline: none;
}
.EmailText {
  margin-left: 43px;
  margin-top: 20px;
  width: 744px;
  height: 96px;
  border: none;
  border-radius: 30px;
  font-size: 32px;
  padding-left: 10px;
}
.EmailText::placeholder {
  font-size: 32px;
  font-family: "Inria Serif";
  padding-left: 10px;
}
.PasswordText {
  margin-left: 43px;
  margin-top: 30px;
  width: 744px;
  height: 96px;
  border: none;
  border-radius: 30px;
  font-size: 32px;
  padding-left: 10px;
}
.PasswordText::placeholder {
  font-size: 32px;
  font-family: "Inria Serif";
  padding-left: 10px;
}
.forgot_pass {
  font-size: 24px;
  font-family: "Inria Serif";
  margin-top: 20px;
  margin-left: 65px;
  color: #062537;
}
.non_acc {
  font-size: 24px;
  font-family: "Inria Serif";
  margin-top: 33px;
  margin-left: 50%;
  color: #062537;
  width: fit-content;
  height: fit-content;
  float: left;
}
.button {
  width: fit-content;
  height: fit-content;
}
.NextButton {
  width: 157px;
  height: 62px;
  border-radius: 30px;
  border: none;
  background-color: #062537;
  color: white;
  font-family: "Inria Serif";
  font-size: 24px;
  margin-right: 50px;
  margin-left: 626px;
  margin-top: -50px;
  float: right;
}
</style>
<style>
.logof {
  width: 264px;
  height: 208px;
  margin-top: 32px;
}
</style>
