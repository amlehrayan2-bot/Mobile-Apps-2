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
    const{employeese,employeeses,id,setId,name,hours,setHours,setName,salary,avgsalary,setEmployee,setEmployees,countEmployees,delet,addEmployee,setSalary,sumHours}=useContext(taskcontext);

    return <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.card1}>
                <Text>count employee</Text>
                <Text>{countEmployees()}</Text>
            </View>
            <View>
                <Text>Hours all employee</Text>
                <Text>{sumHours()}</Text>

            </View>

        </View>
        <View style={styles.card3}>
            <View>
              <Text>average salary</Text>
              <Text>{avgsalary()}</Text>
            </View>
            <View style={styles.card4}>
                <View>
                    <Text>count employee</Text>
                    <Text>{countEmployees()}</Text>
                </View>
                <View>
                    <Text>sum hours</Text>
                    <Text>{sumHours()}</Text>

                </View>
            </View>
            

        </View>












    </View>

    /*return <View style={styles.container}>
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
*/
    
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
    borderRadius:10,

  },
  card3:{
    backgroundColor: 'beige', 
    padding: 20,
    borderRadius:10,
    flexDirection:'column',
    justifyContent:'space-between',
    


  },
  card4:{
    flexDirection:'row',
    justifyContent:'space-between',
    

  }
});

export default homescreen;