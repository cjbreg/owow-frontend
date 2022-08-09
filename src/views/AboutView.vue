<script lang="ts">
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '../stores/wizkid';
const { wizkids, loading } = storeToRefs(useWizkidStore());
export default {
  data() {
    return {
      loading,
      wizkids
    };
  }
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-if="!loading">{{ loading }} {{ wizkids.length }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
