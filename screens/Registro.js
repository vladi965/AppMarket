import React, {useState, setState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {db} from '../database/Firebase';
import { auth } from '../database/Firebase';


const Registro = () => { 

  /* Para movernos a la siguiente pantalla */
  const navigation = useNavigation()
  /* Fin */
  
  const [state, setState] = useState({
    nombres:'',
    apellidos:'',
    modalidad:'',
    tipoDoc:'',
    documento:'',
    celular:'',
    email:'',
    password:'',
    })
  
    const handleChangeText = (email, value) => {
        setState({...state, [email]: value })
    }

    const RegistrarUsuario = async () => {
        if (state.nombres === '' || state.apellidos === '' || state.modalidad === '' || state.tipoDoc === '' || state.documento === '' ||
        state.celular === '' || state.email === '' || state.password === '' ){
            alert ('Porfavor complete los campos')
            } else {
              await db.collection('users').add({
                nombres: state.nombres,
                apellidos: state.apellidos,
                modalidad: state.modalidad,
                tipoDoc: state.tipoDoc,
                documento: state.documento,
                celular: state.celular,
                email: state.email,
                password: state.password
               })
             };  
        
    }
    /* Registrar cuenta para autenticacion */
    const handleSignUp = () => {
      auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registrado con: ', user.email);
        navigation.navigate("Home");
      })
      .catch(error => alert(error.message))
    }
    /* Fin */

    const Register = () => {
      RegistrarUsuario();
      handleSignUp();
      
      /* if (value == 1 ){
        handleSignUp(); 
      } else{
        alert ('Error durante el Registro')
      }  */

    }

    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>Registro</Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Nombres" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('nombres', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Apellidos" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('apellidos', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Modalidad" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('modalidad', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Tipo de Documento" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('tipoDoc', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Documento" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('documento', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Celular" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('celular', value)}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Correo" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('email', value)}/>    
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            onChangeText={(value) => handleChangeText('password', value)}/>            
        </View>
        
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText} onPress={() => Register()}>Registrar</Text>
        </TouchableOpacity>
       
      </View>
    );
  
}

export default Registro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034DA2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText:{
    fontWeight:"bold",
    fontSize: 40,
    color:"#ffffff",
    marginBottom: 20
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#000000",
    fontSize: 18
  },
  registerBtn:{
    width:"80%",
    backgroundColor:"#FFD321",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 20
  },
  registerText:{
    color:"#034DA2",
    fontSize: 18,
    fontWeight: 'bold'
  },
});