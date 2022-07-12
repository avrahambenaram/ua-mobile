import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';
import SignUp from '../screens/SignUp';
import RecoverPass from '../screens/RecoverPass';
import UploadPet from '../screens/UploadPet';
import Pet from '../screens/Pet';

function Stack() {

    const { Navigator, Screen } = createStackNavigator();

    return <View style={{ width: '100%', height: '100%' }}>
        <NavigationContainer>
            <Navigator
                initialRouteName='bottomtab'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen
                    name='bottomtab'
                    component={BottomTab}
                />
                <Screen
                    name='signup'
                    component={SignUp}
                />
                <Screen
                    name='recoverpass'
                    component={RecoverPass}
                />
                <Screen
                    name='uploadpet'
                    component={UploadPet}
                />
                <Screen
                    name='pet'
                    component={Pet}
                />
            </Navigator>
        </NavigationContainer>
    </View>
}

export default Stack;