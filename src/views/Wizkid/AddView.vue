<script lang="ts">
import { v4 as uuidv4 } from 'uuid';
import type { Wizkid } from '@/models/Wizkid';
import { storeToRefs } from 'pinia';
import { useWizkidStore } from '@/stores/wizkid';
const { wizkids, loading } = storeToRefs(useWizkidStore());
const { addWizkid } = useWizkidStore();

const HandleAddWizkid = (newKid: Wizkid) => {
  const testWizkid: Wizkid = {
    id: uuidv4(),
    name: newKid.name,
    role: newKid.role,
    email: newKid.email,
    picture: newKid.picture
  };
  addWizkid(testWizkid);
};

export default {
  data() {
    return {
      loading,
      wizkids,
      HandleAddWizkid,
      newKid: {
        name: null,
        email: null,
        role: null,
        picture: null
      }
    };
  }
};
</script>

<template>
  <div class="flex flex-col container">
    <div>
      <formt class="text-white">
        <div className="relative z-0  mb-6 group flex">
          <div class="relative w-full">
            <input
              type="text"
              className="block py-2.5  px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              v-model="newKid.name"
              name="name" /><label
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Wizkid Name
            </label>
          </div>
        </div>

        <div className="relative z-0  mb-6 group flex">
          <div class="relative w-full">
            <input
              type="text"
              className="block py-2.5  px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
              required
              v-model="newKid.name"
              name="name" /><label
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
        </div>
      </formt>
    </div>
    <h1>This is an about page: {{ text }}</h1>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <p v-if="!loading">{{ loading }} {{ wizkids.length }}</p>
    <button @click="HandleAddWizkid(text)">test</button>
  </div>
</template>

<style></style>
