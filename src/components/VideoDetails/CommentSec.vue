<template>
  <div class="comments-sec">
    <div class="comments-sort d-flex align-items-center">
      <div class="comment-title">
        <span class="comments-quant">264</span> <span>Comments</span>
      </div>

      <div class="sort-btn d-flex align-items-center me-2">
        <img src="../../assets/sort.png" alt="" />
        <span>Sort by</span>
      </div>
    </div>

    <div class="comments-input d-flex align-items-start">
      <img src="../../assets/user_input.png" alt="" />
      <input type="text" placeholder="Add a comment...">
    </div>

    <CommentCard v-for="i in 15" :key="i"/>
  </div>
</template>

<script>
import CommentCard from './CommentCard.vue';
export default {
  name: 'CommentSec',
  components: {
    CommentCard,
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/comment_sec.scss";
</style>
