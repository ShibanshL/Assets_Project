import create from "zustand";
import { persist } from "zustand/middleware";

const useFishStore = create(
    persist(
      (set) => ({
        api_key: '',
        // setApi_Key: (e:any) => set({ api_key: e }),
        // addAFish: () => set(state => ({fishes:state.fishes+1}))
      }),
      {
        name: 'food-storage', // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )

export default useFishStore