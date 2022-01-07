import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logoApp from '../assets/img/logoApp.png';
import google from '../assets/img/google.png';
import facebook from '../assets/img/facebook.png';
import { auth } from '../database/Firebase';
import { useNavigation } from '@react-navigation/core';



const Home = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    /* Mantener la cuenta activa */
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user){
          navigation.navigate("Home")
        }
      })
      return unsubscribe
    }, [])
   
    /* Fin */

      /* Autenticar Cuenta de Usuario */
    const handleLogIn = () => {
      auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logueo con: ', user.email);
        navigation.navigate("Home");
      })
      .catch(error => alert(error.message));
    }
    /* Fin */

    return (
      <View style={styles.container}>
        <Image
          source={logoApp}
          style={styles.imglogoApp}
        />
        <Text style={styles.logoText}>Iniciar Sesión</Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Correo Electronico" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            /*onChangeText={(value) => handleChangeText('email', value)}/>*/
            value={email}
            onChangeText={Text => setEmail(Text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#949494"
            fontWeight= 'bold'
            /*onChangeText={(value) => handleChangeText('password', value)}/>*/
            value={password}
            onChangeText={Text => setPassword(Text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={handleLogIn}>Ingresar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.sessionText}>o inicia sesión con </Text>
        </View>
        <View style={styles.buttonStylesRedes}>
          <TouchableOpacity style={styles.buttonRedes}>
              <Image 
                source={google}
                style={styles.imgRedesGoogle}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRedes}>
              <Image 
                source={facebook}
                style={styles.imgRedesFacebook}
              />
          </TouchableOpacity>
        </View> 
        <View style={styles.registerOption}>
          <Text style={styles.sessionText}>¿No tienes una cuenta?</Text>
          <Text style={styles.registerBtn} onPress={() => 
            navigation.navigate("Registro")
          }>Regístrate</Text>
        </View> 

      </View>
    );
}

export default Home

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
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FFD321",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 20
  },
  loginText:{
    color:"#034DA2",
    fontSize: 18,
    fontWeight: 'bold'
  },
  sessionText: {
    color: "#ffffff",
    marginBottom: 5,
    fontSize: 16
  },
  buttonStylesRedes:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 100
  },
  buttonRedes:{
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 50,
    borderRadius: 10
  },
  imgRedesGoogle:{
    width: 37,
    height: 37,
  },
  imgRedesFacebook: {
    width: 17,
    height: 32
  },
  imglogoApp: {
    height: 129,
    width: 122,
    marginBottom: 20
  },
  registerOption: {
    display: 'flex',
    flexDirection: 'row'
  },
  registerBtn: {
    color: '#FFD321',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

