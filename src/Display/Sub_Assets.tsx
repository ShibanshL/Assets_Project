import React from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import {Group, Grid, Select, Text, Button, Checkbox, Card, Divider, Collapse, TextInput, Container,Tooltip, Badge} from '@mantine/core';
import {AiOutlineDoubleLeft} from 'react-icons/ai'
import {HiOutlinePencil} from 'react-icons/hi'
import {useStore,useStore_1,useStore_6,useStore_3,useStore_2} from '../Store'
import { useQuery} from 'react-query';
import axios from 'axios';

//Here the specific object is stored
var appData = []


function Sub_Assets() {
  const Token = useStore_1(state => state.token)
  const log = useStore_2(state => state.log)
  const logData = useStore_3(state => state.logData)
  const pageNum = useStore_6(state => state.pageNum)
  const num = useStore(state => state.num)

  let nav = useNavigate()
    const {keyID} = useParams()
    console.log(useParams())


    React.useEffect(() => { 
      if(!logData){
        nav('/')
      }
      },
      [num])
  


  const data = useQuery(['Devices_1'], () => {
    return axios.get(`${import.meta.env.VITE_URL}/api/org/18/asset/${keyID}`,{
        method:'GET',
        headers:{
            'Authorization':`Token ${Token}`
        }
    })

},
)


    //I'm recalling the api and just filtering based on the unique_id i receive through params
    const data_Cycle = useQuery(['Devices'], () => {
      return axios.get(`${import.meta.env.VITE_URL}/api/org/18/asset/${keyID}/cycles`,{
          method:'GET',
          headers:{
              'Authorization':`Token ${Token}`
          }
      })

  },
  )



  //Here im pushing the filterd data into an array
  console.log('data',data.data?.data)
  console.log('data1 ',data_Cycle.data?.data)

  // appData = data?.data.results.filter((e:any) => e.unique_id == keyID)
  // console.log('App = ',appData)

  if(data.isLoading && data_Cycle.isLoading)
  {
    return <h1>Loading ...</h1>
  }


 


  return (
    <>
      <Grid p='20px 120px' style={{background:'#f8f9fa'}}>
        <Grid.Col span={12}>
            <Grid p='5px' style={{background:'white',boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px'}}>
                <Grid.Col span={6}>
                    <Group>
                        <Group>
                            <Link to='/Assets'><AiOutlineDoubleLeft size={22}/></Link>
                        </Group>
                        <Group>
                            <Text weight={700} style={{fontSize:'22px'}}> Assets</Text>
                            <Text style={{fontSize:'22px'}} weight={600}>/ {data.data?.data.host}</Text>
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
                    <Text style={{fontSize:'34px'}} weight={800}>{data.data?.data.vuln_count}</Text>
                    <Text style={{fontSize:'16px'}}>Total Vulnerabilities Found <Link to='' style={{fontSize:'13px'}}>See All</Link></Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Text style={{fontSize:'12px'}}>Vuln Breakup</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                <Group style={{}} p='15px 0px'>
                      <Tooltip label={`Critical=${data.data?.data.vuln_breakup?.critical?data.data?.data.vuln_breakup?.critical:0}`} color='red' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.critical?'red':'gray'} variant='filled'>C</Badge>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.critical?'red':'gray'} variant='outline'>{data.data?.data.vuln_breakup?.critical?data.data?.data.vuln_breakup?.critical:0}</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label={`High=${data.data?.data.vuln_breakup?.high?data.data?.data.vuln_breakup?.high:0}`} color='orange' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.high?'orange':'gray'} variant='filled'>H</Badge>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.high?'orange':'gray'} variant='outline'>{data.data?.data.vuln_breakup?.high?data.data?.data.vuln_breakup?.high:0}</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label={`Medium=${data.data?.data.vuln_breakup?.medium?data.data?.data.vuln_breakup?.medium:0}`} color='yellow' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.medium?'yellow':'gray'} variant='filled'>M</Badge>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.medium?'yellow':'gray'} variant='outline'>{data.data?.data.vuln_breakup?.medium?data.data?.data.vuln_breakup?.medium:0}</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label={`Low=${data.data?.data.vuln_breakup?.low?data.data?.data.vuln_breakup?.low:0}`} color='indigo' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.low?'indigo':'gray'} variant='filled'>L</Badge>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.low?'indigo':'gray'} variant='outline'>{data.data?.data.vuln_breakup?.low?data.data?.data.vuln_breakup?.low:0}</Badge>
                          </Group>
                      </Tooltip>
                      <Tooltip label={`None=${data.data?.data.vuln_breakup?.none?data.data?.data.vuln_breakup?.none:0}`} color='dark' withArrow>
                          <Group style={{}} spacing='0'>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.none?'dark':'gray'} variant='filled'>N</Badge>
                              <Badge radius='xm' color={data.data?.data.vuln_breakup?.none?'dark':'gray'} variant='outline'>{data.data?.data.vuln_breakup?.none?data.data?.data.vuln_breakup?.none:0}</Badge>
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
                      <Tooltip label={`OPEN=${data.data?.data.cve_status_distribution.OPEN?data.data?.data.cve_status_distribution.OPEN:0}`} color='green' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.OPEN?'green':'gray'} variant='filled'>O</Badge>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.OPEN?'green':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.OPEN?data.data?.data.cve_status_distribution.OPEN:0}</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label={`CLOSED=${data.data?.data.cve_status_distribution.CLOSE?data.data?.data.cve_status_distribution.CLOSE:0}`} color='red' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.CLOSE?'red':'gray'} variant='filled'>C</Badge>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.CLOSE?'red':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.CLOSE?data.data?.data.cve_status_distribution.CLOSE:0}</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label={`REOPENED=${data.data?.data.cve_status_distribution.REOPENED?data.data?.data.cve_status_distribution.REOPENED:0}`} color='orange' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.REOPENED?'orange':'gray'} variant='filled'>R</Badge>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.REOPENED?'orange':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.REOPENED?data.data?.data.cve_status_distribution.REOPENED:0}</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label={`RISKACCEPTED=${data.data?.data.cve_status_distribution.RISKACCEPTED?data.data?.data.cve_status_distribution.RISKACCEPTED:0}`} color='indigo' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.RISKACCEPTED?'indigo':'gray'} variant='filled'>R</Badge>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.RISKACCEPTED?'indigo':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.RISKACCEPTED?data.data?.data.cve_status_distribution.RISKACCEPTED:0}</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label={`EXCEPTIONTAKEN=${data.data?.data.cve_status_distribution.EXCEPTIONTAKEN?data.data?.data.cve_status_distribution.EXCEPTIONTAKEN:0}`} color='dark' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.EXCEPTIONTAKEN?'dark':'gray'} variant='filled'>E</Badge>
                                  <Badge radius='xm' color={data.data?.data.cve_status_distribution.EXCEPTIONTAKEN?'dark':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.EXCEPTIONTAKEN?data.data?.data.cve_status_distribution.EXCEPTIONTAKEN:0}</Badge>
                              </Group>
                          </Tooltip>
                          <Tooltip label={`None=${data.data?.data.cve_status_distribution.None?data.data?.data.cve_status_distribution.None:0}`} color='dark' withArrow>
                              <Group style={{}} spacing='0'>
                                  <Badge radius='xs' color={data.data?.data.cve_status_distribution.None?'dark':'gray'} variant='filled'>N</Badge>
                                  <Badge radius='xs' color={data.data?.data.cve_status_distribution.None?'dark':'gray'} variant='outline'>{data.data?.data.cve_status_distribution.None?data.data?.data.cve_status_distribution.None:0}</Badge>
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
                <Grid.Col span={2}>
                  <Group direction='column'>
                    <Text color='#868E96' style={{fontSize:'16px'}}>Display Name</Text>
                    <Text>{data.data?.data.display_name}</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Group direction='column'>
                    <Text color='#868E96' style={{fontSize:'16px'}}>Cycle Count</Text>
                    <Text>{data.data?.data.scan_cycle_count}</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Group direction='column'>
                    <Text color='#868E96' style={{fontSize:'16px'}}>Type</Text>
                    <Text>{data.data?.data.type}</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Group direction='column'>
                    <Text color='#868E96' style={{fontSize:'16px'}}>Tags</Text>
                    <Text>{data.data?.data.tags[0]}, {data.data?.data.tags[1]}</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Group direction='column'>
                    <Text color='#868E96' style={{fontSize:'16px'}}>Time to Decommission</Text>
                    <Text>{data.data?.data.time_to_decommission}</Text>
                  </Group>
                </Grid.Col>

                
               
                
               
                
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
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={3}>
                  <Text p='0 20px' color='#4263eb' style={{fontSize:'14px'}}><Link to='/' style={{color:'#4263eb',textDecoration:'none'}}>{data_Cycle.data?.data.results[0].start_date}-{data_Cycle.data?.data.results[0].end_date}</Link></Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text p='0 20px' style={{fontSize:'14px'}}>{data_Cycle.data?.data.results[0].vuln_count}</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group p='0px 15px'>
                    <Tooltip label={`Critical=${data_Cycle.data?.data.results[0].vuln_breakup.critical?data_Cycle.data?.data.results[0].vuln_breakup.critical:0}`} color='green' withArrow>
                        <Group style={{}} spacing='0'>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.critical?'green':'gray'} variant='filled'>C</Badge>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.critical?'green':'gray'} variant='outline'>{data_Cycle.data?.data.results[0].vuln_breakup.critical?data_Cycle.data?.data.results[0].vuln_breakup.critical:0}</Badge>
                        </Group>
                    </Tooltip>
                    <Tooltip label={`High=${data_Cycle.data?.data.results[0].vuln_breakup.high?data_Cycle.data?.data.results[0].vuln_breakup.high:0}`} color='red' withArrow>
                        <Group style={{}} spacing='0'>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.high?'red':'gray'} variant='filled'>H</Badge>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.high?'red':'gray'} variant='outline'>{data_Cycle.data?.data.results[0].vuln_breakup.high?data_Cycle.data?.data.results[0].vuln_breakup.high:0}</Badge>
                        </Group>
                    </Tooltip>
                    <Tooltip label={`Medium=${data_Cycle.data?.data.results[0].vuln_breakup.medium?data_Cycle.data?.data.results[0].vuln_breakup.medium:0}`} color='orange' withArrow>
                        <Group style={{}} spacing='0'>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.medium?'orange':'gray'} variant='filled'>M</Badge>
                            <Badge radius='xm' color={data_Cycle.data?.data.results[0].vuln_breakup.medium?'orange':'gray'} variant='outline'>{data_Cycle.data?.data.results[0].vuln_breakup.medium?data_Cycle.data?.data.results[0].vuln_breakup.medium:0}</Badge>
                        </Group>
                    </Tooltip>
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Sub_Assets