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
      // console.log(res.data);
      // this.productList = res.data;
      // this.productList = [{
      //   address: "南岗区中兴大街168号万达广场3层3055",
      //   avgPrice: 95,
      //   comment: [{
      //     evalaute: "好吃",
      //     username: "xxxx"
      //   }],
      //   commentNum: 2555,
      //   dealItems: [{
      //     counterPrice: 100,
      //     price: 28.9,
      //     priceType: "元",
      //     saleNum: 3409,
      //     title: "100元代金券1张"
      //   }],
      //     image: "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
      //     score: 5,
      //     tab: ["重庆火锅", "哈西万达"],
      //     title: "井格重庆火锅（哈西万达店）",
      //     type: "food",
      // }]
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
      productList: [{
        address: "南岗区中兴大街168号万达广场3层3055",
        avgPrice: 95,
        comment: [{
          evalaute: "好吃",
          username: "xxxx"
        }],
        commentNum: 2555,
        dealItems: [{
          counterPrice: 100,
          price: 28.9,
          priceType: "元",
          saleNum: 3409,
          title: "100元代金券1张"
        }],
          image: "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
          score: 5,
          tab: ["重庆火锅", "哈西万达"],
          title: "井格重庆火锅（哈西万达店）",
          type: "food",
      },{
        address: "南岗区中兴大街168号万达广场3层3055",
        avgPrice: 95,
        comment: [{
          evalaute: "好吃",
          username: "xxxx"
        }],
        commentNum: 2555,
        dealItems: [{
          counterPrice: 100,
          price: 28.9,
          priceType: "元",
          saleNum: 3409,
          title: "100元代金券1张"
        }],
          image: "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
          score: 5,
          tab: ["重庆火锅", "哈西万达"],
          title: "井格重庆火锅（哈西万达店）",
          type: "food",
      },{
        address: "南岗区中兴大街168号万达广场3层3055",
        avgPrice: 95,
        comment: [{
          evalaute: "好吃",
          username: "xxxx"
        }],
        commentNum: 2555,
        dealItems: [{
          counterPrice: 100,
          price: 28.9,
          priceType: "元",
          saleNum: 3409,
          title: "100元代金券1张"
        }],
          image: "http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c",
          score: 5,
          tab: ["重庆火锅", "哈西万达"],
          title: "井格重庆火锅（哈西万达店）",
          type: "food",
      }]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>