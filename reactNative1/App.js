import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import TaskContext from './context/TaskContext';
import HomeScreen from './screens/Homescreens';
import DetailsScreen from './screens/Detailsscreens';

const Stack = createNativeStackNavigator();

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, descripe, time) => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title,
        descripe,
        time
      }
    ]);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const sharedData = { tasks, addTask, clearTasks };

  return (
    <TaskContext.Provider value={sharedData}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Homescreens} />
          <Stack.Screen name="Details" component={Detailsscreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContext.Provider>
  );
}
