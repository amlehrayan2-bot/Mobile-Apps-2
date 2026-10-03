import { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import TaskContext from "../contenxt/TaskContext";


const DetailsScreen = ({route, navigation}) => {
    const {tasks, clearTasks} = useContext(TaskContext)
    return <View style={styles.container}>
        <FlatList 
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            return <View style={styles.card}>
                <Text>{item.title}</Text>
            </View>
        }}
    />
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
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  }
});

export default DetailsScreen;