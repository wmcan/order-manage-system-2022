<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>{{$store.state.position}}订餐</el-breadcrumb-item>
  <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>