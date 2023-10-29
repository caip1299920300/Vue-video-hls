import Vue from "vue";
import App from "./App.vue";
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
const hls = require("videojs-contrib-hls");

Vue.config.productionTip = false;
Vue.use(VueVideoPlayer);
Vue.use(hls);

new Vue({
  render: h => h(App)
}).$mount("#app");
