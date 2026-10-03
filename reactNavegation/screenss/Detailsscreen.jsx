import { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import TaskContext from "../context/TaskContext";


const DetailsScreen = ({route, navigation}) => {
    const {clearTasks}=useContext(TaskContext);
    const {task}=route.params;
    return <View style={styles.container}>
           <View style={styles.card}>
             <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>{task.title}</Text>
             <Text  style={{color: 'gray'}}>{task.time}</Text>
             <Text  style={{color:'white',fontSize:20,fontWeight:'400'}}>{task.descripe}</Text>
            </View>

    <Button onPress={() => {
        clearTasks();
        navigation.navigate('Home')
    }} title="Clear All Tasks" />
 </View>
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
    },
  card : {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  }
});

export default DetailsScreen;