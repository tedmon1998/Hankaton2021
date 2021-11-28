import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { Emblema } from '../components/UI/Emblema';
import { NavBar } from '../components/UI/NavBar';

export const Profile = ({ navigation }) => {

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
            <Text style={styles.title_text}>Edmon</Text>
            <Text style={styles.title_text}>Tunyan</Text>
            <Text style={styles.collection_text}>my collection</Text>
         </View>
         <Image style={styles.image} source={require('../../assets/mycol.png')} />
         <NavBar  navigation={navigation}  />
      </View>
   )
}

const styles = StyleSheet.create({
   collection_text: {
      fontSize: 30,
   },
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
   image: {
      top: 40,
      flex: 0.6,
      width: null,
      height: null,
      resizeMode: 'contain'
   }
})