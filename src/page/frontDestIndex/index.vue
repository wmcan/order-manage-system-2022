<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container :nav="iStyle" />
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import MMenu from './menu.vue';
import MLife from './life.vue';
import MContainer from './container.vue';
export default {
    data() {
        return {
            iStyle: {
                class: "istyle",
                title: "今日推荐",
                list: [
                {
                    text: "全部",
                    tab: "all"
                },
                {
                    text: "主食",
                    tab: "mainFood"
                },
                {
                    text: "海产",
                    tab: "seaFood"
                },
                {
                    text: "鲜肉",
                    tab: "meat"
                }
                ]
            },
        };
    },
    components: {
        MMenu,
        MLife,
        MContainer
    }
};
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss';
@import '@/assets/css/index/life.scss';
@import '@/assets/css/index/artistic.scss';
</style>
