import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';


export const LoginIcon = () => {

   return (
      <View style={StyleSheet.flatten([styles.title, { top: 175 }])}>
         <View style={styles.icon_container}>
            <Entypo name="mail-with-circle" size={50} color="#0d0da3" />
            <AntDesign name="google" size={50} color="#990000" />
            <FontAwesome5 name="yandex" size={50} color="#770000" />
         </View>
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
   icon_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: "60%",
   }
})