import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {FONTS, SIZES,COLORS} from '../../constants';
import {AppButton} from '../../components';
import {AuthLayout} from '../'
import OTPInputView from '@twotalltotems/react-native-otp-input';


const Otp =({navigation})=>{

    const [ timer, setTimer] = React.useState(60)

    React.useEffect(()=>{
        let interval = setInterval(()=>{
            setTimer(prevTimer =>{
                if(prevTimer > 0){
                    return prevTimer -1
                } else{
                    return prevTimer
                }
            })
        },1000)
        return () => clearInterval(interval)
    },[])
    return(
       <AuthLayout
       title='Otp Authentication'
       subtitle=" An authentication code has been sent to 
       bashamlan2020@gmail.com"
       titleStyle={{
           marginTop: SIZES.padding * 2
       }}
       >

           {/*Otp inputs*/}
           <View
           style={{
               flex:1,
               marginTop:SIZES.padding * 2
           }}
           >
               <OTPInputView 
               pinCount={4}
               style={{
                   width:'100%',
                   height:50
               }}
               codeInputFieldStyle={{
                   width:65,
                   height:65,
                   borderRadius:SIZES.radius,
                   backgroundColor:COLORS.lightGray2,
                   color:COLORS.black,
                   ...FONTS.h3
               }}

               onCodeFilled={(code)=>(
                   console.log(code)
               )}
               />

               {/*CountDown Timer*/}

               <View
               style={{
                   flexDirection:'row',
                   justifyContent:'center',
                   marginTop:SIZES.padding,
               }}
               >
                   <Text
                   style={{
                       color:COLORS.gray,
                       ...FONTS.body3
                   }}
                   >Didn't receive code?</Text>

                   <AppButton 
                       label={`Resend (${timer}s)`}
                       disabled={timer == 0 ? false : true}
                       buttonStyle={{
                           marginLeft:SIZES.base,
                           backgroundColor:null,
                       }}
                       labelStyle={{
                           color:COLORS.primary,
                           ...FONTS.h3,
                       }}

                       onPress={()=> setTimer(60)}
                   />

               </View>


           </View>

           {/*Footer*/}
           <View>
               <AppButton 
               label='Continue'
               buttonStyle={{
                   height:50,
                   alignItems:'center',
                   borderRadius:SIZES.radius,
                   backgroundColor:COLORS.primary

               }}

               onPress={()=> navigation.navigate("Home")}
               
               />
           </View>

       </AuthLayout>
    )
}

export default Otp;