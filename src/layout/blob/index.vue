<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <top-menu />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'

export default {
  name: 'BlobLayout',
  components: {
    TopMenu
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
    padding: 0;
  }
</style>
