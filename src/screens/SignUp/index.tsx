import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import styles from './styles';
import {
    Container,
    Main,
    Section,
    SectionTitle,
    InputContainer,
    Input,
    SignUpButton,
    SignUpButtonText,
    ErrorText,
    Text,
    SocialMediaContainer,
    SocialMedia
} from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';

import api from '../../services/api';

WebBrowser.maybeCompleteAuthSession()

function SignUp() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

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
        if (password !== confirmPassword) {
            setError(true);
            setErrorMessage('As senhas precisam ser iguais');
            return;
        }
        setLoading(true);
        setError(false);
        try {
            const { data } = await api.post('/user', {
                name,
                email,
                password
            })
            await AsyncStorage.setItem('auth', data.token);
            dispatch({
                type: 'set-token',
                payload: data.token
            })
            navigation.goBack();
        } catch(err: any) {
            setError(true);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Um erro ocorreu ao cadastrar seu pet');
            }
        }
        setLoading(false);
    }

    return <Container>
        <Header/>
        <Main
            contentContainerStyle={styles.mainContent}
        >
            <Section>
                <SectionTitle>Dados de acesso</SectionTitle>
                <InputContainer>
                    <Feather
                        name='user'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <Input
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={(txt: string) => setName(txt)}
                    />
                </InputContainer>
                <InputContainer>
                    <Feather
                        name='mail'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <Input
                        placeholder='Digite seu email'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(txt: string) => setEmail(txt)}
                    />
                </InputContainer>
                <InputContainer>
                    <Feather
                        name='lock'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <Input
                        placeholder='Digite uma senha'
                        secureTextEntry
                        value={password}
                        onChangeText={(txt: string) => setPassword(txt)}
                    />
                </InputContainer>
                <InputContainer>
                    <Feather
                        name='lock'
                        size={20}
                        color={colors.text.secondary}
                    />
                    <Input
                        placeholder='Digite a senha novamente'
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(txt: string) => setConfirmPassword(txt)}
                    />
                </InputContainer>
                <SignUpButton onPress={handleRegister}>
                    <SignUpButtonText>Registrar</SignUpButtonText>
                </SignUpButton>
            </Section>
            {loading ? <ActivityIndicator
                size='large'
                color={colors.primary.default}
            /> : null}
            {error ? <ErrorText>{errorMessage}</ErrorText> : null}
            <Text>Ou</Text>
            <Section>
                <SectionTitle>Faça login por um desses métodos</SectionTitle>
                <SocialMediaContainer>
                    <SocialMedia
                        onPress={handleLoginFacebook}
                    >
                        <FontAwesome5
                            name='facebook'
                            size={24}
                            color={colors.text.third}
                        />
                    </SocialMedia>
                    <SocialMedia
                        onPress={handleLoginGoogle}
                    >
                        <FontAwesome5
                            name='google'
                            size={24}
                            color={colors.text.third}
                        />
                    </SocialMedia>
                    <SocialMedia>
                        <FontAwesome5
                            name='twitter'
                            size={24}
                            color={colors.text.third}
                        />
                    </SocialMedia>
                </SocialMediaContainer>
            </Section>
        </Main>
    </Container>
}

export default SignUp;