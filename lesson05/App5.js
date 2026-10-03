import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Button, Alert } from 'react-native';

export default function App() {
  
  return <View style={styles.container}>
    <View style={[styles.row]}>
      <View style={styles.box1}><Text style={styles.title}>box1</Text></View>
      <View style={styles.box2}><Text style={styles.title}>box2</Text></View>
    </View>
    <View style={[styles.row]}>
      <View style={styles.box3}><Text style={styles.title}>box3</Text></View>
      <View style={styles.box4}><Text style={styles.title}>box4</Text></View>
    </View>
    <View style={[styles.row]}>
      <View style={styles.box5}><Text style={styles.title}>box5</Text></View>
    </View>
    <View style={[styles.row]}>
      <View style={styles.box6}><Text style={styles.title}>box6</Text></View>
      <View style={styles.box7}>
        <View style={styles.box8}><Text>Box 7 A</Text></View>
        <View style={styles.box9}><Text>Box 7 B</Text></View>
      </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
    padding: 20,
    gap: 10,
  },
  row : {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  box1 : {
    padding: 10,
    backgroundColor: 'blue',
    flex: 1,
  },
  box2 : {
    padding: 10,
    backgroundColor: 'red',
    flex: 3,
  },
  box3 : {
    padding: 10,
    backgroundColor: 'green',
    flex: 3,
  },
  box4 : {
    padding: 10,
    backgroundColor: 'purple',
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    color: 'white',
  },
  box5: {
    backgroundColor: 'yellow',
    padding: 10,
    flex: 1,
  },
  box6: {
    backgroundColor: 'cyan',
    padding: 10,
    flex: 1,
  },
  box7: {
    
    padding: 10,
    flex: 3,
    gap: 5,
  },
  box8 : {
    backgroundColor: 'darkred',
    padding: 10,
  },
  box9 : {
    backgroundColor: 'beige',
    padding: 10,
  }
});
