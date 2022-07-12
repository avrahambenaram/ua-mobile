import { View } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

function Profile() {
    return <View style={styles.container}>
        <Header
            headerTitle='Perfil'
        />
    </View>
}

export default Profile;