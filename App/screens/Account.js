import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import {COLORS,SIZES,icons} from '../constants'

const Account = ({navigation})=>{
    return(
        <View
        style={{
            flex:1,  
        }}>


            {/*profile pic and name container*/}
            <View
            style={{
                height:200,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:COLORS.lightGray1,
                borderBottomLeftRadius:60,
                borderBottomRightRadius:60
            }}
            >
                  <Image 
                  source={icons.profile_logo}
                  resizeMode='contain'
                  style={{
                    width:90,
                    height:90,
                    borderRadius:200,
                    borderColor:COLORS.gray,
                    borderWidth:2
                  }}
                
                />
            <TouchableOpacity style={{
                position:'absolute',
                left:210,
                height:30,
                width:30,
                borderRadius:50,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'rgba(221,221,221,0.9)',
            }}

               onPress={()=>navigation.navigate('Edit')}
             
               >
                <Image 
                  source={icons.plus}
                  resizeMode="contain"
                  style={{
                    height:22,
                    width:22,

                  }}
                />
            </TouchableOpacity>
            <View
            style={{
                marginTop:SIZES.base
            }}
            >
                <Text style={{
                    fontSize:SIZES.h2,
                    color:COLORS.primary,
                    fontWeight:'bold'
                }}>Bashamlan</Text>
                <Text style={{
                    fontSize:SIZES.h3,
                    color:COLORS.gray,
                   textAlign:'center'
                }}>@basha2020</Text>
            </View>

         
            </View>
             

             {/*user details*/}
            <View
               style={{
                   flex:1,
                   marginTop:SIZES.padding,
                   marginLeft:SIZES.padding,
               }}
            >
                
                <TouchableOpacity style={{
                        flexDirection:'row',
                       justifyContent:'space-between'}}>
                <Text style={{
                        fontSize:SIZES.h3,
                        color:COLORS.darkColor
                    }}>Email</Text>
                    <Image 
                      source={icons.profile}
                      resizeMode="contain"
                      style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.darkColor,
                        marginRight:SIZES.padding
                      }}
                    />
                    </TouchableOpacity>
                      {/*divider*/}
                <View 
                style={{
                    width:'100%',
                    bottom:-5,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1,
                }}
                
                />

        <TouchableOpacity style={{ 
            flexDirection:'row', 
            marginTop:SIZES.padding2, 
            justifyContent:'space-between'}}>

                <Text style={{
                        fontSize:SIZES.h3,
                        color:COLORS.darkColor
                    }}>UserName</Text>
                    <Image 
                      source={icons.profile}
                      resizeMode="contain"
                      style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.darkColor,
                        marginRight:SIZES.padding
                      }}
                    />
                    </TouchableOpacity>
                      {/*divider*/}
                <View 
                style={{
                    width:'100%',
                    bottom:-5,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1,
                }}
                
                />

<TouchableOpacity style={{ 
            flexDirection:'row', 
            marginTop:SIZES.padding2, 
            justifyContent:'space-between'}}>

                <Text style={{
                        fontSize:SIZES.h3,
                        color:COLORS.darkColor
                    }}>Phone</Text>
                    <Image 
                      source={icons.help}
                      resizeMode="contain"
                      style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.darkColor,
                        marginRight:SIZES.padding
                      }}
                    />
                    </TouchableOpacity>
                      {/*divider*/}
                <View 
                style={{
                    width:'100%',
                    bottom:-5,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1,
                }}
                
                />


<TouchableOpacity style={{ 
            flexDirection:'row', 
            marginTop:SIZES.padding2, 
            justifyContent:'space-between'}}>

                <Text style={{
                        fontSize:SIZES.h3,
                        color:COLORS.darkColor
                    }}>Location</Text>
                    <Image 
                      source={icons.location}
                      resizeMode="contain"
                      style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.darkColor,
                        marginRight:SIZES.padding
                      }}
                    />
                    </TouchableOpacity>
                      {/*divider*/}
                <View 
                style={{
                    width:'100%',
                    bottom:-5,
                    color:COLORS.primary,
                    backgroundColor:COLORS.lightGray1,
                    height:1,
                }}
                
                />
                  
            </View>
            </View>
        
    )
}



 export default Account ;