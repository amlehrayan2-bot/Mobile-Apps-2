import { useContext,useState  } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View,Pressable } from "react-native"
import taskcontext3 from "../context3/taskcontext3";


const detailsscreen1 = ({ navigation}) => {
    const {tasks,seTasks,task,setTask,addTask,countTasks,countTask,clearTasks}=useContext(taskcontext3);
    const[fav,setFav]=useState(false);

    return( 
        <View style={styles.card}>
        {tasks.map((obj)=>(

               <View>
                  <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{obj.txt}</Text>
                  <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{countTask(obj.id)}</Text>
                  <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{obj.des}</Text>
                  <Pressable onPress={()=>{setFav(true); <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>completeed</Text>}}><View><Text style={{color:'white', fontSize:20,fontWeight:'400'}}>Add to favorit</Text></View></Pressable>
        
    
    
    
                </View>
    




        )
        
        
        )}
           
        </View>



    );

}







const styles = StyleSheet.create({
    card:{
    backgroundColor:'black',  flex:1,padding: 20
    }
})

export default detailsscreen1;
