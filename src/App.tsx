import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreens';
import { SafeAreaView,StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <SafeAreaView style = {{ flex: 1}}>
                <StatusBar barStyle="light-content" backgroundColor="#007BFF"/>
                <Stack.navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.navigator>
            </SafeAreaView>
        </NavigationContainer> 
    );
}
