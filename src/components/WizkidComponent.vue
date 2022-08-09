<script lang="ts">
import Icon from './icons/Icon.vue';
import { useWizkidStore } from '@/stores/wizkid';
import type { Wizkid } from '@/models/Wizkid';
const { setCurrentWizkid } = useWizkidStore();
export default {
  props: {
    wizkid: {
      type: Object,
      required: true
    }
  },
  components: { Icon },
  methods: {
    handleWizkidNavigate(wizkid: Wizkid) {
      setCurrentWizkid(wizkid);
      this.$router.push(`/wizkid/profile/${wizkid.id}`);
    }
  }
};
</script>

<template>
  <div class="flex container justify-between text-white border rounded-2xl px-2 py-3 mb-4">
    <div class="flex">
      <div class="flex items-center">
        <div
          class="text-gray-300 border border-gray-500 flex justify-center items-center p-6 rounded-2xl mr-3">
          <Icon name="image" />
        </div>
        <div>
          <h1 class="text-lg font-semibold">{{ wizkid.name }}</h1>
          <h1 class="text-sm">{{ wizkid.email }}</h1>
          <h1 class="text-sm capitalize">{{ wizkid.role }}</h1>
        </div>
      </div>
    </div>

    <div
      class="text-white flex justify-center items-center p-6 rounded-2xl mr-2 hover:text-green-400 hover:cursor-pointer"
      @click="handleWizkidNavigate(wizkid)">
      <Icon name="chevron-right  " :width="32" :height="32" />
    </div>
  </div>
</template>

<style></style>
