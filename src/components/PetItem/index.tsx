import { FontAwesome5 } from '@expo/vector-icons';

import {
    Container,
    PetImage,
    PetInfo,
    PetInfoDiv,
    PetText
} from './styles';
import colors from '../../constants/colors';

import petConfig from '../../config/pet.json';

import { baseURL as apiURL } from '../../services/api';

interface Props {
    pet: Pet
    onPress: Function
}

function PetItem({ pet, onPress }: Props) {
    return <Container onPress={onPress as any}>
        <PetImage
            source={{ uri: `${apiURL}/pet/image/${pet.pet.image}` }}
        />
        <PetInfo>
            <PetInfoDiv>
                <PetText style={{ maxWidth: '75%' }}>{pet.pet.pet_name}</PetText>
                <PetText>{petConfig.screens.attributes.label.size[pet.pet.size]}</PetText>
            </PetInfoDiv>
            <PetInfoDiv>
                <FontAwesome5
                    name={petConfig.screens.attributes.icons.gender[pet.pet.gender]}
                    size={18}
                    color={colors.text.secondary}
                />
                <PetText>{pet.pet.breed}</PetText>
            </PetInfoDiv>
        </PetInfo>
    </Container>
}

export default PetItem;