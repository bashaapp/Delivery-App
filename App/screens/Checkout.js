import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { COLORS } from '../constants';



const CheckOut =()=>{
    return(
        <View
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.gray3
        }}
        >
            <Text>Check Out</Text>
        </View>
    )
}

export default CheckOut;