import React from 'react'
import{
    View,
    TouchableOpacity,
    Image

} from 'react-native'

import {
    COLORS,SIZES
} from '../constants'

const AppIcon =({icon, onPress,iconStyle})=>{
    return(
        <TouchableOpacity

        style={{
            position:'absolute',
            left:SIZES.padding,
            top:SIZES.padding,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius:10,
            height:35,
            width:35,
            alignItems:'center',
            justifyContent:'center'
           }}
        onPress={onPress}
        >
        <Image source={icon} 
         resizeMode="cover"
         style={{...iconStyle,}}  
                 />
        </TouchableOpacity>
    )
}

export default AppIcon;