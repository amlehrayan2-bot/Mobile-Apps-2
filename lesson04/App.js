import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Card=({text,par,ptn})=>{
  return <View style={styles.card}>
    <Text style={{color:'red',textAlign:'center',fontWeight:'400' ,marginTop:30,fontSize:20}}>{text}</Text>
    <Text style={{color:'pink', textAlign:'justify',marginTop:30}}>{par}</Text>
    <Text style={{color:'red', backgroundColor:'white',borderRadius:16, textAlign:'center',marginTop:30,padding:20}}>{ptn}</Text>
  </View>



}




export default function App() {
  let course = [
    {
      text:'course DB',
      par:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      ptn:"click here"
    },

    {
      text:"course Data",
      par:"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
      ptn:"click here"
    },

    {
      text:"course python",
      par:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      ptn:"click here"
    },

    {
      text:"course DB",
      par:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      ptn:"click here"
    }
  
  ];
  return <View style={styles.container}>
          <Text style={styles.txt}>Course outline</Text>
         <ScrollView>
            {course.map((obj)=>
             <Card text={obj.text} par={obj.par} ptn={obj.ptn}/>)}
             <View style={styles.card1}>
               <Text style={{color:'pink'}}>لا اله الا الله</Text>
              < Text style={{ color:'white'}}>Rayan</Text>
              <Text style={{color:'pink'}}>محمدا رسول الله</Text>
             </View>
             
         </ScrollView>


    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    flexDirection:'column',
   // justifyContent: 'center',
   // alignItems:'center',
    gap:20
  },
  txt:{
    color:'navy',
    fontSize:40,
    fontWeight:'600',
    alignItems:'center',
    textAlign:'center'

  },
  card:{
    backgroundColor:'navy',
    margin:30,
    borderRadius: 20,
    padding: 20
    
  },
  
  card1:{
     backgroundColor:'black',
     flexDirection:'row',
     justifyContent:'space-evenly',
     alignItems:'center',
     padding:20,
     marginBottom:20
  }

});
