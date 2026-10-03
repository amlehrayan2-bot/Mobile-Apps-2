import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Card1=( cont1,cont2,cont3,cont4,title, body,btn)=>{
   return <View style={styles.card}>
    <View style={styles.card1}> 
       <Text>{cont1}</Text>
       <Text>{title}</Text>
       <Text>{cont2}</Text>


    </View>
    <View style={{justifyContent:'center'}}>{body}</View>
    <View style={styles.card1}>
      <Text>{cont3}</Text>
       <Text>{ptn}</Text>
       <Text>{cont4}</Text>

    </View>



   </View>
  


}




export default function App() {
  let Card=[
    {
      cont1:"A",
      cont2:"B",
      cont3:"C",
      cont4:"D",

      title:"Rayan",
      body:"hello Rayan, I broude to the activites",
      btn:"click"
    },
    {
      con1:"F",
      cont2:"G",
      cont3:"H",
      cont4:"I",
      
      title:"Yosri",
      body:"hello Rayan to data structure",
      btn:"click here"

    },
    {
      con1:"K",
      cont2:"L",
      cont3:"M",
      cont4:"N",
      
      title:"Alamleh",
      body:"hello Rayan to data base",
      btn:"click here btn"

    }


  ];






  return  <View style={styles.container}>
    <View><Text style={{color:'navy', fontSize:30,fontWeight:'500'}}>CORSE OUTLINE</Text></View>
    <ScrollView>
      {Card.map((obj)=><Card1  cont1={obj.cont1} cont2={obj.cont2} cont3={obj.cont3} cont4={obj.cont4} title={obj.title} body={obj.body} btn={obj.btn} />)}
      




    </ScrollView>
    



    </View>












  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //flexDirection:'column',
    //justifyContent:'center',
    //alignItems:'center',
    backgroundColor:'pink'




  },
  card:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'beige'

  },
  card1:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    

  }
  
 
});
