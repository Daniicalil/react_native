import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import styles from "./styles";

export default function Atividade_4 () {
    const [mensagem, setMensagem] = useState('Insira o nome e sobrenome');
    const [mensTela, setMensTela] = useState('');
    const [mens2, setMens2] = useState('');

    function atualizaMensagemHandler() {
        setMensTela(mensTela);
        setMens2(mens2);
        setMensTela('');
        setMens2('');   
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txtSaída}>{mensagem}</Text>
            <Text style={styles.nomesobrenome}>Nome:</Text>

            <TextInput 
                style={styles.txtEntrada}
                //placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMensagem(txt)}
                // value={mensTela}
            />

            <Text style={styles.nomesobrenome}>Sobrenome:</Text>
            <TextInput 
                style={styles.txtEntrada}
                // placeholder='Outro texto'
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </Pressable>
        </View>
    )
}