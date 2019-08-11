<template>
  <div class="navbar-wrapper">
    <b-navbar
      fixed="top"
      type="dark"
      variant="transparent"
      :class="{'navbar-top-gradient':this.isFixedTop,'navbar-top-dark':!this.isFixedTop}"
    >
      <b-navbar-brand href="#"><a class="text-white text-decoration-none" href="/">Brand</a></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-scroll-to="'#section-tophead-img'">Home</b-nav-item>
        <b-nav-item v-scroll-to="'#section-works'">Works</b-nav-item>
        <b-nav-item v-scroll-to="'#section-gallery'">Gallery</b-nav-item>
        <b-nav-item v-scroll-to="'#section-contactus'">Contact</b-nav-item>
        <b-nav-item>
          <router-link to="/chat" class="bootstrap-nav-item">Chat</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/todo" class="bootstrap-nav-item">Todo</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isFixedTop: true
    }
  },
  methods: {
    handerScroll() {
      if (window.scrollY > 200) {
        this.isFixedTop = false;
      } else {
        this.isFixedTop = true;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handerScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handerScroll);
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  .navbar-top-gradient {
    background-image: linear-gradient(
      rgba(82, 100, 145, 0.5),
      rgba(94, 106, 136, 0)
    ) !important;
    background-color: transparent;
    transition: 300ms;
  }

  .navbar-top-dark {
    background-color: rgb(54, 87, 170) !important;
    transition: 300ms;
  }

  .bootstrap-nav-item {
    color: rgba(255, 255, 255, 0.5);
  }

  .bootstrap-nav-item:hover {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
  }
}
</style>
