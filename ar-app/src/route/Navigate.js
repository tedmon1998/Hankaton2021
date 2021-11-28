import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Main } from '../screens/Main'
import { WelcomeRegistration } from '../screens/WelcomeRegistration'
import { Welcome } from '../screens/Welcome'
import { Registration } from '../screens/Registration'
import { Authorisation } from '../screens/Authorisation'
import { AboutUs } from '../screens/AboutUs'
import { Profile } from '../screens/Profile'
import { Surctf } from '../screens/Surctf'
import { Scanner } from '../screens/Scanner'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()


export default function Navigate() {

   const [appIsReady, setAppIsReady] = useState(false)

   useEffect(() => {
      async function prepare() {
         try {
            await SplashScreen.preventAutoHideAsync();
            // test
         } catch (e) {
            console.warn(e);
         } finally {
            setAppIsReady(true);
         }
      }

      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null
   }

   return (
      <View onLayout={onLayoutRootView} style={styles.container}>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="WelcomeRegistration" component={WelcomeRegistration} />
               <Stack.Screen name="Authorisation" component={Authorisation} />
               <Stack.Screen name="Welcome" component={Welcome} />
               <Stack.Screen name="Surctf" component={Surctf} />
               <Stack.Screen name="Registration" component={Registration} />
               <Stack.Screen name="AboutUs" component={AboutUs} />
               <Stack.Screen name="Profile" component={Profile} />
               <Stack.Screen name="Main" component={Main} />
               <Stack.Screen name="Scanner" component={Scanner} />
            </Stack.Navigator>
         </NavigationContainer>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
   }
})