import { StyleSheet } from 'react-native';

import screen from '../../constants/screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        paddingTop: screen.height * 0.02,
        paddingHorizontal: screen.width * 0.05,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerTitle: {
        color: colors.text.third,
        fontSize: 20,
        fontFamily: 'Nunito400'
    }
})

export default styles;