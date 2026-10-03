import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Button,ScrollView,Alert} from 'react-native';
import { useState } from 'react';
const Card=(props)=>{
  return <View style={styles.card}>
    <Text style={{fontSize:20,fontWeight:'500', textAlign:'center'}}>{props.car}</Text>
    <Text style={{fontSize:20,fontWeight:'500', textAlign:'center'}}>{props.year}</Text>
    <Text style={{fontSize:20,fontWeight:'500', textAlign:'center'}}>{props.color}</Text>
  </View>

}



export default function App() {

  const[car,setCar]=useState("");
  const[color,setColor]=useState("");
  const[year,setYear]=useState(0);
  const[data,setData]=useState([]);
  return <View style={styles.container}>
      <TextInput onChangeText={(txt)=>setCar(txt)}  placeholder='enter car' style={styles.inputBox}/>
      <TextInput onChangeText={(txt)=>setColor(txt)} placeholder='enter color' style={styles.inputBox}/>
      <TextInput onChangeText={(txt)=>setYear(txt)} placeholder='enter year' style={styles.inputBox}/>
      <Button style={styles.button} title="add car" onPress={()=>{setData([...data,{Car:car,Color:color, Year:year}])}}/>
       
      <ScrollView>
        {data.map((obj)=>{ return <Card car={obj.Car} color={obj.Color} year={obj.Year} />})}


      </ScrollView>


    </View>
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  card:{
   // flex:1,
    backgroundColor:'navy',
    marginVertical:20,
    borderRadius:20,
    height:100


  },
  button:{
    backgroundColor:'white',
    padding:30,
    marginVertical:10,
    borderRadius:20,

  },
  inputBox:{
    fontSize:20,
    fontWeight:"500",
    marginTop:10,
    borderRadius: 10,
    padding:20,
    borderColor:"black",
    borderWidth:1

    

  }
});
