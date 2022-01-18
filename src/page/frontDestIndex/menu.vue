<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <!-- {{menuList}} -->
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
        {
          name: "美食",
          type: "el-icon-fork-spoon",
          items: [
            {
              title: "美食",
              items: [
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐"
              ]
            }
          ]
        },
        {
          name: "主食",
          type: "el-icon-food",
          items: [
            {
              title: "主食",
              items: ["牛排", "意大利面", "炒面", "炒粉", "八宝饭", "大米饭"]
            }
          ]
        },
        {
          name: "生鲜",
          type: "el-icon-refrigerator",
          items: [
            {
              title: "生鲜",
              items: ["螃蟹", "黄瓜鱼", "明虾", "小龙虾", "海蛏"]
            }
          ]
        },
        {
          name: "凉菜",
          type: "el-icon-dish",
          items: [
            {
              title: "凉菜",
              items: ["凉拌豆腐", "小葱拌豆腐", "凉拌西红柿", "凉拌黄瓜", "凉皮"]
            }
          ]
        },
        {
          name: "饮料",
          type: "el-icon-goblet-square-full",
          items: [
            {
              title: "饮料",
              items: ["橙汁", "苹果汁", "金桔柠檬", "柠檬水", "可乐", "雪碧"]
            }
          ]
        }
      ]
    };
  },
  created(){
    api.getMenuList().then(res => {
      // console.log(res.data)
      // this.menuList = res.data;
      // console.log("this.menuList", this.menuList)

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

