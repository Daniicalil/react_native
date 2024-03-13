import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade_3 () {

    const [numero, setNumero] = useState(0);

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
        // console.log(numero);
    }

    function retirada() {
        const ret = numero - 1;
        setNumero(ret);
        // console.log(numero);
    }

    function zerar() {
        const zer = numero = 0;
        setNumero(zer);
        // console.log(numero);
    }

    return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Atividade_3</Text>

                <View style={styles.containerB}>

                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={() => retirada()}
                >
                    <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}> {numero}</Text>

                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={() => incremento()}
                >
                    <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>

                </View>

                <TouchableOpacity 
                    style={styles.botaoZerar} 
                    onPress={() => zerar()}
                >
                    <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>

            </View>
        
    );
}