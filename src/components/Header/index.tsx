import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import colors from '../../constants/colors';

interface Props {
    headerTitle?: string
    drawer?: boolean
}

function Header(props: Props) {

    const navigation = useNavigation();
    const route = useRoute() as any;

    function checkParams() {
        if (route.params) {
            if (route.params.headerTitle) {
                return <Text style={styles.headerTitle}>
                    {route.params.headerTitle}
                </Text>
            }
        }
        return null;
    }
    
    function handleGoBack() {
        navigation.goBack();
    }

    function handleOpenDrawer() {
        (navigation as any).openDrawer();
    }

    return <LinearGradient
        style={styles.container}
        colors={[colors.primary.default, '#000']}
        start={{
            x: 0,
            y: 0.5
        }}
        end={{
            x: 1.7,
            y: 0.5
        }}
    >
        <RectButton onPress={props.drawer ? handleOpenDrawer : handleGoBack}>
            <Feather
                name={props.drawer ? 'menu' : 'arrow-left'}
                color={colors.text.third}
                size={30}
            />
        </RectButton>
        {checkParams()}
        {props.headerTitle ? <Text style={styles.headerTitle}>
            {props.headerTitle}
        </Text> : null}
    </LinearGradient>
}

export default Header;