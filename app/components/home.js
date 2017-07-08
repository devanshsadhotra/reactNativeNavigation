import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button, TextInput, Switch,
   ListView
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
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userdataSource: ds,
    };
}
componentDidMount() {
    this.fetchUser();
}
//An example of fetching remote data
fetchUser(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
    .then((response)=>{
        this.setState({
            userdataSource:this.state.userdataSource.cloneWithRows(response)
        });
    });
}
renderRow(user , sectionId, rowId , hightlightRow){
    return(
    <View style={styles.row}>
        <Text style={styles.text}>{user.title}</Text>
    </View>
    
    )
}
   
   render(){
       const {params}=this.props.navigation.state;
       return(
           <View>
           <Text style={{backgroundColor:'#70d6FF'}}> {params.user}'s Profile </Text>
            <ListView
          dataSource={this.state.userdataSource}
          renderRow={this.renderRow.bind(this)}
          />
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
const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding: 10,
        backgroundColor:'#f4f4f4',
        marginBottom:3, 
        
    },
    text:{
        flex: 1,
        fontSize: 16
    }
})
AppRegistry.registerComponent('navigationToPages', () => navigationToPages);
