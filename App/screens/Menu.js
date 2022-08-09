import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    Animated
  
} from 'react-native';

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Raleway_200ExtraLight,
  } from '@expo-google-fonts/raleway';

import {
    COLORS,
    SIZES,
    icons,
} from '../constants';

import { AppModal } from '../components';




const Menu = ({navigation,route})=>{

    const [restaurant, setRestaurant] = React.useState(null)
    const [showModal, setShowModal] = React.useState(false)
    const opacity = React.useRef(new Animated.Value(0)).current
   
    
    React.useEffect(()=>{

        Animated.timing(opacity,{
            toValue:1,
            duration:300,
            delay:300,
            useNativeDriver:true,
        }).start()
        
        let {item} = route.params;
        setRestaurant(item)
    }

    )

    let [fontsLoaded] = useFonts({
        Raleway_200ExtraLight,
        "Courgette-Regular": require('../../App/fonts/Courgette-Regular.ttf')
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      }


 const renderHeader = ()=>{
     return(
         <Animated.View
         style={{height:205,opacity}}
         >
             
             <ImageBackground
             source={restaurant?.photo}
             resizeMode="cover"
             style={{
                 height:220,
                 width:'100%',
                 backgroundColor: 'rgb(0,0,0)'
               }}
               imageStyle={{
                opacity:0.5
               }}
            
             >

                 {/*Back Arrow*/}

                 <View
                 style={{
                     marginTop:SIZES.base,
                     flexDirection:'row',
                     justifyContent:'space-between',
                
                 }}
                 >

               <TouchableOpacity
               style={{
                position:'absolute',
                left:SIZES.padding,
                top:SIZES.padding,
               }}
               onPress={()=>navigation.goBack()}
               >
               <Image 
                 source={icons.back_arrow}
                 resizeMode="cover"
                 style={{
                     height:25,
                     width:25,
                     tintColor:COLORS.white, 
                 }}
                 />
               </TouchableOpacity>

               <Image 
               source={icons.love_1}
               resizeMode='cover'
               style={{
                   height:25,
                   width:25,
                   tintColor:COLORS.white,
                   position:'absolute',
                   right:SIZES.padding,
                   top:SIZES.padding,
               }}
               />

               </View>

               {/*Title*/}

              <View
              style={{
                  position:'absolute',
                  bottom:50,
                  left:SIZES.padding,
              }}
              >
                   <Text
               style={{
                   fontSize:SIZES.h1,
                   fontWeight:'800',
                   color:COLORS.white,   
               }}
               >{restaurant?.name}</Text>

              </View>
               

             </ImageBackground>

         </Animated.View>
     )
 }

 const renderMenu =()=>{
     return(
         <View
         style={{
            flex:2,
            marginTop:-SIZES.padding,
            backgroundColor:COLORS.white,
            borderTopLeftRadius:SIZES.radius2,
            borderTopRightRadius:SIZES.radius2,
            
             
         }}
         >

             {/*Details Container*/}

             <View
             style={{
                 flexDirection:'row',
                 height:75,
                 marginTop:SIZES.base 
             }}
             >

             {/*Delivery & Discounts*/}
             
             <View>
                 <View
                 style={{
                     flexDirection:'row',
                     marginLeft:SIZES.padding,
                     marginTop:SIZES.base 
                 }}
                 >
                     <Image 
                     source={icons.delivery}
                     resizeMode="cover"
                     style={{
                         height:23,
                         width:23,
                         tintColor:COLORS.gray,
                         marginRight:3
                     }}
                     />
                 <Text
                 style={{
                     fontSize:16,
                     fontWeight:'300',
                     color:COLORS.gray,
                    // fontFamily:'Raleway_200ExtraLight'
                 }}
                 >Free Delivery</Text>
                 </View>

                 <View
                 style={{
                     flexDirection:'row',
                     marginLeft:SIZES.padding,
                     marginTop:SIZES.base
                 }}
                 >
                     <Image 
                     source={icons.coupon}
                     resizeMode="cover"
                     style={{
                         height:23,
                         width:23,
                         tintColor:COLORS.gray,
                         marginRight:3
                     }}
                     />
                 <Text
                 style={{
                     fontSize:16,
                     fontWeight:'300',
                     color:COLORS.gray
                 }}
                 >Up to 50% off Julio's</Text>
                 </View>
                
             </View>

             {/*Tiem & Stars*/}

             <View
             style={{
                 marginLeft:SIZES.padding
             }}
             >

               <View
                 style={{
                     flexDirection:'row',
                     marginLeft:SIZES.padding,
                     marginTop:SIZES.base 
                 }}
                 >
                     <Image 
                     source={icons.star}
                     resizeMode="cover"
                     style={{
                         height:18,
                         width:18,
                         tintColor:COLORS.primary,
                         marginRight:3
                     }}
                     />
                 <Text
                 style={{
                     fontSize:16,
                     fontWeight:'300',
                     color:COLORS.gray
                 }}
                 >{restaurant?.rating}</Text>
                 </View>
             <View
                 style={{
                     flexDirection:'row',
                     marginLeft:SIZES.padding,
                     marginTop:SIZES.base 
                 }}
                 >
                     <Image 
                     source={icons.time}
                     resizeMode="cover"
                     style={{
                         height:20,
                         width:20,
                         tintColor:COLORS.gray,
                         marginRight:3
                     }}
                     />
                 <Text
                 style={{
                     fontSize:16,
                     fontWeight:'300',
                     color:COLORS.gray
                 }}
                 >45-60 mins</Text>
                 </View>

                

             </View>
                
             </View>

             {/*The Menu section*/}


            
             <ScrollView
             contentContainerStyle={{
                paddingBottom:10,
             }}
             showsVerticalScrollIndicator={false}
           //  data={dummyData.restaurantMenu}
            // keyExtractor={item=>`${item.id}`}
             >
               {
                   restaurant?.menu.map((item,index)=>(
                      
                   
                        <TouchableOpacity

                        onPress={()=>{
                          // setShowModal(true,item)
                            navigation.navigate('OrderScreen',{item})
                        }}


                        key={`menu-${index}`}
                        style={{
                            flexDirection:'row',
                           
                            height:110,
                            width:'95%',
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.white,
                            marginHorizontal:SIZES.base,
                            marginVertical:2,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            
                            elevation: 5,
                        }}
                        >
                            <Animated.Image 
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                               height:100,
                               width:130,
                               borderRadius:SIZES.base,
                               alignSelf:'center',
                               marginLeft:5,
                               opacity,
                            }}
                           
                            />
                           {/*Title & Description*/}
                            <View
                            style={{
                                flex:1,
                                marginLeft:SIZES.base,
                                marginTop:SIZES.base
                            }}
                            >
                                <Text
                                style={{
                                    fontWeight:'800',
                                    fontSize:SIZES.h3,
                                    color:COLORS.black,
                                    fontFamily:'Courgette-Regular'
                                }}
                                >{item.name}</Text>
       
                                <Text
                                style={{
                                    marginTop:1,
                                    fontSize:SIZES.body4,
                                    color:COLORS.lightGray1,
                                    fontFamily:'Courgette-Regular'
       
                                }}
                                numberOfLines={4}
                                >Fresh Chicken Burger Patty, Lettuce, Garlic Sauce, Cocktail Sauce</Text>
       
                                  {/*Price & Plus add*/}
                            <View
                            style={{
                                marginTop:1,
                                flexDirection:'row',
                                justifyContent:'space-between',
                            }}
                            >
                                  <Text
                                  style={{
                                      fontSize:SIZES.h3,
                                      fontWeight:'bold',
                                      color:COLORS.primary,
                                      
                                  }}
                                  >RM{item.price.toFixed(2)}</Text>
       
                                  <View
                                  style={{
                                      height:25,
                                      width:25,
                                      marginRight:SIZES.base,
                                      backgroundColor:COLORS.gray3,
                                      borderRadius:30,
                                      justifyContent:'center',
                                      alignItems:'center'
                                  }}
                                  >
                                       <Image 
                                  source={icons.plus}
                                  resizeMode='cover'
                                  style={{
                                      height:15,
                                      width:15,
                                      tintColor:COLORS.gray2,
                                    
                                  }}
                                  />
       
                                  </View>
       
                                 
       
                            </View>
                                  
                            </View>
                     
                          
       
                        </TouchableOpacity>
                       


                   ))
                   
               }

              

             </ScrollView>


              {/*Modal Box Section*/}

              

         </View>
     )
 }

    return(

        <View
        style={{flex:1, backgroundColor:COLORS.gray3}}>

            {/*renderHeader*/}
            {renderHeader()}
            {/*renderMenu*/}
            {renderMenu()}

           

        </View>
    )
}


export default Menu;