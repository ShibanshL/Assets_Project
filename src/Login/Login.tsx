import React from 'react'
import { Container, Group, Button, TextInput, Text} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import {useMutation} from 'react-query' 
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import axios from 'axios';
import {useStore, AUTH_KEY, useStore_2, LOGGED_JN_OUT} from '../Store';


var k = 0


function Login() {

  const [pass,setPass] = React.useState('password')
  const setLog1 = useStore_2(state => state.setLog_1)
  const logData = LOGGED_JN_OUT((state:any) => state.logData)
  const setLogData = LOGGED_JN_OUT((state:any)=> state.setLogData)
  const setToken = AUTH_KEY((state:any) => state.setToken)
  const Token = AUTH_KEY((state:any) => state.token)
  const [invalidCred,setInvalidCred] = React.useState('')
  const num = useStore(state => state.num)

  let nav = useNavigate()

  //This is to check, once logged in even after you close your tab unless you log out it will keep you logged in
  React.useEffect(() => { 
    if(logData){
      nav('/Assets')
    }
    },
    [num])


  //Mantine's basic useform that handles all the input and input authorization
  const form = useForm({
      initialValues: {
          email: '',
          password:'',
    },
    validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        password : (value) => (value.length < 4)? 'Please Enter a biggger Password' : null
        },
    });

    //This program is to check what i have entered in the password field. where this changed the type of the field onclick
    const Password_Text = () => {
        if(k%2 == 0){
          setPass('text')
          console.log('Icon = ',pass)
          k++
        }
        else{
          setPass('password')
          console.log('Icon = ',pass)
          k++
        }
      }
      
    //Here i am using react querry to send the post request
    const mutation = useMutation((values:any) => handleSubmit(values),
    {
      onSuccess: () => {
        console.log('W O R K I N G');
        console.log('DATA : ')
      }
      })

      //This is the function where the post request happen, here after post request i receive an authkey and i use localStorage
      //to keep the value of that auth key
      const handleSubmit = async (values:any) => {
        values.preventDefault()
        var em = form.values.email
        var pa = form.values.password

        console.log('Email : ',em+' Password : ',pa)

        let payload = {email:em,password:pa}

        axios.post(`${import.meta.env.VITE_URL}/api/auth/token/login/`,payload)
        .then((res) => {
              setToken(res?.data?.auth_token);
              if(res?.data?.auth_token){
                nav('/Assets')
                setLogData(true)
              }
              else return 
            })
        .catch(err => {
          console.log(err)
          setInvalidCred('Invalid credentials, please Reload and Try again.')
        })


        setLog1()

        // console.log('Log 1 ',logData,'Log 2 ',data_Check)

       
      }
    
    return (
      <Container pt='10px' pb='65vh' style={{background:'#f8f9fa'}} fluid>
        <Group sx={{maxWidth:400}} mx="auto" p='5px' style={{background:'white',borderRadius:'10px'}} direction='column' align='top' position='center'>
            <form onSubmit={(values:any) => handleSubmit(values)} style={{width:'100%'}}>
              <TextInput
              required
              label="Email"
              placeholder="Enter your Email"
              radius="sm"
              p='10px'
              {...form.getInputProps('email')}
              
              />
              <TextInput
              required
              type={k%2 != 0?'text':'password'}
              label="Password"
              placeholder="Password"
              radius="sm"
              pt='5px'
              p='10px'
              rightSection ={k%2 == 0?<BsEyeSlashFill style={{cursor:'pointer'}} onClick={Password_Text}/>:<BsEyeFill style={{cursor:'pointer'}} onClick={Password_Text}/>}
              {...form.getInputProps(`password`)}
              
              />
              <Text color='red' ml='10px' pb='5px'>{invalidCred}</Text>
              <Button radius={'sm'} ml='10px' mt='5px' type="submit">Login</Button>
            </form>
        </Group>
      </Container>
    )
}

export default Login