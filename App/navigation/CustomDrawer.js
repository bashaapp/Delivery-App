import React,{useContext} from 'react';
import {
    View,
    Text,
    Image,
    Switch,
    TouchableOpacity
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItem, 
    DrawerItemList} 
    from '@react-navigation/drawer';

import {
    COLORS,
    SIZES, 
    FONTS,
    icons,
    
} from '../constants'

import { ThemeContext } from '../theme/themeContext';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_100Thin,
   
  } from '@expo-google-fonts/roboto';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

  




const CustomeDrawer = (props)=>{


    const {dark,toggle} = useContext(ThemeContext)
    const navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        "Pacifico-Regular": require('../../App/fonts/Pacifico-Regular.ttf')
    });

      if (!fontsLoaded) {
        return <AppLoading />;
      }

      const handleSignOut = ()=>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace('Auth')
        })
        .catch(error => alert(error.message))
      }

    return(
        <DrawerContentScrollView 
         scrollEnabled={true}
         contentContainerStyle={{
             flex:1
         }}
        
        >
            <View style={{
               flex:1,
                paddingHorizontal:SIZES.radius
            }}>

                {/*Profile*/}
                <TouchableOpacity
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius,
                    alignItems:'center'
                }}
                >
                   <Image 
                   source={icons.profile_logo}
                   resizeMode='contain'
                   style={{
                       width:50,
                       height:50,
                       borderRadius:30,
                       borderColor: dark ? COLORS.gray3: COLORS.secondary,
                       borderWidth:1,
                       tintColor:dark ? COLORS.gray2 : null
                   }}
                   />
            
                <View style={{ marginLeft:SIZES.radius}}
                >
                    <Text style={{
                        color: dark ? COLORS.gray2 : COLORS.primary,
                        ...FONTS.h3,
                        fontWeight:'600',
                        fontSize:15,
                        fontFamily: 'Pacifico-Regular',

                    }}
                    >{auth.currentUser?.email}</Text>

                     <Text style={{
                         color:COLORS.gray,
                         ...FONTS.body4
                     }}
                     >View your profile</Text>
                </View>
                </TouchableOpacity>



                {/*Drawer Items*/}

                <View
                style={{flex:1, marginTop:SIZES.padding }}
                >
               
                    <DrawerItemList {...props}/>
                  
                        {/*Dark Button*/}


               <View style={{marginTop:SIZES.radius}}>

                    <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginLeft:SIZES.padding

                    }}
                    >
                       <View
                       style={{
                           flexDirection:'row',

                       }}
                       >
                           <Image  source={icons.dark} style={{
                               width:25, height:25,
                               tintColor: dark ? COLORS.gray2 : COLORS.gray,
                               marginRight:10,
                               marginLeft:-7
                           }} />
                            <Text style={{
                            color: dark ? COLORS.gray2 : COLORS.gray,
                            marginLeft:-5,
                            ...FONTS.body3,
                            fontWeight:'500'
                        }}>Dark Mode</Text>

                       </View>
                        <Switch
                          style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }}
                           trackColor={{ false: COLORS.gray , true: COLORS.gray2 }}
                           thumbColor={dark ? COLORS.lightGray2 : null}
                           ios_backgroundColor={COLORS.gray3}
                           value={dark} onValueChange={toggle} />

                    </View>

                </View>
                </View>

                  {/*Line Divider*/}
                  <View
                      style={{
                          height:1,
                          marginVertical:SIZES.radius,
                          marginLeft:SIZES.radius,
                          backgroundColor:COLORS.lightGray1
                      }}
                     />

                <View>
                      <DrawerItem 
                       labelStyle={{
                           color: dark ? COLORS.gray2 : COLORS.gray
                       }}
                    label ='Logout'
                    icon={({})=>(
                        <Image source={icons.logout} style={{
                        width:20,
                        height:20,
                tintColor: dark ?COLORS.gray2 : COLORS.gray}}/>
                    )}
                    onPress={handleSignOut}
                    />

                </View>
               </View>
        </DrawerContentScrollView>
        
        
       
        
        
      
    )
}

export default CustomeDrawer;

