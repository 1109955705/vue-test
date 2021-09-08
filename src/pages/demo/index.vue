<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const list = [
  {
    title: "1",
    desc: "描述1",
  },
  {
    title: "2",
    desc: "描述2",
  },
  {
    title: "3",
    desc: "描述3",
  },
  {
    title: "4",
    desc: "描述4",
  },
];

const toDetail = () => {
  console.log("xxxxxxxxxx");
  router.push({
    name: "detail",
  });
};
</script>

<template>
  <div class="main">
    <div class="title">案例:</div>
    <main>
      <div class="list">
        <div
          class="item"
          v-for="item of list"
          :key="item.title"
          @click="toDetail"
        >
          <div>{{ item.title }}</div>
          <div>{{ item.desc }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.main {
  height: 100%;
  padding: 0 40px;
}

.title {
  margin-top: 80px;
  font-size: 48px;
}
.list {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  flex: 0 1 30%;
  border: 1px solid red;
  margin-top: 40px;
}
</style>
