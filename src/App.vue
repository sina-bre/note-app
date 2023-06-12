<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>

<template>
  <v-btn> <RouterLink to="/">Notes</RouterLink></v-btn>
  <v-btn><RouterLink to="stats">Stats</RouterLink></v-btn>
  <RouterView />
</template>

<style>
a {
  text-decoration: none;
}
</style>
