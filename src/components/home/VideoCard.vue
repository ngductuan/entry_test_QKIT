<template>
  <div class="video-card-sec col-3">
    <a :id="id" class="video-store" href="#" @mouseleave="mouseLeave">
      <img
        :src="`http://img.youtube.com/vi/${id}/0.jpg`"
        class="thumb-nail"
        @mouseover="mouseOver"
        alt=""
      />
      <div class="cover" @click="videoClick"></div>
    </a>
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
  name: "VideoCard",
  // props: {
  //   id: String,
  // },
  props: ["id"],
  setup(props) {
    let vidId = ref(props.id);
    const router = useRouter();

    function createIframe() {
      const iframe = document.createElement("iframe");
      iframe.width = "100%"; //this.iframeWidth
      iframe.height = "174";
      iframe.src = `https://www.youtube.com/embed/${props.id}?autoplay=1&controls=0`;
      iframe.frameborder = "0";
      iframe.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.setAttribute("class", `video-iframe`);
      // Add event listeners to the iframe
      // iframe.addEventListener("click", onIframeClick);
      return iframe;
    }

    function mouseOver() {
      $(`#${props.id} .thumb-nail`).addClass("d-none");
      $(`#${props.id} .cover`).addClass("show");
      $(`#${props.id}`).append(createIframe());
    }

    function mouseLeave() {
      $(`#${props.id} .thumb-nail`).removeClass("d-none");
      $(`#${props.id} .cover`).removeClass("show");
      $(`#${props.id} iframe`).remove();
    }

    function videoClick() {
      console.log("da click", vidId.value);
      // mouseLeave()
      router.push({
        name: 'VideoDetails',
        params: {id: vidId.value}
      });
    }

    return {
      mouseOver,
      mouseLeave,
      vidId,
      videoClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_card.scss";
</style>
