<template>
  <div class="top-wraper">
    <el-menu class="el-menu-index" mode="horizontal" router>
      <menu-item v-for="item in leftItem" :key="item" :item="item" :base-path="item.path" />
    </el-menu>

    <div class="el-menu-search">
      <el-input class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <el-menu class="el-menu-personal" mode="horizontal" router>
      <menu-item v-for="item in rightItem" :key="item" :item="item" :base-path="item.path" />
    </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'top-menu',
  components: {
    MenuItem
  },
  data() {
    return {
      leftItem: null,
      rightItem: null

    }
  },
  mounted() {
    let routes = this.$router.options.routes;
    this.leftItem = routes.filter(obj => {
      if (obj.meta) {
        return !obj.hidden && obj.meta.position == 'top-index';
      }
    });
    this.rightItem = routes.filter(obj => {
      if (obj.meta) {
        return !obj.hidden && obj.meta.position == 'top-personal';
      }
    });
  },
 
}
</script>

<style lang="scss" scoped>
  .top-wrapper {
      height: 100%;
      width: 100%;
  }
  .el-menu-index {
    width: 40%;
    float: left;
  }
  .el-menu-search {
    width: 35%;
    float: left;
  }
  .el-menu-personal {
    width: 20%;
    float: right;
  }
</style>
