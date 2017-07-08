import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

  export default class Home extends React.Component {
   static navigationOptions ={
       title:'Welcome'
   } ;
  render() {
      const {navigate}= this.props.navigation
    return (
      <View >
       <Button 
       title='Go to profile Page'
       onPress={()=> navigate('Profile')}/>
      </View>
    );
  }
}
class ProfilePage extends React.Component{
    static navigationOptions ={
       title:'Chat'
   } ;
   render(){
       return(
           <View>
           <Text> Profile </Text>
           </View>
       )
   }
}
const navigationToPages= StackNavigator({
    Home:{
        screen:Home
    },
    Profile:{
        screen:ProfilePage
    },
});
AppRegistry.registerComponent('navigationToPages', () => navigationToPages);
