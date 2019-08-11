<template>
  <div class="todo-wrapper" data-aos="fade-dowm">
    <div class="todo-component mx-auto">
      <!-- Top -->
      <b-navbar variant="primary" type="dark" sticky>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">
              <i class="fa fa-arrow-left text-white"></i>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <span class="text-white">Todos</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <!-- Content -->
      <div class="chat-content-view">
        <draggable>
          <transition-group name="fade">
            <template v-for="(item,index) in items">
              <TodoItem :txt="item" :key="index" :index="index" />
            </template>
          </transition-group>
        </draggable>
      </div>

      <!-- Message bar -->
      <div
        class="newitem-view d-flex justify-content-center align-items-center"
      >
        <b-row style="width:100%;">
          <b-col cols="8">
            <b-form-input
              v-model="newItem"
              @keydown.enter="addNewItem"
              class="shadow-none"
              ref="todoInput"
            ></b-form-input>
          </b-col>
          <b-col cols="4" class="pl-0">
            <b-button
              variant="primary"
              block
              class="shadow-none"
              @click="addNewItem"
            >Add</b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import draggable from 'vuedraggable';

export default {
  data: function () {
    return {
      newItem: "",
      items: ['buy food', 'bake bread', 'eat bread']
    }
  },
  methods: {
    addNewItem() {
      if (this.newItem != "") {
        let newItem = this.newItem;

        this.items.push(newItem);

        this.newItem = "";
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  },
  mounted() {
    this.$refs.todoInput.$el.focus();
  },
  components: { TodoItem, draggable }
}
</script>


<style lang="scss" scoped>
$max-width-for-mediaQuery: 50%;

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: scale(1);

  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.fade-move {
  transition: transform 500ms;
}

.todo-wrapper {
  background-color: rgb(218, 218, 218);
  height: 100vh;

  .todo-component {
    width: $max-width-for-mediaQuery;
    background-color: #fff;
    min-height: 100vh;

    .newitem-view {
      position: fixed;
      bottom: 0;
      width: $max-width-for-mediaQuery;
      height: 50px;
      background-color: rgb(236, 236, 236);
      padding: 3px 0px 3px 0px;
    }
  }

  @media (max-width: 750px) {
    .todo-component {
      width: 100%;

      .newitem-view {
        width: 100%;
      }
    }
  }
}
</style>

