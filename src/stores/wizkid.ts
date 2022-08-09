import { defineStore } from 'pinia';

export const useWizkidStore = defineStore({
  id: 'wizkid',
  state: (): State => ({
    wizkids: [],
    loading: false
  }),
  getters: {
    fetchWizkids: (state) => state.wizkids
  },
  actions: {
    resetWizkids() {
      this.wizkids = [];
    }
  }
});

interface State {
  wizkids: IWizkid[];
  loading: boolean;
}

interface IWizkid {
  name: string;
  role: any;
  email: string;
  picture: any;
  phoneNumber?: number;
}
