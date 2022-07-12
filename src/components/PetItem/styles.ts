import { StyleSheet } from 'react-native';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        width: screen.width * 0.4,
        height: screen.width * 0.4 + 50,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 3,
        marginHorizontal: 10
    },

    image: {
        width: screen.width * 0.4,
        height: screen.width * 0.4,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },

    petInfo: {
        width: '100%',
        height: 50
    },

    petInfoDiv: {
        width: '100%',
        height: '50%',
        paddingHorizontal: 5,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text: {
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.secondary
    }
})

export default styles;