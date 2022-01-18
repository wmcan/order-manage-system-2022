<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item"> {{ item }} </a>
      </dd>
    </dl>
    <dl
      v-for="(item, index) in cityGroup"
      :key="index"
      class="m-categroy-section"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)"> {{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    let data = [
      // {
      //   id: 1,
      //   name: "北京",
      //   pinyin: "beijing",
      //   acronym: "bj",
      //   rank: "S",
      //   firstChar: "b"
      // },
      // {
      //   id: 2,
      //   name: "上海",
      //   pinyin: "shanghai",
      //   acronym: "sh",
      //   rank: "S",
      //   firstChar: "s"
      // },
      // {
      //   id: 3,
      //   name: "深圳",
      //   pinyin: "shenzhen",
      //   rank: "S",
      //   firstChar: "s"
      // },
      // {
      //   id: 4,
      //   name: "深圳",
      //   pinyin: "shenzhen",
      //   rank: "S",
      //   firstChar: "w"
      // },
      // {
      //   id: 5,
      //   name: "深圳",
      //   pinyin: "shenzhen",
      //   rank: "S",
      //   firstChar: "q"
      // }
    ];

    api.getCityList().then(res => {
      let obj = {};
      res.data.forEach((item, indx) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
        this.cityGroup = obj;
      });
    });
    // console.log(data)
  },
  methods: {
    changeCity(item) {
            console.log('item=====', item)
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'})
        }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>

