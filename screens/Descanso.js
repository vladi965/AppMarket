import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';


import Img3 from '../assets/img/img3.png';

const Descanso = () => {

    /* Para movernos a la siguiente pantalla */
    const navigation = useNavigation()
    /* Fin */

    /* Para definir la fecha en el aplicativo */
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var dayNames = ['Inicio', 'Lunes', 'Martes', 'Miercoles', ' Jueves', ' Viernes', 'Sabado', 'Domingo']

        if (dia <= 8){
            var date = dayNames[new Date().getDate()];
        } else {
            var i = new Date().getDate();
            var j = i % 7;
            var date = dayNames[j];
        };

        var dia = new Date().getDate();
        //Current Date      
        var month = monthNames[new Date().getMonth()]; //Current Month
        var year = new Date().getFullYear();
        setCurrentDate(
        date + ', ' + dia + ' de ' + month + ' del ' + year
    );
    }, []);
    /*Fin*/


    /* Para definir el conteo de horas en el aplicativo */
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [customInterval, setCustomInterval] = useState();

    const Inicio = () => {
        setCustomInterval(
            setInterval(() => {
                Cambiar();
            }, 1000)
        );
    };

    
    const Detener = () => {
        if(customInterval){
            clearInterval(customInterval);
        }
    };

    const Limpiar = () => {
        Detener();
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
    };

    const Cambiar = () => {
        setSegundos((prevStage) => {
            if(prevStage + 1 == 60){
                if(minutos + 1 == 60){
                    setHoras(horas + 1);
                    setMinutos(0);
                    return 0;
                }else{
                    setMinutos(minutos + 1);
                    return 0;
                }
            }
            return prevStage + 1;
        });
    };
    /* Fin */

    /* Inicia Conteo de Horas */
    useEffect(() => {
        Inicio();
      }, []);
    /* Fin */

    /* Detener reloj y pasar a sgte pagina */
    const Next = () => {
        Detener();
        navigation.navigate("Marcaje!");
    }
    /* Fin */

    return (
        <View style={styles.container}>
            <View style={styles.container_textOne}>
                <Text style={styles.TextBoxOne}> {currentDate} </Text>
                
            </View>
                <View style={styles.BoxContent}>
                    <Text style={styles.TextSecundary}> Tiempo de Descanso </Text>
                    <Text style={styles.TextSecundary}>  
                        {horas < 10 ? "0" + horas : horas}:
                        {minutos < 10 ? "0" + minutos : minutos}:
                        {segundos < 10 ? "0" + segundos : segundos}
                    </Text>
                </View>
                <View style={styles.ImageContent}>
                    <Image
                        source={Img3}
                        style={styles.ImgHome2}
                    />
                </View>
                    <TouchableOpacity style={styles.BtnPrimary}>
                        <Text style={styles.sessionText} onPress={() => Next()}> Terminar Descanso </Text>
                    </TouchableOpacity>                
        </View>
    )
}

export default Descanso;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034DA2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_textOne: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextPrimary: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        fontWeight: '600'
    },
    TextSecundary: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        fontWeight: '800',
        alignItems: 'center',
        justifyContent: 'center'
    },
    BoxContent:{
        marginTop: 15,
        borderRadius: 10,
        borderColor: '#fff',
        width: 330,
        height: 97,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextBoxOne: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900'
    },
    TextBoxTwo: {
        fontSize: 17,
        color: '#fff',
        marginBottom: 10,
        margin: 5
    },
    ImageContent: {
        marginTop: 20
    },
    ImgHome2: {
        height: 265,
        width: 215,
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
    }
});