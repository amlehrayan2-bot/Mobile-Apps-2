import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Button, Alert, TextInput } from 'react-native';

const Card = (props) => {
  return <View style={styles.card}>
    <Text style={styles.title}>{props.brand}</Text>
    <Text style={styles.title}>{props.color}</Text>
    <Text style={styles.title}>{props.year}</Text>
  </View>
};


export default function App() {
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState(0);
  const [data, setData] = useState([]);

  return <View style={styles.container}>
    <TextInput onChangeText={(txt) => setBrand(txt)} placeholder="Enter car brand here..." style={styles.inputBox}/>
    <TextInput onChangeText={(txt) => setColor(txt)} placeholder="Enter car color here..." style={styles.inputBox}/>
    <TextInput onChangeText={(txt) => setYear(txt)} placeholder="Enter car model year here..." style={styles.inputBox}/>
    
    <Button onPress={() => {
      setData([...data, {Brand: brand, Color : color, Year : year}])
    }} title="Add Car"/>

    <ScrollView>
      {data.map((obj) => <Card brand={obj.Brand} color={obj.Color} year={obj.Year} />)}
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
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    marginVertical: 5,
  },
  card : {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  title : {
    fontSize: 28,
    fontWeight: 700,
  }

});
