
import taskcontext3 from '../context3/taskcontext3';
import { Button, Pressable, StyleSheet, Text, TextInput, View ,ScrollView,Image} from "react-native"
import { useContext } from "react";



const TaskCard=({id,txt,img,des,onAdd,counttask})=>{
    return(
        <View>
            <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{txt}</Text>
            <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{counttask}</Text>
            <Image source={{uri:img}} style={{ width: 300, height: 100, borderRadius: 10 }}/>
            <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>{des}</Text>
           <Pressable onPress={onAdd}><View><Text style={{color:'white', backgroundColor:'navy', padding:10, borderRadius:10, textAlign:'center'}}>Add to tasks</Text></View></Pressable> 
            <Pressable onPress={()=>navigation.navigate('Details')}><View><Text>show details</Text></View></Pressable>



        </View>




    );






}




const homescreens1=({navigation})=>{
    const {tasks,seTasks,task,setTask,addTask,countTasks,countTask,clearTasks,inc,dec}=useContext(taskcontext3);

    const list=[

        {
            id:1,
            txt:" this is home screen ",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"

        },
        {
            id:2,
            txt:" this is home screen ",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"

        },
        {
            id:3,
            txt:" this is home screen ",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"

        },
        {
            id:4,
            txt:" this is home screen ",
            img:"https://images.pexels.com/photos/34738560/pexels-photo-34738560.jpeg",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"

        }
        
    ];

    return (
        <View style= {styles.container}>
            <View style={styles.card}>
               <View>
                <Text style={{color:'white', fontSize:20,fontWeight:'400'}}>hello everyone</Text>
                <Text style={{color:'gray', fontSize:20}} >My name is Rayan</Text>
              </View>
              <Pressable onPress={()=>navigation.navigate('Details')}><View><Text style={{color:'white', fontSize:20,fontWeight:'400'}}>count({countTasks()})</Text></View></Pressable>
            </View>


            <ScrollView>

            {list.map((obj)=><TaskCard id={obj.id}  txt={obj.txt} img={obj.img} des={obj.des} onAdd={()=>addTask(obj.id,obj.txt,obj.img,obj.des)} counttask={countTask(obj.id)}/>)}
            

            </ScrollView>






        </View>
    )
















};



const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'black',

    },
    card:{
         flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center',
         gap: 5

    }





});

export default homescreens1;
