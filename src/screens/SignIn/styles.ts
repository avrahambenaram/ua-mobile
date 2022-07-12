import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    header: {
        width: '110%',
        height: '70%',
        transform: [{
            translateY: -(screen.height * 0.35)
        }],
        borderRadius: (screen.width * 1.1)/2,
        paddingVertical: 60,
        backgroundColor: colors.primary.default,

        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logo: {
        width: screen.width * 0.25,
        height: screen.width * 0.25,
        borderRadius: (screen.width * 0.25)/2,
        backgroundColor: colors.primary.default,
        borderWidth: 1,
        borderColor: '#fff'
    },

    interface: {
        width: '100%',
        transform: [{
            translateY: -(screen.height * 0.37)
        }],
        
        alignItems: 'center'
    },

    textInput: {
        width: '80%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        backgroundColor: colors.background.primary,

        color: colors.text.primary,
        fontFamily: 'Nunito400',

        borderWidth: 1,
        borderColor: colors.border.input
    },

    loginButton: {
        width: '80%',
        borderRadius: 20,
        paddingVertical: 15,
        marginVertical: 5,
        backgroundColor: colors.primary.default,

        justifyContent: 'center',
        alignItems: 'center'
    },

    loginButtonText: {
        color: colors.text.third,
        fontFamily: 'Nunito400'
    },

    errorText: {
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.error
    },

    question: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    questionText: {
        color: colors.text.secondary,
        fontFamily: 'Nunito400'
    },

    questionButton: {
        marginLeft: 10
    },

    questionTextButton: {
        color: colors.primary.default,
        fontFamily: 'Nunito600'
    }
})

export default styles;