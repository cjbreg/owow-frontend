<script lang="ts">
import type { Wizkid } from '@/models/Wizkid';
import { Role } from '@/models/Wizkid';
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
import WizkidComponent from '../../components/WizkidComponent.vue';
const { wizkid } = storeToRefs(useWizkidStore());
export default {
  data() {
    return {
      wizkid
    };
  },
  created() {},
  components: { WizkidComponent },
  methods: {
    getCurrentWizkid(id: string) {
      console.log(id);
    },
    handleAddNew() {
      this.$router.push('/wizkid/add');
    }
  }
};
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Wizkid: {{ wizkid.name }} ( {{ $route.params.id }} )</h1>
    </div>
    <button
      class="disabled:bg-gray-300 w-32 py-1 font-medium bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-150"
      @click="handleAddNew(newKid)">
      Add new
    </button>
  </div>
</template>

<style></style>
