<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          alt="订餐"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" @click="goGoods"></el-button>
          <!-- <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">
                {{ item }}</router-link
              >
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl> -->
        </div>
        <!-- <p class="suggest">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{ name: 'goods', params: { name: item } }"
            >{{ item }}</router-link
          >
        </p> -->
      </el-col>
      <!-- <el-col :span="6" class="right">
        <div class="begin-order">
           <router-link :to="{ name: 'goods'}" style="color: #fff">开始点餐</router-link>
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  created() {
    api.searchHotWords().then(res => {
      res.data.filter((item, index, arr) => {
        if (index < 5) this.hotPlaceList.push(item);
        else return;
      });
      this.suggestList = res.data;
    });
  },
  computed: {
    isHotPlace() {
      return !this.searchWord && this.isFocus;
    },
    isSearchList() {
      return this.searchWord && this.isFocus;
    }
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      var self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        this.searchList = res.data.list.filter(item => item.indexOf(val) > -1);
      });
    },
    goGoods(){
      this.$router.push({name:'goods'})
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
.right{
    color: #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    .begin-order{
      width: 55px;
      height: 26px;
      line-height: 26px;
      background: $backgroundColorMT ;
      cursor: pointer;
      margin-top: 6px;
      display: flex;
      justify-content: center;
      align-content: center;
      border-radius: 6px;
    }
}
.transparent{
  background: transparent;
}
</style>
