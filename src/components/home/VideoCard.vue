<template>
  <div class="video-card-sec col-3">
    <div :id="id" class="video-store" @mouseleave="mouseLeave">
      <!-- <img
        :src="'https://img.youtube.com/vi/' + id + '/0.jpg'"
        class="thumb-nail"
        alt=""
      /> -->
      <img
        src="../../assets/thumbnail.jpg"
        class="thumb-nail"
        @mouseover="mouseOver"
        alt=""
      />
      <!-- <iframe
        class="iframe d-none"
        width="100%"
        height="173px"
        :src='"https://www.youtube.com/embed/" + id + "?autoplay=1"' 
        allow='autoplay' frameborder="0" allowfullscreen
      /> -->
      <!-- <iframe
        width="100%"
        height="173"
        :src="videoRef"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
      <!-- <iframe
        width="100%"
        height="173"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
        allowfullscreen
      ></iframe> -->
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

export default {
  name: "VideoCard",
  // props: {
  //   id: String,
  // },
  props: ["id"],
  setup(props) {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    // firstScriptTag.addClass('iframe')
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    function onYouTubeIframeAPIReady() {
      console.log("Youtube is ready");
    }

    var player;
    function startVideo(vidId) {
      // if (player) {
      //   player.destroy();
      // }
      player = new YT.Player("player", {
        height: "175px",
        width: "100%",
        videoId: "VY3xx4IqPs4",
        playerVars: {
          playsinline: 1,
          autoplay: 1,
          // controls: 0,
          // fs: 0,
          showinfo: 0,
          // wmode: "opaque",
          // rel: 0,
          enablejsapi: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log("1", event);
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      console.log(event);
      if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        // $(".thumb-nail").addClass("invisible");
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }

    function playVideo() {
      player.playVideo();
    }

    function createIframe() {
      const iframe = document.createElement("iframe");
      iframe.width = "100%"; //this.iframeWidth
      iframe.height = "173";
      iframe.src = `https://www.youtube.com/embed/${props.id}?autoplay=1`;
      iframe.frameborder = "0";
      iframe.allow =
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      // iframe.setAttribute("id", `iframe-${props.id}`);
      return iframe;
    }

    function mouseOver() {
      $(`#${props.id} .thumb-nail`).addClass("d-none");
      $(`#${props.id}`).append(createIframe());
      // setInterval(() => {
      //   console.log($("#movie_player"));
      //   $("#movie_player").removeClass("paused-mode unstarted-mode");
      //   $("#movie_player").addClass("playing-mode ytp-autohide");
      // }, 1000);
      // startVideo();
      // player.playVideo();
    }

    function mouseLeave() {
      $(`#${props.id} .thumb-nail`).removeClass("d-none");
      $(`#${props.id} iframe`).remove();
      // $(`#${props.id}`).find("script").remove();
      // player.stopVideo()
      // player = null;
    }

    // setInterval(() => {
    //   // document
    //   //   .getElementById(`iframe-${props.id}`)
    //   //   .addEventListener("load", function () {
    //   //     // Access the iframe document
    //   //     // console.log($("#movie_player"));
    //   //     // $("#movie_player").removeClass("paused-mode unstarted-mode");
    //   //     // $("#movie_player").addClass("playing-mode ytp-autohide");
    //   //     const iframeDocument = this.contentWindow.document;

    //   //     // Now you can access elements inside the iframe document
    //   //     const iframeElement = iframeDocument.getElementById("movie_player");
    //   //     console.log(iframeElement);
    //   //   });
    //   const iframe = document.getElementById(`iframe-${props.id}`);
    //   if (iframe) {
    //     iframe.addEventListener("load", function () {
    //       // Access the iframe document
    //       const iframeDocument = this.contentWindow.document;

    //       // Check if the element exists in the iframe document
    //       const iframeElement = iframeDocument.getElementById("movie_player");
    //       if (iframeElement) {
    //         // Element exists, you can now perform further actions
    //         console.log(iframeElement);
    //         // Perform additional actions here
    //       } else {
    //         // Element does not exist in the iframe document
    //         console.log("Element not found in the iframe document");
    //       }
    //     });
    //   }
    // }, 1000);

    return {
      startVideo,
      onYouTubeIframeAPIReady,
      mouseOver,
      mouseLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/video_card.scss";
</style>
