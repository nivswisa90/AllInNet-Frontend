import React from 'react'
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text
} from './SigninElements';
import {useHistory} from "react-router-dom";

const SignIn = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = '/systemTrainingProgram';
        history.push(path);
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
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