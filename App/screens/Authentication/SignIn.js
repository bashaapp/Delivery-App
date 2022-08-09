import React, { useEffect } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView 
} from 'react-native';

import {FONTS,COLORS, SIZES,icons} from '../../constants';

import {AuthLayout} from '../';
import {
    AppButton,
    CustomSwitch,
    FormInput
} from '../../components';

import {utils} from '../../utils'
import { auth } from '../../../firebase';





const SignIn = ({navigation})=>{

    const [email, setEmail] = React.useState('')
    const [ password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState()
    const [passwordError, setPasswordError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe]=React.useState(false)


     function isEnableSignIn(){
         return email != "" && password != "" && emailError == ""
     }
     

    const handleSignIn = () =>{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredebtials => {
            const user = userCredebtials.user;
            console.log("Logged in with", user.email)
        })
        .catch(error => alert(error.message))
    } 

     
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if (user){
                navigation.navigate('Home')
            }
        })
        return unsubscribe
    },[])

    return(

    <KeyboardAvoidingView
     behavior='padding'
     style={{
        flex:1,
     }}
     >
      
      <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
      >
     
          <View
          style={{
              flex:1,
              marginTop:SIZES.padding * 2,
          }}
          >
              {/*form Input*/}
               
              <FormInput 
              label='Email'
              keyboardType='email-address'
              autoCompleteType='email'
              value={email}
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

              <FormInput 
              label='Password'
              secureTextEntry={!showPass}
              autoCompleteType="password"
              value={password}
              containerStyle={{
                  marginTop:SIZES.radius
              }}
                onChange={(value)=>{

                    //Validate Password
                    utils.validatePassword(value, setPasswordError)
                    
                    setPassword(value)
                }}
                errorMsg={passwordError}
                appendComponent={
                    <TouchableOpacity
                    style={{
                        width:40,
                        alignItems:'flex-end',
                        justifyContent:'center'
                    }}
                    onPress={()=>setShowPass(!showPass)}
                    >
                        <Image 
                        source={showPass ? icons.eye_close
                            :icons.eye}
                            style={{
                                height:20,
                                width:20,
                                tintColor:COLORS.gray
                            }}
                        />

                    </TouchableOpacity>
                }
              />

              {/*Save Me & Forgot Password Button*/}
                
                <View
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent:'space-between'
                }}
                >
                    <CustomSwitch 
                    value = {saveMe}
                    onChange ={(value) => setSaveMe(value)}
                    
                    />

                    <AppButton 
                       label='Forgot Password?'
                       buttonStyle={{
                         backgroundColor:null 
                    }}

                       labelStyle={{
                           color:COLORS.gray,
                           ...FONTS.body4
                       }}

                       onPress={()=>navigation.navigate("ForgotPassword")}
                       />

                </View>

                {/*Sign In*/}
                <AppButton 
                label="Sign In"
                disabled={isEnableSignIn() ? false:true}
                buttonStyle={{
                    height:55,
                    alignItems:'center',
                    marginTop:'15%',
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableSignIn() ? COLORS.primary 
                    :COLORS.secondary,
                }}
               // onPress={()=>navigation.navigate("Home")}
                  onPress={handleSignIn}
                />

                {/*Sign Up*/}
                <View
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    justifyContent:'center'
                }}
                >
                    <Text
                    style={{
                        color:COLORS.gray,
                        ...FONTS.body4
                    }}
                    >
                        Don't have an account?
                    </Text>

                    <AppButton 
                    label='Sign Up'
                    buttonStyle={{
                        backgroundColor:null,
                        marginLeft:5
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        ...FONTS.h3
                    }}
                    onPress={()=>navigation.navigate("SignUp")}
                    />

                </View>
          </View>
         

      </AuthLayout>
    </KeyboardAvoidingView>
    )
}

export default SignIn;