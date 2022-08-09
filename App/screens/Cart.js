import React from 'react';
import{COLORS,SIZES,icons} from '../constants';
import {View, Text,StyleSheet, TouchableOpacity, FlatList,Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import {useCart} from '../context/Context';
import {useDispatch} from '../context/Context';
import { Swipeable } from 'react-native-gesture-handler';


const Cart=({navigation,})=>{



 
    const {cart}= useCart();
    const dispatch = useDispatch();
  
    
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
    
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);

  React.useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  },);



  function ListItemDelet(item){
    return (
        <View
         style={{
            backgroundColor:'red',
            width:120,
            height:110,
            justifyContent:'center',
            alignItems:'center'
        }}
        >

             <TouchableOpacity style={{marginRight:'2%'}} onPress={()=>Delete(item)}>
                <FontAwesome name="trash" size={35} color={COLORS.white} />
            </TouchableOpacity> 

    </View>
    )
    
}

    return(
        <View style={style.container}>
            { (cart.length === 0) ?
             <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
                 <Image 
                 source={icons.cart_empty1}
                 resizeMode='contain'
                  style={{
                      height:110,
                      width:"120%",
                      tintColor:COLORS.primary
                  }}
                 
                 />
               <Text style={{fontSize:15, marginTop:SIZES.padding, color:COLORS.black, fontWeight:'bold'}}>Get your favourite meal easily</Text>
               <Text style={{fontSize:12, marginTop:SIZES.base, color:COLORS.black,}}>Just add the items you want and place your order here.</Text>

                  <View  style={{
                             flexDirection:'row',
                             position:'absolute',
                              bottom:10,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginLeft:7,
                            marginRight:7
                        }}> 
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                padding: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                           
                            onPress={() =>navigation.navigate('Home')}
                        >
                            <Text style={{ color:COLORS.gray3, fontSize: 20, fontWeight: 'bold' }}>Browes to Menu</Text>
                        </TouchableOpacity>
                        </View>   
            </View>   
           :


           <View style={style.container}>
                     {/*Body Section*/}
        <View style={style.body}>

          
           
             <ScrollView
             showsVerticalScrollIndicator={false}
                  style={{ marginBottom:'10%',}}>
             {cart.map((item,index)=>
                <Swipeable renderRightActions={()=>ListItemDelet(item)}>
              <View>
            
                <View style={style.wrapped}>
                  <View style={style.imgContainer}>
                      <Image 
                      resizeMode="contain"
                      source={item.photo}
                      style={style.image}
                      />
                    </View>
                    <View style={style.titleContainer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={style.name}>{item.name}</Text>
                    <Text style={style.name}>RM{item.price}</Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', marginTop:30,}}>
                        
                    <View style={{flexDirection:'row',}}>
                     <TouchableOpacity
                     onPress={()=>decrease(item)}
                     style={{ 
                         height:38,
                        width:38,
                        borderRadius:SIZES.radius,
                        borderColor:COLORS.gray2,
                        borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                         <Text style={{ fontSize:25, fontWeight:'bold', }}>-</Text>
                     </TouchableOpacity>

                     <View style={{borderRadius:20, marginHorizontal:25}}>
                         <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center',}}>{item.qty}</Text>
                     </View> 

                     <TouchableOpacity  onPress={()=>increase(item)}
                      style={{ height:38,
                        width:38,
                        borderRadius:SIZES.radius,
                        borderColor:COLORS.gray2,
                        borderWidth:1,
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                         <Text style={{ fontSize:25, fontWeight:'bold', }}>+</Text>
                     </TouchableOpacity> 
                     </View>

                   
                    </View>
                    
                    </View>
                   
                        
                    
                </View>
               
                <View 
                        style={{
                            width:'100%',
                           // bottom:-85,
                            color:COLORS.primary,
                            backgroundColor:COLORS.lightGray1,
                            height:1,
                        }}
                        
                        />
            </View>
            </Swipeable>
            
            )}
            </ScrollView>

            {/*Footer Section*/}

                {/*Total*/}
         <View
         style={{
           //  flex:1,
             height:80,
            backgroundColor:COLORS.white,
            justifyContent:'center',
            alignItems:'center'
         }}
         >      
        <View
                style={{
                     height:30,
                     position:'absolute',
                     bottom:75,
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
                   <View  style={{
                             flexDirection:'row',
                             position:'absolute',
                             bottom:10,
                             alignItems: 'center',
                             justifyContent: 'space-between',
                             marginLeft:7,
                             marginRight:7
                        }}> 
                        <TouchableOpacity
                            style={{
                                width: '63%',
                                padding: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                           
                            onPress={() =>Clear()}
                        >
                            <Text style={{ color:COLORS.gray3, fontSize: 20, fontWeight: 'bold' }}>Place Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '35%',
                                padding: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                            onPress={() =>navigation.goBack()}
                        >
                            <Text style={{ color:COLORS.gray3, fontSize: 20, fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>
                        </View>
            </View>
            </View> 
           
            </View>
            
            }  
            </View>
        
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:COLORS.white
    },
    header:{
        flex:0.5,
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    total:{
        fontSize:25, 
        color:COLORS.black, 
        fontWeight:'bold', 
        backgroundColor:COLORS.primary, 
        padding:5,
        borderColor:COLORS.tertiary, 
        borderWidth:3, 
        paddingHorizontal:'10%' ,
        borderRadius:20
    },
    price:{
        fontSize:23, 
        color:COLORS.black, 
        fontWeight:'bold',
        backgroundColor:COLORS.primary,
        borderColor:COLORS.tertiary, 
        borderWidth:3,
        paddingHorizontal:'4%', 
        padding:5,
        borderRadius:20
    },
    body:{
        flex:2,
        marginTop:'5%'
    },
    wrapped:{
        flexDirection:'row',
        height:110,
        width:'100%',
       // borderRadius:SIZES.radius,
        backgroundColor:COLORS.white,
       // marginHorizontal:SIZES.base,
       // marginVertical:5,
        shadowColor: "#000",
        shadowOffset: {
             width: 0,
               height: 0,
            },
          // shadowOpacity: 0.1,
           shadowRadius: 3.84,
            elevation: 5,
         
     },
     imgContainer:{
         flex:1.3
     },
     image:{
        height:100,
        width:130,
        borderRadius:20,
        alignSelf:'center',
        marginLeft:10,
        borderRadius:SIZES.radius
         
     },

     titleContainer:{
         flex:2.2,
         borderRadius:20,
         padding: 10,
      
     },
     name:{
        fontWeight: 'bold',
        fontSize:17,
        color:COLORS.black
     },
  
    
})

export default Cart;
