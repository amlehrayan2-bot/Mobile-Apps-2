import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Button,ScrollView,Alert, Pressable,Image, ImageBackground} from 'react-native';
import { useState } from 'react';




const Card=({id,car,color,year,isSold})=>{
    if(isSold){
        return <View style={styles.card1}>
            <Text style={styles.text1}> {car}</Text>
            <Text style={styles.text1}>{color}</Text>
            <Text style={styles.text1}>{year}</Text>
            <Text style={styles.text1}>{isSold? "TRUE":"FALSE"}</Text>
        </View>
    }

    else{
        return <View style={styles.card}>
            <Text style={styles.text}> {car}</Text>
            <Text style={styles.text}>{color}</Text>
            <Text style={styles.text}>{year}</Text>
            <Text style={styles.text}>{isSold? "TRUE":"FALSE"}</Text>
        </View>
    }
   



};

        











export default function App() {
   const myImage1={uri:"https://picsum.photos/536/354"}
    const myImage={uri:"https://picsum.photos/seed/picsum/200/300"};//صورةعن الانترنت



    const[count,setCount]=useState(0);
    const[car,setCar]=useState("");
    const[year,setYear]=useState("");
    const[color,setColor]=useState("");
    const[isSold,setIsSold]=useState(false);
    const[data,setData]=useState([]);


const update=(id)=>{
    setCount(count+1);
    setData(data.map((obj)=>{
      if(obj.id==id){
          obj={...obj,isSold:!obj.isSold}
      }
      return obj;
  
  
    }))
  
  
  }

  const Addcar=()=>{
    setCount(count+1);
    setData([...data,{id:count, Car:car, Color:color ,Year:year,isSold:isSold}]);

  }

    

   

    return<View style={styles.container}>
         <ImageBackground source={myImage1} style={{flex: 1, justifyContent: "center", alignItems: "center" , resizeMode:"cover",position: "absolute",width: "100%",height: "100%"}}/>
         <ScrollView>
           <View><Text style={{color:"white" ,textAlign:"center" , backgroundColor:"navy", borderRadius:20,padding:10,fontSize:30,fontWeight:"400"}}>Mobile Devices</Text></View>
           <TextInput  onChangeText={(txt)=>setCar(txt)} placeholder='Enter name car....'  style={styles.inputbox} />
           <TextInput  onChangeText={(txt)=>setYear(txt)} placeholder='Enter Year car....'  style={styles.inputbox}/>
           <TextInput onChangeText={(txt)=>setColor(txt)} placeholder='Enter color car....'  style={styles.inputbox}/>
            <Button title='add car'  onPress={Addcar}/>

                {data.map((obj)=> <Pressable onPress={()=>Update(obj.id)}> <Card  id={obj.id} car={obj.Car} color={obj.Color} year={obj.Year} isSold={obj.isSold}/>
                </Pressable>
                )}
                <Image style={styles.img} source={myImage}/>
                <Image  style={styles.img1} source={require('./assets/309-536x354.jpg')}/>في حال كانت الصورة محملة في ال assets

            </ScrollView>
            


        
        
        
        
        
        
        
        
        
        
        
        </View>;
    
        








}




const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"pink",
    },
    inputbox:{
        backgroundColor:"pink",
        borderRadius:20,
        padding:20,
        borderWidth:2,
        color:"white",
        marginVertical:20




    },
    text:{
        color:"black",
        fontSize:20,
        fontWeight:"400"
    },
    card:{
        flex:1,
        backgroundColor:"white",
        borderRadius:20,
        borderWidth:2,
        borderColor:'pink',
        padding:10,
        marginVertical:10





    },
    text1:{
        color:"white",
        fontSize:20,
        fontWeight:"400"



    },
    card1:{
        flex:1,
        backgroundColor:"navy",
        borderRadius:20,
        borderWidth:2,
        borderColor:'pink',
        padding:10,
        marginVertical:10


    },
   
    img:{
        width:100,
        height:100,
        borderRadius:"50%",
        
    }





});