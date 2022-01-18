<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">
              {{ item.subTitle }}
            </div>
            <!-- <div class="price-info" v-if="item.rentNum && item.price_info.cur_price" > -->
            <div class="price-info">
              <span class="current-peice-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">
                  <!-- {{ item.price_info.cur_price }} -->
                  {{ item.price }}
                </span>
              </span>
              <!-- <span class="old-price">
                门市价￥{{ item.price }}
              </span> -->
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <!-- <div v-else-if="!item.rentNum" class="price-info">
              <span class="current-price numfont">抢光了</span>
            </div>
            <div v-else class="price-info">
              <span class="current-price numfont"
                >{{ item.price_info.avg_price }}
              </span>
              <span class="units">/ {{ item.price_info.units }} 均</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      resultData: {},
      list: [
        // {
        //   image:
        //     "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        //   title: "COST COFFEE",
        //   sub_title: "巧克力酥",
        //   price_info: {
        //     cur_price: 18,
        //     old_price: 36,
        //     avg_price: null,
        //     units: null
        //   },
        //   rentNum: 0,
        //   add: "崇文门"
        // },
        // {
        //   image:
        //     "https://p1.meituan.net/msmerchant/9fd94a31ffa1a704902fbbd6e240597769024.jpg@267w_150h_1e_1c",
        //   title: "COST COFFEE",
        //   sub_title: "巧克力酥",
        //   price_info: {
        //     cur_price: null,
        //     old_price: null,
        //     avg_price: 18,
        //     units: "人"
        //   },
        //   rentNum: 1,
        //   add: "崇文门"
        // },
        // {
        //   image:
        //     "https://p1.meituan.net/bbia/96507664_1592553431922.jpeg@267w_150h_1e_1c",
        //   title: "COST COFFEE",
        //   sub_title: "巧克力酥",
        //   price_info: {
        //     cur_price: 18,
        //     old_price: 36
        //   },
        //   rentNum: 1,
        //   add: "崇文门"
        // },
        // {
        //   image:
        //     "https://p1.meituan.net/bbia/96507664_1592553431922.jpeg@267w_150h_1e_1c",
        //   title: "COST COFFEE",
        //   sub_title: "巧克力酥",
        //   price_info: {
        //     cur_price: 18,
        //     old_price: 36
        //   },
        //   rentNum: 1,
        //   add: "崇文门"
        // }
      ]
    };
  },
  created() {
    api.resultsByKeywords().then(res => {
      console.log(res.data);
      this.resultData = res.data;
    });
  },
  methods: {
    over(e) {
      console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return;
      }
      this.kind = dom.getAttribute("data-type");
      //获取数据 ajax请求
    }
  }
};
</script>

<style>
</style>