<template>
    <el-submenu v-if="hasMoreChildShow(item)">
        <template slot="title">{{ item.meta.title }}</template>
        <el-menu-item v-for="child in item.children" :key="child" :index="resolvePath(child.path)">
            {{ child.meta.title }}
        </el-menu-item>
    </el-submenu>
    
    <el-menu-item v-else :index="item.path">{{ item.meta.title }}</el-menu-item>
</template>

<script>
import path from 'path'

export default {
  name: 'menu-item',
  props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
  },
  methods: {
    hasMoreChildShow(route) {
      if (!route.children || route.children.length == 1) {
          return false;
      }
      let showRoute = route.children.filter(obj => {
          return !obj.hidden;
      });
      if (showRoute.length > 1) {
          return true;
      }
      return false;
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>