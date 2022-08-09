import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './App/theme/themeContext';

import AuthNavigator from './App/navigation/AuthNavigator';
import Root from './App/navigation/Root';
import { OrderDetails,Menu ,Cart,OrderScreen} from './App/screens';
import { CartProvider } from './App/context/Context';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import EditProfile from './App/screens/EditProfile';



const Stack = createSharedElementStackNavigator();



const App = ()=>{
  return(
    <CartProvider>
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
        headerShown:false
      }}
      initialRouteName={'Home'}
      >
         <Stack.Screen  name ="Menu" component={Menu} />
         <Stack.Screen 
         // sharedElements={(route,) => {const { item } = route.params; return [`item.${item.id}image`];}} 
          name ="OrderScreen" component={OrderScreen} />
         <Stack.Screen  name ="Cart" component={Cart} />
         <Stack.Screen  name ='Home' component={Root}/>
         <Stack.Screen  name ="Auth" component={AuthNavigator} />
         <Stack.Screen   options={{presentation: 'fullScreenModal', 
         }}   name ="Details" component={OrderDetails}
         />
         <Stack.Screen  name='Edit' component={EditProfile}
          
         />


        
      </Stack.Navigator>
              
    </NavigationContainer>
    </ThemeProvider>
    </CartProvider>
    
  )
}

export default App;