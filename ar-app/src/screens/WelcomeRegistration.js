import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { LoginIcon } from '../components/UI/LoginIcon';
import { Welcom } from '../components/UI/Welcom';
import { NavBar } from '../components/UI/NavBar';


export const WelcomeRegistration = ({ navigation }) => {

   const [fontsLoaded] = useFonts({
      'Saira': require('../../assets/fonts/Saira-Black.ttf'),
   });
   if (!fontsLoaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <Emblema />
         <Welcom />
         <View style={StyleSheet.flatten([styles.title, { top: 175 }])}>
            <TouchableOpacity style={styles.create_border} onPress={() => navigation.navigate('Registration')}>
               <Text style={styles.create_text}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.create_border} onPress={() => navigation.navigate('Authorisation')}>
               <Text style={styles.create_text}>Login</Text>
            </TouchableOpacity>
         </View>
         <LoginIcon />
         <Image style={styles.image} source={require('../../assets/Polygon_1.png')} />
         <NavBar  navigation={navigation} />
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
      top: 140,
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
      lineHeight: 35,
      color: "#000000",
   },
   create_border: {
      borderColor: "#C4C4C4",
      borderWidth: 3,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      paddingLeft: 50,
      paddingRight: 50,
      marginBottom: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
   },
})