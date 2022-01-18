<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
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
            <div class="price-info">
              <span class="current-peice-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">
                  {{ item.price }}
                </span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
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
      resultData: {
        all: [{
          address: "新鲜龙虾",
          image: "https://pic.rmb.bdstatic.com/000a38550237ef1d43d86a5fb164289a.jpeg@wm_2,t_55m+5a625Y+3L+WygeaciOWFpemUhQ==,fc_ffffff,ff_U2ltSGVp,sz_38,x_24,y_24",
          price: 99,
          subTitle: "新鲜龙虾",
          title: "芝士龙虾",
        },{
          address: "美味丁骨牛排",
          image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Fcaee0336b311a07eb48dc1e4f90a0ac21018490.jpg&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645012569&t=34cd8d1161bbbbd9d1562e4fb30be4ed",
          price: 119,
          subTitle: "美味丁骨牛排",
          title: "丁骨牛排",
        },{
          address: "现切现烤",
          image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180120%2Ff375571cd2f546beae68c67bda728abc.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645012234&t=6d0ea43f34429726e7d520ea4f1cc5c8",
          price: 161,
          subTitle: "玫瑰黑巧茶拿铁1份",
          title: "炭烤牛蛙",
        }],
        mainFood: [{
          address: "美味丁骨牛排",
          image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Fcaee0336b311a07eb48dc1e4f90a0ac21018490.jpg&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645012569&t=34cd8d1161bbbbd9d1562e4fb30be4ed",
          price: 119,
          subTitle: "美味丁骨牛排",
          title: "丁骨牛排",
        },{
          address: "美味披萨",
          image: "https://img0.baidu.com/it/u=801294817,1756343978&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=460",
          price: 89,
          subTitle: "美味管饱",
          title: "美味披萨",
        },{
          address: "美味意大利面",
          image: "https://img1.baidu.com/it/u=2636115146,279883307&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
          price: 59,
          subTitle: "美味意大利面",
          title: "意大利面",
        }],
        seaFood: [
          {
            address: "大虾",
            image: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/6609c93d70cf3bc78f275a55df00baa1cd112a67.jpg",
            price: 39,
            subTitle: "大虾",
            title: "大虾",
          },{
            address: "新鲜龙虾",
            image: "https://pic.rmb.bdstatic.com/000a38550237ef1d43d86a5fb164289a.jpeg@wm_2,t_55m+5a625Y+3L+WygeaciOWFpemUhQ==,fc_ffffff,ff_U2ltSGVp,sz_38,x_24,y_24",
            price: 99,
            subTitle: "新鲜龙虾",
            title: "芝士龙虾",
          },{
            address: "新鲜美味大闸蟹",
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew10.photophoto.cn%2F20160614%2Fdazhaxietupian-26879368_1.jpg&refer=http%3A%2F%2Fpicnew10.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645013101&t=e3cfcfcf0e8ebd87dc2331b2bdb843a7",
            price: 161,
            subTitle: "新鲜美味大闸蟹",
            title: "大闸蟹",
          }
        ],
        meat: [
          {
            address: "现切现烤",
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180120%2Ff375571cd2f546beae68c67bda728abc.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645012234&t=6d0ea43f34429726e7d520ea4f1cc5c8",
            price: 161,
            subTitle: "现切现烤",
            title: "炭烤牛蛙",
          },
          {
            address: "美味牛肉串",
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0108%2Fe20bc0bep00qml01a00iec000n700f3c.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645013172&t=8f8a6b2aece714a7a4d49d78131c8b34",
            price: 25,
            subTitle: "美味牛肉串",
            title: "牛肉串",
          },
          {
            address: "现切现烤",
            image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210825%2F0b178a3275eb4a7fba5f391b6369cf69.png&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645013285&t=55d8068c43fc9038bcc6de6a8553b644",
            price: 49,
            subTitle: "美味烤鸭",
            title: "烤鸭",
          }
        ]
      },
      list: []
    };
  },
  created() {
    // api.resultsByKeywords().then(res => {
    // });
  },
  methods: {
    over(e) {
      // console.log(e.target);
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