<template>
  <div class="todoitem-wrapper">
    <div class="toditem-txt">{{txt}}</div>
    <div class="todiitem-delete">
      <i class="fa fa-times" @click="deleteItem"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['txt', 'index'],
  methods: {
    deleteItem() {
      this.$parent.$parent.$parent.deleteItem(this.index);
    }
  }
}
</script>


<style lang="scss">
.todoitem-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;

  .toditem-txt {
    padding-left: 10px;
    flex-grow: 11;
  }

  .todiitem-delete {
    flex-grow: 1;
    text-align: right;
    padding-right: 20px;
  }

  .todiitem-delete:hover {
    cursor: pointer;
  }

  transition: background-color 200ms;
}

.todoitem-wrapper:hover {
  background-color: rgb(221, 221, 221);
  transition: background-color 200ms;
}
</style>
