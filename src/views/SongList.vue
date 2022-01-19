<template>
  <div>
    <h2>{{playlist.name}}</h2>
    <p>介绍：{{playlist.description}}</p>
    <img :src="playlist.coverImgUrl" alt="">
    <ul>
      <li v-for="item in tracks" :key="item.id" @click="goPlay(item.id)">
        <b>{{item.name}}</b>
        --
        <span v-for="ar in item.ar" :key="ar.id">{{ar.name}}，</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      playlist: {},
      tracks: []
    }
  },
  methods: {
    goPlay (id) {
      this.$router.push({
        path: '/player',
        query: { id }
      })
    }
  },
  async created () {
    const res = await axios.post('https://zyxcl-music-api.vercel.app/playlist/detail?timestamp=' + Date.now(), {
      // 获取路由参数,传给接口
      id: this.$route.query.id
    })
    console.log(res.data)
    this.playlist = res.data.playlist
    this.tracks = res.data.playlist.tracks
  },
  destroyed () {
    console.log('歌单组件销毁了')
  }
}
</script>

<style lang="less" scoped>
li {
  line-height: 40px;
  b {
    color: red;
  }
}
</style>
