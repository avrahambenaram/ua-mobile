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

        paddingHorizontal: screen.width*.05,
        paddingVertical: screen.height*.03,

        alignItems: 'center'
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    infoAside: {
        height: screen.width*.3,

        flexDirection: 'column'
    },

    infoAsideContainer: {
        flexDirection: 'row'
    },

    infoAsideLabel: {
        width: screen.width*.2,
        backgroundColor: colors.primary.default,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        zIndex: 5000,

        justifyContent: 'center',
        alignItems: 'center'
    },

    infoAsideValue: {
        width: screen.width*.4,
        backgroundColor: colors.background.secondary,
        transform: [{
            translateX: -5
        }],
        zIndex: 4999,

        justifyContent: 'center',
        alignItems: 'center'
    },

    infoAsideText: {
        fontFamily: 'Nunito400',
        fontSize: 16
    },

    photo: {
        width: screen.width*.3,
        height: screen.width*.3,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    section: {
        paddingHorizontal: screen.width * 0.05,
        paddingVertical: 15,
        width: '100%',
        marginTop: 25,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: colors.background.primary
    },

    sectionTitle: {
        color: colors.text.primary,
        marginBottom: 10,
        fontFamily: 'Nunito400',
        fontSize: 18
    },

    contactInfo: {
        width: '100%',

        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    contactLabel: {
        fontFamily: 'Nunito400',
        fontSize: 16,
        color: colors.text.primary
    },

    contactValue: {
        fontFamily: 'Nunito400',
        fontSize: 16,
        color: colors.text.secondary
    },

    text: {
        fontFamily: 'Nunito400',
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 20
    },

    map: {
        width: '100%',
        borderRadius: 10,
        height: screen.height*0.3
    }
})

export default styles;