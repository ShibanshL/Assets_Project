import React, { useEffect } from 'react'
import {Group, Grid, Select, Text, Button, Checkbox, Card, Divider, Collapse, TextInput,MediaQuery, Badge} from '@mantine/core';
import { useQuery} from 'react-query';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useStore,SEARCH_FILTER,useStore_2,AUTH_KEY,LOGGED_JN_OUT,PAGE_NUMBER,useStore_7,useStore_8,PAGE_SIZE,PAGE_NUMBER_LOCAL,TYPE_FILTER} from '../Store';
import {AiOutlineDoubleLeft,AiOutlineLink} from 'react-icons/ai'
import {FiUpload,FiPlus,FiSearch} from 'react-icons/fi'
import {MdDeleteOutline,MdNavigateBefore} from 'react-icons/md'
import Cards from './Cards';
import {useSearchParams} from 'react-router-dom'


var pages = [1,2,3,4,5]
var i = 0
var j = 0


function Assets() {
    let nav = useNavigate()
    // const a = useStore((state) => state.num)
    const [check,setCheck] = React.useState(false)
    const [opened, setOpened] = React.useState(false);
    const [finalPageVal,setFinalPageVal] = React.useState('20')
    const search = useStore_7(state => state.search)
    const setSearch = useStore_7(state => state.setSearch)
    const filter = useStore_8(state => state.filter)
    const setFilter = useStore_8(state => state.setFilter)
    const pageVal = PAGE_SIZE(state => state.pageVal)
    const setPageVal = PAGE_SIZE(state => state.setPageVal)
    const page = PAGE_NUMBER_LOCAL((state:any) => state.page)
    const setPage = PAGE_NUMBER_LOCAL((state:any) => state.setPage)
    const finalfilter = TYPE_FILTER((state:any) => state.finalfilter)
    const setFinalFilter = TYPE_FILTER((state:any) => state.setFinalFilter)
    const log = useStore_2(state => state.log)
    const searchData = SEARCH_FILTER((state:any) => state.searchData)
    const setSearchData = SEARCH_FILTER((state:any) => state.setSearchData)
    const Token = AUTH_KEY((state:any) => state.token)
    const logData = LOGGED_JN_OUT((state:any) => state.logData)
    const setPageNum = PAGE_NUMBER(state => state.setPageNum)
    const pageNum = PAGE_NUMBER(state => state.pageNum)
    const [finalfilterData,setFilterData] = React.useState({
        finalFilter:'',
        finalSearch:'',
        finalPage:'20',
    })
    const [searchParams,setSearchParams] = useSearchParams({})
    const newDataTofetch = {page, finalfilter, finalPageVal, searchData}

//This useEffect checks what the url will be based on the filters that are added
React.useEffect(() => {
    if(!searchData && !finalfilter){
        setSearchParams({page_size:finalPageVal,page:page})
    }
    else if(searchData && !finalfilter){
        setSearchParams({page_size:finalPageVal,page:page,search:searchData})
    }
    else if(!searchData && finalfilter){
        setSearchParams({page_size:finalPageVal,page:page,type:finalfilter})
    }
    else{
        setSearchParams({page_size:finalPageVal,page:page,type:finalfilter,search:searchData})
    }
},[i])

    //This calls the server for data while providing an header for authorization
    const { isLoading, error, data} = useQuery(['Devices',newDataTofetch], () => {
        return axios.get(`${import.meta.env.VITE_URL}/api/org/18/asset/?page_size=${finalPageVal}${finalfilter?`&type=${finalfilter}`:''}${searchData?`&search=${searchData}`:''}&page=${page}`,{
            method:'GET',
            headers:{
                'Authorization':`Token ${Token}`
            }
        })
    },
 
    )


    //This check value to keep us logged in
    React.useEffect(() => {
        if(!logData){
            nav('/')
        }
    },[log])


    //React query part for loading and error
    if(isLoading){
        return <h1>Loading</h1>
    }
    if (error instanceof Error){
        return <h2 style={{color:'pink'}}>{error?.message}</h2>
    }


    //Function to clear all in the filter option
    const clearAllFilter = () => {
        setFilter('')
        setPageVal('20')
        setSearch('')
        setSearchData('')
        window.location.reload();
    }


    //Function where we apply our filters to the data
    const apply_Filtered_Data = () => {
        setFinalFilter(filter)
        setFinalPageVal(pageVal)
        setSearchData(search)
        setFilterData({finalFilter:filter,finalSearch:search,finalPage:pageVal})
        i++
        j++
    }


    //Function to clear Type from current filter
    const ClearType = () => {
        setFilter('')
        setFinalFilter('')
        window.location.reload()
    }


    //Function to clear search from current filter
    const ClearSearch = () => {
        setSearch('')
        setSearchData('')
        window.location.reload()
    }


    //Function for pagination buttons upon search
    const pagination_Button = () => {
        if(data?.data.count == 100){
            return(
                <>
                    <Button variant='outline' color='gray' size='xs' onClick={() => {setPage(page-1);setPageNum(pageNum-1);window.location.reload()}} disabled={page==1}><MdNavigateBefore /></Button>
                    {pages.map(e => {
                        return(
                            <>  
                                <Button variant={page==e?'filled':'outline'} size='xs' color={page==e?'blue':'gray'} onClick={() => {setPage(e);setPageNum(e);window.location.reload()}}>{e}</Button>
                            </>
                        )
                    })}
                    <Button variant='outline' color='gray' size='xs' onClick={() => {setPage(page+1);setPageNum(pageNum+1);window.location.reload()}} disabled={page==5}><MdNavigateBefore style={{transform:'rotate(-180deg)'}}/></Button>
                </>
            )
        }
        else{
            return(
                <>
                    <Button variant='filled' size='xs' color='blue'>1</Button>
                </>
            )
        }
    }

 
  return (
    <>
    <MediaQuery query='(max-width:1000px)' styles={{padding:'20px'}}>
        <Grid p='20px 120px' style={{background:'#f8f9fa'}}>
            <Grid.Col span={12}>
                <Grid p='5px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
                    <Grid.Col span={6}>
                        <Group>
                            <Group>
                                <AiOutlineDoubleLeft size={22}/>
                            </Group>
                            <Group>
                                <Text weight={700} style={{fontSize:'22px'}}> Assets</Text>
                            </Group>
                        </Group>
                    </Grid.Col>
                    <Grid.Col mt='2px' span={6}>
                        <Group position='right'>
                            <Button size='xs' leftIcon={<FiUpload />}>Bulk Update</Button>
                            <Button size='xs' leftIcon={<FiPlus />}>Create Assets</Button>
                            <Button size='xs' color='red' leftIcon={<MdDeleteOutline />} disabled={check==false}>Delete</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={12}>
                <Collapse in={opened} pt='30px'>
                    <Card style={{border:'5px'}}>
                        <Grid>
                            <Grid.Col span={12}>
                                <Text weight={600} style={{fontSize:'14px'}}>Filters</Text>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Divider />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Grid>
                                    <Grid.Col span={3}>
                                        <Group grow>
                                            <Select
                                                label="Type"
                                                onChange={(e:any) => setFilter(e)}
                                                placeholder='Pick for a type'
                                                value={filter}
                                                rightSection={filter.length==0?'':<FiPlus onClick={() => setFilter('')} style={{cursor:'pointer',transform:'rotate(45deg)'}}/>}
                                                data={[
                                                    { value: 'Website', label: 'Website' },
                                                    { value: 'Router', label: 'Router' },
                                                    { value: 'infra', label: 'infra' },
                                                ]}
                                            />
                                        </Group>
                                    </Grid.Col>
                                    <Grid.Col span={3}>
                                        <Group grow>
                                            <Select
                                                label="Items Per Page"
                                                placeholder='Pick for items per page'
                                                onChange={(e:any) => setPageVal(e)}
                                                value={pageVal}
                                                rightSection={finalPageVal.length==0?'':<FiPlus onClick={() => setPageVal('')} style={{cursor:'pointer',transform:'rotate(45deg)'}}/>}
                                                data={[
                                                    { value: '10', label: '10' },
                                                    { value: '20', label: '20' },
                                                    { value: '50', label: '50' },
                                                    { value: '100', label: '100' },
                                                ]}
                                            />
                                        </Group>
                                    </Grid.Col>
                                    <Grid.Col span={3}>
                                        <Group grow>
                                            <TextInput
                                                placeholder="Search"
                                                label="Search"
                                                value={search}
                                                onChange={(e) => {setSearch(e.target.value);console.log(search)}}
                                                rightSection={search.length == 0?<FiSearch />:<FiPlus onClick={() => setSearch('')} style={{cursor:'pointer',transform:'rotate(45deg)'}} />}
                                            />
                                        </Group>
                                    </Grid.Col>
                                </Grid>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Group position='right'>
                                    <Button onClick={apply_Filtered_Data} size='xs'>Apply</Button>
                                    <Button size='xs' onClick={() => {setOpened((o) => !o); clearAllFilter()}} variant='outline'>Clear All</Button>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Collapse>
            </Grid.Col>
            <Grid.Col  pt='40px' span={12}>
                <Grid>
                    <Grid.Col span={6}>
                        <Text style={{fontSize:'16px'}}>Showing <span style={{color:'#f59f00'}}>{data?.data.count==1?1:data?.data.page_size}</span> out of <span style={{color:'#d63399'}}>{data?.data.count}</span> resources</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Group p='0px' position='right'>
                            <Button p='0px 7px' size='xs' onClick={() => setOpened((o) => !o)}>{!opened?'Show Filters':'Hide Filters'}</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col p='15px 10px' style={{background:'white'}} span={12}>
                <Grid>
                    <Grid.Col span={12}>
                        <Group>
                            <Text weight={700} style={{fontSize:'14px'}}>Current Filters</Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Group>
                            {finalfilter?<Badge rightSection={<FiPlus onClick={() => ClearType()} style={{cursor:'pointer',transform:'rotate(45deg)'}} />} style={{fontStyle:'uppercase'}}>type:{finalfilter}</Badge>:null}
                            {searchData?<Badge rightSection={<FiPlus onClick={() =>  ClearSearch()} style={{cursor:'pointer',transform:'rotate(45deg)'}} />} style={{fontStyle:'uppercase'}}>search:{searchData}</Badge>:null}
                        </Group>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={12}>
                <Group  p='20px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
                    <Checkbox onChange={() => {check==false?setCheck(true):setCheck(false)}} label="Select all Assets"/>
                </Group>
            </Grid.Col>
            <Grid.Col span={12}>
                <Cards data={data?.data.results} check={check}/>
            </Grid.Col>
            <Grid.Col span={12}>
                {data?.data.count==100?<Text>Page : {page} / 5</Text>:<Text>Page : 1 / 1</Text>}                               
            </Grid.Col>
            <Grid.Col span={12}>
                <Group>
                    {pagination_Button()}
                </Group>
            </Grid.Col>
        </Grid>
    </MediaQuery>
    </>
  )
}

export default Assets