import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import Card from "./card";



const List=(props)=>{
    return <FlatList
            data={props.list1}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>{
                return <Pressable   onPress={()=>props.Update(item.id)}><Card  id={item.id} name={item.brand} color={item.color}  isSold={item.isSold} /></Pressable>

            }}
    
    
    
    
    />



};

const styles=StyleSheet.create({

});

export default List;