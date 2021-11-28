import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { NavBar } from '../components/UI/NavBar';

import { Entypo } from '@expo/vector-icons';

export const AboutUs = ({ navigator }) => {

   const [fontsLoaded] = useFonts({
      'Saira': require('../../assets/fonts/Saira-Black.ttf'),
   });
   if (!fontsLoaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <Emblema />
         <View style={styles.title}>
            <Text style={styles.title_text}>About us</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
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
})