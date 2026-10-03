import { useContext,useState  } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View,Pressable } from "react-native"
import TaskContext from "../context1/TaskContext";


const DetailsScreen = ({ navigation}) => {
  const {carts, clearCarts,count,setCount,countCart,cart,countCom,AddCarts,decrease}=useContext(TaskContext);
  const priceCart=(id)=>{
    return countCart(cart.id)*cart.price;
  }


  const totalPrice=()=>{
    let sum=0;
  
    carts.map((obj)=>{
     let s= (countCart(obj.id)*Number(obj.price));
     sum=sum+s;

    })

    return sum;
  }


    return(
     <View style={styles.container}>
            <View style={styles.card1}>
                <View>
                <Text  style={{color:'white',fontSize:20,fontWeight:'400'}}>your Cart</Text>
                <Text   style={{color: 'gray'}}>Review items</Text>

                </View>
                <Pressable onPress={()=>navigation.navigate("Home")}><View><Text style={{color:'white',fontSize:10,fontWeight:'400',backgroundColor:'gray',padding:10,borderRadius:10}}>shop</Text></View></Pressable>
                
            </View>
          {carts.map((obj)=>
          (
            <View style={styles.card}>
            <View style={styles.cycle}><Text style={{textAlign:'center',fontSize:15,fontWeight:'400',color:'white'}}>{obj.title[0]}</Text></View>
            <View>
               <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>{obj.title}</Text>
               <Text  style={{color: 'gray'}}>{obj.price}X{countCart(obj.id)}</Text>

            </View>
            <View style={styles.card2}>
               <Pressable onPress={()=>decrease(obj.id)}>
                  <View style={styles.cycle1}><Text style={{color:"white",backgroundColor:'gray'}}>-</Text></View>
               </Pressable>
                <View style={styles.cycle}><Text style={{color:"white"}}>{countCart(obj.id)}</Text></View>

            </View>
             
             
            </View>

            



          )
        )}


          
           
            


            

   
   <View style={styles.card}>
    <View>
      <Text  style={{color:"white"}}>total price</Text>
      <Pressable onPress={()=>{clearCarts();   navigation.navigate('Home')}}><View style={styles.card3}><Text style={{textAlign:'center',color:'white'}}>clear carts</Text></View> </Pressable> 
    </View>
    <View>
      <Text style={{color:"white"}}>{totalPrice()}</Text>
      < View style={{backgroundColor:"blue", borderRadius:10,padding:10}}><Text style={{color:"white"}}>checout</Text></View>
    </View>
  </View>
 
 </View>
 
    );
};

const styles = StyleSheet.create({
    container : {
        //flex:1,
        padding: 20,
        backgroundColor:"black"
    },
  card : {
    backgroundColor: 'black',
    padding: 20,
    flexDirection:'row',
    borderRadius: 15,
    marginVertical: 5,
    borderColor:'white',
    borderWidth:2,
    justifyContent:'space-between',
    alignItems:'center',
    gap:2
  },
  card1:{
      //flex: 1,
      backgroundColor: 'black',
      padding: 20,
      gap: 20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  card2:{
    padding: 20,
    flexDirection:'row',
    borderRadius: 15,
    marginVertical: 5,
    gap:10

  },
  cycle:{
    padding:20,
    width:30,
    height:30,
    borderRadius:'50%',
    backgroundColor:'gray',
    borderColor:'white',
    




  },
  cycle1:{
    padding:10,
    width:30,
    height:30,
    borderRadius:'50%',
    backgroundColor:'black',
    borderColor:'white',
    

  },
  card3:{
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15,
    marginVertical: 3,
    borderColor:'white',
    borderWidth:2,
    
    gap:10

  }
});

export default DetailsScreen;

