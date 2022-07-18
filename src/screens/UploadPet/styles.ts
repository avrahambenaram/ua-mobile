import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`
export const Main = styled.ScrollView`
    width: 100%;
    height: 90%;
`
export const Image = styled.Image`
    width: ${screen.width*.35}px;
    height: ${screen.width * .35}px;
    background-color: ${colors.primary.default};
    border-radius: 20px;
    padding: 0 10px;

    justify-content: center;
    align-items: center;
`
export const ImageView = styled.View`
    width: ${screen.width*.35}px;
    height: ${screen.width * .35}px;
    background-color: ${colors.primary.default};
    border-radius: 20px;
    padding: 0 10px;

    justify-content: center;
    align-items: center;
`
export const ImageText = styled.Text`
    font-family: Nunito400;
    font-size: 16px;
    color: ${colors.text.third};
`
export const Section = styled.View`
    padding: 15px ${screen.width * .05}px;
    width: 100%;
    margin-top: 25px;
    border-radius: 10px;
    elevation: 2;
    background-color: ${colors.background.primary};
`
export const SectionTitle = styled.Text`
    margin-bottom: 10px;
    
    color: ${colors.text.primary};
    font-family: Nunito400;
    font-size: 18px;
`
export const SectionInput = styled.TextInput`
    font-family: Nunito400;
    font-size: 16px;
    color: ${colors.text.primary};
    padding: 5px;
    margin: 5px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.border.input};
`
export const PickerItems = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
`
export const PickerText = styled.Text`
    font-family: Nunito400;
    font-size: 18px;
    color: ${colors.text.primary};
`
export const Text = styled.Text`
    font-family: Nunito400;
    font-size: 17px;
    color: ${colors.text.primary};
    margin-top: 20px;
`
export const Map = styled(MapView)`
    width: 100%;
    height: ${screen.height * .3}px;
    border-radius: 10px;
`
export const ErrorText = styled.Text`
    font-size: 18px;
    font-family: Nunito400;
    color: ${colors.text.error};
`
export const RegisterPet = styled(RectButton)`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.primary.default};
    margin-top: 20px;

    justify-content: center;
    align-items: center;
`
export const RegisterPetText = styled.Text`
    font-family: Nunito400;
    font-size: 16px;
    color: ${colors.text.third};
`
export const ModalizeButton = styled(RectButton)`
    width: 100%;
    height: ${screen.height * .1 * .5}px;
    padding: 0 20px;

    flex-direction: row;
    align-items: center;
`
export const ModalizeButtonText = styled.Text`
    margin-left: 15px;

    font-family: Nunito400;
    font-size: 18px;
    color: ${colors.text.third};
`

const styles = StyleSheet.create({
    mainContent: {
        paddingHorizontal: screen.width*0.07,
        paddingVertical: screen.height*0.02,

        alignItems: 'center'
    }
})

export default styles;