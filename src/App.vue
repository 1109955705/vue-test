<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const toHome = () => {
  console.log("xxxxxxxxxx");
  router.push({
    name: "apple",
  });
};
const toBananer = () => {
  console.log("xxxxxxxxxx");
  router.push({
    name: "bananer",
  });
};
</script>

<template>
  <div class="page">
    <aside class="aside">
      <section class="userinfo">
        <div>头像</div>
        <div>支松岗</div>
      </section>
      <section class="nav">
        <router-link v-bind:to="'/demo'">say Hello</router-link>
        <router-link v-bind:to="'/bananer'">say World</router-link>
      </section>
      <section>
        <div>..........</div>
      </section>
    </aside>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="postcss" scoped>
:root {
  --main-bg-color: rgb(46, 46, 40);
}
.page {
  display: flex;
  height: 100vh;
}

.aside {
  padding: 0 30px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
