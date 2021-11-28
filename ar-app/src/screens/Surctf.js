import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import { NavBar } from '../components/UI/NavBar';


export const Surctf = ({ navigation }) => {

   const [fontsLoaded] = useFonts({
      'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
   });
   if (!fontsLoaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <View style={styles.title}>
            <Text style={styles.title_text}>SURCTF_</Text>
            <Text style={styles.text}>Расписание</Text>
         </View>
         <View>
            <Text style={styles.timetable_text}>12:00 вводная лекция</Text>
            <Text style={styles.timetable_text}>13:00 старт соревнований</Text>
            <Text style={styles.timetable_text}>15:00-16:00 обед</Text>
            <Text style={styles.timetable_text}>17:00 лекция от GroupIB</Text>
            <Text style={styles.timetable_text}>18:30-19:30 ужин</Text>
            <Text style={styles.timetable_text}>22:00 окончание соревнований</Text>
            <Text style={styles.timetable_text}>22:30 награждение</Text>
         </View>
         <NavBar  navigation={navigation}  />
      </View>
   )
}

const styles = StyleSheet.create({
   timetable_text: {
      fontFamily: 'PressStart2P',
      fontSize: 20,
      paddingLeft: 15,
      marginBottom: 6,
      marginTop: 6,
   },
   container: {
      flex: 1,
      backgroundColor: "rgb(241, 164, 12)"
   },
   title: {
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      top: 25,
      zIndex: 1,
      marginBottom: 30
   },
   title_text: {
      fontSize: 30,
      fontFamily: 'PressStart2P',
      borderWidth: 2,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 15
   },
   text: {
      fontFamily: 'PressStart2P',
      fontSize: 30,
      letterSpacing: 7,
   },
})