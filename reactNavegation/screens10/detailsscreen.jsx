import { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import taskcontext from "../context10/taskcontext";
import { TextInput } from "react-native";


const detailsscreen = ({navigation}) => {
    const {course,setCourse,courses,setCourses,num,setNum,name,setName,hours,setHours,grade,setGrade,delet,addCourse,gradeAll,hoursAll,countCourse,clearCourse}=useContext(taskcontext);


    return <View>
        <TextInput onChangeText={(num)=>setNum(num)} placeholder="enter number courses"/>
        <TextInput onChangeText={(name)=>setName(name)} placeholder="enter name courses"/>
        <TextInput onChangeText={(grade)=>setGrade(Number(grade))} placeholder="enter grade courses"/>
        <TextInput onChangeText={(hour)=>setHours (Number(hour))} placeholder="enter hourse courses"/>

        <Button title="Add courses" onPress={() => {addCourse(num, name, hours, grade);navigation.navigate('Home'); }}/>







    </View>
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
    },
  card : {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  }
});

export default detailsscreen;