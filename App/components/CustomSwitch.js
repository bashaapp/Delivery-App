import React from 'react';

import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import {
    COLORS,SIZES,FONTS,
} from '../constants';

const CustomSwitch = ({value, onChange}) =>{
    return(

        <TouchableWithoutFeedback
        onPress={()=>onChange(!value)}
        >
            <View
            style={{
                flexDirection:'row'
            }}
            >

                {/*Switch*/}

                <View
                style={value ? styles.switchOn:
                styles.switchOff}
                >
                    <View 
                    style={{
                        ...styles.dot,
                        backgroundColor: value ? COLORS.white : COLORS.gray
                    }}
                    />

                </View>

                {/*Text*/}
                <Text
                style={{
                    color:value ? COLORS.primary : COLORS.gray,
                    marginLeft:SIZES.base,
                    ...FONTS.body4
                }}
                >Save Me</Text>

            </View>

        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    switchOn:{
        width:40,
        height:20,
        paddingRight:2,
        justifyContent:'center',
        alignItems:'flex-end',
        borderRadius:10,
        backgroundColor:COLORS.primary

    },
    switchOff:{
        width:40,
        height:20,
        paddingLeft:2,
        justifyContent:'center',
        borderRadius:10,
        borderColor:COLORS.gray,
        borderWidth:2
        
    },
    dot:{
        width:12,
        height:12,
        borderRadius:6
    }
})

export default CustomSwitch;