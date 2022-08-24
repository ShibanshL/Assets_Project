import React from 'react'
import { AppShell, Center, Container,Group,Grid, Checkbox, TextInput, Button, Text} from '@mantine/core';
import { useForm } from '@mantine/form';

function Test_File_1() {
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

      const handleSubmit = (values:any) => {
        values.preventDefault()
        var em = form.values.email
        var pa = form.values.password

        console.log(form.values)
      }

  return (
    <Grid p='20vh 0' grow>
        <Grid.Col span={12}>
            <Container size={1920}>
                <Container size={600}>
                    <form onSubmit={(values) => handleSubmit(values)} style={{width:'100%', background:'rgba(255,255,255,0.8)', boxShadow:'2px 2px 20px 2px rgba(0,0,0,0.08)', padding:'20px'}}>
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
                            type='password'
                            label="Password"
                            placeholder="Password"
                            radius="sm"
                            pt='5px'
                            p='10px'
                            //   rightSection ={k%2 == 0?<BsEyeSlashFill style={{cursor:'pointer'}} onClick={Password_Text}/>:<BsEyeFill style={{cursor:'pointer'}} onClick={Password_Text}/>}
                            {...form.getInputProps(`password`)}
                            
                            />
                            {/* <Text color='red' ml='10px' pb='5px'>{invalidCred}</Text> */}
                            <Button radius={'sm'} ml='10px' mt='5px' type="submit">Login</Button>
                    </form>
                </Container>
            </Container>
        </Grid.Col>
        <Grid.Col span={12}>
            {/* {handleSubmit(form.values)} */}
        </Grid.Col>
    </Grid>
  )
}

export default Test_File_1