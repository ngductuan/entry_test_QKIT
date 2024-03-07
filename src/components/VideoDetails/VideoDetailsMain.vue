<template>
  <div class="video-details-main-sec">
    <div class="video-main">
      <iframe :src="`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&showinfo=0&ecver=2&modestbranding=1`"></iframe>
    </div>
    <div class="content d-flex">
      <img src="../../assets/thumbnail.jpg" class="channel-icon" alt="" />
      <div class="info">
        <h4 class="title">
          SAU LỜI KHƯỚC TỪ - PHAN MẠNH QUỲNH | OFFICIAL MV (OST MAI MOVIE)
        </h4>
        <span class="channel-name">TRẤN THÀNH TOWN</span>
        <div class="views-date d-flex">
          <span class="views">4.4M views</span>
          <span class="dot"></span>
          <span class="date">12 days ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "VideoDetailsMain",
  props: ["id"],
  setup(props) {
    const router = useRouter();

    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_details_main.scss";
</style>
