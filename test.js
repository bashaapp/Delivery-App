import React from 'react';
import{
    View,
    Text,
    //AppLoading
} from 'react-native'

import {AppLoading} from 'expo'

import { useFonts,Raleway_200ExtraLight, Raleway_800ExtraBold_Italic } from '@expo-google-fonts/raleway';


const TestFont = ()=>{

    const [fontsLoaded] = useFonts({
        Raleway_200ExtraLight,
        Raleway_800ExtraBold_Italic,
       "Pacifico-Regular": require('./App/fonts/Pacifico-Regular.ttf')
       
    
      })
    
   
    return(
        <View>
            <Text
            style={{
                fontSize:40,
                fontFamily:'Pacifico-Regular'

            }}
            >Test Font Type With Expo</Text>
        </View>
    )
}

export default TestFont;