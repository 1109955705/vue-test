<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

const route = useRoute();
const comptudSrc = computed(() => `/threejs/${route.params.src}`);
</script>

<template>
  <div>
    <iframe class="iframe" :src="comptudSrc" frameborder="0">{{
      comptudSrc
    }}</iframe>
  </div>
</template>

<style></style>
