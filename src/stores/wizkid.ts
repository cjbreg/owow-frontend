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
    fetchWizkids: (state) => state.wizkids
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
