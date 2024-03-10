<template>
  <div class="video-card-sec d-flex row gx-2" :id="id">
    <a class="video-store col-5" :href="'/details/' + id">
      <img
        :src="`http://img.youtube.com/vi/${id}/0.jpg`"
        class="thumb-nail col-5"
        alt=""
      />
      <div class="clock-add-list d-none">
        <span class="clock"><i class="fa-light fa-clock"></i></span>
        <span class="add-list"><i class="fa-light fa-folder-plus"></i></span>
      </div>
      <span class="time-span">4:10</span>
    </a>
    <a class="content d-flex col-7">
      <div class="info">
        <a class="title" :href="'/details/' + id">
          SAU LỜI KHƯỚC TỪ - PHAN MẠNH QUỲNH | OFFICIAL MV (OST MAI MOVIE)
        </a>
        <span class="channel-name">TRẤN THÀNH TOWN</span>
        <div class="views-date d-flex">
          <span class="views">4.4M views</span>
          <span class="dot"></span>
          <span class="date">12 days ago</span>
        </div>
      </div>
    </a>

    <span class="more-icon d-none">
      <i class="fa-light fa-ellipsis-vertical"></i>
    </span>
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

    $(document).ready(function () {
      $(`#${props.id}`).hover(
        function () {
          $(this).find(".clock-add-list").removeClass("d-none");
          $(this).find(".more-icon").removeClass("d-none");
        },
        function () {
          $(this).find(".clock-add-list").addClass("d-none");
          $(this).find(".more-icon").addClass("d-none");
        }
      );
    });

    // function mouseOver() {
    //   $(`#${props.id} .clock-add-list`).removeClass("d-none");
    // }

    // function mouseLeave() {
    //   $(`#${props.id} .clock-add-list`).addClass("d-none");
    // }

    return {
      // mouseOver,
      // mouseLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_ref_card.scss";
</style>
