<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <!-- <crumbs /> -->
        </el-row>
        <el-row>
            <el-col :span="19">
                <category />
                <m-list />
            </el-col>
            <el-col :span="5">map + fav</el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from '@/components/products/crumbs.vue';
import Category from '@/components/products/category.vue';
import MList from '@/components/products/list';
import api from '@/api/index';
export default {
    components: {
        Crumbs,
        Category,
        MList
    }
};
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>
