<template>
  <div class="message-user-wrapper">{{msgtext}}</div>
</template>


<script>
export default {
  props: ['msgtext']
}
</script>


<style lang="scss" scoped>
.message-user-wrapper {
  margin: 10px 5px 10px auto;
  padding: 5px 10px 5px 10px;
  min-width: 10%;
  max-width: 60%;
  width: fit-content;
  background-color: rgb(100, 241, 230);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(119, 119, 119, 0.3);
}
</style>
