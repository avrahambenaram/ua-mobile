import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import {
    Container,
    Header,
    Logo,
    Interface,
    TextInput,
    LoginButton,
    LoginButtonText,
    ErrorText,
    Question,
    QuestionText,
    QuestionButton,
    QuestionTextButton
} from './styles';
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
            if (err.response) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Um erro ocorreu ao cadastrar seu pet');
            }
        }
        setLoading(false);
    }

    return <Container>
        <Header>
            <Logo source={logo}/>
        </Header>
        <Interface>
            <TextInput
                placeholder="Email"
                placeholderTextColor={colors.text.secondary}
                keyboardType='email-address'
                value={email}
                onChangeText={(txt: any) => setEmail(txt)}
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor={colors.text.secondary}
                secureTextEntry
                value={password}
                onChangeText={(txt: any) => setPassword(txt)}
            />
            <LoginButton onPress={handleLogin}>
                <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
            {loading ? <ActivityIndicator
                size='large'
                color={colors.primary.default}
            /> : null}
            {error ? <ErrorText>{errorMessage}</ErrorText> : null}
            <Question>
                <QuestionText>Não possui uma conta?</QuestionText>
                <QuestionButton onPress={handleGoSignup}>
                    <QuestionTextButton>Registrar</QuestionTextButton>
                </QuestionButton>
            </Question>
            <Question>
                <QuestionText>Esqueceu sua senha?</QuestionText>
                <QuestionButton onPress={handleGoRecoverPass}>
                    <QuestionTextButton>Recuperar</QuestionTextButton>
                </QuestionButton>
            </Question>
        </Interface>
    </Container>
}

export default SignIn;