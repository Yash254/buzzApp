import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>
                    Facebook 
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{flex:1,
    marginTop:150,
backgroundColor:'skyblue',
justifyContent:'center',
alignItems:'center'},
text:{
    color:'red',
    fontSize:30,
    justifyContent:'center',
    alignItems:'center'
}
})