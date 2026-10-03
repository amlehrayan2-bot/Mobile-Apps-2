import { useContext, useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";
import TaskContext from "../context/TaskContext";
import { ScrollView } from "react-native";

const Card=({title,price,img,button})=>{
    return <View style={styles.card2}>
        <View>{img}</View>
        <View style={styles.card3}>
            <View>{title}</View>
            <View>{price}</View>
        </View>
        <View><Text>Add to card</Text></View>






    </View>






}

const HomeScreen = ({ navigation }) => {
  /*const [title, setTitle] = useState('');
  const [descripe, setDescripe] = useState('');
  const [time, setTime] = useState('');

  const { addTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.inputBox}
        placeholder="Enter task title..."
      />

      <TextInput
        value={descripe}
        onChangeText={setDescripe}
        style={styles.inputBox}
        placeholder="Enter description..."
      />

      <TextInput
        value={time}
        onChangeText={setTime}
        style={styles.inputBox}
        placeholder="Enter time..."
      />

      <Button
        title="Add Task"
        onPress={() => {
          addTask(title, descripe, time);
          setTitle('');
          setDescripe('');
          setTime('');
          navigation.navigate('Details');
        }}
      />
    </View>
    
  );
  */
   let card=[
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://www.pexels.com/photo/fresh-croissants-and-coffee-on-gray-table-34677438/",
        button: 'popular'

    },
    {
        
            title:"Wireless Headphones",
            price:'59,45$',
            img:"https://www.pexels.com/video/seagulls-flying-over-sea-at-sunset-34730487/",
            button: 'Run'
    
        


    },
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://www.pexels.com/photo/fresh-croissants-and-coffee-on-gray-table-34677438/",
        button: 'popular'

    },
    {
        title:"Wireless Headphones",
        price:'59,45$',
        img:"https://www.pexels.com/photo/fresh-croissants-and-coffee-on-gray-table-34677438/",
        button: 'popular'

    },
   ];
   return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View>
                <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>Hebron shop</Text></View>
               <View><Text style={{color:"gray",fontSize:15}}>choose your favorate gadgets</Text></View>

            </View>
            <View>
                <Text>Cart</Text>
            </View>



        </View>
        <View style={styles.card}>
        <View>
                <View><Text style={{color:'white',fontSize:20,fontWeight:'400'}}>special Deals</Text></View>
               <View><Text style={{color:"gray",fontSize:15}}>My favorite thing is reading because it allows me to explore new worlds and learn about many different</Text></View>

            </View>
            <View style={{color:'black',fontSize:20,fontWeight:'400',backgroundColor:"green",borderRadius:10,padding:10}}>
                <Text>today only</Text>
            </View>
            



        </View>
        <ScrollView>
            {course.map((obj)=>{
                return<Card title={obj.title} time={obj.time} descripe={obj.descripe} onPress={()=>navigation.navigate('Details',{task:obj})}/>


            })}


        </ScrollView>
   




    </View>
   );












};

const styles = StyleSheet.create({
  container: {
     flex: 1,
      backgroundColor: 'black', padding: 20, gap: 10 },


    card:{
            //flex: 1,
            backgroundColor: 'black',
            padding: 20,
            gap: 10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
    },

    card2:{
          //flex: 1,
          backgroundColor: 'black',
          padding: 20,
          gap: 10,
          borderRadius:20,
          borderColor:"white"
    

    },
    card3:{
         //flex: 1,
         backgroundColor: 'black',
         padding: 20,
         gap: 10,
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center'

    }

    
});

export default HomeScreen;
