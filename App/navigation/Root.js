import React,{useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs';
import CustomeDrawer from './CustomDrawer';
import {Image,TouchableOpacity } from 'react-native'
import { COLORS,icons, SIZES } from '../constants';
import { ThemeContext } from '../theme/themeContext';
import AppLoading from 'expo-app-loading';
import { useCart } from '../context/Context';
import{View,Text} from 'react-native'



import { useFonts,Raleway_200ExtraLight, Raleway_800ExtraBold_Italic } from '@expo-google-fonts/raleway';



const Drawer = createDrawerNavigator();



const Root = ({navigation})=>{
  const {cart} = useCart();
    const [cartCount, setCartCount]=React.useState(0);
  
      React.useEffect(()=>{
         let count = 0;
         cart.forEach((item)=>{
         count +=item.qty;
        });
        setCartCount(count)
    })

  const {dark} = useContext(ThemeContext)

  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Raleway_800ExtraBold_Italic,
   "Pacifico-Regular": require('../../App/fonts/Pacifico-Regular.ttf')
   

  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  

 
    return(
        <Drawer.Navigator
        
        screenOptions={{
          headerShown:false,
            headerTintColor: COLORS.primary,
            headerStyle: {
              backgroundColor: COLORS.gray3,
              
            },
            headerTitleStyle: {
              color: COLORS.darkColor,
              fontSize:20,
              fontFamily:'Pacifico-Regular'
              },
              headerRight:()=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate('Cart')}
                >
                <Image source={icons.cart} style={{
                  height:20,
                  width:20,
                  tintColor:COLORS.primary,
                  marginRight:SIZES.padding
                }} />

<View 
                      style={{
                          position:'absolute',
                          bottom:5,
                          left:-10,
                          width:25,
                          height:25,
                          borderRadius:30,
                          color:COLORS.primary,
                          backgroundColor:COLORS.black,
                          opacity:0.7,
                          justifyContent:'center',
                          alignItems:'center'
                  
                }}
                
                >
                    <Text
                       style={{
                           fontSize:11,
                           fontWeight:'bold',
                           color:COLORS.white
                       }}
                    >{cartCount}</Text>
                </View>
                </TouchableOpacity>
              ),
          drawerStyle: {
               backgroundColor: dark ? COLORS.darkColor : COLORS.gray3
           },
          drawerLabelStyle:{marginLeft:-20},
          drawerActiveBackgroundColor: COLORS.gray2,
          drawerActiveTintColor: dark ? COLORS.darkColor : COLORS.darkColor,
          drawerInactiveTintColor: dark ? COLORS.gray2 : COLORS.gray,
          
        }}
        drawerContent={props => <CustomeDrawer {...props}/>}>
        <Drawer.Screen name="Julio's" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.home}
            resizeMode="cover"
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray
            }}
            />
          )
        }}
        />

         <Drawer.Screen name="My Wallet" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.wallet}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray
            }}
            />
          )
        }}
        />
         <Drawer.Screen name="Notification" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.notification}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray
            }}
            />
          )
        }}
        />
         <Drawer.Screen name="Favourite" component={Tabs}
        options={{
          
          drawerIcon:({focused})=>(
            <Image source={icons.favourite}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray            }}
            />
          )
        }}
        />

  <Drawer.Screen name="Track your Order" component={Tabs}
        options={{
          
          drawerIcon:({focused})=>(
            <Image source={icons.location}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray            }}
            />
          )
        }}
        />
        <Drawer.Screen name="Coupon" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.coupon}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray            }}
            />
          )
        }}
        />

<Drawer.Screen name="Settings" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.setting}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray            }}
            />
          )
        }}
        />
        <Drawer.Screen name="Help Center" component={Tabs}
        options={{
          drawerIcon:({focused})=>(
            <Image source={icons.help}
            style={{
              width:20,
              height:20,
              tintColor: focused ? COLORS.darkColor : COLORS.gray
             // tintColor: focused ? COLORS.white : COLORS.secondary
            }}
            />
          )
        }}
        />
       
      
        </Drawer.Navigator>
    )
}

export default Root;