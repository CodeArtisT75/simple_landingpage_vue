<template>
  <section id="section-tophead-img" class="topimg-wrapper">
    <vue-particles color="#A3C8FF" class="top-particle" :moveSpeed="1"></vue-particles>
    <div class="top-header-img-overlay" />
    <img class="top-header-img" :src="img" />
    <div class="header-content d-flex flex-column justify-content-center align-items-center">
      <h1 class="head-title mt-5 text-light font-weight-bold">Change Your Life!</h1>
      <b-button
        v-scroll-to="'#section-works'"
        size="lg"
        class="top-header-button"
        variant="outline-light"
      >START</b-button>
    </div>
  </section>
</template>

<script>
import Img from '../../../../assets/img/topimgbg.jpg';


export default {
  data: function () {
    return {
      img: Img
    }
  }
}
</script>

<style lang="scss" scoped>

.head-title{
  font-size: 3rem;
}

.topimg-wrapper {
  width: 100%;
  height: 100vh;
  margin-bottom: 40px;

  .top-particle{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -31;
  }

  .header-content {
    width: 100%;
    height: 100%;

    .top-header-button {
      width: 200px;
      margin-top: 40px;
    }
  }

  .top-header-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -32;
  }

  .top-header-img-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(49, 49, 49, 0.5);
    z-index: -30;
  }
}
</style>
