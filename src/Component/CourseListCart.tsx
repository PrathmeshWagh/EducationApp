import { Image, Pressable, StyleSheet, Text, View,ImageSourcePropType } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/Ionicons'

interface CourseListCartProps {
    source: ImageSourcePropType;
    category: string;
    title: string;
    price: string;
    rating: string;
    videos: string;
    author: string;
}

const CourseListCart:React.FC<CourseListCartProps> = ({ source, category, title, price, rating, videos, author,onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View>
                <Image source={source} resizeMode='cover' style={styles.imageBox} />
            </View>

            <View style={{ flex:1,paddingLeft: 15 }}>
                <Text style={styles.categorytitle}>{category}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.categorytitle, { color: 'black', marginVertical:5 }]}>{title}</Text>
                <Text style={[styles.categorytitle,{marginVertical:5}]}>{price}</Text>

                <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.ratingContainer}>
                            <StarIcon name={'star'} size={20} color={'yellow'} />
                            <Text>{rating}</Text>
                        </View>
                        <Text style={[styles.categorytitle,{color:'black', marginLeft:10}]}>{videos}Videos</Text>
                    </View>

                    <Pressable style={{paddingRight:10}} onPress={() => ''}>
                        <Icon name={'chevron-right'} size={24} color={'black'} />
                    </Pressable>
                </View>


                <Text style={[styles.categorytitle,{fontWeight:'400', paddingVertical:5}]}>By {author}</Text>

            </View>
        </Pressable>
    )
}

export default CourseListCart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',

    },
    imageBox: {
        width: 140,
        height: 140,
    },

    categorytitle: {
        color: 'green',
        fontSize: 15,
        fontWeight: '600'
    },
    ratingContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRightWidth:1, 
        paddingRight:10
    }
})