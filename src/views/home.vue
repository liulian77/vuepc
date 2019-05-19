<template>
  <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          >
          <el-menu-item
          v-for="item in navs"
          :key="item.path"
          :index="item.path"
          :route="{
            path:item.path
          }">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
</el-row></el-aside>
    <el-main> <router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import content from '@/router/content'
export default {
 data(){
  return{
    navs:content.filter(item=>item.meta.isNav===true)
  }
}
}
</script>

<style lang=scss>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
