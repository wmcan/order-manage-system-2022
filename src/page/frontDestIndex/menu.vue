<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">
          {{ v }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      curDetail: [],
      menuList: [
        // {
        //   title: "美食",
        //   icon: "food",
        //   children: [
        //     {
        //       title: "美食",
        //       children: [
        //         "代金券",
        //         "甜点饮品",
        //         "火锅自助餐",
        //         "小吃快餐",
        //         "日韩料理",
        //         "西餐"
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: "外卖",
        //   icon: "takeout",
        //   children: [
        //     {
        //       title: "外卖",
        //       children: ["美团外卖"]
        //     }
        //   ]
        // },
        // {
        //   title: "酒店",
        //   icon: "hotel",
        //   children: [
        //     {
        //       title: "酒店",
        //       children: ["舒适型", "经济型"]
        //     }
        //   ]
        // }
      ]
    };
  },
  created(){
    api.getMenuList().then(res => {
      // console.log(res.data)
      this.menuList = res.data;
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>

