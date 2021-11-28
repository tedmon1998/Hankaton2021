import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { Welcom } from '../components/UI/Welcom';
import { NavBar } from '../components/UI/NavBar';

import * as SecureStore from 'expo-secure-store';


export const Welcome = ({ navigation }) => {

   const [user, setUser] = useState("")

   useEffect(async () => {
      setUser(await SecureStore.getItemAsync("username"))
   }, [])

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
         <View style={styles.username}>
            <Text style={styles.username_text}>Edmon Tunyan</Text>
            {/* <Text>{user}</Text> */}
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
   username : {
      zIndex: 2,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
   username_text: {
      fontSize: 25,
   }
})
