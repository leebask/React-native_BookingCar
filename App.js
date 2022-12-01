import React from 'react'
import HeaderApp from './src/component/header/HeaderApp'
import Home from './src/component/Home/Home'
import Login from './src/component/login/Login'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/app/store'
import AllComponent from './AllComponent'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStore } from 'redux'
const Stack = createNativeStackNavigator();
function App() {
  // const store = createStore(rootReducer);
  // const account = useSelector((state)=>state)
  // console.log(account)
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="AllComponent" component={AllComponent}   options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  )
}

export default App