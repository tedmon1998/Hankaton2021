import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

export const NavBar = ({ navigation }) => {

   return (
      <View style={styles.navbar}>
         <View style={styles.navbar_left_right}>
            <TouchableOpacity onPress={()=> navigation.navigate('Surctf')}>
               <AntDesign name="exception1" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
               <Feather name="map" size={40} color="#7e7d7d" />
            </TouchableOpacity>
         </View>
         <View style={styles.navbar_center}>
            <TouchableOpacity onPress={()=> navigation.navigate('Scanner')}>
               <MaterialCommunityIcons name="qrcode-scan" size={60} color="#7e7d7d" />
            </TouchableOpacity>
         </View>
         <View style={styles.navbar_left_right}>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
               <MaterialCommunityIcons name="account" size={40} color="#7e7d7d" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('AboutUs')}>
               <Feather name="more-horizontal" size={40} color="black" />
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   navbar: {
      position: 'absolute',
      top: Dimensions.get('window').height - 155,
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between',
   },
   navbar_left_right: {
      flexDirection: 'row',
      backgroundColor: "#FAFAFA",
      alignSelf: "flex-end",
      justifyContent: 'space-around',
      bottom: 0,
      flex: 1,
      padding: 10,
   },
   navbar_center: {
      backgroundColor: "#FAFAFA",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderTopEndRadius: 20,
      borderTopLeftRadius: 20
   },
})