import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from '../';
import { FONTS,SIZES,COLORS,icons } from '../../constants';
import { FormInput,AppButton } from '../../components';
import { utils } from '../../utils';


const ForgotPassword =({navigation})=>{

      const [email, setEmail] = React.useState("")
      const [emailError, setEmailError] = React.useState("")
      const [focus , setFocus] = React.useState(false)

  
   function isEnableSendEmail(){
       return email !== "" && emailError == ""
   }

    return(
       <AuthLayout
       title='Password Recovery'
       subtitle='Please Enter Your Email Address to Recover
       Your password'
       titleStyle={{
           marginTop:SIZES.padding * 2
       }}
       >
           {/*Form Input*/}
           <View
           style={{
               flex:1,
               marginTop:SIZES.padding
           }}
           >
               <FormInput 
              label='Email'
              keyboardType='email-address'
              autoCompleteType='email'
              onChange={(value)=>{
                  //validate email
                   utils.validateEmail(value, setEmailError)
                   setEmail(value)
              }}

              errorMsg={emailError}
              appendComponent={
                  <View
                  style={{
                      justifyContent:'center'
                  }}
                  >
                    <Image 
                    source={email == "" || (email != "" && 
                    emailError == "") ? icons.correct:icons.cancel}
                    style={{
                        height:20,
                        width:20,
                        tintColor:email == "" ?
                        COLORS.gray : (email != "" &&
                        emailError == "") ? COLORS.green
                        : COLORS.red
                    }}
                    />


                  </View>
              }
              />
           </View>

           {/*Button*/}

           <AppButton 
           label='Send Email'
           disabled={isEnableSendEmail() ? false:true}
           buttonStyle={{
               height:50,
               marginTop: SIZES.padding,
               borderRadius: SIZES.radius,
               backgroundColor: isEnableSendEmail () ? 
               COLORS.primary: COLORS.secondary,
               alignItems:'center'
           }}

           onPress={()=>navigation.goBack()}
          
           
           />


       </AuthLayout>
    )
}

export default ForgotPassword;