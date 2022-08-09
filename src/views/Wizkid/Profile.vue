<script lang="ts">
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
import { useRoute } from 'vue-router';
import { Role } from '@/models/Wizkid';
import type { Wizkid } from '@/models/Wizkid';
const { wizkid } = storeToRefs(useWizkidStore());
const { updateWizkid, removeWizkid } = useWizkidStore();

const route = useRoute();

export default {
  data() {
    return {
      wizkid
    };
  },
  methods: {
    getCurrentWizkid() {
      console.log(route.params.id);
    },
    handleUpdateWizkid() {
      const updatedWizkid: Wizkid = {
        id: 'de45966c-ffb4-4452-baef-5fea44c7e8a6',
        name: 'Coenio ',
        email: 'coenbreg@gmail.com',
        role: Role.ITERN,
        picture: 'asg'
      };
      updateWizkid(updatedWizkid);
    },
    handleRemoveWizkid(id: string) {
      removeWizkid(id);
    }
  }
};
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Wizkid: {{ wizkid.name }} ( {{ $route.params.id }} )</h1>
    </div>
    <div class="flex flex-col">
      <p>{{ wizkid.name }}</p>
      <p>{{ wizkid.email }}</p>
      <p>{{ wizkid.role }}</p>
      <p>{{ wizkid.picture }}</p>
    </div>
    <div class="flex my-3">
      <button
        @click="handleUpdateWizkid"
        class="disabled:bg-gray-300 w-32 py-1 font-medium bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-150 mr-4">
        Update
      </button>

      <button
        @click="handleRemoveWizkid($route.params.id)"
        class="disabled:bg-gray-300 w-32 py-1 font-medium bg-red-700 text-white rounded-md hover:bg-red-600 transition duration-150">
        Delete
      </button>
    </div>
  </div>
</template>

<style></style>
