<template>
  <div>
    <div class="row medium-gutters home-sec">
      <Nav />
      <!-- <div class="col col-2"></div> -->
      <div class="content-sec">
        <div class="col-12 topic-sec-cover d-flex">
          <!-- <div class="col-1-custom"></div> -->
          <ul class="topic-sec-ul scroll-bar-custom-3">
            <!-- <li style="width: 15%;"></li> -->
            <li class="active-li">All</li>
            <li>Music</li>
            <li>Lofi</li>
            <li>Youth music</li>
            <li>Chill-out music</li>
            <li>Playlists</li>
            <li>CSS</li>
            <li>Sound tracks</li>
            <li>Drum</li>
            <li>Romantic guitar</li>
            <li>Animation films</li>
            <li>Gaming</li>
            <li>Jazz</li>
            <li>Romantic guitar</li>
            <li>Animation films</li>
            <li>Gaming</li>
            <li>Jazz</li>
          </ul>
        </div>
        <div class="col c-11-custom row medium-gutters gx-3 video-sec">
          <!-- <VideoCard v-for="(item, index) in arrId" :key="index" :id="item" /> -->
          <VideoCard :id="'VY3xx4IqPs4'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/layouts/Nav.vue";
import VideoCard from "../components/home/VideoCard.vue";

export default {
  name: "Home",
  components: {
    Nav,
    VideoCard,
  },
  setup() {
    let arrId = [
      "VY3xx4IqPs4",
      "6us_CHq4ySo",
      "b1kbLwvqugk",
      "EbEOA6Td808",
      "2KH80MbhecI",
      "IHDnlEqed6U",
      "vCK3WSahFPM",
      "JccC_l6ocQA",
      "6us_CHq4ySo",
      "b1kbLwvqugk",
      "EbEOA6Td808",
      "2KH80MbhecI",
      "IHDnlEqed6U",
      "vCK3WSahFPM",
    ];

    return {
      arrId,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
