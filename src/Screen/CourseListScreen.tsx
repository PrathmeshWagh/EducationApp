import { FlatList, StyleSheet, Text, View,ImageSourcePropType} from 'react-native'
import React from 'react'
import CourseListCart from '../Component/CourseListCart'

interface Course {
  id: string;
  img: ImageSourcePropType;
  category: string;
  title: string;
  price: string;
  rating: string;
  videos: string;
  author: string;
}

const Data :Course[] = [
  {
    id: '1',
    img: require('../Img/educationimg.jpg'),
    category: 'Graphic Design',
    title: 'Graphic Design Advanced',
    price: '7058.00',
    rating: '4.2',
    videos: '78',
    author: 'Rakesh.P'
  },
  {
    id: '2',
    img: require('../Img/bookImage.jpg'),
    category: 'Graphic Design',
    title: 'Advertisement Design',
    price: '7058.00',
    rating: '3.8',
    videos: '126',
    author: 'Tamojit.P'
  },
  {
    id: '3',
    img: require('../Img/bookImage.jpg'),
    category: 'Programming',
    title: 'Graphic Design Advanced',
    price: '7058.00',
    rating: '4.2',
    videos: '78',
    author: 'Aloknath.N'
  },
  {
    id: '4',
    img: require('../Img/educationimg.jpg'),
    category: 'Web Development',
    title: 'Web Development Coursed',
    price: '7058.00',
    rating: '4.9',
    videos: '145',
    author: 'Raghuram.R'
  },
  {
    id: '5',
    img: require('../Img/studentImage.jpeg'),
    category: 'SEO & Marketing',
    title: 'Digital Marketing Course',
    price: '7058.00',
    rating: '4.4',
    videos: '105',
    author: 'Rakesh.P'
  },
  {
    id: '6',
    img: require('../Img/studentImage.jpeg'),
    category: 'SEO & Marketing',
    title: 'Digital Marketing Course',
    price: '7058.00',
    rating: '4.4',
    videos: '105',
    author: 'Rakesh.P'
  },
  {
    id: '7',
    img: require('../Img/studentImage.jpeg'),
    category: 'SEO & Marketing',
    title: 'Digital Marketing Coursebbjhjhhggggyuyufjfufuv',
    price: '7058.00',
    rating: '4.4',
    videos: '105',
    author: 'Rakesh.P'
  }
]

const renderData = ({ item }:{item:Course}) => {
  return (
    <View style={{marginHorizontal:10, marginBottom:20,}}>
      <CourseListCart source={item.img}
        category={item.category}
        title={item.title}
        price={item.price}
        rating={item.rating}
        videos={item.videos}
        author={item.author}
      />
    </View>
  )
}

const CourseListScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={renderData}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CourseListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  }
})