import { useRoute } from '@react-navigation/native';
import { Marker } from 'react-native-maps';

import {
    Container,
    Main,
    InfoContainer,
    Photo,
    InfoAside,
    InfoAsideContainer,
    InfoAsideLabel,
    InfoAsideValue,
    InfoAsideText,
    Section,
    SectionTitle,
    ContactInfo,
    ContactLabel,
    ContactValue,
    Text,
    Map
} from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';

import { baseURL as apiURL } from '../../services/api';

interface Route {
    params: {
        pet: Pet
        mode: 'petFound' | 'petLost'
    }
}

const petConfig = {
    genders: {
        male: 'Macho',
        female: 'Femêa'
    },
    sizes: {
        small: 'Pequeno',
        medium: 'Médio',
        large: 'Grande'
    },
    types: {
        dog: 'Cachorro'
    }
}

function Pet() {

    const { params }: Route = useRoute() as any;
    const { pet } = params;

    function concatHair() {
        return `${pet.pet.hair_type} e ${pet.pet.hair_color}`;
    }

    return <Container>
        <Header/>
        <Main>
            <InfoContainer>
                <Photo
                    source={{ uri: `${apiURL}/pet/image/${pet.pet.image}` }}
                />
                <InfoAside>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Nome</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{pet.pet.pet_name}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Genêro</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{petConfig.genders[pet.pet.gender]}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Pelo</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{concatHair()}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Tamanho</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{petConfig.sizes[pet.pet.size]}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Raça</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{pet.pet.breed}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                    <InfoAsideContainer>
                        <InfoAsideLabel>
                            <InfoAsideText style={{ color: colors.text.third }}
                            >Tipo</InfoAsideText>
                        </InfoAsideLabel>
                        <InfoAsideValue>
                            <InfoAsideText style={{ color: colors.text.primary }}
                            >{petConfig.types[pet.pet.type]}</InfoAsideText>
                        </InfoAsideValue>
                    </InfoAsideContainer>
                </InfoAside>
            </InfoContainer>
            <Section>
                <SectionTitle>Informações de contato</SectionTitle>
                <ContactInfo>
                    <ContactLabel>Nome</ContactLabel>
                    <ContactValue>{pet.name}</ContactValue>
                </ContactInfo>
                <ContactInfo>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>{pet.email}</ContactValue>
                </ContactInfo>
                <ContactInfo>
                    <ContactLabel>Telefone</ContactLabel>
                    <ContactValue>{pet.phone}</ContactValue>
                </ContactInfo>
            </Section>
            <Text>Última vez visto</Text>
            <Map
                initialRegion={{
                    longitude: -46.5580029,
                    latitude: -23.6680181,
                    longitudeDelta: .7,
                    latitudeDelta: .7
                }}
            >
                <Marker
                    coordinate={{
                        longitude: -46.5580029,
                        latitude: -23.6680181,
                        longitudeDelta: .1,
                        latitudeDelta: .1
                    }}
                    title={`${pet.pet.pet_name} aqui`}
                    description='Aqui foi encontrada'
                />
            </Map>
        </Main>
    </Container>
}

export default Pet;