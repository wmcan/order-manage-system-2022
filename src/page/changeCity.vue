<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="rencetList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province';
import Hot from '@/components/changeCity/hot';
import Category from '@/components/changeCity/category';
import api from '@/api/index';
export default {
    components: {
        Province,
        Hot,
        Category
    },
    created() {
        api.getHotCity().then((res) => {
            // console.log(res.data);
            res.data.forEach((e) => {
                this.hotList.push(e.name);
            });
        });
        api.getRecentCity().then((res) => {
            res.data.forEach((e) => {
                this.rencetList.push(e.name);
            });
        });
    },
    data() {
        return {
            hotList: [],
            rencetList: []
        };
    }
};
</script>

<style></style>
