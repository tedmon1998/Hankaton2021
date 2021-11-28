import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { NavBar } from '../components/UI/NavBar';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useFetching } from '../components/hooks/useFatching'
import AuthorisationServer from '../API/AuthorisationServer'
import * as SecureStore from 'expo-secure-store'

export const Registration = ({ navigation }) => {

   const [fontsLoaded] = useFonts({
      'Saira': require('../../assets/fonts/Saira-Black.ttf'),
   });
   

   const [name, setName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [username, setUsername] = useState("")
   const [error, setError] = useState("");
   

   const chechkRegistration = () => {
      if (email.indexOf('@mail.ru') > 0 || email.indexOf('@gmail.com') > 0 || email.indexOf('@yandex.ru') > 0) {
         request()
      }
      else {
         Alert.alert("You have not entered your mail", 'Please correct it', [{
            text: 'OK'
         }])
      }
   }

   const request = () => {
      resultReg(username, name, lastName, email, password)
      setError('')
   }

   const save = async (key, value) => {
      await SecureStore.setItemAsync(key, value);
   }
   
   const [resultReg, loadingReg, errorReg] = useFetching(async (username, name, lastName, email, password) => {
      const info = await AuthorisationServer.getRegistration(username, name, lastName, email, password)
      if(errorReg.length > 0 ) {
         Alert.alert("An error has occurred", errorReg, [{
            text: 'OK'
         }])
      }
      else {
         save("username", info["username"]);
         save("user_id", info["user_id"]);
         save("email", info["email"]);
         navigation.navigate('Welcome')
         // Alert.alert("You have successfully registered", '', [{
         //    text: 'OK',
         //    onPress: () => console.log('Ask me later pressed'),
         // }])
      }
   })

   return (
      <View style={styles.container}>
         <Emblema />
         <View style={styles.title}>
            <Text style={styles.title_text}>Registration</Text>
         </View>
         <View style={StyleSheet.flatten([styles.title, { top: 55 }])}>
            <TouchableOpacity style={styles.create_border}>
               <MaterialCommunityIcons name="account" size={30} color="#7e7d7d" />
               <TextInput style={styles.create_text} placeholder={"Name"} onChangeText={setName} value={name} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border}>
               <MaterialCommunityIcons name="account" size={30} color="#7e7d7d" />
               <TextInput style={styles.create_text} placeholder={"Last name"} onChangeText={setLastName} value={lastName} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border}>
               <MaterialCommunityIcons name="account" size={30} color="#7e7d7d" />
               <TextInput style={styles.create_text} placeholder={"Username"} onChangeText={setUsername} value={username} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border}>
               <TextInput style={styles.create_text} placeholder={"Email"} onChangeText={setEmail} value={email} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border}>
               <Entypo name="lock" size={30} color="black" />
               <TextInput style={styles.create_text} placeholder={"Password"} onChangeText={setPassword} secureTextEntry={true} value={password} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleSheet.flatten([styles.create_border, { width: "50%", backgroundColor: "#C4C4C4" }])} onPress={chechkRegistration}>
               <Text style={styles.create_text}>Finish</Text>
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
      fontSize: 30,
      fontFamily: 'Saira',
   },
   create_text: {
      fontFamily: 'Saira',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 35,
      color: "#000000",
      flex: 1,
      textAlign: 'center',
      height: 35,
   },
   create_border: {
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