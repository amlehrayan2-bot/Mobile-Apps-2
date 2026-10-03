import { useState } from "react";
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';





const Form=(props)=>{
    const[car,setCar]=useState({});
    return <View style={styles.box}>
        <TextInput onChangeText={(txt)=>{setCar({...car,id:Number(txt)})}} style={styles.inputBox} placeholder="enter car id"/>
        <TextInput onChangeText={(txt)=>{setCar({...car,brand:txt})}} style={styles.inputBox} placeholder="enter car brand"/>
        <TextInput onChangeText={(txt)=>{setCar({...car,color:txt})}} style={styles.inputBox} placeholder="enter car color"/>
            
        <Button  onPress={()=>{props.onSubmit({...car,isSold:false})}} title="Add car"/>





    </View>

}


const styles=StyleSheet.create({
    box:{
        gap:10,
    },
    inputBox:{
        backgroundColor:"white",
        padding:16,
        borderRadius:10,
    }





});

export default Form;