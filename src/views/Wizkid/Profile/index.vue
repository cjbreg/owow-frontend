<script lang="ts">
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
const { wizkid } = storeToRefs(useWizkidStore());
const { removeWizkid } = useWizkidStore();

const route = useRoute();

export default defineComponent({
  data() {
    return {
      wizkid
    };
  },
  methods: {
    getCurrentWizkid() {
      console.log(route.params.id);
    },
    handleUpdateWizkid(id: string | string[]) {
      this.$router.push(`/wizkid/profile/${id}/update`);
    },
    handleRemoveWizkid(id: string | string[]) {
      removeWizkid(id);
    }
  }
});
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Wizkid: {{ wizkid?.name }}</h1>
    </div>
    <div class="flex flex-col text-white">
      <p><span class="text-gray-300">Email: </span>{{ wizkid?.email }}</p>
      <p><span class="text-gray-300">Role: </span>{{ wizkid?.role }}</p>
      <p><span class="text-gray-300">Picture: </span>{{ wizkid?.picture }}</p>
      <p><span class="text-gray-300">Phone: </span>{{ wizkid?.phoneNumber ?? 'unavailable' }}</p>
    </div>
    <div class="flex my-3">
      <button
        @click="handleUpdateWizkid($route.params.id)"
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
