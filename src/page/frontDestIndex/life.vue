<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">精致美食</router-link>
        </li>
        <li>
          <router-link to="/" class>特色产品</router-link>
        </li>
        <li>
          <router-link to="/" class>新鲜果蔬</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">爽口酒水</router-link>
        </li>
        <li>
          <router-link to="/" class="business">全城配送</router-link>
        </li>
        <li>
          <router-link to="/" class>商家信息</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4"> <div class="m-life-pic"></div> </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
              alt
            />
          </h4>

          <p class="m-life-login-name">
            Hi！ 你好！
          </p>
          <p>
            <router-link :to="{ name: 'register' }">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link :to="{ name: 'login' }">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
          <p>APP手机版</p>
          <p class="last-p">
            <span class="red">
              1元起
            </span>
            畅快吃喝
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "./slider.vue";
export default {
  components: {
    Slider
  }
};
</script>

