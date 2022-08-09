import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    images
} from '../../constants';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subtitle, titleStyle, children})=>{

    return(
        <View
        style={{
            flex:1,
            paddingVertical:SIZES.padding,
            backgroundColor:COLORS.white
        }}
        >
          <KeyboardAwareScrollView
          keyboardDismissMode='on-drag'
          contentContainerStyle={{
              flex:1,
              paddingHorizontal:SIZES.padding
          }}
          >

              {/*App Icon*/}
              <View
              style={{
                  alignItems:'center'
              }}
              >
                  <Image 
                  source={images.logo_02}
                  resizeMode="contain"
                  style={{
                      height:100,
                      width:250
                  }}
                  
                  />
                 </View>

                 {/*Title & Subtitle*/}

                 <View
                 style={{
                     marginTop:SIZES.padding,
                     ...titleStyle
                 }}
                 >
                     <Text
                     style={{
                         textAlign:'center',
                         ...FONTS.h2,
                         fontWeight:'bold'
                     }}
                     >
                         {title}
                     </Text>

                     <Text
                     style={{
                         textAlign:'center',
                         color:COLORS.gray,
                         marginTop:SIZES.base,
                         ...FONTS.body3
                     }}
                     >
                         {subtitle}
                     </Text>

                 </View>

                 {/*Content*/}
                 
                 {children}


          </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout;