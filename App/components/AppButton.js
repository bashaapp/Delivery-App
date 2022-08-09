import React from 'react';

import {
    Text,
    TouchableOpacity
} from 'react-native';

import {
    COLORS,FONTS
} from '../constants';

const AppButton =({label, disabled,buttonStyle, labelStyle,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}

        disabled={disabled}
        style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary,
            ...buttonStyle
        }}
        >

            <Text
            style={{
                color:COLORS.white,
                ...FONTS.h3,
                ...labelStyle
            }}
            >{label}</Text>

        </TouchableOpacity>

    )
}


export default AppButton;