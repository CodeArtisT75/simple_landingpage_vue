<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true
});

export default {
  name: 'app'
}
</script>

<style>

</style>
