import React from 'react';
import styled from 'styled-components/native';
import  { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    CreateAppointment: undefined;
    Profile: undefined;
};

type ProfileScreenprops = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC<ProfileScreenprops> = ({
    navigation}) => {
        return (
            <Container>
                <HeaderContainer>
                    <HeaderContainer>
                        <HeaderTitle>Meu Perfil</HeaderTitle>
                    </HeaderContainer>
                </HeaderContainer>

                <Content>
                    <Button
                    title="Voltar"
                    icon={{
                        name: 'arow-left',
                        type: 'font-awesome',
                        size: 20,
                        color: 'white'
                    }}
                    buttonStyle={{
                        backgroundColor: theme.colors.primary,
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 20
                    }}
                    onPress={() => navigation.goBack()}
                    />

                    <ProfileInfo>
                        <Avatar source = {{ uri: 'https://via.placeholder.com/150'}} />
                        <Name>Nome do Usuário</Name>
                        <Email>usuario@email.com</Email>
                    </ProfileInfo>
                </Content>
            </Container>
        );
    };

    const Container = styled.view`
        flex: 1;
    `;


