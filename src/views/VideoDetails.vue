<template>
  <div class="row medium-gutters video-details-sec">
    <div class="c-8-custom">
      <VideoDetailsMain :id="vidId"/>
    </div>

    <div class="c-4-custom">

    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import VideoDetailsMain from "../components/VideoDetails/VideoDetailsMain.vue";

export default {
  name: 'VideoDetails',
  components: {
    VideoDetailsMain,
  },
  setup(){
    const route = useRoute();
    const vidId = route.params.id
    console.log(vidId);

    return{
      vidId,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/video_details.scss";
</style>