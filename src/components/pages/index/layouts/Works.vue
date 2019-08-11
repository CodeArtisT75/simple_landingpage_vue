<template>
  <section id="section-works" class="works-wrapper">
    <b-container>
      <h1 class="works-header">Our Works</h1>
      <b-row>
        <b-col v-for="(item,index) in items" md="4" :key="index">
          <WokrItem
            :img="item.img"
            :alt="item.alt"
            :text="item.text"
            :title="item.title"
          />
        </b-col>
      </b-row>
      <hr class="section-divider" />
    </b-container>
  </section>
</template>

<script>
import WokrItem from './Works_Item';
import img1 from '../../../../assets/img/place1.jpg';
import img2 from '../../../../assets/img/place2.jpg';
import img3 from '../../../../assets/img/place3.jpg';

const loremIpsumTXT = "lorem ipsum is a good unkown text for put inside the graphic design as text plan" +
  "and again lorem ipsum is a good unkown text for put inside the graphic design as text plan";

let items = [
  {
    title: "Work 1",
    text: loremIpsumTXT,
    img: img1,
    alt: "alt"
  },
  {
    title: "Work 2",
    text: loremIpsumTXT,
    img: img2,
    alt: "alt"
  },
  {
    title: "Work 3",
    text: loremIpsumTXT,
    img: img3,
    alt: "alt"
  }
]

export default {
  components: { WokrItem },
  data: function () {
    return {
      items
    }
  }
}
</script>

<style lang="scss" scoped>
.works-wrapper {
  .works-header {
    text-align: center;
  }
}
</style>