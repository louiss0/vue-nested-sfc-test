<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

import { TextTwo, TextOne } from './components/ComponentSets.vue';

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <TextOne word="logo" />
  <TextTwo />
  <Randy />
</template>

<component lang="vue" name="randy" >
    <template>
      I'm randy
      <!-- <Lyn /> This won't work -->
    </template>
</component>

<component lang="vue" name="lyn" >
    <template>
      I'm lyn
    </template>
</component>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
