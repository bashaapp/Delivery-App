import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';


import {
    FONTS, SIZES, COLORS
} from '../constants';

const FormInput =({
 containerStyle,
 label,
 prependComponent,
 appendComponent,
 onChange,
 secureTextEntry,
 keyboardType = 'default',
 autoCompleteType = "off",
 autoCapitalize = "none",
 errorMsg ="",
 
})=>{

 const [focus, setOnfocus] = React.useState(false)
    return(
        <View style={{...containerStyle}}>

            {/*label & Error msg*/}

            <View
            style={{
            flexDirection:'row',
            justifyContent:'space-between'
            }}
            >
                <Text style={{color:COLORS.gray, ...FONTS.body4}}>{label}</Text>
                <Text style={{ color:COLORS.lightMaroon, ...FONTS.body4}}>{errorMsg}</Text>

            </View>

            {/*Text input*/}
            <View
            style={[styles.textInputContainer,focus ? styles.focusOn : styles.focusOff]}
            onFocus={()=>setOnfocus(true)}
            onBlur={()=>setOnfocus(false)}
            
            >
                {prependComponent}

                <TextInput 
                style={{flex:1}}
                
                 
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                onChangeText={(text)=> onChange(text)}
                
               
              
                                
                />
                {appendComponent}

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer:{
        flexDirection:'row',
        height:55,
        paddingHorizontal:SIZES.base,
        marginTop:SIZES.base,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.lightGray2
    },
    focusOn:{
       
        borderColor:COLORS.primary,
        borderWidth:1,
        borderRadius:SIZES.radius
       
    },
    focusOff:{
      
    },
 

})


export default FormInput;