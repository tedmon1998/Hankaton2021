import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';


export const Emblema = () => {

   const [fontsLoaded] = useFonts({
      'Sansation': require('../../../assets/fonts/Sansation_Regular.ttf'),
   });
   if (!fontsLoaded) {
      return null;
   }

   return (
      <View style={styles.header_text}>
         <View style={styles.header_row}>
            <Text style={styles.text_e}>E</Text>
            <View style={styles.circle} />
         </View>
         <View style={styles.header_row}>
            <View style={StyleSheet.flatten([styles.circle, { backgroundColor: "#2556D7", top: 5 }])} />
            <Text style={styles.text_g}>G</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   text_e: {
      transform: [{ rotate: '180deg' }],
      fontSize: 46,
      fontFamily: 'Sansation',
   },
   text_g: {
      fontSize: 46,
      fontFamily: 'Sansation',
   },
   header_text: {
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      top: 25,
      flexDirection: 'row',
   },
   circle: {
      width: 16,
      height: 16,
      backgroundColor: "#D72525",
      borderRadius: 50,
      bottom: 5,
   },
   header_row: {
      justifyContent: 'center',
      alignItems: 'center',
   },
})