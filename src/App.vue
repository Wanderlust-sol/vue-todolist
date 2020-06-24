<template>
  <div id="app">
    <TodoInput v-on:addlist="addList"></TodoInput>
    <TodoList :todoList="items" v-on:itemid="removeList"></TodoList>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  components: { TodoInput, TodoList },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addList(data) {
      this.items.push(data);
      console.log(this.items);
    },
    removeList(item) {
      let arr = this.items;
      const newItems = arr.filter(todo => todo !== item);
      this.items = newItems;
    }
  }
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
