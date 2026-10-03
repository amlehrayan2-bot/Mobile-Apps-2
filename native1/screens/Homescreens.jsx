import { useContext, useState } from "react";
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import TaskContext from "../context/TaskContext";
import { Image, Text } from 'react-native';

const Card=({title,price,img,button,onAdd})=>{
    return <View style={styles.card2}>
        <View><Image source={{uri:img}} style={{ width: 150, height: 100, borderRadius: 10 }}/></View>
        <View style={styles.card3}>
            <View><Text>{title}</Text></View>
            <View><Text>{price}</Text></View>
        </View>
        <Pressable onPress={onAdd}><View style={{color:'white',fontSize:20,fontWeight:'400',backgroundColor:'blue',borderRadius:20}}><Text>Add to card</Text></View></Pressable>



    </View>






}

const HomeScreen = ({ navigation }) => {
    const[task,setTask]=useState({});
    const {count,setCount}=useContext(TaskContext);


  
   let card=[
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://images.pexels.com/photos/5781229/pexels-photo-5781229.jpeg",
        button: 'popular'

    },
    {
        
            title:"Wireless Headphones",
            price:'59,45$',
            img:"https://images.pexels.com/photos/33764150/pexels-photo-33764150.jpeg",
            button: 'Run'
    
        


    },
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
        button: 'popular'

    },
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://images.pexels.com/photos/34779963/pexels-photo-34779963.jpeg",
        button: 'popular'

    }
   ];
   return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View>
                <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Hebron shop</Text></View>
               <View><Text style={{color:"gray",fontSize:15}}>choose your favorate gadgets</Text></View>

            </View>
            <Pressable onPress={()=>navigation.navigate('Details',{task:card[0]})}>
               <View>
                <Text>Cart({count})</Text>
               </View>
                
            </Pressable>
            



        </View>
        <View style={styles.card}>
        <View>
                <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>special Deals</Text></View>
               <View><Text style={{color:"gray",fontSize:15}}>My favorite thing is reading because it allows me to explore new worlds and learn about many different</Text></View>

            </View>
            <View style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10,padding:10}}>
                <Text>today only</Text>
            </View>
            



        </View>
        <ScrollView>
            {card.map((obj)=>{
                return<Card title={obj.title} price={obj.price} img={obj.img} button={obj.button}   onAdd={() => setCount(count + 1)}/>


            })}


        </ScrollView>
   




    </View>
   );












};

const styles = StyleSheet.create({
  container: {
     flex: 1,
      backgroundColor: 'black', padding: 20, gap: 10 },


    card:{
            //flex: 1,
            backgroundColor: 'black',
            padding: 20,
            gap: 10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
    },

    card2:{
          //flex: 1,
          backgroundColor: 'black',
          padding: 20,
          gap: 10,
          borderRadius:20,
          borderColor:"white"
    

    },
    card3:{
         //flex: 1,
         backgroundColor: 'black',
         padding: 20,
         gap: 10,
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center'

    }

    
});

export default HomeScreen;
