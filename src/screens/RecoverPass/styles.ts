import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`
export const Main = styled.View`
    width: 100%;
    height: 90%;

    padding: ${screen.height * .1}px ${screen.width * .1}px;
`
export const Text = styled.Text`
    color: ${colors.text.secondary};
    font-family: Nunito400;
    font-size: 20px;

    margin: 10px 0;
`
export const TextInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    border-width: 1px;
    border-color: ${colors.border.input};
    border-radius: 10px;
    margin-bottom: 20px;
`
export const RecoverButton = styled(RectButton)`
    width: 100%;
    padding: 10px 0;
    background-color: ${colors.primary.default};
    border-radius: 15px;

    justify-content: center;
    align-items: center;
`
export const RecoverButtonText = styled.Text`
    color: ${colors.text.third};
    font-family: Nunito400;
    font-size: 20px;
`