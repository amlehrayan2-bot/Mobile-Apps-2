import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
const Card=({content,initial_value})=>{
    const[count,setCount]=useState(initial_value);
    return <Pressable onPress={()=>{if(count>0){setCount(count-1) }}}>
    <View style={styles.card}>
        
       <View style={styles.button}>
             <Button title="R" onPress={()=>{setCount(initial_value)}}/>
        </View>

        <View style={styles.cont}>
          <Text style={{ fontSize:30, fontWeight:"500"}}>{count}</Text>
        </View>

        

        





    </View>
    </Pressable>




}





export default function App() {
    return <View style={styles.container}>
        <View><Text style={{textAlign:'center'}}>Athkar</Text></View>
        <ScrollView>
        <Card content="card1" initial_value={1}/>
        <Card content="card2" initial_value={10}/>
        <Card content="card3" initial_value={4}/>
        <Card content="card4" initial_value={7}/>
        <Card content="card5" initial_value={39}/>
        <Card content="card6" initial_value={8}/>


        </ScrollView>
    </View>;



}














const styles = StyleSheet.create({
    container: {
      backgroundColor: 'beige',
      flex: 1,
      padding: 20,
      gap: 20,
      marginTop:40,
      
    },
    card : {
      backgroundColor : 'white',
      padding: 15,
      borderRadius: 10,
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 40,
      marginTop:30,
      position: 'relative',  

    },
    button : {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 40,
      height: 40,
      borderRadius: 25, 
      overflow: 'hidden', 
        
    },
    cont:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
      
        
    },
    
  });
  