<template>
  <div>
    <div class="list-box">
      <span>오늘의 할일</span>
      <ul>
        <li v-for="(item, index) in todoList" :key="index">
          {{item}}
          <button @click="editBtn(item, index)">수정</button>
          <button @click="removeBtn(item)">삭제</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";

export default {
  props: ["todoList"],
  methods: {
    editBtn(item, idx) {
      EventBus.$emit("edititem", item, idx);
    },
    removeBtn(item) {
      this.$emit("itemid", item);
    }
  }
};
</script>

<style scoped>
.list-box {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>