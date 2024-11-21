import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import FacebookSVG from '../assets/img/facebook.svg'
import GoogleSVG from '../assets/img/google.svg'
import LoginSVG from '../assets/img/login.svg'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import RegisterSVG from '../assets/img/registration.svg'
import TwitterSVG from '../assets/img/twitter.svg'

const RegisterScreen = () => {
  return (
    <ScrollView>
    <View style = {styles.container}>
      <View style = {styles.viewHeader}>
        <RegisterSVG width ={300} heigth = {300} style = {styles.registerSvg}/>
        <Text style = {styles.textHeader}>REGISTER</Text>        
      </View>

      <View style = {styles.containerSocials}>
        <TouchableOpacity style = {styles.buttonSocials} >
          <GoogleSVG />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonSocials} >
          <GoogleSVG />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttonSocials} >
          <GoogleSVG />
        </TouchableOpacity>
      </View>

      <Text style = {{textAlign: 'center', marginBottom: 30, fontSize: 16}}>Or, Register with Email.....</Text>

      <View style = {styles.containerInput}>
        <MaterialCommunityIcons name='email' size={20} color='purple' style={{marginRight: 5}}/> 
        <TextInput placeholder='Enter your email ID' keyboardType='email-address' style = {styles.textInput}/> 
      </View>

      <View style = {styles.containerInput}>
        <MaterialCommunityIcons name='account' size={20} color='purple' style={{marginRight: 5}}/> 
        <TextInput placeholder='Enter your Full name' style = {styles.textInput}/> 
      </View>

      <View style = {styles.containerInput}>
        <MaterialCommunityIcons name='lock' size={20} color='purple' style={{marginRight: 5}}/> 
        <TextInput placeholder='Enter your password' secureTextEntry={true} style = {styles.textInput}/> 
      </View>

      <View style = {styles.containerInput}>
        <MaterialCommunityIcons name='lock' size={20} color='purple' style={{marginRight: 5}}/> 
        <TextInput placeholder='Confirm your password' secureTextEntry={true} style = {styles.textInput}/> 
      </View>

      <View style = {styles.containerInput}>
        <MaterialCommunityIcons name='calendar' size={20} color='purple' style={{marginRight: 5}}/> 
        <TextInput placeholder='Enter your Date Birth' secureTextEntry={true} style = {styles.textInput}/> 
      </View>

      <TouchableOpacity style = {styles.buttonLogin}>
        <Text style = {styles.buttonText}>REGISTER</Text>        
      </TouchableOpacity>

      <View style = {styles.containerLogin}>
        <Text>Already registered</Text>
        <TouchableOpacity>
          <Text style = {styles.textLogin}> Login</Text>
        </TouchableOpacity>
      </View>     
    </View>
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,        
    },

    viewHeader: {
        alignItems: 'center',
        marginTop: 5,
    },
    
    registerSvg: {
      transform: [{rotate: '-5deg'}],
      marginBottom: 10,
    },
    
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'purple'
    },

    containerInput: {
        flexDirection: 'row',
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        marginBottom: 30,
        paddingBottom: 10
    },
    
    buttonLogin: {
      backgroundColor: 'purple',
      padding: 20,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 20,      
    },
    
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },

    containerSocials: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
      marginTop: 30,
    },
    
    buttonSocials: {
      borderColor: 'gray',
      borderWidth: 3,
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,    
    },

    containerLogin: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 30,
    },

    textLogin: {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 16,
    } 
    
})