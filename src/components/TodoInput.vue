<template>
  <div>
    <input v-model="todo" type="text" placeholder="할일을 적어주세요." v-on:keydown.enter="addButton" />
    <button v-if="!toggle" @click="addButton">추가</button>
    <button v-else @click="applyBtn">적용</button>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  data() {
    return {
      todo: "",
      toggle: false
    };
  },
  methods: {
    addButton() {
      if (this.todo !== "") {
        this.$emit("addlist", this.todo);
        this.todo = "";
      } else return alert("내용을 입력해주세요");
    },
    applyBtn() {
      //   EventBus.$on("edititem", function(item) {
      //     console.log(item);
      //   });
      console.log("hi?");
    }
  },
  created() {
    EventBus.$on("edititem", item => {
      this.todo = item;
      this.toggle = true;
    });
  },
  beforeDestroy() {
    EventBus.$off("edititem");
  }
};
</script>

<style scoped>
</style>