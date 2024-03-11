import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RadioButton, Text, Searchbar } from 'react-native-paper';
import Button from '../Component/Button';


interface Props {
    navigation: NavigationProp<ParamListBase>;
}
const SelectGoalScreen: React.FC<Props> = ({ navigation }) => {
    const [value, setValue] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');


    return (
        <View style={styles.container}>
             <Header progress={0.6}  />
            <View style={{ flex: 1, justifyContent: 'space-between', marginTop:10 }}>
                <View>
                    <View style={styles.firstBox}>
                        <Text style={styles.headlineText}>To help you with course material to achieve your goal</Text>
                    </View>
                    <Text style={styles.selectGoalText}>Please Select Your Goal</Text>
                    <Text style={styles.subText}>NFJSBF FNDJHF SJFNJN</Text>

                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                        <View style={styles.radioIconWithText}>
                            <RadioButton value="first" />
                            <Text style={styles.yearText}>English Speaking Reading Writing</Text>
                        </View>

                        <View style={styles.radioIconWithText}>
                            <RadioButton value="second" />
                            <Text style={styles.yearText}>Class/Board/Exams</Text>
                        </View>

                        <View style={styles.radioIconWithText}>
                            <RadioButton value="third" />
                            <Text style={styles.yearText}>NEET/JEE/Foundation</Text>
                        </View>

                        <View style={styles.radioIconWithText}>
                            <RadioButton value="Fourth" />
                            <Text style={styles.yearText}>Olympods/NTSE</Text>
                        </View>
                    </RadioButton.Group>

                    <Searchbar
                        placeholder="Find Other Goals"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={{
                            borderRadius: 0, backgroundColor: '#ffff', borderWidth: 0.3, marginTop: 20, height: 50,
                        }}
                    />
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Button title='Continue' onPress={() => navigation.navigate('SchoolMediumScreen')} />
                </View>
            </View>
        </View>
    )
}

export default SelectGoalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    firstBox: {
        backgroundColor: '#D1FFBD',
        padding: 10
    },
    headlineText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'

    },
    selectGoalText: {
        marginTop: 25,
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    subText: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600',
        marginBottom: 25
    },
    radioIconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        marginVertical: 8,
        height: 50
    },
    yearText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
})