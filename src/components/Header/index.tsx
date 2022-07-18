import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import {
    Container,
    HeaderTitle
} from './styles';
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
                return <HeaderTitle>
                    {route.params.headerTitle}
                </HeaderTitle>
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

    return <Container
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
        {props.headerTitle ? <HeaderTitle>
            {props.headerTitle}
        </HeaderTitle> : null}
    </Container>
}

export default Header;