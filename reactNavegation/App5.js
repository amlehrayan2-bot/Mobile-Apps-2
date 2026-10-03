import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import taskcontext3 from './context3/taskcontext3';
import homescreens1 from './screens3/homescreens1';
import detailsscreen1 from './screens3/detailsscreen1';
import { StyleSheet } from "react-native";












const Stack = createNativeStackNavigator();  //  👈 مهم!! هذا اللي ناقص عندك

export default function App(){
    const[tasks,setTasks]=useState([]);
    const [task,setTask]=useState({});
    const clearTasks=()=>{
        setTasks([]);
    }

    const countTasks=()=>{
        let sum=0;
        tasks.map((obj)=>{
            sum=sum+(0||obj.count);
        })
        return sum;

    }

    const countTask=(id)=>{
        const item = tasks.find((obj)=>obj.id==id);
        return item ? item.count :0;
        
    
    }


    const addTask=(id,txt, img,des)=>{
        const exist = tasks.find((obj)=>obj.id==id);
         if(exist){
            setTasks( tasks.map((obj)=>obj.id==id ?{...obj,count:(obj.count+1)} : obj));

         }
         else{
            setTasks([...tasks,{id:id ,txt:txt, img:img, des:des ,count:1}]);

            
         }
    

    }

  
    const sharedData={addTask,countTasks,countTask,tasks,setTasks,task,setTask};
    return (
        <taskcontext3.Provider value={sharedData}>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="Home">
                    <Stack.Screen name="Home" component={homescreens1 }options={{ headerShown: false }} />
                    <Stack.Screen name="Details" component={detailsscreen1} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </taskcontext3.Provider>






    )











};


const styles = StyleSheet.create({


});
