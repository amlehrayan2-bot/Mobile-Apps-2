import { useContext, useState } from "react";
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import TaskContext from "../context1/TaskContext";
import { Image, Text } from 'react-native';

const Card=({title,price,img,button,onAdd,countCart1})=>{
    return <View style={styles.card2}>
        <View><Image source={{uri:img}} style={{ width: 300, height: 100, borderRadius: 10 }}/></View>
        <View style={styles.card3}>
            <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>{title}</Text></View>
            <View><Text style={{color:'green',fontSize:20,fontWeight:'400'}}>{price}</Text></View>
            <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>{countCart1}</Text></View>
        </View>
        <Pressable onPress={onAdd}><View style={{padding:10,fontSize:20,fontWeight:'400',backgroundColor:'blue',borderRadius:20, }}><Text style={{color:"white",textAlign:"center"}}>Add to card</Text></View></Pressable>
         


    </View>






}

const HomeScreen = ({ navigation }) => {
    
    const {carts, clearCarts,count,setCount,cart,countCom,AddCarts, countCarts,countCart}=useContext(TaskContext);


  
   let card=[
    {
        id:1,
        title:"Wireless Headphones",
        price:959.45,
        img:"https://images.pexels.com/photos/5781229/pexels-photo-5781229.jpeg",
        button: 'popular',
        


        


    },
    {
            id:2,
            title:"Wireless Headphones",
            price:591.45,
            img:"https://images.pexels.com/photos/33764150/pexels-photo-33764150.jpeg",
            button: 'Run',
            



            

    
        


    },

    {
        id:3,

        title:"Wireless Headphones",
        price:59.45,
        img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
        button: 'popular',
        





    },
    {
        id:4,
        title:"Wireless Headphones",
        price:.45,
        img:"https://images.pexels.com/photos/34779963/pexels-photo-34779963.jpeg",
        button: 'popular',
    
    



    }
   ];
   return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.card}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Hebron shop</Text>
                    <Text style={{color:"gray",fontSize:15}}>choose your favorate gadgets</Text>
                </View>
                {card.map((obj)=>
                <Pressable id={obj.id} onPress={()=>navigation.navigate('Details') }>
                     <View><Text style={{color:"white",fontSize:20}}>cart({countCarts()})</Text></View>
                </Pressable>
                )}
                

        

                </View>


            
            



        </View>
        <View style={styles.card}>
        <View>
                <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>special Deals</Text></View>
               <View><Text style={{color:"gray",fontSize:15}}>My favorite thing is reading because it allows me to explore new worlds and learn about many different</Text></View>

            </View>
            <View style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10,padding:10}}>
                <Text style={{color:"black",backgroundColor:"green",padding:10,borderRadius:10}}>today only</Text>
            </View>
            



        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1,padding: 20 }}>
            {card.map((obj)=>{
                return(<Card id={obj.id} title={obj.title} price={obj.price} img={obj.img} button={obj.button} 
                    onAdd={() => AddCarts(obj.id,obj.title,obj.price, obj.img,obj.button)}  countCart1={countCart(obj.id)}/>)
            })}


        </ScrollView>
   




    </View>
   );












};

const styles = StyleSheet.create({
  container: {
     flex: 1,
      backgroundColor: 'black',
    },


    card:{
            //flex: 1,
            backgroundColor: 'black',
            padding: 10,
            gap: 10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
    },

    card2:{
          //flex: 1,
          backgroundColor: 'black',
          padding: 10,
          gap: 10,
          borderRadius:20,
          borderColor:"white",
          borderWidth:2,

    

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