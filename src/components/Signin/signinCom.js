import React from 'react'
import { FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon,
    Text,
    Container,
    Form
} from './SigninElements';
import Navbar from '../NavBar';
import { useHistory } from "react-router-dom";

const SignIn = () => {

    const history = useHistory(); 

    const routeChange = () =>{ 
      let path = '/systemTrainingProgram'; 
      history.push(path);
    }
    
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/" >
            </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>   
                    <FormInput type='password' required/>
                    <FormButton type='submit' onClick={routeChange}>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>

  )
}

export default SignIn;