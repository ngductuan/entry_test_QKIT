<template>
  <div class="comment-card d-flex align-items-start">
    <img src="../../assets/avatar_cmt.jpg" alt="" />
    <div class="comment-content">
      <div class="title-date">
        <span class="username">@cross2833</span>
        <span class="milestone">1 month ago</span>
      </div>
      <p class="comment-text">
        Most fanmade music videos are sourced from the official music video
        clips of her other songs that many people have seen, only you have made
        this video for this song so wonderful and beautiful. Wonderstruck's
        perfume commercial video really fits the theme of Enchanted so well,
        it's really looks like the official, love what you did with this nice
        one.
      </p>

      <div class="comment-feelings d-flex justify-content-start">
        <div class="common-btn">
          <div style="border-radius: 50%">
            <img src="../../assets/like.png" alt="" />
          </div>
          <span>5</span>
        </div>
        <div class="common-btn me-2">
          <img src="../../assets/unlike.png" alt="" />
        </div>
        <div class="reply-btn">
          <span>Reply</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/comment_card.scss";
</style>
