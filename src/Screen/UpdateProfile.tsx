import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import Header from '../Component/Header';
import { TextInput, Searchbar } from 'react-native-paper';
import Button from '../Component/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const classData = [
    { id: 1, name: 'LKG' },
    { id: 2, name: 'UKG' },
    { id: 3, name: 'Class 1' },
    { id: 4, name: 'Class 2' },
    { id: 5, name: 'Class 3' },
    { id: 6, name: 'Class 4' },
    { id: 7, name: 'Class 5' },
    { id: 8, name: 'Class 6' },
    { id: 9, name: 'Class 7' },
    { id: 10, name: 'Class 8' },
    { id: 11, name: 'Class 9' },
    { id: 12, name: 'Class 10' },
    { id: 13, name: 'Class 11' },
    { id: 14, name: 'Class 12' },
    { id: 15, name: 'Repeater-JEE/NEET' },
];
const boardData = [
    { id: 1, name: '10CSE' },
    { id: 2, name: 'CBSE' },
    { id: 3, name: 'STATE' },
    { id: 4, name: 'ICSE' },
]

interface Props{
    navigation: NavigationProp<ParamListBase>; 
}
const UpdateProfile: React.FC<Props> = ({navigation}) => {
    const [name, setName] = useState('');
    const [selectedClass, setSelectedClass] = useState<number>(1);
    const [showBoardSelection, setShowBoardSelection] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = React.useState('');


    const renderClassItem = ({ item }: { item: { id: number; name: string } }) => {
        const boxStyle = item.id === 15 ? styles.lastClassBox : styles.classBox;
        return (
            <TouchableOpacity
                style={[
                    boxStyle,
                    selectedClass === item.id && { backgroundColor: 'green' },
                ]}
                onPress={() => toggleSelection(item.id)}
            >
                <Text style={styles.classText}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const toggleSelection = (id: number) => {
        setSelectedClass(id);
        if (id == 13 || id == 14) {
            setShowBoardSelection(true)
        } else {
            setShowBoardSelection(false)
        }
    };

    const UpdateProfileHandler = () => {
        navigation.navigate('ExamAppearSelectionScreen')

    }
    const renderBoardItem = ({ item }: { item: { id: number; name: string } }) => {
        return (
            <TouchableOpacity style={styles.boardBox}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Header progress={0.2}  />
            <ScrollView>
                <Text style={styles.NameTextHeading}>Enter Student's Name</Text>
                <TextInput
                    placeholder='for eg. Rahul Prathmesh'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    mode={'outlined'}
                    outlineColor='#ffffff'
                    outlineStyle={{ borderColor: '#e2e2e2' }}
                />
                <Text style={styles.NameTextHeading}>Select Class</Text>
                {/* Render each row */}
                <View style={styles.rowContainer}>
                    {renderClassItem({ item: classData[0] })}
                    {renderClassItem({ item: classData[1] })}
                </View>

                <FlatList
                    data={classData.slice(2, 14)}
                    renderItem={renderClassItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                />
                {showBoardSelection &&
                    <View style={styles.boardSelectBox}>
                        <Text style={styles.NameTextHeading}>Select A Board</Text>
                        <FlatList
                            data={boardData}
                            renderItem={renderBoardItem}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                        />
                        <Searchbar
                            placeholder="Find Other State Board"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={{borderRadius:4, margin:10,backgroundColor:'#ffff' }}
                        />
                    </View>
                }


                <View style={styles.rowContainer}>
                    {renderClassItem({ item: classData[14] })}
                </View>


                <View style={{ marginVertical: 15 }}>
                    <Button title='Update Profile' onPress={UpdateProfileHandler} />
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    NameTextHeading: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginBottom: 15,
        marginLeft:10
    },
    classBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: 50,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        borderRadius: 5,
        marginBottom: 15,
        marginRight: 17
    },
    classText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',

    },
    rowContainer: {
        flexDirection: 'row',
    },
    lastClassBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 50,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        borderRadius: 5,
        marginBottom: 15,
        marginRight: 17
    },
    boardSelectBox: {
        backgroundColor: '#D1FFBD',
        borderRadius: 5,
        height: 180,
        marginBottom: 15
    },
    boardBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 60,
        margin: 10,
        borderWidth: 0.6,
        backgroundColor: '#ffffff'
    }
});
