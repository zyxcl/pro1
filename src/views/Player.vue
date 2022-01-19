<template>
  <div class="song-page">
    <div class="bg"><img :src="songInfo.al.picUrl" alt=""></div>
    <div class="songInfo">
      <h2>{{songInfo.name}}</h2>
      <p>歌手：
        <span v-for="item in songInfo.ar" :key="item.id">{{item.name}}</span>
      </p>
      <p>专辑：{{songInfo.al.name}}</p>
    </div>
    <div class="center" @click="showLyric = !showLyric">
      <div v-if="showLyric" class="lyric">
        <p v-for="item in lyric" :key="item">{{item}}</p>
      </div>
      <div v-else class="img">
        <img :src="songInfo.al.picUrl" alt="">
      </div>
    </div>
    <div class="btns">
      <p>喜欢</p>
      <p>下载</p>
      <p @click="showComments = true">评论</p>
    </div>
    <div class="progress">
      <span>{{currentTime}}</span>
      <p class="line"></p>
      <span>{{duration}}</span>
    </div>
    <div class="controls">
      <div class="prev">上一首</div>
      <div class="play" @click="changePlay">{{paused ? '播放' : '暂停'}}</div>
      <div class="next">下一首</div>
    </div>
    <audio ref="audio" class="audio" controls :src="curSong"></audio>
    <div class="comments" v-if="showComments">
      <span class="close" @click="showComments = false">x</span>
      <h3>评论</h3>
      <ul>
        <li v-for="item in comment" :key="item.commentId">
          <div>
            <h4>{{item.user.nickname}}</h4>
            <div class="avatar">
              <img :src="item.user.avatarUrl" alt="">
            </div>
          </div>
          <p>评论时间：{{item.timeStr}}</p>
          <p>点赞数量：{{item.likedCount}}</p>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'Player',
  data () {
    return {
      songInfo: {
        al: {}
      }, // 歌曲详情
      lyric: [], // 歌词
      comment: [], // 评论列表
      curPlayIndex: 0, // 当前播放下标
      songUrl: [], // 音乐地址
      showComments: false, // 展示评论
      showLyric: false, // 展示歌词
      currentTime: 0, // 当前播放时长
      duration: 0, // 总时长
      paused: true // 是否暂停
    }
  },
  computed: {
    // 当前播放歌曲地址
    curSong () {
      return this.songUrl[this.curPlayIndex] ? this.songUrl[this.curPlayIndex].url : ''
    }
  },
  methods: {
    // 播放音乐
    changePlay () {
      if (this.paused) { // 如果当前暂停，开始播放
        this.$refs.audio.play()
      } else { // 正在播放，暂停
        this.$refs.audio.pause()
      }
    },
    // 歌曲详情
    async getInfo () {
      const res = await axios.post('https://zyxcl-music-api.vercel.app/song/detail?timestamp=' + Date.now(), {
        ids: this.$route.query.id
      })
      console.log('歌曲详情', res.data)
      this.songInfo = {
        name: res.data.songs[0].name,
        ar: res.data.songs[0].ar,
        al: res.data.songs[0].al
      }
    },
    // 获取歌词
    async getLyric () {
      const res = await axios.post('https://zyxcl-music-api.vercel.app/lyric?timestamp=' + Date.now(), {
        id: this.$route.query.id
      })
      console.log('获取歌词', res.data)
      this.lyric = res.data.lrc.lyric.split('\n')
    },
    // 获取音乐地址
    async getSongUrl () {
      const res = await axios.post('https://zyxcl-music-api.vercel.app/song/url?timestamp=' + Date.now(), {
        id: this.$route.query.id
      })
      console.log('音乐地址', res.data)
      this.songUrl = res.data.data
    },
    // 获取评论
    async getComment () {
      const res = await axios.post('https://zyxcl-music-api.vercel.app/comment/music?timestamp=' + Date.now(), {
        id: this.$route.query.id
      })
      console.log('评论', res.data)
      this.comment = res.data.hotComments
    }
  },
  created () {
    this.getInfo()
    this.getLyric()
    this.getSongUrl()
    this.getComment()
  },
  mounted () {
    // 音频可以播放
    this.$refs.audio.addEventListener('canplaythrough', () => {
      this.currentTime = moment(this.$refs.audio.currentTime * 1000).format('mm:ss')
      this.duration = moment(this.$refs.audio.duration * 1000).format('mm:ss')
      // 监听播放进度改变
      this.$refs.audio.addEventListener('timeupdate', () => {
        this.currentTime = moment(this.$refs.audio.currentTime * 1000).format('mm:ss')
        this.paused = this.$refs.audio.paused // 是否暂停
        console.log('正在播放', this.$refs.audio.currentTime, this.$refs.audio.duration, this.$refs.audio.paused)
      })
    })
  },
  activated () {
    console.log('player 组件被缓存，展示了')
  },
  deactivated () {
    console.log('player 组件被缓存，隐藏了')
  },
  destroyed () {
    console.log('player 销毁了')
  }
}
</script>

<style lang="less" scoped>
.song-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(15px);
  img {
    height: 100%;
  }
}
.songInfo {
  text-align: center;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
}
.center {
  flex: 1;
  overflow: hidden;
  position: relative;
  padding: 30px 0;
}
.img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid #cccccc;
}
.lyric {
  height: 100%;
  overflow: auto;
  text-align: center;
  color: #ffffff;
  p {
    line-height: 30px;
    font-size: 14px;
  }
}
.btns {
  height: 60px;
  line-height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  p {
    width: 50px;
    text-align: center;
  }
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}
.comments {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  max-height: 400px;
  overflow: auto;
  padding-top: 30px;
  border-radius: 20px 20px 0 0;
  li {
    padding: 15px;
    border-bottom: 1px solid;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.progress {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  p {
    flex: 1;
    margin: 0 20px;
    height: 6px;
    background: #ffffff;
    border-radius: 10px;
  }
}
.controls {
  padding: 20px 30px 30px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
}
.audio {
  position: fixed;
  bottom: 100%;
  left: 0;
}
</style>
