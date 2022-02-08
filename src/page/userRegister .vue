<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有账号?</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
          >
          </el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="submitBtn"
          >
            同意以下协议并注册
          </el-button>
          <div>
            <a
              href="https://rules-center.meituan.com/rules-detail/4"
              target="_blank"
              >《用户服务协议》</a
            >
            <a
              href="https://rules-center.meituan.com/rules-detail/2"
              target="_blank"
              >《隐私政策》</a
            >
          </div>
        </el-form-item>
      </el-form>
    </div>

    <footer>
      ©meituan.com 京ICP证070791号 京公网安备11010502025545号
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {}
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>