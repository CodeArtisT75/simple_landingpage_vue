<template>
  <div
    class="work-item-wrapper d-flex flex-column justify-content-center align-items-center"
  >
    <img class="item-img" :src="img ? img :'' " :alt="alt ? alt : 'No alt'" />
    <h4 class="item-title">{{title}}</h4>
    <p class="item-text text-justify">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ['img', 'alt', 'title', 'text']
}
</script>

<style lang="scss" scoped>
.work-item-wrapper {
  width: 100%;
  padding: 60px 5px 0px 5px;
  margin-bottom: 20px;

  .item-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;

    transition: transform 300ms;
  }

  .item-img:hover {
    transform: scale(1.2);

    transition: transform 300ms;
  }

  .item-title {
    margin-top: 30px;
  }

  .item-text {
    margin-top: 5px;
  }
}
</style>
