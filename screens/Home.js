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


const Home = () => {

    /* Para movernos a la siguiente pantalla */
    const navigation = useNavigation()
    /* Fin */

    /* Para traer datos del Firestore */
    const [users, setUsers] = useState([]);

    useEffect(() =>{
       db.collection("users").onSnapshot((querySnapshot) => {
        const users = [];

            querySnapshot.docs.forEach((doc) => {
                const {nombres, apellidos, modalidad, tipoDoc, documento, celular, email, password} = doc.data()
                users.push({
                    id: doc.id,
                    nombres,
                    apellidos,
                    modalidad,
                    tipoDoc,
                    documento,
                    celular,
                    email,
                    password
                })
            });
            setUsers(users);
            console.log(users);
        });
    }, [])
    /* Fin */

    /* Para traer datos del Autentication */
    const [nombreusuario, setnombreusuario] = useState ('');

    useEffect(() =>{
        const emailAut = auth.currentUser?.email
        console.log(emailAut);

            /* Definir nombre de usuario a mostrar */
            const username = users.includes(emailAut)
            if (username === true){
                const nombreusuario = users.nombres;
                setnombreusuario(nombreusuario);
            }else{
                console.log("No se pudo leer el usuario")
            }
            /* Fin */

    }, [])
     /* Fin */

    /* Para definir la fecha en el aplicativo */
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', ' Jueves', ' Viernes', 'Sabado']
        if (dia <= 8){
            var date = dayNames[new Date().getDate()];
        } else {
            var i = new Date().getDate();
            var j = i % 7;
            var date = dayNames[j];
        };
        var dia = new Date().getDate();
        var month = monthNames[new Date().getMonth()]; //Current Month
        setCurrentDate(
        date + ', ' + dia + ' de ' + month
    );
    }, []);
    /*Fin*/

    /* Pasar a la siguiente pantalla e iniciar el contador */
    const Next = () => {
        navigation.navigate("Marcaje");
    }
    /*Fin*/


    return (
        <View style={styles.container}>
            <View style={styles.container_textOne}>
                <Text style={styles.TextPrimary}> Hola</Text>
                <Text style={styles.TextSecundary}> {nombreusuario}</Text>
            </View>
                <View style={styles.BoxContent}>
                    <Text style={styles.TextBoxOne}> {currentDate} </Text>
                    <Text style={styles.TextBoxTwo}> Tu horario Ingreso <Text>8:00</Text> | Salida <Text>17:00</Text> </Text>
                </View>
                <View style={styles.ImageContent}>
                    <Image
                        source={Img1}
                        style={styles.ImgHome1}
                    />
                </View>
                    <TouchableOpacity style={styles.BtnPrimary}>
                        <Text style={styles.sessionText} onPress={() => Next()}> Realizar Marcaje </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BtnSecundary}>
                        <Text style={styles.sessionText}> Ver Horario </Text>
                    </TouchableOpacity>
        
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

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034DA2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_textOne: {
        marginRight: 152
    },
    TextPrimary: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        fontWeight: '600'
    },
    TextSecundary: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 10,
        fontWeight: '800'
    },
    BoxContent:{
        marginTop: 15,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: 330,
        height: 97
    },
    TextBoxOne: {
        padding: 10,
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        fontWeight: '900'
    },
    TextBoxTwo: {
        fontSize: 17,
        color: '#000',
        marginBottom: 10,
        margin: 5
    },
    ImageContent: {
        marginTop: 20
    },
    ImgHome1: {
        height: 255,
        width: 262,
    },
    BtnPrimary: {
        marginTop: 30,
        width:"70%",
        backgroundColor:"#FFD321",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom: 15
    },
    BtnSecundary: {
        width:"70%",
        backgroundColor:"#FFD321",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom: 20
    },
    sessionText: {
        color:"#034DA2",
        fontSize: 20,
        fontWeight: 'bold'
    },
    /* Menu */
    menu: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
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
        color: "#034DA2",
    },
    /* Fin Menu */
});
