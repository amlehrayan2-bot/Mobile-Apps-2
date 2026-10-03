import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Button,ScrollView,Alert, Pressable,Image, ImageBackground} from 'react-native';
import { useState } from 'react';
import Form from './components/form';
import List from './components/list';
import Card from './components/card';

export default function App() {

    
    const[data,setData]=useState([{id:1,brand:"scoda",color:"black",isSold:false},{id:2,brand:"kia",color:"white",isSold:false}]);
    const Update=(id)=>{
    
        setData(data.map((obj)=>{
          if(obj.id==id){
              obj={...obj,isSold:!obj.isSold}
          }
          return obj;
      










          
      
        }))
      
      
      }


    
    return <View style={styles.container}>
        <Form onSubmit={(car)=>setData([...data,{...car,isSold:false}])}/>
        <List list1={data} Update={Update}/>
        
        



    </View>;



}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"beige",
    }




});