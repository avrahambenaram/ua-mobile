import { StyleSheet } from 'react-native';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    modalBlock: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        alignItems: 'center'
    },

    modalText: {
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.error
    },

    container: {
        flex: 1,
        alignItems: 'center'
    },

    main: {
        width: '100%',
        height: '90%',
    },

    mainContent: {
        paddingHorizontal: screen.width*0.07,
        paddingVertical: screen.height*0.02,

        alignItems: 'center'
    },

    image: {
        width: screen.width*0.35,
        height: screen.width*0.35,
        backgroundColor: colors.primary.default,
        borderRadius: 20,
        paddingHorizontal: 10,

        justifyContent: 'center',
        alignItems: 'center'
    },

    imageText: {
        fontFamily: 'Nunito400',
        fontSize: 16,
        color: colors.text.third
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

    sectionInput: {
        fontFamily: 'Nunito400',
        fontSize: 16,
        color: colors.text.primary,
        padding: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.input
    },

    pickerItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },

    pickerText: {
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.primary,
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
    },

    modalizeButton: {
        width: '100%',
        height: screen.height*.1*.5,
        paddingHorizontal: 20,

        flexDirection: 'row',
        alignItems: 'center'
    },

    modalizeButtonText: {
        marginLeft: 15,
        fontFamily: 'Nunito400',
        fontSize: 18,
        color: colors.text.third
    }
})

export default styles;