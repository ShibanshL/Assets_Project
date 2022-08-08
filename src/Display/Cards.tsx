import React from 'react'
import {Group,Grid, Text, Badge, Checkbox, Card, Divider, Tooltip} from '@mantine/core';
import {AiOutlineLink} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useStore_5} from '../Store'
// interface props{
//     data:{
//         results:[
//             {
//                 display_name: string,
//                 host: string,
//                 scan_cycle_count:number,
//                 type:string,
//                 tags: string[]
//             }
//         ]
//     },
//     check:boolean
// }

interface props{
    data:[
            {
                display_name: string,
                host: string,
                scan_cycle_count:number,
                type:string,
                tags: string[],
                unique_id:string
            }
        ],

    check:boolean
}

function Cards({data,check}:props) {
    const key = useStore_5(state => state.key)
    const setKey = useStore_5(state => state.setKey)
    console.log('Cards ini :',data)

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
                                        <Checkbox checked={check} />
                                        <Link to={`/Asset/${e.unique_id}`}><AiOutlineLink /></Link>
                                        <Group>
                                            <Text weight={700} style={{fontSize:'20px'}}>{e.host}</Text>
                                        </Group>
                                        <Group>
                                            <Text style={{fontSize:'16px'}}>{e.display_name}</Text>
                                        </Group>
                                        <Group dir='column'>
                                            <Grid>
                                                <Grid.Col span={12}>
                                                    <Text style={{fontSize:'12px'}}>Scan Cycles</Text>
                                                </Grid.Col>
                                                <Grid.Col span={12}>
                                                    <Text weight={500} style={{fontSize:'16px'}}>{!e.scan_cycle_coun?0:e.scan_cycle_coun}</Text>
                                                </Grid.Col>
                                            </Grid>
                                        </Group>
                                        <Group>
                                            <Text style={{fontSize:'12px'}}>Last Scan Date</Text>
                                            <AiOutlineLink size={18}/>
                                        </Group>
                                        <Group>
                                            <Text style={{fontSize:'12px'}}>Time to Decommision</Text>
                                        </Group>
                                        <Group>
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
                                        <Grid.Col  span={6} style={{}}>
                                            <Group>
                                                <Text style={{fontSize:'12px'}}>Vuln Breakup</Text>
                                            </Group>
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
                                        <Grid.Col  span={6}>
                                            <Group>
                                                <Text style={{fontSize:'12px'}}>Status Breakup</Text>
                                            </Group>
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
                        </Card>
                     </Grid.Col>
                    </>
                )
                })
            }
            {/* hi */}
    </>
  )
}

export default Cards