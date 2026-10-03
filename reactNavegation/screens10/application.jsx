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
