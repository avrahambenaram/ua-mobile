import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled(RectButton)`
    width: ${screen.width * 0.4}px;
    height: ${screen.width * 0.4 + 50}px;
    background-color: #fff;
    border-radius: 15px;
    elevation: 3;
    margin: 0 10px;
`
export const PetImage = styled.Image`
    width: ${screen.width * 0.4}px;
    height: ${screen.width * 0.4}px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
export const PetInfo = styled.View`
    width: 100%;
    height: 50px;
`
export const PetInfoDiv = styled.View`
    width: 100%;
    height: 50%;
    padding: 0 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const PetText = styled.Text`
    font-family: Nunito400;
    font-size: 18px;
    color: ${colors.text.secondary};
`