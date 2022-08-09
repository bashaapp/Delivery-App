import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { AppButton } from '../components';
import {COLORS,SIZES,icons} from '../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
//import storage from '@react-native-firebase/storage';
 import firebase from 'firebase'




const EditProfile = ({navigation})=>{


  const sheetRef = React.createRef(null);
  const animated = new Animated.Value(1);
  const [image, setImage] = useState(null);
  const [upload,setUpload] = useState(false)
  const [transfer, setTransfer] = useState(0)


     {/*Pick Image Function*/}
  const pickImage = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted){
     Alert.alert("Julio's", 'You need to enable permission from the settings  to access the camera..!')
     return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      onPress:sheetRef.current.snapTo(1)
    });
 
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);

     updateProfile(result.uri, 'test-image')
      .then(()=>{
        Alert.alert('well done')
      })
      .catch((error)=>{
        Alert.alert(error)
      })
    }
  
  }; 



      {/*Open Camera to take Pic*/}
      const OpenCamera = async () => {
        //permissions request is necessary for Openning Camera
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
         if (!granted){
          Alert.alert("Julio's", 'You need to enable permission from the settings to access the camera..!')
          return ;
         }
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          onPress:sheetRef.current.snapTo(1)
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
   
       
        {/*upload file to firebase storage*/}

    const  updateProfile = async (uri , name)=>{
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("images/" +name);
    return ref.put(blob);



      //const uploadImage = image;
      //let filename = uploadImage.substring(uploadImage.lastIndexOf('/') + 1)
       setUpload(true)
      //try{
      //  await storage().ref(filename).putFile(uploadImage)
      //  setUpload(false)
        Alert.alert('Profile Updated', 'You profile Updated Successfully..!')
     // }catch(e){
     //   console.log(e)

     // }

     // setImage(null)
    }



  
       {/*Render COntent for Bottom Sheet*/}
      const renderContent=()=>{

    return(
      <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <AppButton
       label='Take Photo'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
       onPress={OpenCamera}
      />

       <AppButton
       label='Choose from Library'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
        
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
       onPress={pickImage}
      />
     
     <AppButton
       label='Cancel'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
       onPress={() => sheetRef.current.snapTo(1)}
      />
     
    </View>
    )
  }

  const renderHeader=()=>{
    return(
      <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
      </View>
    </View>
    )
  }

  
    return(
        <KeyboardAvoidingView
        behavior='padding'
        style={{
           flex:1,
        }}
        >
        <Modal animationType='slide'>
        <KeyboardAwareScrollView
         keyboardDismissMode='on-drag'
        >
            
            
            {/*profile pic and name container*/}
            <Animated.View style={{ opacity: Animated.add(0.1, Animated.multiply(animated, 1.0)),
}}>
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
                  <Image source={{ uri: image }}
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
                onPress={()=> sheetRef.current.snapTo(0)}
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

       
             
       
             {/*user edit details*/}
            <View style={style.details}>
                <Image 
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    height:20, width:20, tintColor:COLORS.gray
                  }}
                />

                <TextInput 
                 placeholder='Name'
                 placeholderTextColor='#66666666'
                 autoCorrect={false}
                 style={{
                    paddingLeft: 5,
                    color: '#05375a',}}
                />
            </View>

                         
            <View style={style.details}>
                <Image 
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    height:20, width:20, tintColor:COLORS.gray
                  }}
                />

                <TextInput 
                 placeholder='Username'
                 placeholderTextColor='#66666666'
                 autoCorrect={false}
                 style={{
                    paddingLeft: 5,
                    color: '#05375a',}}
                />
            </View>

            <View style={style.details}>
                <Image 
                  source={icons.email}
                  resizeMode="contain"
                  style={{
                    height:22, width:22, tintColor:COLORS.gray
                  }}
                />

                <TextInput 
                 placeholder='Email'
                 placeholderTextColor='#66666666'
                 keyboardType='email-address'
                 autoCorrect={false}
                 style={{
                    paddingLeft: 5,
                    color: '#05375a',}}
                />
            </View>


            <View style={style.details}>
                <Image 
                  source={icons.phone}
                  resizeMode="contain"
                  style={{
                    height:22, width:22, tintColor:COLORS.gray
                  }}
                />

                <TextInput 
                 placeholder='Phone'
                 keyboardType = 'phone-pad'
                 placeholderTextColor='#66666666'
                 autoCorrect={false}
                 style={{
                    paddingLeft: 5,
                    color: '#05375a',}}
                />
            </View>


            <View style={style.details}>
                <Image 
                  source={icons.location}
                  resizeMode="contain"
                  style={{
                    height:22, width:22, tintColor:COLORS.gray
                  }}
                />

                <TextInput 
                 placeholder='Address'
                 placeholderTextColor='#66666666'
                 autoCorrect={false}
                 style={{
                    paddingLeft: 5,
                    color: '#05375a',}}
                />
            </View>

             {/*Update Button*/}
             <View
            style={{
                justifyContent:'center',
                alignItems:'center'
            }}
            >
            <AppButton 
               label='Update'
               buttonStyle={{
                height:45,
                width:"80%",
                alignItems:'center',
                marginTop:'20%',
                borderRadius:SIZES.radius,
                backgroundColor: COLORS.primary,
                bottom:SIZES.padding2,               
             }}
             labelStyle={{
              fontWeight:'bold',
              fontSize:17
             }}

             onPress={updateProfile}
             />
            </View>
            </Animated.View>
           
            {/*Bottom Sheet Menu*/}
              <BottomSheet 
               ref={sheetRef}
               snapPoints={[350,0]}
               renderContent={renderContent}
               renderHeader={renderHeader}
               initialSnap={1}
               callbackNode={animated}
               enabledGestureInteraction={true}
               
              
               />
       
          
            </KeyboardAwareScrollView>
            </Modal>
            </KeyboardAvoidingView>
           
    )
}



const style = StyleSheet.create({
    details:{
        marginLeft:SIZES.padding,
        marginRight:SIZES.padding,
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
        paddingBottom: SIZES.base,
       },
      
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
      },
      header: {
        marginTop:35,
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      
      
     
})



 export default EditProfile ;