import React from 'react'
import {Group,Grid, Text, Badge, Checkbox, Card, Divider, Tooltip, MediaQuery} from '@mantine/core';
import {AiOutlineLink} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useStore_5} from '../Store'

interface props{
    data:[
            {
                cve_status_distribution:{},
                display_name: string,
                host: string,
                scan_cycle_count:number,
                type:string,
                tags: string[],
                unique_id:string,
                vuln_breakup:{}
            }
        ],

    check:boolean
}


function Cards({data,check}:props|any) {
  

    return (
        <>
            { data?.map((e:any) =>{
                        return( 
                            <> 
                        <Grid.Col p='10' span={12} key={e.host}>
                            <Card style={{background:'white', boxShadow:'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px'}}>
                                <Grid>
                                    <Grid.Col span={12}>
                                        <Group>
                                            <Checkbox pr='10px' checked={check} />
                                            <Link to={`/Asset/${e.unique_id}`}><AiOutlineLink /></Link>
                                            <Group p='0 10px'>
                                                <Text weight={700} style={{fontSize:'20px'}}>{e.host}</Text>
                                            </Group>
                                            <Group p='0px 20px'>
                                                <Text style={{fontSize:'16px'}}>{e.display_name}</Text>
                                            </Group>
                                            <Group p='0px 20px' dir='column'>
                                                <Grid>
                                                    <Grid.Col span={12}>
                                                        <Text style={{fontSize:'12px'}}>Scan Cycles</Text>
                                                    </Grid.Col>
                                                    <Grid.Col span={12}>
                                                        <Text weight={500} style={{fontSize:'16px'}}>{!e.scan_cycle_count?0:e.scan_cycle_count}</Text>
                                                    </Grid.Col>
                                                </Grid>
                                            </Group>
                                            <Group p='0px 20px'>
                                                <Text style={{fontSize:'12px'}}>Last Scan Date</Text>
                                                <AiOutlineLink size={18}/>
                                            </Group>
                                            <Group p='0px 20px'>
                                                <Text style={{fontSize:'12px'}}>Time to Decommision</Text>
                                            </Group>
                                            <Group p='0px 20px'>
                                                <Grid.Col span={12}>
                                                            <Text style={{fontSize:'12px'}}>Type</Text>
                                                        </Grid.Col>
                                                        <Grid.Col span={12}>
                                                            <Text weight={500} style={{fontSize:'16px'}}>{e.type}</Text>
                                                </Grid.Col>
                                            </Group>
                                        </Group>
                                    </Grid.Col>
                                    <Grid.Col span = {12}>
                                        <Divider />
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <Group>
                                            <Text style={{fontSize:'12px'}}>Tags :</Text>
                                            <Badge radius='sm'>{e.tags[0]}</Badge>
                                            <Badge radius='sm'>{e.tags[1]}</Badge>
                                        </Group>
                                    </Grid.Col>
                                    <Grid.Col span = {12}>
                                        <Divider />
                                    </Grid.Col>
                                    <Grid.Col span={12}>
                                        <Grid>
                                            <Grid.Col md={12} lg={6} style={{}}>
                                                <Group>
                                                    <Text style={{fontSize:'12px'}}>Vuln Breakup</Text>
                                                </Group>
                                                <Group style={{}} p='15px 0px'>
                                                    <Tooltip label={`Critical=${e.vuln_breakup.critical?e.vuln_breakup.critical:0}`} color='red' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.vuln_breakup.critical?'red':'gray'} variant='filled'>C</Badge>
                                                            <Badge radius={0} color={e.vuln_breakup.critical?'red':'gray'} variant='outline'>{e.vuln_breakup.critical?e.vuln_breakup.critical:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`High=${e.vuln_breakup.high?e.vuln_breakup.high:0}`} color='orange' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.vuln_breakup.high?'orange':'gray'} variant='filled'>H</Badge>
                                                            <Badge radius={0} color={e.vuln_breakup.high?'orange':'gray'} variant='outline'>{e.vuln_breakup.high?e.vuln_breakup.high:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`Medium=${e.vuln_breakup.medium?e.vuln_breakup.medium:0}`} color='yellow' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.vuln_breakup.medium?'yellow':'gray'} variant='filled'>M</Badge>
                                                            <Badge radius={0} color={e.vuln_breakup.medium?'yellow':'gray'} variant='outline'>{e.vuln_breakup.medium?e.vuln_breakup.medium:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`Low=${e.vuln_breakup.low?e.vuln_breakup.low:0}`} color='indigo' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.vuln_breakup.low?'indigo':'gray'} variant='filled'>L</Badge>
                                                            <Badge radius={0} color={e.vuln_breakup.low?'indigo':'gray'} variant='outline'>{e.vuln_breakup.low?e.vuln_breakup.low:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`None=${e.vuln_breakup.none?e.vuln_breakup.none:0}`} color='dark' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.vuln_breakup.none?'dark':'gray'} variant='filled'>N</Badge>
                                                            <Badge radius={0} color={e.vuln_breakup.none?'dark':'gray'} variant='outline'>{e.vuln_breakup.none?e.vuln_breakup.none:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                </Group>
                                            </Grid.Col>
                                            <MediaQuery query='(max-width:1200px)' styles={{display:'none'}}>
                                                <Grid.Col ml='-310px' p='0 15px' style={{transform:'rotate(90deg)'}} span={1}>
                                                    <Divider />
                                                </Grid.Col>
                                            </MediaQuery>
                                            <Grid.Col md={12} lg={6}>
                                                <Group>
                                                    <Text style={{fontSize:'12px'}}>Status Breakup</Text>
                                                </Group>
                                                <Group style={{}} p='15px 0px'>
                                                <Tooltip label={`OPEN=${e.cve_status_distribution.OPEN?e.cve_status_distribution.OPEN:0}`} color='green' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.OPEN?'green':'gray'} variant='filled'>O</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.OPEN?'green':'gray'} variant='outline'>{e.cve_status_distribution.OPEN?e.cve_status_distribution.OPEN:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`CLOSED=${e.cve_status_distribution.CLOSED?e.cve_status_distribution.CLOSED:0}`} color='red' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.CLOSED?'red':'gray'} variant='filled'>C</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.CLOSED?'red':'gray'} variant='outline'>{e.cve_status_distribution.CLOSED?e.cve_status_distribution.CLOSED:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`REOPENED=${e.cve_status_distribution.REOPENED?e.cve_status_distribution.REOPENED:0}`} color='orange' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.REOPENED?'orange':'gray'} variant='filled'>R</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.REOPENED?'orange':'gray'} variant='outline'>{e.cve_status_distribution.REOPENED?e.cve_status_distribution.REOPENED:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`RISKACCEPTED=${e.cve_status_distribution.RISKACCEPTED?e.cve_status_distribution.RISKACCEPTED:0}`} color='indigo' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.RISKACCEPTED?'indigo':'gray'} variant='filled'>R</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.RISKACCEPTED?'indigo':'gray'} variant='outline'>{e.cve_status_distribution.RISKACCEPTED?e.cve_status_distribution.RISKACCEPTED:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`EXCEPTIONTAKEN=${e.cve_status_distribution.EXCEPTIONTAKEN?e.cve_status_distribution.EXCEPTIONTAKEN:0}`} color='dark' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.EXCEPTIONTAKEN?'dark':'gray'} variant='filled'>E</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.EXCEPTIONTAKEN?'dark':'gray'} variant='outline'>{e.cve_status_distribution.EXCEPTIONTAKEN?e.cve_status_distribution.EXCEPTIONTAKEN:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                    <Tooltip label={`None=${e.cve_status_distribution.None?e.cve_status_distribution.None:0}`} color='dark' withArrow>
                                                        <Group style={{}} spacing={0}>
                                                            <Badge radius={0} color={e.cve_status_distribution.None?'dark':'gray'} variant='filled'>N</Badge>
                                                            <Badge radius={0} color={e.cve_status_distribution.None?'dark':'gray'} variant='outline'>{e.cve_status_distribution.None?e.cve_status_distribution.None:0}</Badge>
                                                        </Group>
                                                    </Tooltip>
                                                </Group>
                                            </Grid.Col>
                                        </Grid>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </Grid.Col>
                        </>
                    )
                    })
                }
        </>
    )
}

export default Cards