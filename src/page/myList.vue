<template>
    <div>
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="name" label="商品名"></el-table-column>
            <el-table-column label="商品价格">
                <template slot-scope="scope">￥{{ scope.row.money }}</template>
            </el-table-column>
            <!-- <el-table-column label="商品图片(查看大图)" align="center">
              <template slot-scope="scope">
                  <el-image class="table-td-thumb" :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]"></el-image>
              </template>
          </el-table-column> -->
            <el-table-column label="商品数量"></el-table-column>
            <!-- <el-table-column prop="address" label="地址"></el-table-column> -->
            <el-table-column label="操作" width="220" align="center">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="showDetail(scope.$index, scope.row)">订单详情</el-button>
                    <el-button type="text" icon="el-icon-edit" @click="unsubscribeGoods(scope.$index, scope.row)">退订</el-button>
                    <el-button type="text" icon="el-icon-delete" class="red" @click="anotherList(scope.$index, scope.row)"
                        >再来一单</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
// import Province from '@/components/changeCity/province';
// import Hot from '@/components/changeCity/hot';
// import Category from '@/components/changeCity/category';
// import api from '@/api/index';
export default {
    components: {
        // Province,
        // Hot,
        // Category
    },
    created() {},
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
            // hotList: [],
            // rencetList: []
        };
    },
    methods: {
        showDetail(index, row) {},
        unsubscribeGoods(index, row) {},
        anotherList(index, row) {}
    }
};
</script>

<style></style>
