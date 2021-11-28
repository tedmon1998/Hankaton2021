import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

export const Scanner = ({ navigation }) => {

   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);
   const [barcode, setBarcode] = useState("")



   useEffect(() => {
      setScanned(false),
      (async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === 'granted');
      })();
   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setBarcode({ type, data })
      navigation.navigate('Surctf')
   };

   if (hasPermission === null) {
      return <Text>Запрос на разрешение на камеру</Text>
   }
   if (hasPermission === false) {
      return <Text>Нет доступа к камере</Text>
   }


   return (
      <View style={styles.container}>
         <Camera
            onBarCodeScanned={handleBarCodeScanned}
            barCodeTypes={[
               BarCodeScanner.Constants.BarCodeType.qr,
            ]}
            style={StyleSheet.absoluteFillObject}
         >
         </Camera>
         {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => navigation.navigate('Main')} />} */}
      </View >
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
   },
});