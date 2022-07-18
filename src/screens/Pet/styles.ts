import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`
export const Main = styled.View`
    width: 100%;
    height: 90%;

    padding: ${screen.height*.03}px ${screen.width*.05}px;

    align-items: center;
`
export const InfoContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`
export const Photo = styled.Image`
    width: ${screen.width*.3}px;
    height: ${screen.width*.3}px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`
export const InfoAside = styled.View`
    height: ${screen.width*.3}px;

    flex-direction: column;
`
export const InfoAsideContainer = styled.View`
    flex-direction: row;
`
export const InfoAsideLabel = styled.View`
    width: ${screen.width*.2}px;
    background-color: ${colors.primary.default};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 5000;
    
    justify-content: center;
    align-items: center;
`
export const InfoAsideValue = styled.View`
    width: ${screen.width*.4}px;
    background-color: ${colors.background.secondary};
    transform: translateX(-5px);
    z-index: 4999;

    justify-content: center;
    align-items: center;
`
export const InfoAsideText = styled.Text`
    font-family: Nunit400;
    font-size: 16px;
`
export const Section = styled.View`
    padding: 15px ${screen.width * 0.05}px;
    width: 100%;
    margin-top: 25px;
    border-radius: 10px;
    elevation: 2;
    background-color: ${colors.background.primary};
`
export const SectionTitle = styled.Text`
    color: ${colors.text.primary};
    margin-bottom: 10px;
    font-family: Nunito400;
    font-size: 18px;
`
export const ContactInfo = styled.View`
    width: 100%;

    justify-content: space-between;
    flex-direction: row;
`
export const ContactLabel = styled.Text`
    font-family: Nunito400;
    font-size: 16px;
    color: ${colors.text.primary};
`
export const ContactValue = styled(ContactLabel)`
    color: ${colors.text.secondary};
`
export const Text = styled.Text`
    font-family: Nunito400;
    font-size: 20px;
    color: ${colors.text.primary};
    margin-top: 20px;
`
export const Map = styled(MapView)`
    width: 100%;
    border-radius: 10px;
    height: ${screen.height*0.3}px;
`