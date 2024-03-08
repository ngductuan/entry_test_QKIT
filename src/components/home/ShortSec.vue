<template>
  <div class="short-sec">
    <div class="title-section d-flex align-items-center">
      <div class="short-icon">
        <icon-shape class="yt-spec-icon-shape"
        ><div style="width: 100%; height: 100%; fill: currentcolor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            style="
              pointer-events: none;
              display: block;
              width: 100%;
              height: 100%;
            "
          >
            <g>
              <path
                d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
                fill="red"
              ></path>
              <polygon
                points="10 14.65 15 12 10 9.35 10 14.65"
                fill="#fff"
              ></polygon>
            </g>
          </svg></div
      ></icon-shape>
      </div>
      <span>Shorts</span>
    </div>
    <div class="short-card-sec row">
      <ShortCard :id="'BTy92pb92Mw'"/>
    </div>
  </div>
</template>

<script>
import ShortCard from './ShortCard.vue';

export default {
  name: "ShortSec",
  components: {
    ShortCard,
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/short_sec.scss";
</style>
