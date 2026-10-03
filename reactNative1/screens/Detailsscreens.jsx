import { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import TaskContext from "../contenxt/TaskContext";

const DetailsScreen = ({ navigation }) => {
  const { tasks, clearTasks } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.desc}>{item.descripe}</Text>
          </View>
        )}
      />

      <Button
        title="Clear All Tasks"
        onPress={() => {
          clearTasks();
          navigation.navigate("Home");
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    marginVertical: 8
  },
  title: { color: "white", fontSize: 20, fontWeight: "bold" },
  time: { color: "#C7C7C7", marginVertical: 5 },
  desc: { color: "white", fontSize: 16 }
});

export default DetailsScreen;
