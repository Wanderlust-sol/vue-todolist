<template>
  <div>
    <input v-model="todo" type="text" placeholder="할일을 적어주세요." v-on:keydown.enter="addButton" />
    <button @click="addButton">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addButton() {
      if (this.todo !== "") {
        this.$emit("addlist", this.todo);
        this.todo = "";
      } else return alert("내용을 입력해주세요");
    }
  }
};
</script>

<style scoped>
</style>