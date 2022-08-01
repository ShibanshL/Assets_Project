import React from 'react'
import {Group, Grid, Select, Text, Button, Checkbox, Card, Divider, Collapse, TextInput} from '@mantine/core';
import { useQuery} from 'react-query';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useStore,useStore_1,useStore_2} from '../Store';
import useFishStore from '../Storer_2';
import {AiOutlineDoubleLeft,AiOutlineLink} from 'react-icons/ai'
import {FiUpload,FiPlus,FiSearch} from 'react-icons/fi'
import {MdDeleteOutline,MdNavigateBefore} from 'react-icons/md'
import Cards from './Cards';


var pages = [1,2,3,4,5]
var i = 0

function Display() {
    let nav = useNavigate()
    const a = useStore((state) => state.num)
    const [check,setCheck] = React.useState(false)
    const [page,setPage] = React.useState(1)
    const [opened, setOpened] = React.useState(false);
    const [filter,setFilter] = React.useState('')
    const [finalfilter,setFinalFilter] = React.useState('infra')
    const [pageVal,setPageVal] = React.useState('20')
    const [finalPageVal,setFinalPageVal] = React.useState('20')
    const [search,setSearch] = React.useState('')
    const [finalSearch,setFinalSearch] = React.useState('')
    const log = useStore_2(state => state.log)

    //This calls the server for data while providing an header for authorization
    const { isLoading, error, data, isFetching, isPreviousData } = useQuery(['Devices',page], () => {
        return axios.get(`${import.meta.env.VITE_URL}/api/org/18/asset/?page_size=${finalPageVal}&page=${page}`,{
            method:'GET',
            headers:{
                'Authorization':`Token ${window.localStorage.getItem('Auth')}`
            }
        })
    },
    {keepPreviousData:false},
    )

    console.log('setData = ', data?.data.results.filter((e:any) => e.host == search))

    //Just to check the value 
    // console.log("Data = ",data?.data.results.filter((e:any) => e.type=='infra'))

    //This check value to keep us logged in
    React.useEffect(() => {
        if(!window.localStorage.getItem('Data')){
            nav('/')
        }
    },[log])

    //React query part for loading and error
    if(isLoading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h2>{error?.message}</h2>
    }

    //Function to clear all in the filter option
    const clearAll = () => {
        setFilter('')
        setPageVal('')
        setSearch('')
    }

    //Function where we apply our filters to the data
    const filterData = () => {
        setFinalFilter(filter)
        setFinalPageVal(pageVal)
        setFinalSearch(search)
    }

    const FilterCardData = () => {
        
        if(finalfilter){
            return(
                <>
                    <Cards  data={data?.data.results.filter((e:any) => e.type==finalfilter)} check={check}/>
                </>
            )
        }
        else if(!finalfilter && !finalSearch){
            return(
                <>
                    <Cards data={data?.data.results} check={check}/>
                    {/* hohoho */}
                </>
            )
        }
        else if(finalSearch && !finalfilter)
        {
          if(data?.data.results.filter((e:any) => e.host == finalSearch).length>0){
            console.log('S1 ',data?.data.results.filter((e:any) => e.host == finalSearch))
            return(
                <>
                    <Cards data={data?.data.results.filter((e:any) => e.host == finalSearch)} check={check}/>
                </>
            )
          }
          else if(data?.data.results.filter((e:any) => e.display_name == finalSearch).length>0){
            console.log('S2 ',data?.data.results.filter((e:any) => e.display_name == finalSearch))

            return(
                <>
                    <Cards data={data?.data.results.filter((e:any) => e.display_name == finalSearch)} check={check}/>
                </>
            )
          }
          else if(data?.data.results.filter((e:any) => e.tags[0] == finalSearch).length>0){
            console.log('S3 ', data?.data.results.filter((e:any) => e.tags[0] == finalSearch))

            return(
                <>
                    <Cards data={data?.data.results.filter((e:any) => e.tags[0] == finalSearch)} check={check}/>
                </>
            )
          }
          else if(data?.data.results.filter((e:any) => e.tags[1] == finalSearch).length>0){
            console.log('S4 ', data?.data.results.filter((e:any) => e.tags[1] == finalSearch))

            return(
                <>
                    <Cards data={data?.data.results.filter((e:any) => e.tags[1] == finalSearch)} check={check}/>
                </>
            )
          }
          else if(data?.data.results.filter((e:any) => e.type == finalSearch).length>0){
            console.log('S5 ',data?.data.results.filter((e:any) => e.type == finalSearch))

            return(
                <>
                    <Cards data={data?.data.results.filter((e:any) => e.type == finalSearch)} check={check}/>
                </>
            )
          }
          else{
            return(
                <>
                    <Cards data={data?.data.results} check={check}/>
                </>
            )
          }
        }
        else {
            return(
                <>
                    <Cards data={data?.data.results} check={check}/>
                </>
            )
        }
        
    }

  return (
    <>
    <Grid p='20px 120px' style={{background:'#f8f9fa'}}>
        <Grid.Col span={12}>
            <Grid p='5px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
                <Grid.Col span={6}>
                    <Group>
                        <Group>
                            <AiOutlineDoubleLeft size={22}/>
                        </Group>
                        <Group>
                            <Text style={{fontSize:'22px'}}>/</Text>
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
                                            // placeholder={filter}
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
                                            rightSection={pageVal.length==0?'':<FiPlus onClick={() => setPageVal('')} style={{cursor:'pointer',transform:'rotate(45deg)'}}/>}
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
                                            rightSection={<FiSearch />}
                                        />
                                    </Group>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Group position='right'>
                                <Button onClick={filterData} size='xs'>Apply</Button>
                                <Button size='xs' onClick={() => {setOpened((o) => !o); clearAll()}} variant='outline'>Clear All</Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Card>
            </Collapse>
        </Grid.Col>
        <Grid.Col  pt='40px' span={12}>
            <Grid>
                <Grid.Col span={6}>
                    <Text style={{fontSize:'16px'}}>Showing <span style={{color:'#f59f00'}}>20</span> out of <span style={{color:'#d63399'}}>100</span> resources</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Group p='0px' position='right'>
                        <Button p='0px 7px' size='xs' onClick={() => setOpened((o) => !o)}>{!opened?'Show Filters':'Hide Filters'}</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
            <Group p='15px 10px' style={{background:'white'}}>
                <Text weight={700} style={{fontSize:'14px'}}>Current Filters</Text>
            </Group>
        </Grid.Col>
        <Grid.Col span={12}>
            <Group  p='20px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
                <Checkbox onChange={() => {check==false?setCheck(true):setCheck(false)}} label="Select all Assets"/>
            </Group>
        </Grid.Col>
        <Grid.Col span={12}>
            {FilterCardData()}
        </Grid.Col>
        <Grid.Col span={12}>
            <Text>Page : {page} / 5</Text>
        </Grid.Col>
        <Grid.Col span={12}>
            <Group>
                <Button variant='outline' color='gray' size='xs' onClick={() => setPage(page-1)} disabled={page==1}><MdNavigateBefore /></Button>
                {pages.map(e => {
                    return(
                        <>  
                            <Button variant='outline' size='xs' color='gray' onClick={() => setPage(e)}>{e}</Button>
                        </>
                    )
                })}
                <Button variant='outline' color='gray' size='xs' onClick={() => setPage(page+1)} disabled={page==5}><MdNavigateBefore style={{transform:'rotate(-180deg)'}}/></Button>
            </Group>
        </Grid.Col>
    </Grid>
    </>
  )
}

export default Display