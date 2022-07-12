import { useRef } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header';

import colors from '../../constants/colors';
import screen from '../../constants/screen';

function UploadPet() {

    const { params } = useRoute() as any;

    const modalizeRef = useRef<Modalize>();

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

    return <View style={styles.container}>
        <Header/>
        <ScrollView style={styles.main} contentContainerStyle={styles.mainContent}>
            <RectButton onPress={handleUploadImage}>
                <View style={styles.image}>
                    <Text style={styles.imageText}>Faça upload da foto do pet aqui</Text>
                    <Feather
                        name='upload'
                        size={20}
                        color={colors.text.third}
                    />
                </View>
            </RectButton>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{petConfig[params.mode].sectionTitle}</Text>
            </View>
        </ScrollView>
        <Modalize
            ref={modalizeRef}
            modalHeight={screen.height*.1}
            modalStyle={{
                backgroundColor: colors.primary.default
            }}
        >
            <RectButton style={styles.modalizeButton}>
                <Feather
                    name='camera'
                    size={20}
                    color={colors.text.third}
                />
                <Text style={styles.modalizeButtonText}>Câmera</Text>
            </RectButton>
            <RectButton style={styles.modalizeButton}>
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