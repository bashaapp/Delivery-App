import React,{useEffect} from 'react';

import{
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated,
    Modal
} from 'react-native';

import {
    COLORS,
    SIZES,
    icons,
    images
} from '../constants';
import AppIcon from '../components/AppIcon';

import { StartRating,AppButton } from '../components';
import { useDispatch } from '../context/Context';
import { useCart } from '../context/Context';
import { SharedElement } from 'react-navigation-shared-element';


const OrderScreen= ({navigation, route})=>{

    const {item} = route.params;
    const opacity = React.useRef(new Animated.Value(0)).current



      {/*Culcalate Total*/}
      const [totalPrice, setTotalPrice] = React.useState(0);
      const [totalItems, setTotalItems] = React.useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    },);
  
      {/*Change Basket Value*/}
    const {cart} = useCart();
    const [cartCount, setCartCount]=React.useState(0);
  
      useEffect(()=>{
         let count = 0;
         cart.forEach((item)=>{
         count +=item.qty;
        });
        setCartCount(count)
    })
  
  
      {/*Add Item to Cart*/}
      const dispatch = useDispatch();
      const addToCart = (item)=>{
          dispatch({type:'ADD', payload:item});
      }
  
      {/*InCrease & Decrease Buttons Value*/}
  
      const Clear = (index) => {
          dispatch({ type: "CLEAR", index });
        };
       const Delete = (index)=>{
           dispatch({type:'DELETE', payload:index})
       }
       const increase = (id,qty) => {
           dispatch({ type: "INCREASE", payLoad: id,qty });
         };
         const decrease = (id,qty) => {
           dispatch({ type: "DECREASE", payLoad: id,qty });
         };


         useEffect(()=>{
             Animated.timing(opacity,{
                 toValue:1,
                 duration:1000,
                 delay:100,
                 useNativeDriver:true,
             }).start()
         },[])
      
    return(
        <Modal animationType='slide'>
        <View
        style={{flex:1, backgroundColor:COLORS.white}}>


         {/*Background Container*/}
        <Animated.View
        style={{height:240, opacity}}
        >
          {/* <SharedElement id={`item.${item.id}image`}>*/}
        <ImageBackground
            source={item.photo}
            resizeMode="cotain"
            style={{
                height:230,
                width:'100%',
                alignSelf:'center',
                borderRadius:SIZES.radius2                

            }}
            >
                {/*Close Button*/}

                <AppIcon 
                icon={icons.cross}
                iconStyle={{
                    height:30,
                    width:30,
                    tintColor:COLORS.white
                }}
                onPress={() => navigation.goBack()}
                />


                {/* Name& Favourite Container */}

                <View
                style={{
                    position:'absolute',
                    bottom:-SIZES.padding,
                    left:15,
                    right:25,
                    flexDirection:'row',
                    justifyContent:'space-between'

                }}
                >
                    {/*Name*/}
                    <View
                    style={{
                        height:50,
                        width:150,
                        backgroundColor:COLORS.white,
                        borderRadius:SIZES.radius,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:1,
                        borderColor:COLORS.lightGray1
                    }}
                    >
                        <Text
                    style={{
                        fontSize:20,
                        color:COLORS.black,
                        fontWeight:'bold',
                        textAlign:'center'
                    }}
                    >{item.name}</Text>

                    </View>

                    {/*Favourite*/}

                    <View
                    style={{
                        height:50,
                        width:50,
                        backgroundColor:COLORS.white,
                        borderRadius:SIZES.radius2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:1,
                        borderColor:COLORS.lightGray1
                    }}
                    >
                        <Image
                        source={icons.love}
                        resizeMode="cover"
                        style={{
                            height:25,
                            width:25,
                            tintColor:COLORS.primary
                           
                        }}

                        />

                    </View>
                </View>
            </ImageBackground>

            {/*</SharedElement>*/}

        </Animated.View>

        {/*Price & Stars Container*/}
        <View
            style={{
                marginTop:SIZES.padding,
                marginLeft:SIZES.padding,
                flexDirection:'row',
                justifyContent:'space-between'
            }}
            >

            {/*Star Rating*/}
            <StartRating ratings={item.rating} reviews={item.reviews} />
                <Text
                style={{
                    fontSize:20,
                    color:COLORS.darkColor,
                    fontWeight:'bold',
                    marginRight:SIZES.padding2
                }}
                >RM{item.price.toFixed(2)}</Text>

        </View>


        {/*Description*/}
        <View
            style={{
                 height:90,
                 width:"97%",
                 padding:15,
                 marginTop:SIZES.base,
                 borderRadius:SIZES.radius,
                 alignSelf:'center',
                 backgroundColor:COLORS.gray3
                 }}
                 >
       <Text
       style={{
           fontSize:15,
           color:COLORS.darkColor,
           lineHeight:'20%'  
       }}
       numberOfLines={5}
     
       >{item.description}</Text>
        </View>

                
        {/*Increase & Decrease Buttons*/}
        <View
            style={{
                marginTop:SIZES.padding2,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',

                }}
                >
                    {/*Increase Button*/}
                    <TouchableOpacity
                     style={{
                        height:40,
                        width:40,
                        borderRadius:SIZES.radius,
                        borderColor:COLORS.gray2,
                        borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                        marginHorizontal:SIZES.padding2
                    }}
                    onPress={()=>decrease(item)}
                     
                    >
                        <Text
                        style={{
                            fontSize:30,
                            fontWeight:'bold',
                            color:COLORS.primary,
                        }}
                        >-</Text>

                    </TouchableOpacity>

                      <Text
                      style={{
                          fontSize:SIZES.h2,
                          fontWeight:'bold',
                          color:COLORS.black
                      }}
                      >{item.qty}</Text>

                      {/*Decrease Button*/}
                      <TouchableOpacity
                       style={{
                            height:40,
                            width:40,
                            borderRadius:SIZES.radius,
                            borderColor:COLORS.gray2,
                            borderWidth:1,
                            justifyContent:'center',
                            alignItems:'center',
                            marginHorizontal:SIZES.padding2
                    }}

                      onPress={()=>increase(item)}
                    >
                        <Text
                        style={{
                            fontSize:25,
                            fontWeight:'bold',
                            color:COLORS.primary,
                        }}
                        >+</Text>

                    </TouchableOpacity>

        </View>



        {/*Total*/}
        <View
                style={{
                     height:30,
                     position:'absolute',
                     bottom:70,
                     flexDirection:'row',
                   

                }}
                >
                    
                    {/*total*/}
                    <Text
                    style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:COLORS.black,
                        marginHorizontal:190,
                        marginLeft:SIZES.padding
                    }}
                    >Total:</Text>

                     {/*price*/}
                     <Text
                    style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:COLORS.black,
                        marginRight:SIZES.padding,
                    }}
                    >RM{totalPrice.toFixed(2)}</Text>

        </View>

        

         {/*Cart Icon*/}
        <TouchableOpacity
                // onPress={()=>navigation.navigate('Cart')}
                onPress={()=>navigation.navigate("Cart",{item})}
                style={{
                    position:'absolute',
                    bottom:120,
                    left:280,
                    zIndex:1,
                    height:55,
                    width:75,
                    backgroundColor:COLORS.gray3,
                    borderTopLeftRadius:SIZES.radius2,
                    borderBottomRightRadius:SIZES.radius2,
                    justifyContent:'center',
                  //  alignItems:'center',
                    borderColor:COLORS.gray2,
                    borderWidth:1,
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
                    <Image 
                    source={icons.cart_1}
                    style={{
                        height:35,
                        width:35,
                        tintColor:COLORS.gray,
                        marginHorizontal:20,
                        marginTop:12
                    }}
                    />
                     <View 
                      style={{
                          position:'absolute',
                          bottom:15,
                          left:10,
                          width:35,
                          height:35,
                          borderRadius:30,
                          color:COLORS.primary,
                          backgroundColor:COLORS.primary,
                          opacity:0.7,
                          justifyContent:'center',
                          alignItems:'center'
                  
                }}
                
                >
                    <Text
                       style={{
                           fontSize:15,
                           fontWeight:'bold',
                           color:COLORS.white
                       }}
                    >{cartCount}</Text>
                </View>

        </TouchableOpacity>

            {/*Add Basket Button*/}
            <View
               style={{
                   bottom:-145,
                   justifyContent:'center',
                   alignItems:'center',

               }}
               >
                    <AppButton 
                        label='Add to Basket'
                        labelStyle={{
                            color:COLORS.white,
                            fontSize:18,
                            fontWeight:'bold'
                        }}

                        buttonStyle={{
                            height:50,
                            width:'90%',
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.primary
                        }}

                        onPress={()=>addToCart(item)}


                />

               </View>

            {/*divider*/}
             <View 
                style={{
                    width:'100%',
                    bottom:-90,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1,
                }}
                
                />


                {/*divider*/}
                <View style={{
                    width:'100%',
                    bottom:-40,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1, }}
                />

        </View>
        </Modal>
    )
}



 export default OrderScreen;