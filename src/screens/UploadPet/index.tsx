import { useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions, useCameraPermissions, launchCameraAsync } from 'expo-image-picker';

import styles from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

interface Image {
    name: string
    type: string
    uri: string
}

function UploadPet() {

    const { params } = useRoute() as any;

    const [cameraStatus, requestCameraPermission] = useCameraPermissions();

    const modalizeRef = useRef<Modalize>();

    const [image, setImage] = useState<Image>();
    const [petName, setPetName] = useState('');
    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
    const [hairColor, setHairColor] = useState('');
    const [hairType, setHairType] = useState<'curly' | 'straight'>('curly');

    const petConfig: any = {
        petFound: {
            sectionTitle: 'Conte sobre o pet que você encontrou'
        },
        petLost: {
            sectionTitle: 'Conte sobre o pet que você perdeu'
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
                }
            }
        } catch(err) {
            Alert.alert('Um erro ocorreu', `${err}`);
        }
    }

    return <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.main} contentContainerStyle={styles.mainContent}>
            <RectButton onPress={handleUploadImage}>
                {image ? <Image
                    style={styles.image}
                    source={{ uri: image.uri }}
                /> : <View style={styles.image}>
                    <Text style={styles.imageText}>Faça upload da foto do pet aqui</Text>
                    <Feather
                        name='upload'
                        size={20}
                        color={colors.text.third}
                    />
                </View>}
            </RectButton>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{petConfig[params.mode].sectionTitle}</Text>
                <TextInput
                    style={styles.sectionInput}
                    placeholder='Digite o nome do pet'
                    value={petName}
                    onChangeText={txt => setPetName(txt)}
                />
                <TextInput
                    style={styles.sectionInput}
                    placeholder='Digite a raça do pet'
                    value={breed}
                    onChangeText={txt => setBreed(txt)}
                />
                <TextInput
                    style={styles.sectionInput}
                    placeholder='Digite a cor do pelo'
                    value={hairColor}
                    onChangeText={txt => setHairColor(txt)}
                />
                <View style={styles.pickerItems}>
                    <Text style={styles.pickerText}>Tipo do pelo:</Text>
                    <Picker
                        selectedValue={hairType}
                        onValueChange={newHairType => setHairType(newHairType)}
                        mode='dropdown'
                        style={{width:'50%'}}
                    >
                        <Picker.Item label='Enrolado' value='curly'/>
                        <Picker.Item label='Liso' value='sraight'/>
                    </Picker>
                </View>
                <View style={styles.pickerItems}>
                    <Text style={styles.pickerText}>Genêro do pet:</Text>
                    <Picker
                        selectedValue={gender}
                        onValueChange={newGender => setGender(newGender)}
                        mode='dropdown'
                        style={{width: '40%' }}
                    >
                        <Picker.Item label='Macho' value='male'/>
                        <Picker.Item label='Fêmea' value='female'/>
                    </Picker>
                </View>
                <View style={styles.pickerItems}>
                    <Text style={styles.pickerText}>Tamanho do pet:</Text>
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
                </View>
            </View>
        </ScrollView>
        <Modalize
            ref={modalizeRef}
            modalHeight={screen.height*.1}
            modalStyle={{
                backgroundColor: colors.primary.default
            }}
        >
            <RectButton style={styles.modalizeButton} onPress={handleUploadImageCamera}>
                <Feather
                    name='camera'
                    size={20}
                    color={colors.text.third}
                />
                <Text style={styles.modalizeButtonText}>Câmera</Text>
            </RectButton>
            <RectButton style={styles.modalizeButton} onPress={handleUploadImageGallery}>
                <Feather
                    name='image'
                    size={20}
                    color={colors.text.third}
                />
                <Text style={styles.modalizeButtonText}>Galeria</Text>
            </RectButton>
        </Modalize>
    </View>
}

export default UploadPet;