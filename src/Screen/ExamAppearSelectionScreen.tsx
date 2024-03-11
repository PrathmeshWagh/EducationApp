import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Component/Header';
import { RadioButton, Text } from 'react-native-paper';
import Button from '../Component/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


interface Props{
    navigation: NavigationProp<ParamListBase>; 
}
const ExamAppearSelectionScreen: React.FC<Props> = ({navigation}) => {
    const [value, setValue] = React.useState('first');

    return (
        <View style={styles.container}>
             <Header progress={0.4}  />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={styles.innerContainer}>
                    <Text style={styles.titleText}>When You appear for Final Exam?</Text>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.radioIconWithText}>
                            <RadioButton value="first" />
                            <Text style={styles.yearText}>2024</Text>
                        </View>
                        <View style={styles.radioIconWithText}>
                            <RadioButton value="second" />
                            <Text style={styles.yearText}>2025</Text>
                        </View>
                        <View style={styles.radioIconWithText}>
                            <RadioButton value="third" />
                            <Text style={styles.yearText}>2026</Text>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={{marginBottom:25}}>
                    <Button title='Continue' onPress={() => navigation.navigate('SelectGoalScreen')} />
                </View>
            </View>
        </View>
    );
};

export default ExamAppearSelectionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    innerContainer: {
        marginTop: 35,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        marginBottom: 15,
        marginLeft: 10,
    },
    radioIconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    yearText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
});
