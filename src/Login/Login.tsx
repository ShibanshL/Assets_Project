import React from 'react'
import { Container, Group, Button, TextInput} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import {useMutation} from 'react-query' 
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import axios from 'axios';
import { useStore_1, useStore_2} from '../Store';


var k = 0

interface api {
  data:{
    auth_token: string
  }
}

function Login() {

  const [pass,setPass] = React.useState('password')
  const [data, setData] = React.useState<api>()
  const setLog1 = useStore_2(state => state.setLog_1)

  const setToken = useStore_1(state => state.setToken)
  const Token = useStore_1(state => state.token)

  let nav = useNavigate()


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

    const Password = () => {
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
    //   const onSub = (values:any) => mutate(values)

      
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
        await axios.post(`${import.meta.env.VITE_URL}/api/auth/token/login/`,payload)
        .then((res) => {setData(res);console.log('D =',data);
              setToken(data?.data?.auth_token);
              console.log("Token = ",Token) })
        .catch(err => console.log(err))

        window.localStorage.setItem('Data',true)
        window.localStorage.setItem('Auth',Token)

        setLog1()

        if(Token){
          nav('/Display')
        }
        else return
       

        
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
              type={pass}
              label="Password"
              placeholder="Password"
              radius="sm"
              pt='5px'
              p='10px'
              rightSection ={k%2 == 0?<BsEyeSlashFill style={{cursor:'pointer'}} onClick={Password}/>:<BsEyeFill style={{cursor:'pointer'}} onClick={Password}/>}
              {...form.getInputProps(pass)}
              
              />

              {/* <Group position="right" mt="md"> */}
              <Button radius={'sm'} ml='10px' mt='5px' type="submit">Login</Button>
              {/* </Group> */}
            </form>
        </Group>
      </Container>
    )
}

export default Login