import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import styles from "./styles";

export default function Exemplo4 () {
    const [mensagem, setMensagem] = useState('Sua mensagem aqui!');
    const [mens2, setMens2] = useState('Outra mensagem');
    const [mensTela, setMensTela] = useState('');


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txtSaída}>{mensagem}</Text>

            <TextInput 
                style={styles.txtEntrada}
                placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMensagem(txt)}
            />

            <Text style={styles.txtSaída}>{mensTela}</Text>
            <TextInput 
                style={styles.txtEntrada}
                // placeholder='Outro texto'
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />
            <Pressable onPress={() => {
                setMensTela(mens2)
                setMens2('')
                }}>
                <Text>Exibir mensagem</Text>
            </Pressable>
        </View>
    )
}