import create from "zustand";

import {persist} from 'zustand/middleware'

interface NUM{
    num:number
    setNum:(e:any) => void
}

const useStore = create<NUM>((set) => ({
    num:0,
    setNum:(e:any) =>  set(() => ({num:e}))
}))

interface AUTH{
    token?: string | null;
  setToken: (newToken: string | null) => void;
}

const useStore_1 = create(
        persist(
          (set) => <AUTH>({
            setToken: (newToken: string | null) => set((_state) => ({ token: newToken })),
            token: "",
            // addAFish: () => set(state => ({fishes:state.fishes+1}))
          }),
          {
            name: 'AUTH KEY', // unique name
          }
))

interface persistLog {
  logData:boolean | null,
  setLogData: (newLogData: boolean | null) => void;
}

const useStore_3 = create(
  persist(
    (set) => <persistLog>(
      {
        logData:false,
        setLogData: (newLogData: boolean | null) => set((_state) => ({logData:newLogData}))
      }
    ),
    {
      name:'LOGGED'
    }
  )
)

interface Log{
    log:number
    setLog:() => void
    log1:number
    setLog_1:() => void
}

const useStore_2 = create<Log>((set) => ({
    log:0,
    setLog:() => set(state => ({log:state.log+1})),
    log1:0,
    setLog_1:() => set(state => ({log1:state.log1+1}))
}))


// interface test{
//     fishes:number,
//     addAFish: () => void
// }

// const useFishStore = create(
//     persist(
//       (set, get) => ({
//         api_key: '',
//         setApi_Key: (e:any) => set({ api_key: e }),
//         // addAFish: () => set(state => ({fishes:state.fishes+1}))
//       }),
//       {
//         name: 'food-storage', // unique name
//         getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
//       }
//     )
//   )

// export default useFishStore

export {useStore,useStore_1,useStore_2,useStore_3}