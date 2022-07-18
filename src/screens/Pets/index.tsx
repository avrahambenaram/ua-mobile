import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles, {
    Container,
    FloatButton,
    Main
} from './styles';

import Header from '../../components/Header';
import PetItem from '../../components/PetItem';

import petConfig from '../../config/pet.json';

import colors from '../../constants/colors';

import api from '../../services/api';

interface Props {
    mode: 'petLost' | 'petFound'
}

function Pets({ mode }: Props) {

    const apiPath = petConfig.api.path[mode];

    const navigation = useNavigation();

    const [pets, setPets] = useState<Array<Pet>>([]);
    const [page, setPage] = useState(1);

    async function load() {
        try {
            const { data: newPets } = await api.get(apiPath);
            setPets(newPets);
            setPage(1);
        } catch(err) {
            console.log(err);
            alert('Um erro ocorreu ao carregar os pets');
        }
    }

    async function handleMorePets() {
        try {
            const { data: morePets } = await api.get(`${apiPath}?page=${page + 1}`);
            const newPets = pets.concat(morePets);

            setPets(newPets);
            setPage(page + 1);
        } catch(err) {
            console.log(err);
            alert('Erro ao carregar mais pets');
        }
    }

    function handleSeePet(pet: Pet) {
        (navigation as any).navigate('pet', {
            mode,
            headerTitle: `Pet ${pet.pet.pet_name}`,
            pet
        })
    }

    function handleAddPet() {
        (navigation as any).navigate('uploadpet', {
            mode,
            headerTitle: 'Cadastrar pet'
        })
    }

    useEffect(() => {
        load();
    }, [])

    return <Container>
        <Header
            drawer
            headerTitle={petConfig.screens.header.title[mode]}
        />
        <FloatButton onPress={handleAddPet}>
            <FontAwesome5
                name='plus'
                size={18}
                color={colors.primary.default}
            />
        </FloatButton>
        <Main
            contentContainerStyle={styles.mainContent}
            data={pets}
            renderItem={({ item }: { item: Pet }) => <PetItem pet={item} onPress={() => handleSeePet(item)}/>}
            keyExtractor={(pet: Pet) => pet.uuid}
            onEndReached={handleMorePets}
            onEndReachedThreshold={0.2}
            numColumns={2}
            columnWrapperStyle={{ marginTop: 10 }}
        />
    </Container>
}

export default Pets;