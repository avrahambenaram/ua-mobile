import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import PetDrawer from './PetDrawer';

import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';

import colors from '../constants/colors';

function BottomTab() {

    const { authenticated }: Auth = useSelector((store: any) => store.auth);

    const { Navigator, Screen } = createBottomTabNavigator();

    return <Navigator
        initialRouteName='petdrawer'
        screenOptions={{
            tabBarInactiveTintColor: colors.text.secondary,
            tabBarActiveTintColor: colors.primary.default,
            tabBarLabelStyle: {
                fontFamily: 'Nunito400',
                fontSize: 14
            },
            headerShown: false
        }}
    >
        <Screen
            name='petdrawer'
            component={PetDrawer}
            options={{
                tabBarIcon: props => <FontAwesome5 name='dog' size={20} color={props.color} />,
                tabBarLabel: 'Pets'
            }}
        />
        <Screen
            name='profile'
            component={authenticated ? Profile : SignIn}
            options={{
                tabBarIcon: props => <FontAwesome5 name='user' size={20} color={props.color} />,
                tabBarLabel: 'Perfil'
            }}
        />
    </Navigator>
}

export default BottomTab;