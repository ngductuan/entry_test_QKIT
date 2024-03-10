<template>
  <div class="row medium-gutters video-details-sec">
    <div class="c-8-custom">
      <VideoDetailsMain :id="vidId"/>
      <CommentSec/>
    </div>

    <div class="c-4-custom">
      <VideoRefCard :id="item" v-for="(item, index) in arrId" :key="index"/>
    </div>
  </div>
</template>

<script>
import { inject, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import VideoDetailsMain from "../components/VideoDetails/VideoDetailsMain.vue";
import VideoRefCard from '@/components/VideoDetails/VideoRefCard.vue';
import CommentSec from "@/components/VideoDetails/CommentSec.vue";
import Nav from "@/components/layouts/Nav.vue";

export default {
  name: 'VideoDetails',
  components: {
    VideoDetailsMain,
    VideoRefCard,
    CommentSec,
    Nav,
  },
  setup(){
    const route = useRoute();
    const vidId = route.params.id
    let navBool = inject("navClick");

    console.log(route.name);

    watchEffect(() => {
      console.log('nav click details', navBool.value)
      if(navBool.value){

      }
    })

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
    ];

    return{
      vidId,
      arrId,
      navBool,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/video_details.scss";
</style>