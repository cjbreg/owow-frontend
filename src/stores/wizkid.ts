import type { Role } from '@/models/Wizkid';
import { defineStore } from 'pinia';

export const useWizkidStore = defineStore({
  id: 'wizkid',
  state: (): State => ({
    wizkids: [],
    loading: false
  }),
  persist: true,
  getters: {
    fetchWizkids: (state) => state.wizkids
  },
  actions: {
    resetWizkids() {
      this.wizkids = [];
    },
    addWizkid(newWizkid: IWizkid) {
      this.wizkids.push(newWizkid);
    }
  }
});

interface State {
  wizkids: IWizkid[];
  loading: boolean;
}

interface IWizkid {
  id: string;
  name: string;
  role: Role;
  email: string;
  picture: any;
  phoneNumber?: number;
}
