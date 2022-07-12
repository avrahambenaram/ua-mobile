import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import Header from '../../components/Header';

function RecoverPass() {
    return <View style={styles.container}>
        <Header/>
        <View style={styles.main}>
            <Text style={styles.text}>
                Para recuperar a sua senha, informe  o seu email e será enviado um link de recuperação
            </Text>
            <Text style={styles.text}>
                Informe o email
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                keyboardType='email-address'
            />
            <RectButton style={styles.recoverButton} onPress={() => alert('Recuperação uhuu!')}>
                <Text style={styles.recoverButtonText}>Recuperar</Text>
            </RectButton>
        </View>
    </View>
}

export default RecoverPass;