<template>
  <div>
    <!-- <div v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" alt="">
    </div> -->
    <h3>推荐歌单</h3>
    <div class="row">
      <dl v-for="item in personalized" :key="item.id" @click="golist(item.id)">
        <dt><img :src="item.picUrl" alt=""></dt>
        <dd>{{item.name}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      banners: [],
      personalized: []
    }
  },
  methods: {
    // 轮播图
    async getBanners () {
      const res = await axios.get('https://zyxcl-music-api.vercel.app/banner', {
        params: {
          type: 2
        }
      })
      this.banners = res.data.banners
    },
    // 推荐歌单
    async getPersonalized () {
      const personalized = await axios.post('https://zyxcl-music-api.vercel.app/personalized', {
        limit: 6
      })
      this.personalized = personalized.data.result
    },
    golist (id) {
      // 路由传参
      this.$router.push({
        path: '/songlist',
        query: {
          id
        }
      })
    }
  },
  created () {
    this.getBanners()
    this.getPersonalized()
  }
}
</script>

<style lang="less" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  dl {
    width: 30%;
    margin-bottom: 16px;
  }
}
</style>
