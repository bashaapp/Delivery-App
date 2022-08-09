import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding,Otp, SignIn, SignUp, ForgotPassword } from '../screens';

const Stack = createNativeStackNavigator();


const AuthNavigator = ()=>{
    
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name = 'OnBoarding' component={OnBoarding}/>
    <Stack.Screen name = 'SignIn' component={SignIn}/>
    <Stack.Screen name = 'SignUp' component={SignUp} />
    <Stack.Screen name = 'ForgotPassword' component={ForgotPassword} />
    <Stack.Screen name = 'Otp' component={Otp} />
    

</Stack.Navigator>
  )
}

export default AuthNavigator;