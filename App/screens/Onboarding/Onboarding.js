import React from 'react';
import{
    View,
    Text,
    ImageBackground,
    Image,
    Animated
} from 'react-native';
import {
    constants,images,FONTS,SIZES,COLORS
} from '../../constants';

import {AppButton} from '../../components'




const OnBoarding =({navigation})=>{

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const flatRef = React.useRef()

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const onViewChangeRef = React.useRef(({viewableItems,changed})=>{
        setCurrentIndex(viewableItems[0].index)
    })

    function renderHeader(){
        return (
            <View
            style={{
                position:'absolute',
                top:SIZES.height > 800 ? 50 : 25,
                left:0,
                right:0,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <Image 
                source={images.logo_02}
                resizeMode="contain"
                style={{
                    width:SIZES.width,
                    height:60,
                    
                }}
                />

            </View>
        )
    }


   const Dots = ()=>{

    const dotPosition = Animated.divide(scrollX, SIZES.width)
       return(
           <View
           style={{
               flexDirection:'row',
               alignItems:'center',
               justifyContent:'center'
           }}
           >

               {constants.onboarding_screens.map((item,index)=>{
                   
                   const dotColor = dotPosition.interpolate({
                       inputRange: [index-1, index, index+1],
                       outputRange:[COLORS.lightMaroon, COLORS.primary,
                    COLORS.lightMaroon],
                    extrapolate:'clamp'
                   })
                   

                   const dotWidth = dotPosition.interpolate({
                    inputRange: [index-1, index, index+1],
                    outputRange:[10,30,10],
                 extrapolate:'clamp'
                })
                   
                   return (
                       <Animated.View
                       
                       key={`dot-${index}`}
                       style={{
                           borderRadius:5,
                           marginHorizontal:6,
                           width:dotWidth,
                           height:10,
                           backgroundColor:dotColor

                       }}
                       
                       />
                   )
               })}

           </View>
       )
   }

    function renderFooter(){
        return(
            <View
            style={{
                flex:.09,
                marginBottom:15
            }}
            >

                {/*Pagination / Dots*/}

                <View
                style={{
                    flex:1,
                    justifyContent:'center'}}>

                    <Dots />
                    
                </View>

                {/*Button*/}

                { currentIndex < constants.onboarding_screens.length -1 &&
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    paddingHorizontal:SIZES.base,
                    marginVertical:SIZES.base
                }}
                >

                    <AppButton 
                     label ='Skip'
                     buttonStyle={{
                         backgroundColor:null,
                     }}
                     labelStyle={{
                         color:COLORS.gray
                     }}
                     onPress={()=>navigation.navigate('SignIn')}
                    
                    />

                    <AppButton 
                     label='Next'
                     buttonStyle={{
                         height:50,
                         width:130,
                         borderRadius:SIZES.radius
                     }}

                     

                     onPress={()=>{
                      
                             //scroll to the next screen

                             flatRef?.current?.scrollToIndex({
                                 index:currentIndex + 1,
                                 animated:true
                             })
                       
                     }}
                    
                    />

                </View>

            }

            {currentIndex == constants.onboarding_screens.length - 1 &&
            
            <View
            style={{
                
                paddingHorizontal:SIZES.base,
                    marginVertical:SIZES.base
            }}
            >

                <AppButton 
                label="let'Get Started"
                buttonStyle={{
                    height:60,
                    borderRadius:SIZES.radius
                }}

                onPress={()=>navigation.replace('SignIn')}
                
                />

            </View>
            
            }



            </View>
        )
    }



    return(
        <View style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
    
          <Animated.FlatList 
          ref={flatRef}
           horizontal
           pagingEnabled
           data={constants.onboarding_screens}
           scrollEventThrottle={16}
           snapToAlignment='center'
           showsHorizontalScrollIndicator={false}
           onScroll={Animated.event(
               [
                   {nativeEvent: {contentOffset:{x:scrollX}}}
               ],
               {useNativeDriver:false}
           )}
           onViewableItemsChanged={onViewChangeRef.current}
           keyExtractor={(item)=>`${item.id}`}
           renderItem={({item,index})=>{

            return(

                <View
                style={{
                    width:SIZES.width
                }}
                >
                    {/*Header*/}
                    <View
                    style={{
                        flex:3
                    }}
                    >
                        <ImageBackground 
                        
                        source={item.backgroundImage}
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'flex-end',
                            height: index ==1 ?"86%" :
                            '100%',
                            width:'100%'
                        }}
                        >
                            <Image 
                            source={item.bannerImage}
                            style={{
                            
                                height:SIZES.width * 0.7,
                                width:SIZES.width * 0.7,
                                marginBottom:-SIZES.padding
                            }}
                            resizeMode='contain'
                            />


                        </ImageBackground>
                    </View>

                    {/*Details*/}

                    <View
                    style={{
                        flex:1,
                        marginTop:30,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:SIZES.radius
                    }}
                    >

                        <Text
                        style={{
                            ...FONTS.h1,
                            fontSize:25,
                            fontWeight:'bold'
                        }}
                        >{item.title}
                    </Text>
                        <Text
                        style={{
                            marginTop:SIZES.radius,
                            textAlign:'center',
                            color:COLORS.gray,
                            paddingHorizontal:SIZES.padding,
                            ...FONTS.body3
                        }}
                        >{item.description}</Text>
                    </View>

                </View>
            )
               
                 

                        }
           }
          
          />

     {renderHeader()}
     {renderFooter()}
     
         
        </View>
    )
}

export default OnBoarding;