import React from 'react';

import {
    View,
    Text,    
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert

} from 'react-native';

import {AuthLayout} from '../';
import {SIZES,COLORS,icons} from '../../constants';
import { FormInput,AppButton } from '../../components';
import { utils } from '../../utils';
import { auth } from '../../../firebase';





const SignUp = ({navigation})=>{

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass,setShowPass] = React.useState(false)


    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
      

    function isEnableSignUp (){
        return email != "" && username !=""&& password !="" && 
        emailError == "" && passwordError == "" && usernameError
        == ""
    }

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            
            const user = userCredentials.user;
            console.log(user.email)
        })

        .catch(error => alert(error.message))
    }


   
    


      
      
    return(
        <KeyboardAvoidingView
        behavior='padding'
        style={{
           flex:1,
        }}
        >
       <AuthLayout
       title='Getting Started'
       subtitle='Greate an account to continue!'
       titleStyle={{
           marginTop:SIZES.radius
       }}
       >
           {/*Form Input & Sign Up*/}

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
                    label='Username'
                    containerStyle={{
                        marginTop:SIZES.radius
                    }}
                    

                    onChange={(value)=>{
                        setUsername(value)
                    }}

                    errorMsg={usernameError}
                    appendComponent={
                        <View
                        style={{
                            justifyContent:'center'
                        }}
                        >
                         <Image 
                            source={username == '' ||
                            (username !="" && usernameError == "")?
                             icons.correct : icons.cancel}

                           style={{
                               height:20,
                               width:20,
                               tintColor: (username == "" ?
                               COLORS.gray : (username != "" &&
                               usernameError == "")?
                               COLORS.green : COLORS.red)

                        }}
                            />

                            

                        </View>
                    }
                    
                    />


           <FormInput 
              label='Password'
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                  marginTop:SIZES.radius
              }}
              value={password}
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

              {/*Sign Up & Sign In*/}

              <AppButton
              label='Sign Up'
              disabled={isEnableSignUp () ? false: true}
              buttonStyle={{
                  height:55,
                  alignItems:'center',
                  marginTop:40,
                  borderRadius:SIZES.radius,
                  backgroundColor: isEnableSignUp() ?
                  COLORS.primary : COLORS.secondary
              }}

             // onPress={()=>navigation.navigate("Otp")}
             onPress={()=>{Alert.alert('Congratulations', 'You have Created your account Successfully',handleSignUp)}}
              
              />

           </View>

       </AuthLayout>
       </KeyboardAvoidingView>
    )
}

export default SignUp;