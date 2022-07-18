import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`
export const Header = styled.View`
    width: 110%;
    height: 70%;
    transform: translateY(-${screen.height * .35}px);
    border-radius: ${screen.width * 1.1/2}px;
    padding: 60px 0;
    background-color: ${colors.primary.default};

    justify-content: flex-end;
    align-items: center;
`
export const Logo = styled.Image`
    width: ${screen.width * .25}px;
    height: ${screen.width * .25}px;
    border-radius: ${screen.width * .25/2}px;
    background-color: ${colors.primary.default};
    border-width: 1px;
    border-color: #fff;
`
export const Interface = styled.View`
    width: 100%;
    transform: translateY(-${screen.width * .37}px);

    align-items: center;
`
export const TextInput = styled.TextInput`
    width: 80%;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 5px 0;
    background-color: ${colors.background.primary};

    color: ${colors.text.primary};
    font-family: Nunito400;

    border-width: 1px;
    border-color: ${colors.border.input};
`
export const LoginButton = styled(RectButton)`
    width: 80%;
    border-radius: 20px;
    padding: 15px 0;
    margin: 5px 0;
    background-color: ${colors.primary.default};

    justify-content: center;
    align-items: center;
`
export const LoginButtonText = styled.Text`
    color: ${colors.text.third};
    font-family: Nunito400;
`
export const ErrorText = styled.Text`
    font-family: Nunito400;
    font-size: 18px;
    color: ${colors.text.error};
`
export const Question = styled.View`
    margin: 15px 0;

    flex-direction: row;
    justify-content: center;
`
export const QuestionText = styled.Text`
    color: ${colors.text.secondary};
    font-family: Nunito400;
`
export const QuestionButton = styled(RectButton)`
    margin-left: 10px;
`
export const QuestionTextButton = styled.Text`
    color: ${colors.primary.default};
    font-family: Nunito600;
`