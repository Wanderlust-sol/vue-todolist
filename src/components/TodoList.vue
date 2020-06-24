<template>
  <div>
    <div class="list-box">
      <span>오늘의 할일</span>
      <ul>
        <li v-for="(item, index) in todoList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todoList"]
};
</script>

<style scoped>
.list-box {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>