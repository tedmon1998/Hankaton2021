import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { NavBar } from '../components/UI/NavBar';
import { useFetching } from '../components/hooks/useFatching'
import AuthorisationServer from '../API/AuthorisationServer'

import { Entypo } from '@expo/vector-icons';

export const Authorisation = ({ navigation }) => {

   const [fontsLoaded] = useFonts({
      'Saira': require('../../assets/fonts/Saira-Black.ttf'),
   });

   const [password, setPassword] = useState("")
   const [username, setUsername] = useState("")
   const [error, setError] = useState("");


   const chechkRegistration = () => {
      console.log(username.length);
      console.log(password.length);
      if ((username.length > 0) && (password.length > 0) ) {
         request()
      }
      else {
         Alert.alert("Fill in all the fields", '', [{
            text: 'OK'
         }])
      }
   }

   const request = () => {
      resultReg(username, password)
      setError('')
   }

   const save = async (key, value) => {
      await SecureStore.setItemAsync(key, value);
   }

   const [resultReg, loadingReg, errorReg] = useFetching(async (username, password) => {
      const info = await AuthorisationServer.getAuthorization(username, password)
      if(errorReg.length > 0 ) {
         // Alert.alert("An error has occurred", errorReg, [{
         //    text: 'OK'
         // }])
         console.log(errorReg);
      }
      else {
         // save("username", info["username"]);
         // save("user_id", info["user_id"]);
         // save("email", info["email"]);
         navigation.navigate('Welcome')
         // Alert.alert("You have successfully registered", '', [{
         //    text: 'OK',
         //    onPress: () => console.log('Ask me later pressed'),
         // }])
      }
   })

   if (!fontsLoaded) {
      return null;
   }

   

   return (
      <View style={styles.container}>
         <Emblema />
         <View style={styles.title}>
            <Text style={styles.title_text}>Authorisation</Text>
         </View>
         <View style={StyleSheet.flatten([styles.title, { top: 50 }])}>
            <TouchableOpacity style={styles.create_border}>
               <Entypo name="mail" size={30} color="black" />
               <TextInput style={styles.create_text} placeholder={"Username"} onChangeText={setUsername} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border}>
               <Entypo name="lock" size={30} color="black" />
               <TextInput style={styles.create_text} placeholder={"Password"} secureTextEntry={true} onChangeText={setPassword}/>
            </TouchableOpacity>
            <TouchableOpacity style={StyleSheet.flatten([styles.create_border, { width: "50%", backgroundColor: "#C4C4C4" }])} onPress={chechkRegistration}>
               <Text style={styles.create_text}>Log in</Text>
            </TouchableOpacity>
         </View>
         <Image style={styles.image} source={require('../../assets/Polygon_1.png')} />
         <NavBar  navigation={navigation}  />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   image: {
      position: 'absolute',
      width: 419,
      height: 398,
      right: 100,
      top: 55.5,
   },
   title: {
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      top: 25,
      zIndex: 1,
   },
   title_text: {
      fontSize: 46,
      fontFamily: 'Saira',
   },
   create_text: {
      fontFamily: 'Saira',
      fontSize: 25,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 40,
      color: "#000000",
      flex: 1,
      textAlign: 'center',
      height: 45,
      zIndex: 2,
   },
   create_border: {
      zIndex: 2,
      borderColor: "#C4C4C4",
      borderWidth: 3,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      paddingLeft: 50,
      paddingRight: 50,
      marginBottom: 10,
      width: "80%",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
   },
})