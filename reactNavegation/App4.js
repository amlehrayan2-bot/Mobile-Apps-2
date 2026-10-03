import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet } from "react-native";
import taskContext from './context2/taskContext.jsx';
import { NavigationContainer } from "@react-navigation/native";
import homescreens from "./screens2/homescreens.jsx";
import detailsscreens from './screens2/detailsscreens.jsx';




const Stack=createNativeStackNavigator();
export default function App() {
    const[corses,setCourses]=useState([]);
    const[corse,setCouse]=useState({});


    const countCarts=()=>{
        let sum=0;
        carts.map((obj)=>{
            sum=sum+(0||obj.count);
        })
        return sum;
    }
    const clearCarts=()=>{
        setCarts([]);
    }

    const countCart=(id)=>{
        const item=carts.find((obj)=>obj.id==id);
        return item?item.count:0;

    }

    const AddCarts=(id,txt,img,price)=>{
        const exist= carts.find((obj)=>obj.id==id);
        if(exist){
            setCarts(
                carts.map((obj)=>obj.id==id ?{...obj,count:(obj.count+1)} : obj)
            )



        }

        else{
            setCarts([...carts,{id:id,title:txt,image:img,price:price,count:1}])

        }



    };

    const dec=(id)=>{
        const exist= carts.find((obj)=>obj.id==id);
        if(exist){
            if(exist.count>1){
                setCarts(
                    carts.map((obj)=>obj.id==id ?{...obj,count:(obj.count-1)} : obj)
                )
    
            }
    
            else{
                setCarts(
                    (carts.filter((obj)=>obj.id!=id))
                )
                
            }
           
    
    
    
        }
    
    
    
    };
    
  

    const inc = (id) => {
        // نبحث أولًا إذا العنصر موجود في الكارتس
        const exist = carts.find((obj) => obj.id === id);
    
        if (exist) {
            // إذا موجود، نزود العدد مهما كان
            setCarts(
                carts.map((obj) =>
                    obj.id === id ? { ...obj, count: obj.count + 1 } : obj
                )
            );
        } else {
            // إذا مش موجود، نضيفه لأول مرة مع count = 1
            const item = carti.find((obj) => obj.id === id);
            if (item) {
                setCarts([...carts, { ...item, count: 1 }]);
            }
        }
    };
    
    
    
    
    
    
    const sharedData={carts,setCarts,cart,setCart,AddCarts,countCart,countCarts,clearCarts,inc,dec};




    return (
        <taskContext.Provider value={sharedData}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={homescreens} options={{ headerShown: false }}/>
                    <Stack.Screen name="Details" component={detailsscreens} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </taskContext.Provider>


    );
    




}



const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
   




});