

const List=(props)=>{
    return <FlatList
            data={props.data}
            keyExtractor={item=>item}
            renderItem={({item})=>{
                return <Pressable   onPress={()=>props.Update(item.id)}><Card  id={item.id} name={item.brand} color={item.color}  isSold={item.isSold}/></Pressable>

            }}
    
    
    
    
    />



};

const styles=StyleSheet.create({

});

export default List;