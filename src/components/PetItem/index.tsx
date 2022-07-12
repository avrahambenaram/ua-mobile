import { Image, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../constants/colors';

import petConfig from '../../config/pet.json';

import { baseURL as apiURL } from '../../services/api';

interface Props {
    pet: Pet
    onPress: Function
}

function PetItem({ pet, onPress }: Props) {
    return <RectButton style={styles.container} onPress={onPress as any}>
        <Image
            style={styles.image}
            source={{ uri: `${apiURL}/pet/image/${pet.pet.image}` }}
        />
        <View style={styles.petInfo}>
            <View style={styles.petInfoDiv}>
                <Text style={[styles.text, { maxWidth: '75%' }]}>{pet.pet.pet_name}</Text>
                <Text style={styles.text}>{petConfig.screens.attributes.label.size[pet.pet.size]}</Text>
            </View>
            <View style={styles.petInfoDiv}>
                <FontAwesome5
                    name={petConfig.screens.attributes.icons.gender[pet.pet.gender]}
                    size={18}
                    color={colors.text.secondary}
                />
                <Text style={styles.text}>{pet.pet.breed}</Text>
            </View>
        </View>
    </RectButton>
}

export default PetItem;