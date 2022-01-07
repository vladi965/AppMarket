import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Img1 from '../assets/img/img1.png';
import {db} from '../database/Firebase';
import { auth } from '../database/Firebase';

import Btn1 from '../assets/img/Btn1.png'
import Btn2 from '../assets/img/Btn2.png'
import Btn3 from '../assets/img/Btn3.png'
import Btn4 from '../assets/img/Btn4.png'
import Btn5 from '../assets/img/Btn5.png'


const Perfil = () => {

    /* Para movernos a la siguiente pantalla */
    const navigation = useNavigation()
    /* Fin */

    /* Autenticar Cuenta de Usuario */
    const handleSignOut= () => {
        auth
        .signOut()
        .then(()=> {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message));
      }
    /* Fin */


    return (        
        <View style={styles.container}>
            <View style={styles.Viewperfil}>
                <Image 
                    source={Btn1}
                    style={styles.Imgperfil}
                />
            </View>
            <View style={styles.infoMenu}>
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Nombres </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View>
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Apellidos </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View>    
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Tipo de Documento </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View>  
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Numero de Documento </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View>  
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Celular </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View> 
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Correo Electronico </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View> 
                <View style={styles.infoMenu2}>
                    <Text style={styles.txtPerfil}> Contraseña </Text>
                    <Text style={styles.txtPerfil}> *Usuario* </Text>
                </View> 
            </View>

            <View>    
                <TouchableOpacity style={styles.BtnCerrar} onPress={handleSignOut}>
                    <Image 
                        source={Btn5}
                        style={styles.ImgCerrar}
                    />
                    <Text style={styles.txtCerrar}>Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>
            
        
            <View style={styles.menu}>
                <TouchableOpacity style={styles.Btnmenu} onPress={() => navigation.navigate("Home")}>
                    <Image 
                        source={Btn4}
                        style={styles.Imgmenu}
                    />
                    <Text style={styles.Txtmenu}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnmenu} onPress={() => navigation.navigate("Perfil")}>
                    <Image 
                        source={Btn3}
                        style={styles.Imgmenu}
                    />
                    <Text style={styles.Txtmenu}>Horario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnmenu} onPress={() => navigation.navigate("Perfil")}>
                    <Image 
                        source={Btn2}
                        style={styles.Imgmenu}
                    />
                    <Text style={styles.Txtmenu}>Incidencia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnmenu} onPress={() => navigation.navigate("Perfil")}>
                    <Image 
                        source={Btn1}
                        style={styles.Imgmenu}
                    />
                    <Text style={styles.Txtmenu}>Perfil</Text>
                </TouchableOpacity>
            </View>
                
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034DA2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /* Menu */
    menu: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 45,
        width: '85%',
        height: 40,
        borderRadius:15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Btnmenu: {
        margin: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight:22,
    },
    Txtmenu: {
        color: "#034DA2",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
    },
    Imgmenu: {
        height: 18,
        width: 18,
    },
    /* Fin Menu */
    Viewperfil: {
        backgroundColor: "#fff",
        borderRadius: 60,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    Imgperfil: {
        height: 95,
        width: 95,
    },  
    infoMenu: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoMenu2: {
        display: 'flex',
        flexDirection: 'row',
    },
    txtPerfil: {
        marginLeft: 90,
        height: 50,
        width: 160,
        color: "#fff",
        fontSize: 14,
    },
    BtnCerrar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#FFD321",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
    },
    ImgCerrar: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    txtCerrar:{
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    }
});