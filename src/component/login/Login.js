import React, { useRef, useState } from 'react'
import { Alert } from 'react-native';
import LoginScreen, { SocialButton } from "react-native-login-screen";
import { useDispatch, useSelector } from 'react-redux';
import loginSlice, { setAccount } from '../../redux/loginSlice';
function Login({navigation}) {
    const dispatch = useDispatch()
    // const [userNameInput, setUserNameInput] = useState('')
    // const [userPass, setUserPass] = useState('')
    const userNameInput = useRef()
    const userPass = useRef()
    const clickLogin = () => {
        if(userNameInput.current && userPass.current){
            dispatch(setAccount({ username: userNameInput.current, password: userPass.current}))
            navigation.push('AllComponent')
        }
        else
        Alert.alert('Vui lòng điền đầy đủ Email và Password!')
    }
    // console.log(useSelector((state)=>state))
    return (
        <LoginScreen
            logoImageSource={{ uri: 'https://web-dat-xe-truc-tuyen-8t1q-12y7ak7ib-leebask.vercel.app/static/media/logo.c09766d05899649a9294.png' }}
            onLoginPress={e => clickLogin()}
            onSignupPress={() => { }}
            onEmailChange={(email) => {
                userNameInput.current = email
            }}
            onPasswordChange={(password) => {
                userPass.current = password
            }}
        >
            <SocialButton text="Continue with Google"
                onPress={() => { }}
                imageSource={{ uri: 'https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png' }}

            />
            <SocialButton
                text="Continue with Facebook"
                // imageSource={require("./assets/social/facebook.png")}
                onPress={() => { }}
            />

        </LoginScreen>
    )
}

export default Login