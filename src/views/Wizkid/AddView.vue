<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
import type { Wizkid } from '@/models/Wizkid';
import { Role } from '@/models/Wizkid';
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
const { wizkids } = storeToRefs(useWizkidStore());
const { addWizkid } = useWizkidStore();

const isValid = (newKid: Wizkid): boolean => {
  const regex = /^\S+@\S+$/;
  if (newKid.name === null || newKid.name === '') return false;
  if (newKid.email === null || newKid.email === '' || !regex.test(newKid.email)) return false;
  if (newKid.role === null) return false;
  if (newKid.picture === null || newKid.picture === '') return false;
  return true;
};

export default {
  data() {
    return {
      wizkids,
      isValid,
      newKid: {
        name: null,
        email: null,
        role: null,
        picture: null
      },
      roles: [Role.BOSS, Role.DESIGNER, Role.DEVELOPER, Role.ITERN]
    };
  },
  methods: {
    handleAddWizkid(newKid: Wizkid) {
      const newWizkid: Wizkid = {
        id: uuidv4(),
        name: newKid.name,
        role: newKid.role,
        email: newKid.email,
        picture: newKid.picture
      };
      addWizkid(newWizkid);
      this.$router.push('/wizkid');
    }
  }
};
</script>

<template>
  <div class="flex flex-col container">
    <div class="mb-4 text-white">
      <h1 class="font-semibold text-lg">Add new wizkid</h1>
    </div>
    <div>
      <form class="text-white">
        <div class="relative z-0 mb-6 group flex">
          <div class="relative w-full">
            <input
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              v-model="newKid.name"
              name="name" />
            <label
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
        </div>

        <div class="relative z-0 mb-6 group flex">
          <div class="relative w-full">
            <input
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              v-model="newKid.email"
              name="email" />
            <label
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
        </div>

        <div class="relative z-0 mb-6 group flex flex-col items-start">
          <label class="text-sm text-gray-500 scale-75 mb-1"> Role </label>
          <div class="flex">
            <div v-for="(role, index) in roles" :key="index" class="flex mx-2">
              <input
                type="radio"
                required
                :name="role"
                v-model="newKid.role"
                :value="role"
                class="mr-1 form-radio text-green-500" />
              <label :for="role" class="capitalize">{{ role }} </label>
            </div>
          </div>
        </div>

        <div class="relative z-0 mb-6 group flex">
          <div class="relative w-full">
            <input
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              v-model="newKid.picture"
              name="picture" />
            <label
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Picture
            </label>
          </div>
        </div>
      </form>
    </div>

    <button
      class="disabled:bg-gray-300 w-32 py-1 font-medium bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-150"
      @click="handleAddWizkid(newKid)"
      :disabled="!isValid(newKid)">
      Add
    </button>
  </div>
</template>

<style></style>
