import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import TaskContext from "../contenxt/TaskContext";


const HomeScreen = ({navigation}) => {
    const [task, setTask] = useState('')
    const {addTask} = useContext(TaskContext)
    return (
        <View style={styles.container}>
            <TextInput value={task} onChangeText={(txt) => {
                setTask(txt)
            }} style={styles.inputBox} placeholder="Enter task here..."/>
            <Button onPress={() => {
                addTask(task)
                setTask('')
                navigation.navigate('Details')
            }} title="Add Task" />
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    padding: 20,
    gap: 10,
  },
  inputBox : {
    backgroundColor: 'white', 
    padding: 20,

  }
});

export default HomeScreen;