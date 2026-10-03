import { useContext, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import TaskContext from "./context/TaskContext";
import { ScrollView } from "react-native";


const Card=({title,time,descripe,onPress})=>{
   return <Pressable onPress={onPress}>
        <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>{title}</Text>
                    <Text  style={{color: 'gray'}}>{time}</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10,padding:10}}>Details</View>

            </View>



    </Pressable>







}


const HomeScreen = ({navigation}) => {
    

    const[task,setTask]=useState({});
    let course=[
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software',
        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },
        {
            title:"Data Structures",
            time:'10:00 Am -11:30 Am',
            descripe:'Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are essential for designing efficient algorithms and software'

        },









    ];

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
              <View>
                <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Good Morning,</Text>
                <Text  style={{color:'white',fontSize:20,fontWeight:'600'}}>Rayan</Text>

              </View>
               <View>
                <Text  style={{color:'navy',fontSize:20,fontWeight:'400',width:40,height:40,borderRadius:"50%",backgroundColor:"blue",padding:5,textAlign:'center'}}>R</Text>

              </View>
            </View>
            <View style={styles.card2}>
                <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Today Overview</Text>
                <View style={styles.card1}>
                    <View>
                        <Text style={{color:"blue",fontWeight:'bold',fontSize:20}}>3</Text>
                        <Text style={{color: '#FAFAFA'}}>Choose</Text>

                    </View>
                    <View>
                        <Text style={{color:"blue",fontWeight:'bold',fontSize:20}}>2</Text>
                        <Text  style={{color: '#FAFAFA'}}>Assignments</Text>

                    </View>
                    <View>
                        <Text style={{color:"blue",fontWeight:'bold',fontSize:20}}>5</Text>
                        <Text  style={{color: '#FAFAFA'}}>Projects</Text>

                    </View>

                </View>


            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Categories</Text>
            <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false}>
              
              <View style={styles.card1}>
                <Text  style={{color:'navy',fontSize:20,fontWeight:'400',backgroundColor:"blue",borderRadius:10,padding:10}}>Today</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
                <Text style={{color: '#FAFAFA'}}>Projects</Text>
              </View>
                



            </ScrollView>

            <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Course Today</Text>
            <ScrollView>
            {course.map((obj)=>{
                return<Card title={obj.title} time={obj.time} descripe={obj.descripe} onPress={()=>navigation.navigate('Details',{task:obj})}/>


            })}
            

            {/*
            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>

            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>
            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>
            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>
            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>
            <View style={styles.card3}>
                <View>
                    <Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Data Structures</Text>
                    <Text  style={{color: '#FAFAFA'}}>10:00 Am -11:30 Am</Text>
                </View>
                <View  style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10}}>Details</View>

            </View>
            */}

            </ScrollView>

            







        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    gap: 10,
  },
  inputBox : {
    backgroundColor: 'white', 
    padding: 20,

  },
  container1:{
    //flex: 1,
    backgroundColor: 'black',
    padding: 20,
    gap: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  card1:{
    //flex: 1,
    padding: 20,
    gap: 15,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  card2:{
    backgroundColor:'gray',
    padding:20,
    borderRadius:10,

},
card3:{
    //flex: 1,
    padding: 20,
    gap: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  
});

export default HomeScreen;