import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
const Card=(content,initial_value)=>{
    const[count,setCount]=useState(initial_value)
    return <View style={Styles.card}>
        <View><Text>{content}</Text></View>
        <View style={styles.button}>
             <View ><Button onPress={()=>{
                if(count>0){
                    setCount(count-1)
                }
                }}/>
                </View>
             <View ><Button onPress={()=>{setCount(initial_value)}}/></View>

        </View>




    </View>




}





export default function App() {
    return <View style={styles.container}>
        <View><Text>Athkar</Text></View>
        <ScrollView>
        <Card content="card1" initial_value='1'/>
        <Card content="card2" initial_value='10'/>
        <Card content="card3" initial_value='4'/>
        <Card content="card4" initial_value='7'/>
        <Card content="card5" initial_value='39'/>
        <Card content="card6" initial_value='8'/>


        </ScrollView>
    </View>;



}














const styles = StyleSheet.create({
    container: {
      backgroundColor: 'beige',
      flex: 1,
      padding: 20,
      gap: 10,
    },
    card : {
      backgroundColor : 'white',
      padding: 15,
      borderRadius: 10,
      height: 100,
      flexDirection:'row',
      justifyContent: 'flex_start',
      alignItems: 'center',
    },
    button : {
        width:50,
        height:50,
        borderRadius:'50%',
        fontSize: 32,
        fontWeight: 700,
        color: 'navy',
        alignSelf: 'flex-end'
    },
  });
  