import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateProfile from '../Screen/UpdateProfile';
import ExamAppearSelectionScreen from '../Screen/ExamAppearSelectionScreen';
import SelectGoalScreen from '../Screen/SelectGoalScreen';
import SchoolMediumScreen from '../Screen/SchoolMediumScreen';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='UpdateProfileScreen' component={UpdateProfile} />
                <Stack.Screen name='ExamAppearSelectionScreen' component={ExamAppearSelectionScreen}/>
                <Stack.Screen name='SelectGoalScreen' component={SelectGoalScreen} />
                <Stack.Screen name='SchoolMediumScreen'  component={SchoolMediumScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})