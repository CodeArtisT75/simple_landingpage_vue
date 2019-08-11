<template>
  <section id="section-gallery" class="gallery-wrapper">
    <b-container>
      <h1 class="gallery-header">Gallery</h1>
      <b-row>
        <b-col md="4" v-for="(item,index) in items" :key="index">
          <GalleryItem :img="item" />
        </b-col>
      </b-row>
      <hr class="section-divider" />
    </b-container>
  </section>
</template>

<script>
import GalleryItem from './Gallery_Item';

import img1 from '../../../../assets/img/place1.jpg';
import img2 from '../../../../assets/img/place2.jpg';
import img3 from '../../../../assets/img/place3.jpg';


export default {
  data: function () {
    return {
      items: [img1, img2, img3, img3, img1, img2]
    }
  },
  components: { GalleryItem }
}
</script>

<style lang="scss" scoped>

.gallery-wrapper {
  .gallery-header {
    margin-bottom: 60px;
    text-align: center;
  }

  .gallery-img {
    width: 100%;
    height: 230px;
  }
}
</style>
