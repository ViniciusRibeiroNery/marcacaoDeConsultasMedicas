import React, { useState } from 'react';
import { ScrollView, FlatList, Alert, Button } from 'react-native';
import styled from 'styled-components/native';
import { HeaderContainer, HeaderTitle } from '../components/Header';


const HomeScreen = () => {
    const[text, setText] = useState('');
    const[items, setItems] = useState([
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
    ]);

    const addItem = () => {
        if (text.trim()){
            setItems([...items, {id: Date.now().toString(), text}]);
            setText('');
        }
    };

    return (
        <Container>
            <HeaderContainer>
                <HeaderTitle>Meu Primeiro App</HeaderTitle>
            </HeaderContainer>

            <Content>
                <Input 
                    placeholder="Digite um item" 
                    onChangeText={setText} 
                    value={text}
                />

                <Addbutton onPress={addItem}>
                    <ButtonText>Adicionar</ButtonText>
                </Addbutton>

                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <ListenItem>
                        <ListItemText>{item.text}</ListItemText>
                    </ListenItem>
                    )}
                />

                <Button
                    title="Sobre"
                    onPress={() => Alert.alert('Bem-vindo', 'Aplicativo React Native')}
                    color="#6c757d"
                />
            </Content>
        </Container>
        );
    };

    const Container = styled.ScrollView`
        flex: 1;
        background-color: #f8f9fa;
    `;

    const Content = styled.View`
        padding: 20px;
    `;

    const Input = styled.TextInput`
        height: 40px;
        border: 1px solid #ced4da;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
    `;

    const Addbutton = styled.TouchableOpacity`
        background-color: #28a745;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;
        align-items: center;
    `;

    const ButtonText = styled.Text`
        Color: white;
        font-weight: bold;
    `;

    const ListenItem = styled.View`
        background-color: white;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 10px;
        elevation: 2;
    `;

    const ListItemText = styled.Text`
        font-size: 16px;
    `;

export default HomeScreen