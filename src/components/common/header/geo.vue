<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link class="changeCity" :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      [
      <!-- <a href="#" v-for="(item, index) in nearCity" :key="index">
        {{ item.name }}
      </a> -->
      <a href="#">福州</a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{ name: 'login' }">立即登录</router-link>
      <router-link class="register" :to="{ name: 'register' }"
        >注册</router-link
      >
    </div>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: []
    };
  },
  watch: {
    "$store.state.position": function() {
      // this.nearCity = this.$store.state.position.nearCity;
      this.nearCity = {
        acronym: "fj",
        firstChar: "f",
        id: 20,
        name: "福建",
        nearCity: [{
          acronym: "fz",
          id: 20000,
          name: "福州",
          pinyin: "fuzhou",
          }
        ],
        pinyin: "fujian",
        rank: "F",
      }
    }
  },
  created() {
    api.getCurPosition().then(res => {
      // this.$store.dispatch("setPosition", res.data);
      this.$store.dispatch("setPosition", res.data);
      let data = {
        acronym: "fj",
        firstChar: "f",
        id: 20,
        name: "福建",
        nearCity: [{
          acronym: "fz",
          id: 20000,
          name: "福州",
          pinyin: "fuzhou",}
        ],
        pinyin: "fujian",
        rank: "F",
      }
      this.$store.dispatch("setPosition", data);
      this.nearCity = data.nearCity;
      // this.nearCity = res.data.nearCity;
    });
  }
};
</script>


