<template>
  <div>
    <h1>{{ title }}</h1>
    <video-player class="video-player vjs-custom-skin" :options="options" />
    <div class="videoBtn">
      <button @click="playVideo('http://220.161.87.62:8800/hls/0/index.m3u8', '漳浦综合HD')">漳浦综合HD</button>
      <button @click="playVideo('http://10.168.3.196/files/hls_ffmpeg/output.m3u8', '漳浦数字HD')">漳浦数字HD</button>
      <button @click="playVideo('http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8', 'CCTV6高清')">CCTV6高清</button>
    </div>
    <div class="videoBtn">
      <button @click="playVideo('http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8', 'CCTV3高清')">CCTV3高清</button>
    </div>
  </div>
</template>

<script>
const options = {
  playbackRates: [0.25, 0.5, 1.0, 1.25, 2.0], // 可选择的播放速度
  autoplay: true, // 如果true,浏览器准备好时开始回放。
  muted: false, // 默认情况下将会消除任何音频。
  loop: false, // 视频一结束就重新开始。
  preload: "auto",
  language: "zh-CN",
  aspectRatio: "16:9",
  sources: [{
    type: "application/x-mpegURL",
    src: ""
  }],
  notSupportedMessage: "前方视频信号中断，请稍后再试。"
};

export default {
  name: "Video",
  data() {
    return {
      options,
      title: "漳浦综合HD"
    };
  },
  mounted() {
    this.options.sources[0].src = "http://220.161.87.62:8800/hls/0/index.m3u8";
  },
  methods: {
    playVideo(url, text) {
      this.options.sources[0].src = url;
      this.title = text;
    }
  }
};
</script>

<style scoped>
  .videoBtn button{
    margin: 8px 8px 0 0;
  }
</style>
