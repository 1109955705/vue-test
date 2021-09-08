<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const list = [
  {
    title: "1",
    desc: "描述1",
    src: "1.html",
  },
  {
    title: "2",
    desc: "描述2",
    src: "2.html",
  },
  {
    title: "3",
    desc: "描述3",
    src: "3.html",
  },
  {
    title: "4",
    desc: "描述4",
    src: "4.html",
  },
];

const toDetail = (src: string) => {
  console.log("xxxxxxxxxx", src);
  router.push({ name: "detail", params: { src: src } });
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
          @click="toDetail(item.src)"
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
  overflow: hidden;
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
