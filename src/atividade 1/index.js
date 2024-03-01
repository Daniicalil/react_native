import { View, Text, Image } from 'react-native';

import Saudacoes from './saudacoes';

export default function Atividade_1 ({saudacao}) {
    return(
        <View>
            <Saudacoes saudacao={'Olá Mario!'}/>
            <Saudacoes saudacao={'Olá Maria!'}/>
            <Saudacoes saudacao={'Olá Bruna!'}/>
            <Saudacoes saudacao={'Olá Bruno!'}/>
        </View>
    );
}

