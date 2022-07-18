import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled(LinearGradient)`
    width: 100%;
    height: 10%;
    padding: ${screen.height * 0.02}px ${screen.width * 0.05}px 0 ${screen.width * 0.05}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const HeaderTitle = styled.Text`
    color: ${colors.text.third};
    font-size: 20px;
    font-family: Nunito400;
`