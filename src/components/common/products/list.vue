<template>
  <div class="m-products-list">
    <el-row>
      <ul>
        <li
          v-for="item in nav"
          :key="item.key"
          :class="{ 's-nav-active': item.active }"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-row>
    <el-row>
      <item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from "./item";
import api from "@/api/index";
export default {
  components: {
    Item
  },
  created() {
    api.getProductsList().then(res => {
      console.log(res.data);
      this.productList = res.data;
    });
  },
  data() {
    return {
      nav: [
        { key: "s-default", name: "智能排序", active: true },
        { key: "s-price", name: "价格最低", active: false },
        { key: "s-score", name: "人气最高", active: false },
        { key: "s-comment", name: "评价最高", active: false }
      ],
      productList: [
        // {
        //   image:
        //     "https://p1.meituan.net/msmerchant/9fd94a31ffa1a704902fbbd6e240597769024.jpg@267w_150h_1e_1c",
        //   title: "火鸡老店",
        //   type: "type",
        //   score: 4.1,
        //   commentNum: 0,
        //   comment: [
        //     { username: "xxx", evalaute: "好吃" },
        //     { username: "xxx", evalaute: "好吃" }
        //   ],
        //   tab: ["火锅", "河沙"],
        //   add: "福建省福州市",
        //   deal_items: [
        //     {
        //       title: "火锅宴，建议10-14人使用",
        //       price: 909,
        //       counter_price: 1150,
        //       saleNum: 0,
        //       price_type: "元"
        //     }
        //   ],
        //   avg_price: 888
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>