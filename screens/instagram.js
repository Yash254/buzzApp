import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>
                    Instagram 
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{flex:1,
    marginTop:150,
backgroundColor:'orange',
justifyContent:'center',
alignItems:'center'},
text:{
    color:'purple',
    fontSize:30,
    justifyContent:'center',
    alignItems:'center'
}
})