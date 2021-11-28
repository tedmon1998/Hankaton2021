import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';


export const Welcom = () => {

   const [fontsLoaded] = useFonts({
      'Saira': require('../../../assets/fonts/Saira-Black.ttf'),
   });
   if (!fontsLoaded) {
      return null;
   }

   return (
      <View style={styles.title}>
         <Text style={styles.title_text}>Welcome</Text>
      </View>
   )
}

const styles = StyleSheet.create({
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
})