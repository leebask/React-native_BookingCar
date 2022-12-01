import React from 'react'
import { useSelector } from 'react-redux'
import HeaderApp from './src/component/header/HeaderApp'
import Home from './src/component/Home/Home'
import Login from './src/component/login/Login'

function AllComponent({navigation}) {
    const account = useSelector(state => state.login.account)
    return (

        account.username === '' && account.password === ''

            ?
            <Login />
            : 
            <>
            <HeaderApp navigation={navigation}/>
            <Home />
            </>


    )
}

export default AllComponent