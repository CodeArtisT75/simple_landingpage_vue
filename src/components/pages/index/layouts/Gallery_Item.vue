<template>
  <div class="gallery-item-wrapper">
    <b-img-lazy rounded class="gallery-img anim-enter" :src="img" />
  </div>
</template>

<script>
export default {
  props: ['img']
}
</script>

<style lang="scss" scoped>
.gallery-item-wrapper {
  margin-bottom: 20px;

  .anim-enter {
    animation: animEnter 1s linear 0s 1 normal;
  }

  @keyframes animEnter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .gallery-img {
    width: 100%;
    height: 230px;

    transition: transform 300ms;
  }

  .gallery-img:hover {
    transform: scale(1.1);

    transition: transform 300ms;
  }
}
</style>
