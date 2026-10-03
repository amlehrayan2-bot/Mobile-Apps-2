import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Increment =({title})=>{
  const[count1,setCount1]=useState(0);
  return <Pressable onPress={()=> {setCount1(count1+1)}}>
         <View style={styles.card}>
             <Text style={{justifyContent: 'center',fontWeight:'bold'}}>{title}</Text>
             <Text style={{justifyContent: 'center',fontWeight:'bold'}}>{count1}</Text>

          </View>





  </Pressable>






};
const Decrement =({title})=>{
  const[count2,setCount2]=useState(10);
  return <Pressable onPress={()=> {setCount2(count2-1)}}>
         <View style={styles.card}>
             <Text style={{justifyContent: 'center',fontWeight:'bold'}}>{title}</Text>
             <Text style={{justifyContent: 'center',fontWeight:'bold'}}>{count2}</Text>

          </View>





  </Pressable>






}







export default function App() {




  let card1=[
    {
      title:'card1',
      
    },
    {
      title:'card2',

    },
    {
      title:'card3',

    },
    {
      title:'card4',
    },
    {
      title:'card5',

    },


  ];
  let card2=[
    {
      title:'card6',
      
    },
    {
      title:'card7',

    },
    {
      title:'card8',

    },
    {
      title:'card9',
    },
    {
      title:'card10',

    },


  ];







  const[count,setCount]=useState(0);



  return <View style={styles.container}>
    <ScrollView>
    <View><Text style={{color:'white' , fontSize:30, fontWeight:"400", marginBottom:30}}>pressable object</Text></View>

    <View style={{alignItems:'center'}}>
      <View style={{color:'black' , fontSize:30, fontWeight:"400", marginBottom:30,backgroundColor:"white", padding:20}}>{count}</View>
      <View style={{marginTop: 10 }} ><Button title=' when press me increment'  color="pink" onPress={()=>setCount(count+1)}/></View>
      <View style={{marginTop: 10 }} ><Button   title=' when press me decrement'  color="pink"  onPress={()=>setCount(count-1)}/></View>
      <View style={{marginTop: 10 }} ><Button title=' when press me  set 0'  color="pink"  onPress={()=>setCount(0)}/></View>
      <View style={{marginTop: 10 }} ><Button title=' when press me  set 10'  color="pink"  onPress={()=>setCount(10)}/></View>
    </View>
     {card1.map((obj)=><Increment  title={obj.title} />) } 
     {card2.map((obj)=><Decrement title={obj.title} />) } 

    

    
    </ScrollView>
  </View>
  ;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent:'flex-start',

    
  },
  card:{
    backgroundColor: 'beige',
    color:'navy',
    padding:40,
    borderRadius:30,
    width:'90%',
    alignItems:'center',
    //justifyContent:'center',
    marginTop:30,
  
  


    


  }
});
