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

const AUTH_KEY= create(
        persist(
          (set) => <AUTH>({
            setToken: (newToken: string | null) => set((_state) => ({ token: newToken })),
            token: "",
          }),
          {
            name: 'AUTH KEY', 
          }
))

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

interface persistLog {
  logData:boolean | null,
  setLogData: (newLogData: boolean | null) => void;
}

const LOGGED_JN_OUT = create(
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

interface search{
  searchData:string,
  setSearchData:(newSearchData: string | null) => void;
}

const SEARCH_FILTER = create(
  persist(
    (set) => <search>(
      {
        searchData:'',
        setSearchData: (newSearchData: string| null) => set((_state) => ({searchData:newSearchData}))
      }
    ),
    {
      name:'SEARCH'
    }
  )
)

interface Un_key{
  key:string,
  setKey:(e:any) => void
}

const useStore_5 = create<Un_key>((set) =>({
  key:'',
  setKey:(e:any) =>  set(() => ({key:e}))

})
)

interface pageNum {
  pageNum:number,
  setPageNum:(e:any) => void
}

const PAGE_NUMBER = create<pageNum>(
  (set) =>({
    pageNum:1,
    setPageNum:(e:any) => set(() => ({pageNum:e}))
  })
)

interface search_1{
  search:'',
  setSearch:(e:any)=>void
}

const useStore_7 = create<search_1>((set) => ({
  search:'',
  setSearch:(e:any) => set(() => ({search:e}))
}))

interface filterD{
  filter:'',
  setFilter:(e:any) => void
}

const useStore_8 = create<filterD>((set) => ({
  filter:'',
  setFilter:(e:any) => set(() => ({filter:e}))
}))

interface pageValD{
  pageVal:'20',
  setPageVal:(e:any) => void
}

const PAGE_SIZE = create<pageValD>((set) => ({
  pageVal:'20',
  setPageVal:(e:any) => set(() => ({pageVal:e}))
}))

interface pageD{
  page:1,
  setPage:(e:any) => void
}

const PAGE_NUMBER_LOCAL = create(
  persist(
    (set) => <pageD>(
      {
        page:1,
        setPage: (newPage: number | null) => set((_state) => ({page:newPage}))
      }
    ),
    {
      name:'PAGE'
    }
  )
)

interface filterD_1{
  finalfilter:'',
  setFinalFilter:(e:any) => void

}

const TYPE_FILTER = create(
  persist(
    (set) => <filterD_1>(
      {
        finalfilter:'',
        setFinalFilter: (newFilter: string | null) => set((_state) => ({finalfilter:newFilter}))
      }
    ),
    {
      name:'FILTER'
    }
  )
)

export {useStore,AUTH_KEY,useStore_2,LOGGED_JN_OUT,SEARCH_FILTER,useStore_5,PAGE_NUMBER,useStore_7,useStore_8,PAGE_SIZE,PAGE_NUMBER_LOCAL,TYPE_FILTER}