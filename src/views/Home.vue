<template>
  <div class="row medium-gutters home-sec">
    <Nav />
    <!-- <div class="col col-2"></div> -->
    <div class="content-sec">
      <div class="col-12 topic-sec-cover d-flex" :class="{'topic-sec-cover-change': navBool}">
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
      <div class="col c-11-custom row medium-gutters gx-3 video-sec" :class="{'video-sec-change': navBool}">
        <VideoCard v-for="id in 8" :key="id" :id="arrId[id]" />
        <!-- <VideoCard :id="'VY3xx4IqPs4'"/> -->
        <!-- <ShortSec/> -->
        <VideoCard v-for="idValue in filteredIds()" :key="idValue" :id="idValue" />
      </div>
      
    </div>
  </div>
</template>

<script>
import { inject, ref, watchEffect } from "vue";
import Nav from "../components/layouts/Nav.vue";
import VideoCard from "../components/home/VideoCard.vue";
import ShortSec from '@/components/home/ShortSec.vue';

export default {
  name: "Home",
  components: {
    Nav,
    VideoCard,
    ShortSec,
  },
  setup() {
    let navBool = inject("navClick");

    let arrId = [
      "VY3xx4IqPs4",
      "6us_CHq4ySo",
      "b1kbLwvqugk",
      "EbEOA6Td808",
      "2KH80MbhecI",
      "IHDnlEqed6U",
      "vCK3WSahFPM",
      "JccC_l6ocQA",
      "gXYP0ZLNSkk",
      "xcl9CmYJn10",
      "juSMBJEr_bE",
      "8dcJ-U1dUx0",
      "ru3U8MHbFFI",
      "N5wpD9Ov_To",
      "fzZTvLmmTzM",
      "MxEtxo_AaZ4",
      "Hu2DqgG1nOs",
      "M1qPpwVcF64",
      
    ];

    watchEffect(() => {
      console.log('nav click Home', navBool.value)
    })

    let filteredIds = () => {
      return arrId.filter((id, index) => index >= 8);
    }


    return {
      arrId,
      navBool,
      filteredIds,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
