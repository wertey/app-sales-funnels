<template>
  <div class="video-content" :style="{ marginTop: topMargin }">
    <b-embed type="iframe" aspect="16by9" :src="link" allowfullscreen />
  </div>
</template>

<script>
export default {
  name: 'VideoContent',
  props: {
    link: {
      type: String,
      default: '',
    },
    topMargin: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">

</style>
