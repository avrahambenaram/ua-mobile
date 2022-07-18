import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`
export const Main = styled.ScrollView`
    width: 100%;
    height: ${screen.height * 0.9}px;
`
export const Section = styled.View`
    padding: 15px ${screen.width * 0.05}px;
    width: 100%;
    border-radius: 10px;
    elevation: 2;
    background-color: ${colors.background.primary};
`
export const SectionTitle = styled.Text`
    color: ${colors.text.secondary};
    font-family: Nunito400;
    font-size: 18px;
`
export const InputContainer = styled.View`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.border.input};
    border-radius: 10px;
    padding: 0 10px;

    flex-direction: row;
    align-items: center;
`
export const Input = styled.TextInput`
    flex: 1;
    margin-left: 10px;

    color: ${colors.text.primary};
`
export const SignUpButton = styled(RectButton)`
    width: 80%;
    border-radius: 20px;
    padding: 15px 0;
    margin: 5px 0;
    background-color: ${colors.primary.default};

    justify-content: center;
    align-items: center;
    align-self: center;
`
export const SignUpButtonText = styled.Text`
    color: ${colors.text.third};
    font-family: Nunito400;
`
export const ErrorText = styled.Text`
    font-family: Nunito400;
    font-size: 18px;
    color: ${colors.text.error};
`
export const Text = styled.Text`
    color: ${colors.text.primary};
    font-family: Nunito400;
    font-size: 18px;
    margin: 15px 0;
`
export const SocialMediaContainer = styled.View`
    width: 100%;
    height: 50px;
    margin-top: 15px;

    flex-direction: row;
    justify-content: center;
`
export const SocialMedia = styled(RectButton)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: 0 10px;
    background-color: ${colors.primary.default};

    justify-content: center;
    align-items: center;
`
const styles = StyleSheet.create({
    mainContent: {
        paddingHorizontal: screen.width * 0.05,
        paddingTop: 15,
        paddingBottom: 20,

        alignItems: 'center'
    }
})

export default styles;