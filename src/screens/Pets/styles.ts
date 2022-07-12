import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary.default
    },

    floatButton: {
        width: 55,
        height: 55,
        borderRadius: 55/2,
        backgroundColor: '#fff',
        position: 'absolute',
        elevation: 3,
        shadowColor: '#000',
        transform: [{
            translateX: screen.width * 0.8
        }, {
            translateY: screen.height * 0.8
        }],

        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },

    main: {
        width: '100%',
        height: '90%'
    },

    mainContent: {
        alignItems: 'center',
        paddingVertical: 10
    }
})

export default styles;