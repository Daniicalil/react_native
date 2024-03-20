import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        border: '5px solid #000', 
        backgroundColor: '#f5f5f5',
        width: '70%',
        alignItems: 'center',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    containerB: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 8,
        marginBottom: 20,
    },
    botao: {
        width: '60px',
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 10,
    },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 30,
    },
    botaoZerar: {
        width: '70%',
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
        borderRadius: 30,
        padding: 10,
    }
});

export default styles;