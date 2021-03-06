import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getRealm} from './src/config/realm';
export default function App() {

   useEffect(() => {
async function loadHouse(){

const realm = await getRealm();

const  house = realm.objects('House');

console.log(house)

}
loadHouse();
  },[]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
