import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import db from '../config';
import firebase from 'firebase';

class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
        emailId:'',
        password:''
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(
            ()=>{
                return alert("Successful Login")
            }
        )
        .catch(error=>{
            var errorCode=error.Code
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
   
    render(){
        return(
            <View>
            <TextInput
            placeholder="email id"
            keyboardType="email-address"
            style={{
               width:200,
               height:30,
               borderWidth:2,
               margin:20
            }}
            onChangeText={(text)=>{
                this.setState({emailId:text})
            }}
            value={this.state.emailId}
            ></TextInput>
            <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
               width:200,
               height:30,
               borderWidth:2,
               margin:20
            }}
            onChangeText={(text)=>{
                this.setState({password:text})
            }}
            value={this.state.password}
            ></TextInput>
            <TouchableOpacity
            style={{
                width:100,
                height:20,
                borderWidth:2,
                margin:30,
                marginLeft:50,
                backgroundColor:'blue',
                alignItems:'center'
            }}
            onPress={this.userLogin(this.state.emailId,this.state.password)}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default WelcomeScreen;