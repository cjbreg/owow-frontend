<script lang="ts">
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
import WizkidComponent from '../../components/WizkidComponent.vue';
const { wizkids } = storeToRefs(useWizkidStore());
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      wizkids
    };
  },
  components: { WizkidComponent },
  methods: {
    handleAddNew() {
      this.$router.push('/wizkid/add');
    }
  }
});
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Wizkids ( {{ wizkids.length }} )</h1>
    </div>
    <div>
      <WizkidComponent v-for="(wizkid, index) in wizkids" :key="index" :wizkid="wizkid" />
    </div>
    <button
      class="disabled:bg-gray-300 w-32 py-1 font-medium bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-150"
      @click="handleAddNew()">
      Add new
    </button>
  </div>
</template>

<style></style>
