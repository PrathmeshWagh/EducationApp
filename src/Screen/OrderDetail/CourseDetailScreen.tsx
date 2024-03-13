import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather'
import StarIcon from 'react-native-vector-icons/Ionicons'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ButtonWithIcon from '../../Component/ButtonWithIcon';


const Services = [
    {
        icon: 'book', title: '25 Lessons'
    },
    {
        icon: 'smartphone', title: 'Access Mobile, Desktop & TV'
    },
    {
        icon: 'bar-chart', title: 'Beginner Level'
    },
    {
        icon: 'headphones', title: 'Audio Book'
    },
    {
        icon: 'save', title: 'Lifetime Access'
    },
    {
        icon: 'pen-tool', title: '100 Quizzes'
    },
    {
        icon: 'clipboard', title: 'Certificate On Completion'
    }
]

const ReviewData = [
    {
        name: 'Lalit.P',
        review: 'This Course Has Been Very Useful. Mentor was well spoken totally loved it.',
        time: '2 Weeks Ago',
        rating: '4.5'
    },
    {
        name: 'Kakali.F',
        review: 'This Course Has Been Very Useful. Mentor was well spoken totally loved it.it had a Fun session as well',
        time: '2 Weeks Ago',
        rating: '4.5'
    }
]
interface Props {
    navigation: NavigationProp<ParamListBase>;
}

const CourseDetailScreen: React.FC<Props> = ({ navigation }) => {
    const { width, height } = Dimensions.get('window')
    const [isBtnPress, setIsBtnPress] = useState('About')

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../../Img/studentImage.jpeg')} resizeMode='cover' style={{ width: width, height: height / 2.6 }} />

                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-left' size={25} color={'black'} />
                </TouchableOpacity>

                <View style={styles.graphicDesignTextContainer}>
                    <View style={styles.graphicDesignAndIconBox}>
                        <Text style={styles.graphicDesignText}>Graphic Design</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <StarIcon name='star-sharp' size={14} color={'#FFD700'} />
                            <Text style={[styles.graphicDesignText, { color: 'black', marginLeft: 5 }]}>4.2</Text>
                        </View>
                    </View>
                    <Text style={styles.designPrincipleText}>Design Principles: Organizing ..</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', borderRightWidth: 2, marginRight: 10 }}>
                                <Icon name='video' size={20} color={'#343239'} />
                                <Text style={[styles.graphicDesignText, { color: 'black', marginHorizontal: 10, fontSize: 12 }]}>21 Class</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name='clock' size={20} color={'#343239'} />
                                <Text style={[styles.graphicDesignText, { color: 'black', marginLeft: 10, fontSize: 12 }]}>43 Hours</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.graphicDesignText, { paddingRight: 15, fontSize: 16 }]}>{'\u20B9'}1499/-</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Pressable
                            style={[styles.aboutBtnBox, isBtnPress === 'About' ? styles.activeBtn : null]}
                            onPress={() => setIsBtnPress('About')}>
                            <Text style={[styles.graphicDesignText, { color: 'black' }]}>About</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.aboutBtnBox, isBtnPress === 'Curriculcum' ? styles.activeBtn : null]}
                            onPress={() => setIsBtnPress('Curriculcum')}>
                            <Text style={[styles.graphicDesignText, { color: 'black' }]}>Curriculcum</Text>
                        </Pressable>
                    </View>

                    <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                        <Text >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </View>
                </View>

                <View style={[styles.videoIconCircleBox, {
                    position: 'absolute',
                    right: 30,
                    top: height / 2.85
                }]}>
                    <Icon name='youtube' size={25} color={'white'} />
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <Text style={[styles.graphicDesignText, { color: 'black' }]}>Instructor</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../Img/educationimg.jpg')} style={{ width: 40, height: 40, borderRadius: 20 }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.graphicDesignText, { color: 'black' }]}>Tamojit Jr</Text>
                                <Text style={[styles.graphicDesignText, { color: 'black', fontWeight: '400', fontSize: 13 }]}>Graphic Designer</Text>
                            </View>

                        </View>

                        <View>
                            <StarIcon name='code-working-outline' size={20} color={'black'} />
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={[styles.graphicDesignText, { color: 'black', fontSize: 17 }]}>What You'll Get</Text>
                        <View>
                            <FlatList
                                data={Services}
                                renderItem={({ item }) => (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                        <Icon name={item.icon} size={24} color={'black'} />
                                        <Text style={styles.servicesTitleText}>{item.title}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.graphicDesignText, { color: 'black' }]}>Reviews</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[styles.graphicDesignText, { fontSize: 12 }]}>SEE ALL</Text>
                                <Icon name='chevron-right' size={18} color={'green'} />
                            </View>
                        </View>

                        <FlatList
                            data={ReviewData}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginVertical: 20, flexDirection: 'row', }}>
                                        <Image source={require('../../Img/educationimg.jpg')} style={styles.imageBox} />
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <Text style={[styles.servicesTitleText, { fontSize: 17, fontWeight: '600' }]}>{item.name}</Text>
                                                </View>
                                                <View style={styles.ratingBox}>
                                                    <StarIcon name='star-sharp' size={14} color={'#FFD700'} />
                                                    <Text style={[styles.servicesTitleText, { marginLeft: 0 }]}>{item.rating}</Text>
                                                </View>
                                            </View>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[styles.reviewText, { marginRight: 30, marginTop: 10 }]}>{item.review}</Text>
                                                <Text style={[styles.reviewText, { fontWeight: '600', marginTop: 10 }]}>{item.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                        />


                    </View>

                    <View>

                    </View>

                </View>
            </ScrollView>
            <View style={{marginBottom:20,marginHorizontal:10}}>
                <ButtonWithIcon title='Buy This Course' onPress={() => navigation.navigate('CurriculumScreen')} />
            </View>
        </View>
    )
}

export default CourseDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 15
    },
    videoIconCircleBox: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90ee10',
        borderColor: '#90ee90',
    },
    graphicDesignTextContainer: {
        elevation: 4,
        backgroundColor: '#ffffff',
        marginTop: -5,
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 10
    },
    graphicDesignAndIconBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30
    },
    graphicDesignText: {
        color: 'green',
        fontWeight: '800',
        fontSize: 14
    },
    designPrincipleText: {
        paddingHorizontal: 20,
        color: 'black',
        fontWeight: '600',
        fontSize: 20

    },
    aboutBtnBox: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#90ee90'
    },
    activeBtn: {
        backgroundColor: '#90ee10',
    },
    servicesTitleText: {
        marginLeft: 10,
        fontSize: 15,
        color: 'black',
        fontWeight: '400'
    },
    imageBox: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    ratingBox: {
        marginRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'green'
    },
    reviewText: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400'
    }
})
