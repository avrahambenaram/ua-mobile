import { useState } from 'react';
import { View, ScrollView, Text, TextInput, ActivityIndicator } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import axios from 'axios';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import styles from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';

import api from '../../services/api';

WebBrowser.maybeCompleteAuthSession()

function SignUp() {

    const [accessTokenFacebook, setAccessTokenFacebook] = useState('');
    const [userInfo, setUserInfo] = useState<any>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [request, response, promptAsync] = Facebook.useAuthRequest({
        expoClientId: '519707159938422'
    })

    async function handleLoginFacebook() {
        try {
            const test = await promptAsync()
            console.log(test)
        } catch(err) {
            console.log(err);
            alert('Um erro ocorreu ao tentar fazer login com facebook')
        }
    }

    async function handleLoginGoogle() {
        try {

        } catch(err) {
            console.log(err);
            alert('Um erro ocorreu ao tentar fazer login com google')
        }
    }

    async function handleRegister() {
        setLoading(true);
        setError(false);
        try {
            const { data } = await api.post('/user', {
                name,
                email,
                password
            })
            console.log(data)
        } catch(err: any) {
            setError(true);
            setErrorMessage(err.response.data.message);
        }
        setLoading(false);
    }

    return <View style={styles.container}>
        <Header/>
        <ScrollView
            style={styles.main}
            contentContainerStyle={styles.mainContent}
        >
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dados de acesso</Text>
                <View style={styles.inputContainer}>
                    <Feather
                        name='user'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={txt => setName(txt)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Feather
                        name='mail'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={txt => setEmail(txt)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Feather
                        name='lock'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite uma senha'
                        secureTextEntry
                        value={password}
                        onChangeText={txt => setPassword(txt)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Feather
                        name='lock'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a senha novamente'
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={txt => setConfirmPassword(txt)}
                    />
                </View>
                <RectButton style={styles.signUpButton} onPress={handleRegister}>
                    <Text style={styles.signUpButtonText}>Registrar</Text>
                </RectButton>
            </View>
            {loading ? <ActivityIndicator
                size='large'
                color={colors.primary.default}
            /> : null}
            {error ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <Text style={styles.text}>Ou</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Faça login por um desses métodos</Text>
                <View style={styles.socialMediaContainer}>
                    <RectButton
                        style={styles.socialMedia}
                        onPress={handleLoginFacebook}
                    >
                        <FontAwesome5
                            name='facebook'
                            size={24}
                            color={colors.text.third}
                        />
                    </RectButton>
                    <RectButton
                        style={styles.socialMedia}
                        onPress={handleLoginGoogle}
                    >
                        <FontAwesome5
                            name='google'
                            size={24}
                            color={colors.text.third}
                        />
                    </RectButton>
                    <RectButton
                        style={styles.socialMedia}
                    >
                        <FontAwesome5
                            name='twitter'
                            size={24}
                            color={colors.text.third}
                        />
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    </View>
}

export default SignUp;