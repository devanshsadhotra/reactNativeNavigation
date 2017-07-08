import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button, TextInput, Switch
} from 'react-native';
import {StackNavigator} from 'react-navigation';

  export default class Home extends React.Component {
       constructor(){
        super();
        this.state={
            textValue:'Brad',
            switchValue:true
        }
    }
    onChangeText(value){
        this.setState({
            textValue:value
        });
    }
    onSubmit(){
        console.log('input Submitted');
    }
    onSwitchChange(value){
        this.setState({
            switchValue:value
        });
    }
   static navigationOptions ={
       title:'Welcome'
   } ;
  render() {
      const {navigate}= this.props.navigation
    return (
      <View >
       <TextInput
           placeholder="Enter Text"
           value={this.state.textValue}
           onChangeText={(value)=>this.onChangeText(value)}
           onSubmitEditing={this.onSubmit}
           /> 
       <Button 
       title={this.state.textValue}
       onPress={()=> navigate('Profile' , {user: this.state.textValue})}
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
