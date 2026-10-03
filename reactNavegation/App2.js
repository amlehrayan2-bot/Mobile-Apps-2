import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskContext from './context/TaskContext';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screenss/Homescreen';
import Detailsscreen from './screenss/Detailsscreen';

const Stack = createNativeStackNavigator();

export default function App() {



  const [tasks, setTasks] = useState([]);

  const addTask = (txt) => {
    setTasks([...tasks, {id : Date.now().toString(), title: txt}]);
  };

  const clearTasks = () => {
    setTasks([]);
  };


  const sharedData = {tasks, addTask, clearTasks};

  return (
    <TaskContext.Provider value={sharedData}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Homescreen}   options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Detailsscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
