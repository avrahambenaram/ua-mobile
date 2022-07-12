import { View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

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

    return <View style={styles.container}>
        <Header/>
        <View style={styles.main}>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.photo}
                    source={{ uri: `${apiURL}/pet/image/${pet.pet.image}` }}
                />
                <View style={styles.infoAside}>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Nome</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{pet.pet.pet_name}</Text>
                        </View>
                    </View>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Genêro</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{petConfig.genders[pet.pet.gender]}</Text>
                        </View>
                    </View>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Pelo</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{concatHair()}</Text>
                        </View>
                    </View>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Tamanho</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{petConfig.sizes[pet.pet.size]}</Text>
                        </View>
                    </View>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Raça</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{pet.pet.breed}</Text>
                        </View>
                    </View>
                    <View style={styles.infoAsideContainer}>
                        <View style={styles.infoAsideLabel}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.third
                                    }
                                ]}
                            >Tipo</Text>
                        </View>
                        <View style={styles.infoAsideValue}>
                            <Text
                                style={[
                                    styles.infoAsideText,
                                    {
                                        color: colors.text.primary
                                    }
                                ]}
                            >{petConfig.types[pet.pet.type]}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Informações de contato</Text>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Nome</Text>
                    <Text style={styles.contactValue}>{pet.name}</Text>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Email</Text>
                    <Text style={styles.contactValue}>{pet.email}</Text>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Telefone</Text>
                    <Text style={styles.contactValue}>{pet.phone}</Text>
                </View>
            </View>
            <Text style={styles.text}>Última vez visto</Text>
            <MapView
                style={styles.map}
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
            </MapView>
        </View>
    </View>
}

export default Pet;