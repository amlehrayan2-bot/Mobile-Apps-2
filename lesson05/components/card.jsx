import { Pressable, StyleSheet, Text, View } from "react-native"


const Card=(props)=>{
    if(props.avg>=90){
        return <View style={styles.card}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.age}</Text>
                <Text style={styles.text}>{props.avg}</Text>
        </View>

    }

    else{
        return <View style={styles.card1}>
        <Text style={styles.text1}>{props.name}</Text>
        <Text style={styles.text1}>{props.age}</Text>
        <Text style={styles.text1}>{props.avg}</Text>
    </View>
    }




}

const styles=StyleSheet.create({
    card:{
        backgroundColor:"white",
        padding:20,
        borderRadius:20,
        marginVertical:10

    },
    text:{
        color:"navy",
        fontSize:20,
        fontWeight:"400",



    },
    card1:{
        backgroundColor:"red",
        padding:20,
        borderRadius:20,
        marginVertical:10

    },
    text1:{
        color:"white",
        fontSize:20,
        fontWeight:"400",



    },




})