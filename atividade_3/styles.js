import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        display: 'flex',
        
    },
    containerB: {
        flexDirection: 'row',
        justifyContent: 'center',

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
    },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 50,
    },
    botaoZerar: {
        width: '40%',
        backgroundColor: '#000',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
        borderRadius: 30,
    }
});

export default styles;