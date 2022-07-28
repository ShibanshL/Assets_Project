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
    token:string
    setToken:(e:any) => void
}

const useStore_1 = create<AUTH>((set) => ({
    token:'',
    setToken:(e:any) =>  set(() => ({token:e}))
}))

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


export {useStore,useStore_1,useStore_2}