import { Pressable, StyleSheet, Text, View } from "react-native"


const Card=(props)=>{ 
    if(props.isSold){
            return <View style={styles.box}>
                <Text style={styles.text1}> {props.id}</Text>
                <Text style={styles.text1}>{props.name}</Text>
                <Text style={styles.text1}>{props.color}</Text>
                <Text style={styles.text1}>{props.isSold? "TRUE":"FALSE"}</Text>
                
            </View>
            
        }
    
        else{
            return<View style={styles.box1}>
                <Text style={styles.text}> {props.id}</Text>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.color}</Text>
                <Text style={styles.text}>{props.isSold? "TRUE":"FALSE"}</Text>
                
            </View>
        
        }
    
    
    
    
    
    


};

const styles=StyleSheet.create({
    text:{
        color:"navy",
        fontSize:32,
        fontWeight:"700",
    },
    box1:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        marginVertical:5
    },
    box:{
        backgroundColor:"navy",

        padding:10,
        borderRadius:10,
        marginVertical:5

    },
    text1:{
        color:"white",
        fontSize:32,
        fontWeight:"700",

    }


});

export default  Card;