import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
 const Card=()=>{
  return <View style={styles.card}>
      <Text style={{color:'navy',textAlign:'center'}}>hello word</Text>
      <Text style={{color:'navy',textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</Text>

      <Text style={{color:'black', backgroundColor:'red', padding:10, borderRadius:16,textAlign:'center',marginTop:20}}>click here</Text>


  </View>
 };
export default function App() {
  return <View style={styles.container}>
     <ScrollView>
       <View style={styles.card1}>
        <Text style={{textAlign:'center',color:'navy',fontSize:20,fontWeight:"400"}}>Mobile app</Text>
       </View>
       <Card/>       
       <Card/>
       <Card/>
       <Card/>





     

      </ScrollView>
    </View>;
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    flexDirection:'column',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding:30
  },
  card1:{
    padding:20,
    backgroundColor:'white',
    borderRadius:30,

  },
  card:{
     
    backgroundColor:'beige',
    padding:30,
    borderRadius:16,
    marginTop:12
    
  }





});
