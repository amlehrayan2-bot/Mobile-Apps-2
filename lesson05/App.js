import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from './components/list';







export default function App() {
    const[data,setData]=useState([]);
   return <View style={styles.container}>
    <Text style={{color:"white", textAlign:"center",backgroundColor:"navy",fontSize:20,fontWeight:"400"}}>student list</Text>
    <Form />
    <List/>








   </View>



};



const styles = StyleSheet.create({
    container:{
        backgroundColor:"beige",
    }






});