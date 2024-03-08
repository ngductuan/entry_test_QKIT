<template>
  <div class="video-details-main-sec">
    <div class="video-main">
      <iframe
        :src="`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&showinfo=0&ecver=2&modestbranding=1`"
      ></iframe>
    </div>
    <div class="content">
      <h4 class="title mb-2 mt-3">Taylor Swift - Enchanted (Music Video)</h4>
      <div class="row controls-sec">
        <div class="col-4 info d-flex align-items-center">
          <img src="../../assets/thumbnail.jpg" class="channel-icon" alt="" />
          <div class="name-viewer">
            <span class="channel-name d-block">Taylor Music</span>
            <span class="viewer d-block">4.4M views</span>
          </div>
          <button class="subscribe-btn">Subscribe</button>
        </div>

        <div class="col-8 feature-sec d-flex justify-content-end">
          <div class="like-btn d-flex align-items-center">
            <img src="../../assets/like.png" alt="" />
            <span>9.7K</span>
            <div class="bar"></div>
          </div>
          <div class="unlike-btn d-flex align-items-center me-2">
            <img src="../../assets/unlike.png" alt="" />
          </div>
          <div class="common-btn d-flex align-items-center me-2">
            <img src="../../assets/share.png" alt="" />
            <span>Share</span>
          </div>

          <div class="common-btn d-flex align-items-center me-2">
            <img src="../../assets/download.png" alt="" />
            <span>Download</span>
          </div>

          <div class="common-btn d-flex align-items-center me-2">
            <img src="../../assets/add_playlist.png" alt="" />
            <span>Save</span>
          </div>

          <div class="extra-btn">
            <i class="fa-light fa-ellipsis"></i>
          </div>
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

    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_details_main.scss";
</style>
