import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {icons,COLORS} from '../constants';
import {
    Home,
    Account,
    Search,
    Favourite
} from '../screens'


const Tab = createBottomTabNavigator();

const Tabs = ({navigation,})=>{

    const [focus, setFocus] = React.useState( false)
    return (

        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          headerShown:false
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            
            tabBarIcon: ({focused}) => (
               
               
              <Image source={icons.home} 
              style={{
                  width:25,
                  height:25,
                  tintColor: focused ? COLORS.primary: COLORS.gray
              }}
              />
             
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            
            tabBarIcon: ({focused}) => (
              <Image  source={icons.search}   
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLORS.primary:COLORS.gray
            }}/>
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
           
            tabBarIcon: ({focused}) => (
              <Image source={icons.love}   
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLORS.primary:COLORS.gray
            }}  />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Account}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={icons.profile} 
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLORS.primary:COLORS.gray
            }} />
            ),
          }}
        />
      </Tab.Navigator>
    );

}

export default Tabs;

