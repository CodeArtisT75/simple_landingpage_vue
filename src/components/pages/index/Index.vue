<template>
  <div class="index-wrapper">
    <Navbar />
    <div data-aos="fade-down">
      <HeadImg />
    </div>
    <div data-aos="fade-up">
      <Works />
    </div>
    <div data-aos="fade-up">
      <Gallery />
    </div>
    <div data-aos="fade-right">
      <ContactUs />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './layouts/Navbar';
import HeadImg from './layouts/HeadImg';
import Works from './layouts/Works';
import Gallery from './layouts/Gallery';
import ContactUs from './layouts/Contactus';
import Footer from './layouts/Footer';


export default {
  components: { Navbar, HeadImg, Works, Gallery, ContactUs, Footer }
}
</script>

<style lang="scss">
.section-divider {
  margin-top: 50px;
  margin-bottom: 40px;
}
</style>
