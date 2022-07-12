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
        height: screen.height * 0.9
    },

    mainContent: {
        paddingHorizontal: screen.width * 0.05,
        paddingTop: 15,
        paddingBottom: 20,

        alignItems: 'center'
    },

    section: {
        paddingHorizontal: screen.width * 0.05,
        paddingVertical: 15,
        width: '100%',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: colors.background.primary
    },

    sectionTitle: {
        color: colors.text.secondary,
        fontFamily: 'Nunito400',
        fontSize: 18
    },

    inputContainer: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.input,
        borderRadius: 10,
        paddingHorizontal: 10,

        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        flex: 1,
        marginLeft: 10,

        color: colors.text.primary
    },

    signUpButton: {
        width: '80%',
        borderRadius: 20,
        paddingVertical: 15,
        marginVertical: 5,
        backgroundColor: colors.primary.default,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    signUpButtonText: {
        color: colors.text.third,
        fontFamily: 'Nunito400'
    },

    errorText: {
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.error
    },

    text: {
        color: colors.text.primary,
        fontFamily: 'Nunito400',
        fontSize: 18,
        marginVertical: 15
    },

    socialMediaContainer: {
        width: '100%',
        height: 50,
        marginTop: 15,

        flexDirection: 'row',
        justifyContent: 'center'
    },

    socialMedia: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        backgroundColor: colors.primary.default,

        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;