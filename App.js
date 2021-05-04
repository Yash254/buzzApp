import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/facebook'
import Instagram from './screens/instagram'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})
const AppContainer=createAppContainer(TabNavigator)