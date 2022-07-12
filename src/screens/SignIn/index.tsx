import { useState } from 'react';
import { View, TextInput, Text, Image, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import styles from './styles';
import colors from '../../constants/colors';
import logo from '../../../assets/icon.png';

import api from '../../services/api';

function SignIn() {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    function handleGoSignup() {
        (navigation as any).navigate('signup', {
            headerTitle: 'Registro'
        })
    }

    function handleGoRecoverPass() {
        (navigation as any).navigate('recoverpass', {
            headerTitle: 'Recuperar senha'
        })
    }

    async function handleLogin() {
        setLoading(true);
        setError(false);
        try {
            const { data } = await api.post('/auth/user', {
                email,
                password
            })
            await AsyncStorage.setItem('auth', data.token);
            dispatch({
                type: 'set-token',
                payload: data.token
            })
        } catch(err: any) {
            setError(true);
            setErrorMessage(err.response.data.message);
        }
        setLoading(false);
    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={logo}
            />
        </View>
        <View style={styles.interface}>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor={colors.text.secondary}
                keyboardType='email-address'
                value={email}
                onChangeText={txt => setEmail(txt)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Senha"
                placeholderTextColor={colors.text.secondary}
                secureTextEntry
                value={password}
                onChangeText={txt => setPassword(txt)}
            />
            <RectButton style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </RectButton>
            {loading ? <ActivityIndicator
                size='large'
                color={colors.primary.default}
            /> : null}
            {error ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <View style={styles.question}>
                <Text style={styles.questionText}>Não possui uma conta?</Text>
                <RectButton style={styles.questionButton} onPress={handleGoSignup}>
                    <Text style={styles.questionTextButton}>Registrar</Text>
                </RectButton>
            </View>
            <View style={styles.question}>
                <Text style={styles.questionText}>Esqueceu sua senha?</Text>
                <RectButton style={styles.questionButton} onPress={handleGoRecoverPass}>
                    <Text style={styles.questionTextButton}>Recuperar</Text>
                </RectButton>
            </View>
        </View>
    </View>
}

export default SignIn;