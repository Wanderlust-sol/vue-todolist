<template>
  <div id="app">
    <TodoInput v-on:addlist="addList">hi</TodoInput>
    <TodoList v-on:itemid="removeList"></TodoList>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  components: { TodoInput, TodoList },
  data() {
    return {
      items: [], //vuex 사용시 사용되지 않는 data
    };
  },
  methods: {
    //vuex 사용시 사용되지 않는 함수
    addList(data) {
      this.items.push(data);
    },
    //vuex 사용시 사용되지 않는 함수
    removeList(item) {
      let arr = this.items;
      const newItems = arr.filter((todo) => todo !== item);
      this.items = newItems;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
