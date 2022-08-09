import type { Role } from '@/models/Wizkid';
import { defineStore } from 'pinia';

export const useWizkidStore = defineStore({
  id: 'wizkid',
  state: (): State => ({
    wizkids: [],
    loading: false,
    wizkid: null
  }),
  persist: true,
  getters: {
    fetchWizkids: (state) => state.wizkids,
    fetchWizkidById: (state) => {
      return (id: string) => state.wizkids.find((x: IWizkid) => x.id === id);
    }
  },
  actions: {
    resetWizkids() {
      this.wizkids = [];
    },
    addWizkid(newWizkid: IWizkid) {
      this.wizkids.push(newWizkid);
    },
    setCurrentWizkid(wizkid: IWizkid) {
      this.wizkid = wizkid;
    },
    updateWizkid(wizkid: IWizkid) {
      const objIndex = this.wizkids.findIndex((obj) => obj.id === wizkid.id);
      this.wizkids[objIndex] = wizkid;
      this.wizkid = wizkid;
    },
    removeWizkid(id: string) {
      console.log(id);
      const objIndex = this.wizkids.findIndex((obj) => obj.id === id);
      console.log(objIndex);
      this.wizkids.splice(objIndex, 1);
    }
  }
});

interface State {
  wizkids: IWizkid[];
  loading: boolean;
  wizkid: IWizkid | null;
}

interface IWizkid {
  id: string;
  name: string;
  role: Role;
  email: string;
  picture: any;
  phoneNumber?: number;
}
