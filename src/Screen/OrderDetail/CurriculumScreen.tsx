import { StyleSheet, Text, View, SectionList, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ButtonWithIcon from '../../Component/ButtonWithIcon';

interface Props {
    navigation: NavigationProp<ParamListBase>;
}
interface SectionDataItem {
    id: string,
    title: string,
    time: string
}

interface SectionData {
    title: string;
    time: string;
    locked?: boolean;
    data: SectionDataItem[];
}

const CurriculumScreen: React.FC<Props> = ({ navigation }) => {

    const data: SectionData[] = [
        {
            title: 'Section 01 - Introduction',
            time: '25 Mins',
            data: [
                { id: '01', title: 'Why Using Graphic Designing', time: '15 Mins' },
                { id: '02', title: 'Setup Your Graphic Design', time: '10 Mins' },
            ]
        },
        {
            title: 'Section 02 - Graphic Design',
            time: '55 Mins',
            locked: true,
            data: [
                { id: '03', title: 'Take a Look Graphic Design', time: '08 Mins' },
                { id: '04', title: 'Working With Graphic Design', time: '25 Mins' },
                { id: '05', title: 'Working with Frame & Layout', time: '12 Mins' },
                { id: '06', title: 'Using Graphic Plugin', time: '10 Mins' },
            ]
        },
    ];

    const renderSectionHeader = ({ section: { title, time, data, locked } }: { section: SectionData }) => (
        <View style={styles.sectionContainer}>
            <>
                <View style={styles.SectionHeadingBox}>
                    <Text style={styles.sectionHeading}>{title}</Text>
                    <Text style={[styles.sectionHeading, { fontSize: 12, fontWeight: '800', color: 'green' }]}>{time}</Text>
                </View>
                {data.map(item => (
                    <View style={styles.innerSection}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.videoNumberBox}>
                                <Text>{item.id}</Text>
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={styles.sectionHeading}>{item.title}</Text>
                                <Text style={[styles.sectionHeading, { fontSize: 13 }]}>{item.time}</Text>
                            </View>
                        </View>
                        <View>
                            {
                                locked ? <Icon name="lock-closed-outline" size={20} color={'black'} /> :
                                    <Icon name="caret-forward-circle-sharp" size={20} color={'green'} />
                            }

                        </View>
                    </View>
                ))}
            </>
        </View>
    );

    const renderItem = ({ item }: { item: SectionDataItem }) => {
        return null;
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' size={25} color='black' />
                    </Pressable>                    
                    <Text style={styles.headingText}>Curricular</Text>
                </View>

                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderSectionHeader={renderSectionHeader}
                    renderItem={renderItem}
                />
            </ScrollView>
            <View style={{ marginVertical: 20 }}>
                <ButtonWithIcon title='Buy This Course' onPress={() => navigation.navigate('CourseBuyScreen')} />
            </View>
        </View>
    )
}

export default CurriculumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    },
    headingText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    },
    SectionHeadingBox:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        marginBottom: 5
    },
    sectionHeading: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    sectionContainer: {
        marginVertical: 10,
    },

    videoNumberBox: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 0.5,
        backgroundColor: '#D5FFff',
        borderColor:'blue',
    },
    innerSection: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 20,

    }
});
