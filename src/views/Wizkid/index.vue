<script lang="ts">
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
import WizkidComponent from '../../components/WizkidComponent.vue';
const { wizkids } = storeToRefs(useWizkidStore());
import { defineComponent } from 'vue';
import RoleFilterComponent from '../../components/RoleFilterComponent.vue';
import { Role } from '@/models/Wizkid';
export default defineComponent({
  data() {
    return {
      wizkids,
      selectedRole: null,
      roles: [Role.BOSS, Role.DESIGNER, Role.DEVELOPER, Role.ITERN]
    };
  },
  components: { WizkidComponent, RoleFilterComponent },
  methods: {
    handleAddNew() {
      this.$router.push('/wizkid/add');
    },
    updateFilter(x: any) {
      if (this.selectedRole === x) return (this.selectedRole = null);
      this.selectedRole = x;
    }
  }
});
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Wizkids ( {{ wizkids.length }} )</h1>
    </div>
    <div class="flex flex-col mb-3">
      <span class="text-white">Filter by:</span>
      <div class="flex flex-row">
        <RoleFilterComponent
          v-for="(role, index) in roles"
          :key="index"
          :option="role"
          :value="selectedRole"
          @input="(i) => updateFilter(i)">
          {{ role }}</RoleFilterComponent
        >
      </div>
    </div>
    <div v-for="(wizkid, index) in wizkids">
      <WizkidComponent
        :key="index"
        :wizkid="wizkid"
        v-if="wizkid.role === selectedRole || selectedRole === null" />
    </div>
    <button
      class="disabled:bg-gray-300 w-32 py-1 font-medium bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-150"
      @click="handleAddNew()">
      Add new
    </button>
  </div>
</template>

<style></style>
