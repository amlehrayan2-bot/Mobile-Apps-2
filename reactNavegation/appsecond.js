import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import taskcontext from './context10/taskcontext';
import homescreen from './screens10/homescreen';
import detailsscreen from './screens10/detailsscreen';
import application from './screens10/application';



import { StyleSheet } from "react-native";



const Stack = createNativeStackNavigator();  
export default function App(){
    const[course,setCourse]=useState({});
    const[courses,setCourses]=useState([]);
    const[num,setNum]=useState('');
    const[name,setName]=useState('');
    const[hours,setHours]=useState();
    const[grade,setGrade]=useState();

    const clearCourse=()=>{
        setCourses([]);
    }

    const countCourse=()=>{
        let sum=0;
        for(let i=0;i<courses.length;i++){
            sum=sum+1;
        }
        return sum;
        
    }
 

    const hoursAll = () => {
        let total = 0;
    
        for(let i=0; i<courses.length;i++){
            total=total+courses[i].hours;
        }
        return total;
    };
    

    const gradeAll=()=>{
        if (courses.length === 0 || hoursAll() === 0) return 0; // ما في كورسات
        else{
            let g = 0;
            let sum=0;
            for(let i=0; i<courses.length;i++){
               g=courses[i].grade*courses[i].hours;
               sum=sum+g;
            }
        return (sum/hoursAll());

        }
        

    }

    const addCourse=(num,name,hours,grade)=>{
        setCourses([...courses,{num:num,name:name,hours:hours,grade:grade}]);
    
    }

    const delet=(num)=>{
            setCourses(courses.filter((obj)=>obj.num!=num))
        




    }

   

const sharedData={course,setCourse,courses,setCourses,num,setNum,name,setName,hours,setHours,grade,setGrade,delet,addCourse,gradeAll,hoursAll,countCourse,clearCourse};
    return (
        <taskcontext.Provider value={sharedData}>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="Details">
                    <Stack.Screen name="Home" component={homescreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Details" component={detailsscreen} options={{ headerShown: false }} />
                    <Stack.Screen name="app" component={application} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </taskcontext.Provider>






    )

}

const styles = StyleSheet.create({

});
    

////////
import { useContext, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import taskcontext from "../context10/taskcontext";
import { Pressable } from "react-native";





const Coursefun=({num,name,hours,grade,delet,navigation})=>{
    return <View style={styles.card2}>
        <View style={{color:'white',backgroundColor:'navy',width:40,height:40, borderRadius:'50%'}}><Text>{name[0]}</Text></View>
        <View><Text>{name}</Text></View>
        <View><Text>{hours}</Text></View>
        <View><Text>{grade}</Text></View>
         <Pressable onPress={()=>navigation.navigate('app')}><View><Text>datails</Text></View></Pressable>
       <Pressable onPress={delet}> <View style={{color:'white',backgroundColor:'navy',width:40,height:40, borderRadius:'50%'}}><Text>X</Text></View></Pressable>

    </View>


}


const homescreen = ({navigation}) => {
    const {course,setCourse,courses,setCourses,num,setNum,name,setName,hours,setHours,grade,setGrade,delet,addCourse,gradeAll,hoursAll,countCourse,clearCourse}=useContext(taskcontext);

    

    return <View style={styles.container}>
        <Text style={{color:'white', fontSize:30,fontWeight:'400',textAlign:'center'}}>course list</Text>
        <View style={styles.card}>
            <View style={{backgroundColor:'white', padding:10,borderRadius:10,width:150}}>
                <Text>Hours</Text>
                <Text>{hoursAll()}</Text>
            </View>
            <View style={{backgroundColor:'white', padding:10,borderRadius:10,width:150}}>
                <Text>number of courses</Text>
                <Text>{countCourse()}</Text>
            </View>
        </View>

        <View style={styles.card1}>
            <Text style={{color:'navy',textAlign:'center' , fontSize:20, fontWeight:'bold'}}>Average</Text>
            <Text>{gradeAll()}</Text>

        </View>

        <ScrollView>
            {courses.slice(0, 4).map((obj)=><Coursefun num={obj.num} name={obj.name} hours={obj.hours} grade={obj.grade} delet={()=>delet(obj.num)}   navigation={navigation}/>)}

        </ScrollView>








    </View>

    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    padding: 20,
    gap: 10,
  },
  inputBox : {
    backgroundColor: 'white', 
    padding: 20,

  },
  card:{
    padding:10,
    gap:40,
    flexDirection:'row',
  },
  card1:{
    padding:10,
    gap:10,
    backgroundColor:'beige',

  },
  card2:{
    backgroundColor: 'beige', 
    padding: 20,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'


  }
});

export default homescreen;

////////////////
import { useContext } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import taskcontext from "../context10/taskcontext";
import { TextInput } from "react-native";


const detailsscreen = ({navigation}) => {
    const {course,setCourse,courses,setCourses,num,setNum,name,setName,hours,setHours,grade,setGrade,delet,addCourse,gradeAll,hoursAll,countCourse,clearCourse}=useContext(taskcontext);


    return <View>
        <TextInput onChangeText={(num)=>setNum(num)} placeholder="enter number courses"/>
        <TextInput onChangeText={(name)=>setName(name)} placeholder="enter name courses"/>
        <TextInput onChangeText={(grade)=>setGrade(Number(grade))} placeholder="enter grade courses"/>
        <TextInput onChangeText={(hour)=>setHours (Number(hour))} placeholder="enter hourse courses"/>

        <Button title="Add courses" onPress={() => {addCourse(num, name, hours, grade);navigation.navigate('Home'); }}/>







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

export default detailsscreen;
/////////////////////////////
import { useContext, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import taskcontext from "../context10/taskcontext";
import { Pressable } from "react-native";





const application = ({navigation}) => {
    const {course,setCourse,courses,setCourses,num,setNum,name,setName,hours,setHours,grade,setGrade,delet,addCourse,gradeAll,hoursAll,countCourse,clearCourse}=useContext(taskcontext);

    return <ScrollView>
                    {courses.map((obj)=>{ return <View><View style={{color:'white',backgroundColor:'navy',width:40,height:40, borderRadius:'50%'}}><Text>{obj.name[0]}</Text></View>
                                                      <View><Text>{obj.name}</Text></View>
                                                       <View><Text>{obj.hours}</Text></View>
                                                       <View><Text>{obj.grade}</Text></View>
                                                       <Pressable onPress={()=>navigation.navigate('Details')}><View><Text>datails</Text></View></Pressable>
                                                        <Pressable onPress={delet}> <View style={{color:'white',backgroundColor:'navy',width:40,height:40, borderRadius:'50%'}}><Text>X</Text></View></Pressable>
                                                    </View>    

            }
                    
                    )}
            </ScrollView>




}

const styles = StyleSheet.create({})

export default application;
///////////////////////


import { createContext } from "react";


const taskcontext=createContext ({
    courses:[],
    setCourses:()=>{},
    addCourse:()=>{},
    clearCourse:()=>{},
    countCourse:()=>{},
   // countTask:()=>{},
    setCourse:()=>{},
    course:{},
    num:'',
    setNum:()=>{},
    name:'',
    setName:()=>{},
    hours:0,
    setHours:()=>{},
    grade:0,
    setGrade:()=>{},
    delet:()=>{},
    gradeAll:()=>{},
    hoursAll:()=>{},




});

export default taskcontext;