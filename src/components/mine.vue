<template>
    <div class="mine-wrapper">
      <div class="mine-part">
        <div class="mine-avatar">
          <img :src="avatar">
        </div>
        <div class="mine-person">
          <div class="mine-name">{{ name }}</div>
          <div class="mine-detail"></div>
        </div>
      </div>
      <div class="mine-part"></div>
      <div class="mine-part"></div>
    </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      id: null,
      name: null,
      avatar: null,

    }
  },
  mounted() {
    this.name = "冷西"
    this.avatar = "http://qng0jlu9n.hn-bkt.clouddn.com/admin.gif"
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .mine-wrapper {
    background-color: white;
    height: 240px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .mine-part {
    height: 80px;

  }
  .mine-avatar {
    height: 80px;
    width: 80px;
    position: relative;
    float: left;
  }
  .mine-wrapper img {
    height: 80px;
    width: 80px;
  }
  .mine-person {
    width: 320px;
    position: relative;
    left: 80px;
  }
</style>