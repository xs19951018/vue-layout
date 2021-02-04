<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside>
        <mine />
      </el-aside>
      <el-main>Main</el-main>
      <el-aside>Aside</el-aside>
    </el-container>
  </div>
</template>

<script>
import Mine from '@/components/mine'

export default {
  name: 'Personal',
  components: {
    Mine
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
      height: 100%;
      margin: 10px 100px;
  }
  .el-aside {
      width: 400px;
      margin: 0 10px;
  }
  .el-main {
      width: 60%;
      background-color: white;
  }
</style>