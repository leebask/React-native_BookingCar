import { Header } from '@rneui/base'
import { Icon } from '@rneui/themed'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HeaderApp({ navigation }) {
  return (
    <Header
    leftComponent={ 
    <TouchableOpacity onPress={() => { }}
    >
    <Icon name="menu" color="white" />
  </TouchableOpacity>}
    centerComponent={ 
      <TouchableOpacity onPress={() => { }}
      >
      <Icon name="home" color="white" />
    </TouchableOpacity>}
    rightComponent={ <TouchableOpacity onPress={() => { navigation.push('Login')}}
    >
    <Icon name="logout" color="white" />
  </TouchableOpacity>}
  />
  )
}

export default HeaderApp