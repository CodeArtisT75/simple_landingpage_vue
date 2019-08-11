<template>
  <div class="message-contact-wrapper">{{msgtext}}</div>
</template>


<script>
export default {
  props: ['msgtext']
}
</script>


<style lang="scss" scoped>
.message-contact-wrapper {
  margin: 10px auto 10px 5px;
  padding: 5px 10px 5px 10px;
  min-width: 10%;
  max-width: 60%;
  width: fit-content;
  background-color: rgb(185, 198, 202);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(119, 119, 119, 0.3);
}
</style>
