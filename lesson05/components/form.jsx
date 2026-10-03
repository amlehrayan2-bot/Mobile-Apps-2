import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"


const Form=(props)=>{
    const [student,setStudent]=useState({});

    return <View style={styles.box}>
        <TextInput style={styles.inputBox} placeholder="enter student name...." onChangeText={(txt)=>{setStudent({...student,name:txt})}}/>
        <TextInput style={styles.inputBox} placeholder="enter student age....." onChangeText={(txt)=>{setStudent({...student,age:Number(txt)})}}/>
        <TextInput  style={styles.inputBox} placeholder="enter student avg...." onChangeText={(txt)=>{setStudent({...student,avg:Number(txt)})}}/>

        <Button onPress={()=>props.setData([...props.data,{...student,isSold:false}])} title='add student'/>


        




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
        borderWidth:2,
        
    }





});

export default Form;