import { useRef, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { Picker } from '@react-native-picker/picker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Marker, PROVIDER_GOOGLE  } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { launchImageLibraryAsync, MediaTypeOptions, useCameraPermissions, launchCameraAsync } from 'expo-image-picker';

import styles, {
    Container,
    Main,
    Image,
    ImageView,
    ImageText,
    Section,
    SectionTitle,
    SectionInput,
    PickerItems,
    PickerText,
    Text,
    Map,
    ErrorText,
    RegisterPet,
    RegisterPetText,
    ModalizeButton,
    ModalizeButtonText
} from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

import api from '../../services/api';

interface ImageProp {
    name: string
    type: string
    uri: string
}
interface Coordinate {
    latitude: number,
    longitude: number
}

function UploadPet() {

    const { params } = useRoute() as any;
    const navigation = useNavigation();

    const auth: Auth = useSelector((store: any) => store.auth);

    const [cameraStatus, requestCameraPermission] = useCameraPermissions();

    const modalizeRef = useRef<Modalize>();

    const [image, setImage] = useState<ImageProp>();
    const [petName, setPetName] = useState('');
    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
    const [hairColor, setHairColor] = useState('');
    const [hairType, setHairType] = useState<'curly' | 'straight'>('curly');
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [position, setPosition] = useState<Coordinate>();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const petConfig: any = {
        petFound: {
            sectionTitle: 'Conte sobre o pet que você encontrou',
            mapTitle: 'Mostre onde você encontrou o pet',
            markerText: 'Seu pet foi encontrado aqui'
        },
        petLost: {
            sectionTitle: 'Conte sobre o pet que você perdeu',
            mapTitle: 'Mostre onde o seu pet foi visto pela última vez',
            markerText: 'Seu pet foi visto aqui'
        }
    }

    function handleUploadImage() {
        if (modalizeRef.current) {
            modalizeRef.current.open();
        }
    }

    async function handleUploadImageGallery() {
        try {
            const result = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
                exif: true
            })
            if (!result.cancelled) {
                setImage({
                    uri: result.uri,
                    name: `pet.png`,
                    type: 'image/png'
                })
                modalizeRef.current?.close();
            }
        } catch(err) {
            Alert.alert('Um erro ocorreu', `${err}`);
        }
    }

    async function handleUploadImageCamera() {
        try {
            if (!cameraStatus) return;
            if (!cameraStatus.granted) {
                await requestCameraPermission();
            }
            if (cameraStatus.granted) {
                const result = await launchCameraAsync({
                    mediaTypes: MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                    exif: true
                })
                if (!result.cancelled) {
                    setImage({
                        uri: result.uri,
                        name: `pet.png`,
                        type: 'image/png'
                    })
                    modalizeRef.current?.close();
                }
            }
        } catch(err) {
            Alert.alert('Um erro ocorreu', `${err}`);
        }
    }

    function handleGetCoordinate(coordinates: Coordinate) {
        setPosition(coordinates);
    }

    async function handleUploadPet() {
        setLoading(true);
        try {
            if (!auth.authenticated) {
                setError(true);
                setErrorMessage('Você não está autênticado');
                setLoading(false);
                return;
            }
            if (!image) {
                setLoading(false);
                return Alert.alert('Erro', 'Por favor, faça upload da foto do pet');
            }
            if (!petName || !breed || !gender || !size || !hairColor || !hairType) {
                setLoading(false);
                return Alert.alert('Erro', 'Por favor, preencha todas as informações do pet');
            }
            if (!name || !email || !phone) {
                setLoading(false);
                return Alert.alert('Erro', 'Por favor, preencha todas as informações de contato');
            }

            const formData = new FormData();
            formData.append('image', image as any);
            formData.append('pet_name', petName);
            formData.append('breed', breed);
            formData.append('gender', gender);
            formData.append('size', size);
            formData.append('hair_color', hairColor);
            formData.append('hair_type', hairType);

            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);

            const { data } = await api.post(params.mode.toLowerCase(), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': auth.token
                }
            });
            if (data) {
                Alert.alert('Pet cadastrado com sucesso');
            }
            navigation.goBack();
        } catch(err: any) {
            setError(true);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage('Um erro ocorreu ao cadastrar seu pet');
            }
        }
        setLoading(false);
    }

    return <Container>
        <Header/>
        <Main contentContainerStyle={styles.mainContent}>
            <RectButton onPress={handleUploadImage}>
                {image ? <Image
                    source={{ uri: image.uri }}
                /> : <ImageView>
                    <ImageText>Faça upload da foto do pet aqui</ImageText>
                    <Feather
                        name='upload'
                        size={20}
                        color={colors.text.third}
                    />
                </ImageView>}
            </RectButton>
            {!auth.authenticated ? <ErrorText>
                ATENÇÃO! Para criar um pet, você precisa estar autênticado
            </ErrorText> : null}
            <Section>
                <SectionTitle>{petConfig[params.mode].sectionTitle}</SectionTitle>
                <SectionInput
                    placeholder='Digite o nome do pet'
                    value={petName}
                    onChangeText={(txt: string) => setPetName(txt)}
                />
                <SectionInput
                    placeholder='Digite a raça do pet'
                    value={breed}
                    onChangeText={(txt: string) => setBreed(txt)}
                />
                <SectionInput
                    placeholder='Digite a cor do pelo'
                    value={hairColor}
                    onChangeText={(txt: string) => setHairColor(txt)}
                />
                <PickerItems>
                    <PickerText>Tipo do pelo:</PickerText>
                    <Picker
                        selectedValue={hairType}
                        onValueChange={newHairType => setHairType(newHairType)}
                        mode='dropdown'
                        style={{width:'50%'}}
                    >
                        <Picker.Item label='Enrolado' value='curly'/>
                        <Picker.Item label='Liso' value='sraight'/>
                    </Picker>
                </PickerItems>
                <PickerItems>
                    <PickerText>Genêro do pet:</PickerText>
                    <Picker
                        selectedValue={gender}
                        onValueChange={newGender => setGender(newGender)}
                        mode='dropdown'
                        style={{width: '40%' }}
                    >
                        <Picker.Item label='Macho' value='male'/>
                        <Picker.Item label='Fêmea' value='female'/>
                    </Picker>
                </PickerItems>
                <PickerItems>
                    <PickerText>Tamanho do pet:</PickerText>
                    <Picker
                        selectedValue={size}
                        onValueChange={newSize => setSize(newSize)}
                        mode='dropdown'
                        style={{width: '40%'}}
                    >
                        <Picker.Item label='Pequeno' value='small'/>
                        <Picker.Item label='Médio' value='medium'/>
                        <Picker.Item label='Grande' value='large'/>
                    </Picker>
                </PickerItems>
            </Section>
            <Section>
                <SectionTitle>Informe sobre o contato</SectionTitle>
                <SectionInput
                    placeholder="Digite o nome"
                    value={name}
                    onChangeText={(txt: string) => setName(txt)}
                />
                <SectionInput
                    placeholder="Digite um e-mail válido"
                    value={email}
                    onChangeText={(txt: string) => setEmail(txt)}
                    keyboardType='email-address'
                />
                <SectionInput
                    placeholder="Digite um telefone"
                    value={phone}
                    onChangeText={(txt: string) => setPhone(txt)}
                    keyboardType='phone-pad'
                />
            </Section>
            <Text>{petConfig[params.mode].mapTitle}</Text>
            <Map
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    longitude: -46.5580029,
                    latitude: -23.6680181,
                    longitudeDelta: .7,
                    latitudeDelta: .7
                }}
                onPress={(evt: any) => handleGetCoordinate(evt.nativeEvent.coordinate)}
            >
                {position ? <Marker
                    coordinate={{
                        ...position,
                        longitudeDelta: .1,
                        latitudeDelta: .1
                    }}
                    title={petName || 'Pet'}
                    description={petConfig[params.mode].markerText}
                /> : null}
            </Map>
            {loading ? <ActivityIndicator
                size='large'
                color={colors.primary.default}
            /> : null}
            {error ? <ErrorText>
                {errorMessage}
            </ErrorText> : null}
            <RegisterPet onPress={handleUploadPet}>
                <RegisterPetText>Cadastrar pet</RegisterPetText>
            </RegisterPet>
        </Main>
        <Modalize
            ref={modalizeRef}
            modalHeight={screen.height*.1}
            modalStyle={{
                backgroundColor: colors.primary.default
            }}
        >
            <ModalizeButton onPress={handleUploadImageCamera}>
                <Feather
                    name='camera'
                    size={20}
                    color={colors.text.third}
                />
                <ModalizeButtonText>Câmera</ModalizeButtonText>
            </ModalizeButton>
            <ModalizeButton onPress={handleUploadImageGallery}>
                <Feather
                    name='image'
                    size={20}
                    color={colors.text.third}
                />
                <ModalizeButtonText>Galeria</ModalizeButtonText>
            </ModalizeButton>
        </Modalize>
    </Container>
}

export default UploadPet;