import {
    Container,
    Main,
    Text,
    TextInput,
    RecoverButton,
    RecoverButtonText
} from './styles';

import Header from '../../components/Header';

function RecoverPass() {
    return <Container>
        <Header/>
        <Main>
            <Text>
                Para recuperar a sua senha, informe  o seu email e será enviado um link de recuperação
            </Text>
            <Text>
                Informe o email
            </Text>
            <TextInput
                placeholder="Email"
                keyboardType='email-address'
            />
            <RecoverButton onPress={() => alert('Recuperação uhuu!')}>
                <RecoverButtonText>Recuperar</RecoverButtonText>
            </RecoverButton>
        </Main>
    </Container>
}

export default RecoverPass;