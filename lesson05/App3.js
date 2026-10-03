import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';



const Card = (props) => {
  return <Pressable 
  onPressIn={() => {
    console.log("Press in")
  }} 
  onPressOut={() => {
    console.log("Press out")
  }}
  onPress={() => {
    console.log("Normal Press");
  }}
  onLongPress={() => {
    console.log("Long press")
  }}
  >
  <View style={styles.card}>
    <View style={styles.circle}>
      <Text style={styles.letter}>{props.name[0]}</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.major}>{props.major}</Text>
    </View>
  </View>
  </Pressable>
};

export default function App() {
  let students = [
    {
      id: 1, 
      name: 'Hashem Alqadi',
      major : 'Computer Science'
    },
    {
      id: 2, 
      name: 'Waleed Alomari',
      major : 'Multimedia'
    },
    {
      id: 3, 
      name: 'Sara Ahmad',
      major : 'Cybersecurity'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
    {
      id: 4, 
      name: 'Yasir',
      major : 'Math'
    },
  ];
  return <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Student List</Text>
    </View>
    <ScrollView>
      {students.map((obj) => <Card name={obj.name} major={obj.major}/>)}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
    padding: 20,
  },
  header : {
    backgroundColor: 'navy',
    borderRadius: 10,
  },
  title : {
    fontSize: 32,
    fontWeight: 700,
    color : 'white',
    textAlign: 'center',
    padding: 10,

  },
  card : {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  circle : {
    width: 75,
    height: 75,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  letter : {
    color: 'beige',
    fontSize: 32,
    fontWeight: 700,
  },
  name : {
    fontSize: 24,
  },
  major : {
    fontSize: 20,
  },
  info : {
    gap: 8,
  },
});
