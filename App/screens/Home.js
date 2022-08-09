import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    StyleSheet,
    Animated,
    ImageBackground,
   
    
} from 'react-native';

import AppLoading from 'expo-app-loading';

import {StartRating} from '../components'
import{
    COLORS,
    SIZES,
    FONTS,
    icons,
    images,
    dummyData,
  
} from '../constants'


import Swiper from 'react-native-swiper';

import {
  useFonts,
  Roboto_100Thin,
 
} from '@expo-google-fonts/roboto';
import { SharedElement } from 'react-navigation-shared-element';


const Home = ({navigation})=>{

    const scrollX = React.useRef(new Animated.Value(0)).current
    const [select, setSelect] =React.useState()


         {/*Change the fonts*/}

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        "Courgette-Regular": require('../../App/fonts/Courgette-Regular.ttf')
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      }


     


    const renderSlider=()=>{
        return(
            <View style={styles.sliderContainer}>
            <Swiper
            height={160}
            autoplay
            activeDotColor={COLORS.primary}
            dotColor={COLORS.gray3}
            >
                <View style={styles.slide}>
                <Image 
                source={images.banner_1}
                resizeMode="cover"
                style={styles.sliderImage}
                />
                </View>
                <View style={styles.slide}>
                <Image 
                source={images.banner_2}
                resizeMode="cover"
                style={styles.sliderImage}
                />
                </View>
                
                <View style={styles.slide}>
                <Image 
                source={images.banner_4}
                resizeMode="cover"
                style={styles.sliderImage}
                />
                </View>

                <View style={styles.slide}>
                <Image 
                source={images.banner_3}
                resizeMode="cover"
                style={styles.sliderImage}
                />
                </View>
            </Swiper>
            </View>
        )
    }

    const renderCategory =()=>{
        return(
            <View style={{
              height:80,
                marginTop:6
            }}>
            <FlatList 
            horizontal
            contentContainerStyle={{
               // marginLeft:SIZES.base,
                paddingHorizontal:SIZES.base,
                
            }}
            showsHorizontalScrollIndicator={false}
            data={dummyData?.restaurantMenu}
            keyExtractor={item=>`${item.id}`}
            renderItem={({item,index})=>{
                return(
                    <TouchableOpacity
                    style={{
                        height:60,
                        width:80,
                        marginHorizontal:4,
                        marginTop:SIZES.base,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:SIZES.radius,
                        borderWidth:1,
                        borderColor: select ===  index ? COLORS.gray2 : COLORS.gray2,
                        backgroundColor: select === index ? COLORS.primary : null
                       
                    }}
                    onPress={()=>  navigation.navigate('Menu',{item})}
                    >
                          <Image 
                        source={item.icon}
                        resizeMode='contain'
                        style={{
                            height:40,
                            width:40,
                            tintColor: select === index ? COLORS.gray3 : COLORS.gray
                        }}
                        />
                        <Text
                        style={{
                            ...FONTS.h3,
                            color: select === index ? COLORS.gray3 : COLORS.gray,
                            fontFamily:'Courgette-Regular'
                            
                        }}
                        >{item.name}</Text>
                      
                        

                    </TouchableOpacity>
                )
            }}
            
            />
            </View>
        )
    }

                    
    const renderRecommand = ()=>{
        return(
           
             <View style={{
                 height:200
             }}>
                
                <Text 
                style={{
                    fontSize:FONTS.h3,
                    color:COLORS.black,
                    marginLeft:SIZES.base,
                    fontWeight:'bold',   
                }}
                >Recommanded</Text>

                {/* Recommand Item FlatList*/}

                <Animated.FlatList 
                  onScroll={Animated.event(
                      [{nativeEvent:{ contentOffset:{x:scrollX}}}],
                      {useNativeDriver:true},
                  )}
                 contentContainerStyle={{
                    paddingLeft:SIZES.base,
                    paddingRight: 200 / 1 - 90,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyData.recommanded}
                keyExtractor={item=>`${item.id}`}
                renderItem={({item,index})=>{
                    
                    const inputRange = [(index - 1.5) * 160, index * 160, 
                        (index + 1) * 160 ];
                    
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.9,0,0.7],
                     })
            
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.9,1,0.7],
                    })

                    return(
                        <Animated.View>
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderScreen',{item})}
                        style={{
                            height: 165,
                            width:160,
                            padding:4,
                            marginTop:5,
                            transform:[{scale}],
                            marginHorizontal:4,
                            shadowColor: "#000",
                            backgroundColor: COLORS.white,
                            borderRadius:SIZES.radius,
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.8,
                            elevation: 5,
                            
                        }}
                        >
                                          {/*Overlay*/}
                            <Animated.View style={{...styles.overlay, opacity}} />
                            <SharedElement id={`item.${item.id}image`}>
                            <ImageBackground source={item.photo} 
                            resizeMode='cover'
                              style ={{
                                height:100,
                                width:'100%',
                                alignItems:'center',
                            }}
                            imageStyle={{ 
                                borderTopLeftRadius: 8,
                                borderTopRightRadius:8     
                            }}>
            
                            {/*Favourtie*/}
                            <View 
                            style={{
                                width:30,
                                height:27,
                                position:'absolute',
                                right:0,
                                top:0,
                                zIndex:1,
                                backgroundColor:COLORS.gray3,
                                borderBottomLeftRadius:8,
                                borderTopRightRadius:7,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                            <Image 
                            source={icons.love}
                            style={{
                                width:20,
                                height:20,
                                tintColor: COLORS.primary,
                            }}
                            />
                            </View>
                           
                        </ImageBackground>
                        </SharedElement>
            
                          {/* title, start & price Section*/}
                        <View 
                        style={{
                            height:80,
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.gray3,
                            position:'absolute',
                            left:2,
                            top:85,
                            bottom:0,
                            paddingLeft:5,
                            width:'103%', 
                        }}
                        >
            
                             {/*Title*/}
                           
                            <Text style={{
                                fontSize:15,
                                fontFamily: 'Courgette-Regular',
                                color:COLORS.black,
                                fontWeight:'600',
                                marginTop:SIZES.base,
                                marginBottom:2,

                            }}>{item.name}
                            
                            </Text>
                                         {/*Star Rating*/}
                             <StartRating ratings={item.rating} reviews={item.reviews} />
            
            
                                         {/*Prices*/}
                            <Text
                            style={{
                                marginTop:SIZES.base,
                                textAlign:'center',
                                fontSize:17,
                                fontWeight:'bold',
                                color:COLORS.primary,
            
                            }}
                            >RM{item.price.toFixed(2)}</Text>
            
                        </View>
            
                        </TouchableOpacity>
                        </Animated.View>
                        
            
                    )
                }}
                
                />
            </View >
            
        )
    }


    const renderPromo=()=>{
        return(
            <View
            style={{
             marginTop:SIZES.base,
             
           
            }}
            >
                <Text
                style={{
                    color:COLORS.black,
                    fontSize:15,
                    fontWeight:'bold',
                    paddingLeft:SIZES.base
                }}
                >Discounts</Text>

                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {dummyData.promotion}
                keyExtractor={item => `${item.id}`}
                renderItem={({item,index})=>(
                    <View
                    style={{
                        marginTop:SIZES.base,
                        height:120,
                        width:250,
                       // backgroundColor:COLORS.black,
                        marginHorizontal:2,
                        marginLeft:SIZES.base,

                       }}
                    >
                        <Image
                        source={item.image}
                        resizeMode='cover'
                        style={{
                            height:120,
                            width:250,
                            borderRadius:20,
                            alignSelf:'center',
                            justifyContent:'center'
                        }}
                        />
                   
                    </View>
                )}
                />
            
              

            </View>
        )
    }

    
    const renderPopular=()=>{
        return(
            <View
            style={{
                marginTop:SIZES.padding,
                height:330,
               
            }}
            >
                <Text style={{
                     color:COLORS.black,
                     fontSize:15,
                     fontWeight:'bold',
                     paddingLeft:SIZES.base

                }}>
                    Popular
                </Text>
                <FlatList 
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={dummyData.favourite}
                keyExtractor={item=>`${item.id}`}
                renderItem={({item,index})=>(

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('OrderScreen',{item})}
                    style={{
                        height:150,
                        flex:1,
                        width:200,
                        marginTop:SIZES.base,
                        marginHorizontal:2,
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.white,
                        marginRight:5,
                        padding:4,
                        marginTop:5,
                        marginHorizontal:5,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.8,
                            elevation: 5,
                    }}
                    >
                        <ImageBackground
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            height:100,
                                width:'100%',
                                alignItems:'center',
                                borderRadius:SIZES.radius,
                          
                        }}
                        imageStyle={{ 
                            borderRadius: 8,
                            
                        }}
                        >
                            {/*Price Tag*/}
                             <View 
                            style={{
                                width:50,
                                height:35,
                                position:'absolute',
                                right:0,
                                top:0,
                                zIndex:1,
                                backgroundColor:COLORS.primary,
                                borderBottomLeftRadius:8,
                                borderTopRightRadius:7,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <Text
                                style={{
                                    fontSize:12,
                                    color:COLORS.gray3,
                                    fontWeight:'bold'
                                }}
                                >{item.price.toFixed(2)}</Text>
                                </View>

                              

                        </ImageBackground>

                          {/*name*/}

                          <Text
                                style={{
                                    marginTop:SIZES.radius,
                                    fontFamily: 'Courgette-Regular',
                                    fontSize:16,
                                    fontWeight:'bold',
                                    color:COLORS.black,
                                    textAlign:'center'
                                }}
                                >{item.name}</Text>


                    </TouchableOpacity>
                )}
                />

            </View>
        )
    }


    const renderOffer=()=>{
        return(
            <View
            style={{
                marginTop:SIZES.radius,
                 height:160,

            }}
            >
                <Text
                style={{
                    color:COLORS.black,
                    fontSize:15,
                    fontWeight:'bold',
                    paddingLeft:SIZES.base
                }}
                >Offers you may like</Text>

              <FlatList 
              horizontal
              contentContainerStyle={{
                  marginTop:SIZES.base
              }}
              showsHorizontalScrollIndicator={false}
              data={dummyData.offers}
              keyExtractor={item=>`${item.id}`}
              renderItem={({item,index})=>(
                <TouchableOpacity
                style={{
                    height:100,
                    width:300,
                  
                    borderRadius:SIZES.base,
                    backgroundColor:COLORS.white,
                    marginHorizontal:SIZES.base,
                    flexDirection:'row',
                    shadowColor:COLORS.black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.8,
                        elevation: 5,
                
                }}
                >
                    <Image 
                    
                    source={item.image}
                    resizeMode='cover'
                    style={{
                        height:90,
                        width:90,
                        borderRadius:3,
                        padding:4,
                        alignSelf:'center',
                        marginLeft:SIZES.base
                    }}
                    />

                    <View
                    style={{
                        marginTop:SIZES.radius,
                        marginLeft:SIZES.base,
                        width:200,
                        
                    }}
                    >
                        <Text
                        style={{
                            fontSize:15,
                            color:COLORS.black,
                            fontWeight:'500'
                        }}
                        >{item.offer}</Text>
                          <Text
                        style={{
                            fontSize:15,
                            color:COLORS.black,
                            fontWeight:'500'
                        }}
                        >selected Items</Text>

                    <Text
                        style={{
                            fontSize:12,
                            color:COLORS.gray,
                            fontWeight:'500',
                            flexWrap:'wrap'
                            
                            
                        }}
                        numberOfLines={3}
                        >{item.description}</Text>
                        
                    </View>

                </TouchableOpacity>
              )}

              />

            </View>
        )
    }

  

    return(
        <ScrollView
        contentContainerStyle={{
            flex:1,
            backgroundColor:COLORS.gray3,
            marginBottom:-580,
           
        }}
        showsVerticalScrollIndicator={false}
        >
            {/*Banner-Slider*/}
            {renderSlider()}

            {/*Categories Menue*/}
            {renderCategory()}
            

            {/*Recommand*/}
            {renderRecommand()}
            
               {/*Poster*/}
            {renderPromo()}

            {/*Popular*/}
            {renderPopular()}

            {/*Offers*/}
            {renderOffer()}
               
            

         
          
    
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    sliderContainer:{
        height:170,
        width:'94%',
        marginTop:SIZES.base,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:SIZES.radius,
      
    },

    slide:{
       // flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
        borderRadius:SIZES.radius
    },
    sliderImage:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:SIZES.radius
    },
    overlay:{
        height:165,
        width:160,
        backgroundColor:COLORS.gray3,
        position:'absolute',
        zIndex:1,
        borderRadius:SIZES.radius
    }
})



 export default Home ;