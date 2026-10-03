import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, ScrollView, Text, Pressable} from 'react-native';

const Card = ({id, brand, color, year, isSold}) => {
  if (isSold) {
    return <View style={styles.card2}>
    <Text style={styles.title2}>{brand}</Text>
    <Text style={styles.title2}>{color}</Text>
    <Text style={styles.title2}>{year}</Text>
    <Text style={styles.title2}>{isSold ? "TRUE" : "FALSE"}</Text>
  </View>
  }
  else {
    return <View style={styles.card}>
    <Text style={styles.title}>{brand}</Text>
    <Text style={styles.title}>{color}</Text>
    <Text style={styles.title}>{year}</Text>
    <Text style={styles.title}>{isSold ? "TRUE" : "FALSE"}</Text>
  </View>
  }
  
};


export default function App() {
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState(0);
  const [isSold, setIsSold] = useState(false);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);

  const add_car = () => {
    setData([...data, {id: counter, brand : brand, color : color, year : year, isSold : false}]);
    setCounter(counter + 1);
  }

  const update_car = (id) => {
    setData(data.map((obj) => {
      if (obj.id == id) {
        obj = {...obj, isSold : !obj.isSold}
      }
      return obj;
    })) 
  }

  return <View style={styles.container}>
    <TextInput onChangeText={(txt) => setBrand(txt)} style={styles.inputBox} placeholder="Enter brand here..."/>
    <TextInput onChangeText={(txt) => setColor(txt)} style={styles.inputBox} placeholder="Enter color here..."/>
    <TextInput onChangeText={(txt) => setYear(txt)} style={styles.inputBox} placeholder="Enter year here..."/>
    <Button title="Add car" onPress={add_car}/>
    <ScrollView>
      {data.map((obj) => <Pressable onPress={() => update_car(obj.id)}> <Card id={obj.id} color={obj.color} year={obj.year} isSold={obj.isSold} brand={obj.brand}/> </Pressable>)}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
    padding: 10,
  },
  inputBox : {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    color: 'navy',
    marginVertical: 5,
  },
  card : {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  card2 : {
    backgroundColor: 'navy',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  title : {
    fontSize: 24,
    fontWeight: 700,
  },
  title2 : {
    fontSize: 24,
    fontWeight: 700,
    color: 'beige',
  }
});
