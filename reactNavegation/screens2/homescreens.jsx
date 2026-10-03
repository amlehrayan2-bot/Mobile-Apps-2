
import taskContext from '../context2/taskContext';
import { Button, Pressable, StyleSheet, Text, TextInput, View ,ScrollView,Image} from "react-native"
import { useContext } from "react";


const Carti=({id,title,img,price,onAdd,count,inc,dec})=>{
    return <View style={styles.card1}>
        <View><Image source={{uri:img}} style={{ width: 300, height: 100, borderRadius: 10 }}/></View>
        <View style={styles.card}>
            <Text style={{color:'white', fontSize:20,fontWeight:"400"}} >{title}</Text>
            < Text style={{color:'green', fontSize:20,fontWeight:"400"}}>{price}</Text>
            <Pressable onPress={inc}><View style={{color:'white',backgroundColor:'gray', width:10,height:10,borderRadius:'50%'}}><Text>+</Text></View></Pressable>
            <View style={{color:'white',backgroundColor:'gray', width:10,height:10,borderRadius:'50%'}}>{count}</View>
            <Pressable onPress={dec}><View style={{color:'white',backgroundColor:'gray', width:10,height:10,borderRadius:'50%'}}><Text>-</Text></View></Pressable>


        </View>

        <Pressable onPress={onAdd}><View style={{backgroundColor:'green',padding:10,borderRadius:10}}><Text color='white'>Add to cart</Text></View></Pressable>










    </View>
}










const homescreens=({navigation})=>{
    const {carts,setCarts,cart,setCart,AddCarts,countCart,countCarts,clearCarts,inc,dec}=useContext(taskContext);
    let carti=[
        {
            id:1,
            title:"react native",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            price:45.66
        },
        {
            id:2,
            title:"react native",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            price:45.66
        }, {
            id:3,
            title:"react native",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            price:45.66
        }, {
            id:4,
            title:"react native",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            price:45.66
        },





    ];

    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <View>
                <Text style={{color:'white', fontSize:20,fontWeight:"400"}}>shop hebron</Text>
                <Text style={{color:'gray', fontSize:15}}>choose your favorate</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Details')}><View><Text style={{color:'white', fontSize:20,fontWeight:"400"}}>carts({countCarts()})</Text></View></Pressable>

            </View>

            <View style={styles.card}>

             <View>
             <Text style={{color:'white', fontSize:20,fontWeight:"400"}}>shop hebrongrertyntt</Text>
             <Text style={{color:'gray', fontSize:15}}>choose your favorate rrt rtytryhr rgrh</Text>
            </View>
            <View style={{color:'black', backgroundColor:'green', borderRadius:10,padding:10}}><Text>today now</Text></View>

            </View>

            <ScrollView>
                {carti.map((obj)=><Carti  id={obj.id} title={obj.title} img={obj.img} price={obj.price} onAdd={()=>AddCarts(obj.id,obj.title,obj.img,obj.price)}  count={countCart(obj.id)} inc={()=>inc(obj.id)} dec={()=>dec(obj.id)}/>)}
               
            </ScrollView>

            
            






        </View>



    )









}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        gap:10
    },
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10

    },
    card1:{
        backgroundColor:'black',
        borderRadius:10,
        borderWidth:2,
        borderColor:'white',
        gap:10,
        margin:5

    }








});

export default homescreens;