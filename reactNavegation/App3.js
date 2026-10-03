import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskContext from './context1/TaskContext';
import { NavigationContainer } from '@react-navigation/native';
import Homescreens from './screens1/Homescreens';
import Detailsscreens from './screens1/Detailsscreens';

const Stack = createNativeStackNavigator();

export default function App() {
  const  [carts,setCarts]=useState([])
  const [cart, setCart] = useState({});
  



  const clearCarts = () => {
    setCarts([]);
  };

  const countCarts=()=>{
    let sum=0;
    carts.map((obj)=>{
      sum=sum+(0||obj.count);
      
    
    })

    return sum;
    
  }


const countCart = (id) => {
  
  const item = carts.find((obj) => obj.id == id);
  return item ? item.count : 0;

};
 

      



  const AddCarts = (id, txt, price, img, button) => {

    // هل المنتج موجود؟
    const exist = carts.find((item) => item.id == id);
  
    if (exist) {
      // زيد الكاونت فقط للمنتج اللي دعست عليه
      setCarts(
        carts.map((item) =>
          item.id == id
            ? { ...item, count: (item.count + 1 ) }
            : item
        )
      );
      return item.count
    } 
    else {
      // المنتج جديد → ضيفه
      setCarts([
        ...carts,
        { id: id, title: txt, price: price, image: img, button: button, count: 1 }
      ]);
    }
    
  };
  
  const decrease = (id) => {
    const exist = carts.find(item => item.id === id);
  
    if (exist) {
      if (exist.count > 1) {
        // إذا العدد أكبر من 1، نقصه
        setCarts(
          carts.map(item =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
        );
      } else {
        // إذا العدد 1، شيل العنصر من الكارت
        setCarts(carts.filter(item => item.id !== id));
      }
    }
  };
  




  const sharedData = {
    carts,
    clearCarts,
    AddCarts,
    countCarts,
    countCart,
    decrease
  };

  return (
    <TaskContext.Provider value={sharedData}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Homescreens}   options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Detailsscreens} options={{ headerShown: false }}  />
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