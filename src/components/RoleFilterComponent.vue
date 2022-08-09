<template>
  <div v-if="option === value" class="mr-2 text-green-500 capitalize" @click="onClick">
    <slot />
  </div>
  <div v-else class="mr-2 capitalize" @click="onClick"><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['option', 'value'],
  methods: {
    onClick() {
      console.log(this.option);
      this.$emit('input', this.option);
    }
  }
});
</script>
