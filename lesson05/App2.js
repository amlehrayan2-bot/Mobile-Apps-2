import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Card = ({content, title}) => {
  return <View style={styles.card}>
  <Text style={styles.body}>{content}</Text>
  <Text style={styles.btn}>{title}</Text>
</View>
};

const Card2 = () => {
  return <View style={styles.card}>
    <View style={styles.box}>
      <Text style={styles.title}>A</Text>
      <Text style={styles.title}>B</Text>
    </View>
    <View style={[styles.box, {alignSelf: 'center'}]}>
      <Text style={styles.title}>C</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.title}>D</Text>
      <Text style={styles.title}>E</Text>
    </View>
</View>
};

export default function App() {
  let courses = [
    {
      body: "Lorem Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      name: 'Select Data Structure'            
    },
    {
      body: "Lorem Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      name: 'Select Data Structure'            
    },
    {
      body: "Lorem Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      name: 'Select Data Structure'            
    },
    {
      body: "Lorem Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      name: 'Select Data Structure'            
    },
    {
      body: "Lorem Ipsum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      name: 'Select Data Structure'            
    },
    {
      body: "This course offers a wide range of topics related to relational databases", 
      name: 'Select Data Base I'            
    },
    {
      body: "This course offers a wide range of topics related to predicated logics", 
      name: 'Select Discrete Course'            
    },
    {
      body: "This course offers a wide range of topics related to object oriented programming", 
      name: 'Select OOP'            
    }
  ];
  return <View style={styles.container}>
    <Text style={styles.title}> Courses List </Text>
    <Card2 />
    <Card2 />
    {/* <ScrollView>
      {courses.map((obj) => <Card content={obj.body} title={obj.name} />)}
    </ScrollView> */}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    padding: 20, 
  },
  title : {
    fontSize: 32, 
    fontWeight: '700',
    textAlign: 'center',
    color: 'navy',
  },
  card : {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 16,
    marginTop: 12,
    elevation: 10,
    height: 200,
    justifyContent: 'space-between',
    
  },
  body : {
    color: 'navy',
    textAlign: 'justify'
  },
  btn : {
    backgroundColor: 'red',
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
    color : 'beige',
    borderRadius: 10,
  },
  box : {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
