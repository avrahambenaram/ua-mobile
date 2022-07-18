import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

export const Container = styled.View`
    background-color: ${colors.primary.default};

    flex: 1;
    align-items: center;
`
export const FloatButton = styled(RectButton)`
    width: 55px;
    height: 55px;
    border-radius: 27.2px;
    background-color: #fff;
    position: absolute;
    elevation: 3;
    transform: translateX(${screen.width * .8}px) translateY(${screen.height * .8}px);

    align-self: flex-start;
    justify-content: center;
    align-items: center;
`
export const Main = styled.FlatList`
    width: 100%;
    height: 90%;
`

const styles = StyleSheet.create({
    mainContent: {
        alignItems: 'center',
        paddingVertical: 10
    }
})

export default styles;