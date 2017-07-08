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
       onPress={()=> navigate('Profile' , {user: 'Brad'})}
       />
      </View>
    );
  }
}
class ProfilePage extends React.Component{
    static navigationOptions =({
       title:'Profile'
   }) ;
   render(){
       const {params}=this.props.navigation.state;
       return(
           <View>
           <Text> {params.user}'s Profile </Text>
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
