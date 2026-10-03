import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Button, Alert } from 'react-native';

const Card = () => {
  const [count , setCount] = useState(0)
  return <Pressable onPress={() => setCount(count + 1)}>
    <View style={styles.card}>
      <Text style={styles.title}>{count}</Text>
    </View>
  </Pressable>
}

export default function App() {
  
  return <View style={styles.container}>
    <Card />
    <Card />
    <Card />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
    padding: 20,
    gap: 10,
  },
  card : {
    backgroundColor : 'white',
    padding: 15,
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title : {
    fontSize: 32,
    fontWeight: 700,
    color: 'navy',
  },
});
