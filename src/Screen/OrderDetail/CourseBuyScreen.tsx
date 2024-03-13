import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


interface Props {
    navigation: NavigationProp<ParamListBase>;
}


const CourseBuyScreen:React.FC<Props> = ({navigation}) => {
    const [value, setValue] = React.useState('');


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' size={25} color='black' />
                    </Pressable>
                    <Text style={styles.headingText}>Buy This Course</Text>
                </View>

                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.radioIconWithText}>
                        <RadioButton value="first" />
                        <Text style={styles.yearText}>One Time Payment</Text>
                    </View>

                    <View style={styles.radioIconWithText}>
                        <RadioButton value="second" />
                        <Text style={styles.yearText}>Monthly Payment (2,000/ Per Month)</Text>
                    </View>
                </RadioButton.Group>

            </ScrollView>
            <View style={{ marginVertical: 20 }}>
                <ButtonWithIcon title='Proceed' onPress={() => ''} />
            </View>
        </View>
    )
}

export default CourseBuyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    headingText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    },
    radioIconWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: 8,
        height: 45
    },
    yearText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
})