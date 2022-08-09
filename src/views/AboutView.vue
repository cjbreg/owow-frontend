<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
import type { Wizkid } from '@/models/Wizkid';
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '../stores/wizkid';
const { wizkids, loading } = storeToRefs(useWizkidStore());
const { addWizkid } = useWizkidStore();

const HandleAddWizkid = () => {
  const testWizkid: Wizkid = {
    id: uuidv4(),
    name: 'Coen',
    role: 'admin',
    email: 'email',
    picture: 'picture'
  };
  addWizkid(testWizkid);
};

export default {
  data() {
    return {
      loading,
      wizkids,
      HandleAddWizkid
    };
  }
};
</script>

<template>
  <div class="container mx-auto">
    <h1>This is an about page</h1>
    <p v-if="!loading">{{ loading }} {{ wizkids.length }}</p>
    <button @click="HandleAddWizkid">test</button>
  </div>
</template>

<style></style>
