import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

import Pets from '../screens/Pets';

import colors from '../constants/colors';

function PetsFound() {
    return <Pets mode='petFound'/>
}
function PetsLost() {
    return <Pets mode='petLost'/>
}

function PetDrawer() {
    const { Navigator, Screen } = createDrawerNavigator();

    return <Navigator
        useLegacyImplementation
        initialRouteName='petsfound'
        screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerActiveTintColor: '#fff',
            drawerActiveBackgroundColor: colors.primary.active,
            drawerInactiveTintColor: colors.primary.default,
            drawerInactiveBackgroundColor: '#fff'
        }}
        backBehavior='history'
    >
        <Screen
            name='petsfound'
            component={PetsFound}
            options={{
                drawerLabel: 'Pets encontrados',
                drawerIcon: props => <FontAwesome5 name='paw' size={18} color={props.color}/>
            }}
        />
        <Screen
            name='petslost'
            component={PetsLost}
            options={{
                drawerLabel: 'Pets perdidos',
                drawerIcon: props => <FontAwesome5 name='bone' size={18} color={props.color}/>
            }}
        />
    </Navigator>
}

export default PetDrawer;