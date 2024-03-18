import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateProfile from '../Screen/UpdateProfile';
import ExamAppearSelectionScreen from '../Screen/ExamAppearSelectionScreen';
import SelectGoalScreen from '../Screen/SelectGoalScreen';
import SchoolMediumScreen from '../Screen/SchoolMediumScreen';
import CourseDetailScreen from '../Screen/OrderDetail/CourseDetailScreen';
import CurriculumScreen from '../Screen/OrderDetail/CurriculumScreen';
import CourseBuyScreen from '../Screen/OrderDetail/CourseBuyScreen';
import CourseListScreen from '../Screen/CourseListScreen';
import DailyCheckIn from '../Screen/DailyCheckIn';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DailyCheckIn' screenOptions={{
                headerShown: false
                
            }}>
                <Stack.Screen name='UpdateProfileScreen' component={UpdateProfile} />
                <Stack.Screen name='ExamAppearSelectionScreen' component={ExamAppearSelectionScreen}/>
                <Stack.Screen name='SelectGoalScreen' component={SelectGoalScreen} />
                <Stack.Screen name='SchoolMediumScreen'  component={SchoolMediumScreen}/>
                <Stack.Screen name='CourseDetailScreen' component={CourseDetailScreen}/>
                <Stack.Screen name='CurriculumScreen'  component={CurriculumScreen}/>
                <Stack.Screen name='CourseBuyScreen' component={CourseBuyScreen} />
                <Stack.Screen name='CourseListScreen' component={CourseListScreen} />
                <Stack.Screen name='DailyCheckIn' component={DailyCheckIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})