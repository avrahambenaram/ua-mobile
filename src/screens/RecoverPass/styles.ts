import { StyleSheet } from 'react-native';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    main: {
        width: '100%',
        height: '90%',

        paddingHorizontal: screen.width * 0.1,
        paddingVertical: screen.height * 0.1
    },

    text: {
        color: colors.text.secondary,
        fontFamily: 'Nunito400',
        fontSize: 20,

        marginVertical: 10
    },

    textInput: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.border.input,
        borderRadius: 10,
        marginBottom: 20
    },

    recoverButton: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: colors.primary.default,
        borderRadius: 15,

        justifyContent: 'center',
        alignItems: 'center'
    },

    recoverButtonText: {
        color: colors.text.third,
        fontFamily: 'Nunito400',
        fontSize: 20
    }
})

export default styles;