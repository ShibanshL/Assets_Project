import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {Group, Grid, Select, Text, Button, Checkbox, Card, Divider, Collapse, TextInput, Container,Tooltip, Badge} from '@mantine/core';
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {HiOutlinePencil} from 'react-icons/hi'
import {useStore_1} from '../Store'
import { useQuery} from 'react-query';
import axios from 'axios';

interface apiData {
    api:[
      {
        display_name: string,
        host: string,
        scan_cycle_count:number,
        type:string,
        tags: string[],
        unique_id:string
      }
    ]
 
}

var appData = {}


function Sub_Assets() {
    const Token = useStore_1(state => state.token)
    const {keyID} = useParams()
    console.log(useParams())

    const { isLoading, error, data} = useQuery(['Devices'], () => {
      return axios.get(`${import.meta.env.VITE_URL}/api/org/18/asset/`,{
          method:'GET',
          headers:{
              'Authorization':`Token ${Token}`
          }
      })

  },
  )
  appData = data?.data.results.filter((e:any) => e.unique_id == keyID)
  // console.log('APp,',appData)



// //React query part for loading and error
// if(isLoading){
// return <h1>Loading</h1>
// }
// if (error){
//     return <h2>{error?.message}</h2>
// }



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
                            <Text style={{fontSize:'22px'}} weight={600}>/ {console.log('AA,',appData)}</Text>
                        </Group>
                    </Group>
                </Grid.Col>
                <Grid.Col mt='2px' span={6}>
                    <Group position='right'>
                        <Button size='xs' color='yellow' leftIcon={<HiOutlinePencil />}>Edit Icon</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Grid.Col>
        <Grid.Col span={12} pt='20px'>
          <Grid p='0 24px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
            <Grid.Col span={6}>
              <Grid>
                <Grid.Col span={12}>
                  <Group>
                    <Text style={{fontSize:'34px'}} weight={800}>0</Text>
                    <Text style={{fontSize:'16px'}}>Total Vulnerabilities Found <Link to='' style={{fontSize:'13px'}}>See All</Link></Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text style={{fontSize:'12px'}}>Vuln Breakup</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                <Group style={{}} p='15px 0px'>
                      <Tooltip label="Critical=0" color='red' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xs' color='gray' variant='filled'>C</Badge>
                              <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label="High=0" color='orange' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xs' color='gray' variant='filled'>H</Badge>
                              <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label="Medium=0" color='yellow' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xs' color='gray' variant='filled'>M</Badge>
                              <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label="Low=0" color='indigo' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xs' color='gray' variant='filled'>L</Badge>
                              <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label="None=0" color='dark' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xs' color='gray' variant='filled'>N</Badge>
                              <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                          </Group>
                      </Tooltip>
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6}>
              <Grid pt='15px'>
                  <Grid.Col span={12}>
                    <Group>
                      <Text style={{fontSize:'16px'}}>Status</Text>
                    </Group>
                  </Grid.Col>
                  <Grid.Col pt='20px' span={12}>
                    <Text style={{fontSize:'12px'}}>Status Breakup</Text>
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Group style={{}} p='15px 0px'>
                      <Tooltip label="OPEN=0" color='green' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>O</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label="CLOSED=0" color='red' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>C</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label="REOPENED=0" color='orange' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>R</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label="RISKACCEPTED=0" color='indigo' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>R</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label="EXCEPTIONTAKEN=0" color='dark' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>E</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label="None=0" color='dark' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color='gray' variant='filled'>N</Badge>
                                  <Badge radius='xs' color='gray' variant='outline'>0</Badge>
                              </Group>
                          </Tooltip>
                      </Group>
                  </Grid.Col>
                </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12} pt='20px'>
          <Grid p='24px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
            <Grid.Col span={12} pl='20px'>
              <Grid grow>
                <Group direction='column'>
                  <Text color='#868E96' style={{fontSize:'16px'}}>Display Name</Text>
                  <Text></Text>
                </Group>
                <Group direction='column' pl='150px'>
                  <Text color='#868E96' style={{fontSize:'16px'}}>Cycle Count</Text>
                  <Text></Text>
                </Group>
                <Group direction='column' pl='150px'>
                  <Text color='#868E96' style={{fontSize:'16px'}}>Type</Text>
                  <Text></Text>
                </Group>
                <Group direction='column' pl='150px'>
                  <Text color='#868E96' style={{fontSize:'16px'}}>Tags</Text>
                  <Text></Text>
                </Group>
                <Group direction='column' pl='150px'>
                  <Text color='#868E96' style={{fontSize:'16px'}}>Time to Decommission</Text>
                  <Text></Text>
                </Group>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col  pt='20px' pb='110px' span={12}>
          <Grid p='24px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
            <Grid.Col span={12}>
              <Text style={{fontSize:'16px'}} weight={700}>Scan Cycle List</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={3}>
                  <Text p='0 20px' style={{fontSize:'14px'}} weight={700}>Link</Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text p='0 20px' style={{fontSize:'14px'}} weight={700}>Scope Count</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text p='0 20px' style={{fontSize:'14px'}} weight={700}>Vuln Count</Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={12}>
              <Divider />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Sub_Assets