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
        <img class="img-head" src="@/assets/images/head.png" />
        <div class="userinfo-name">支</div>
      </section>
      <section class="nav">
        <router-link class="nav-item" v-bind:to="'/demo'">THREEJS</router-link>
        <router-link v-bind:to="'/bananer'">CSS</router-link>
      </section>
    </aside>
    <main class="main">
      <router-view />
    </main>
    <div></div>
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
  width: 400px;
}

.nav {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.userinfo {
  margin-top: 200px;
  text-align: center;
  & .img-head {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
  & .userinfo-name {
    margin-top: 50px;
    font-size: 48px;
    color: black;
  }
}

.nav {
  margin-top: 200px;
  font-size: 64px;
  color: red;
  & .nav-item {
    margin-bottom: 50px;
  }
}

.main {
  flex: 1;
}
</style>
