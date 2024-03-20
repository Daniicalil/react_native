import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';

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
    }

    function zerar() {
        const zer = 0;
        setNumero(zer);
    }

    return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Atividade_3</Text>

                <View style={styles.containerB}>

                <Pressable
                    style={styles.botao} 
                    onPress={() => retirada()}
                >
                    <Text style={styles.txtBotao}>-</Text>
                </Pressable>

                <Text style={styles.titulo}> {numero}</Text>

                <Pressable 
                    style={styles.botao} 
                    onPress={() => incremento()}
                >
                    <Text style={styles.txtBotao}>+</Text>
                </Pressable>

                </View>

                <Pressable 
                    style={styles.botaoZerar} 
                    onPress={() => zerar()}
                >
                    <Text style={styles.txtBotao}>Zerar</Text>
                </Pressable>

            </View>
        
    );
}