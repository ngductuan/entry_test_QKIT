<template>
  <div class="video-card-sec d-flex row gx-2" >
    <a :id="id" class="video-store col-5" :href="'/details/' + id">
      <img
        :src="`http://img.youtube.com/vi/${id}/0.jpg`"
        class="thumb-nail col-5"
        alt=""
      />
    </a>
    <a class="content d-flex col-7" :href="'/details/' + id">
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
    </a>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "VideoCard",
  // props: {
  //   id: String,
  // },
  props: ["id"],
  setup(props) {
    let vidId = ref(props.id);
    const router = useRouter();

    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_ref_card.scss";
</style>
