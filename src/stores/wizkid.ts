import type { Role } from '@/models/Wizkid';
import { defineStore } from 'pinia';

export const useWizkidStore = defineStore({
  id: 'wizkid',
  state: (): State => ({
    wizkids: [],
    loading: false,
    wizkid: defaultWizkid
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
    removeWizkid(id: string | string[]) {
      console.log(id);
      const objIndex = this.wizkids.findIndex((obj) => obj.id === id);
      this.wizkids.splice(objIndex, 1);
      this.wizkid = defaultWizkid;
    }
  }
});

interface State {
  wizkids: IWizkid[];
  loading: boolean;
  wizkid: IWizkid;
}

const defaultWizkid: IWizkid = {
  name: '',
  role: null,
  email: '',
  picture: ''
};

interface IWizkid {
  id?: string;
  name: string;
  role: Role | null;
  email: string;
  picture: string;
  phoneNumber?: number | null;
}
