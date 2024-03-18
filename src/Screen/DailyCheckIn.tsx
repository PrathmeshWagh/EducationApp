import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const DailyCheckIn: React.FC<Props> = () => {
  const Data = [
    {
      id:'1',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Today'
    },
    {
      id:'2',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 2'
    },
    {
      id:'3',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 3'
    },
    {
      id:'4',
      count:'+2',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 4'
    },
    {
      id:'5',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 5'
    },
    {
      id:'6',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 6'
    },
    {
      id:'7',
      count:'+1',
      image:require('../Img/Loyalty.jpg'),
      day:'Day 7'
    },
  ]

  const renderData = ({ item }) => {
    return (
      <>
        <View>
          <View style={styles.dayBox}>
            <Text>{item.count}</Text>
            <Image source={item.image} style={styles.imgBox} />
          </View>

          <Text style={{textAlign:'center'}}>{item.day}</Text>
        </View>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstConntainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', }}>
            <Icon name='arrow-left' size={24} color={'white'} style={{ marginRight: 10 }} />
            <Text style={styles.headerText}>Coins Reward Page</Text>
          </View>
          <Icon name='bookmark-outline' color={'white'} size={24} />
        </View>


        <View style={styles.coinAndPriceContainer}>
          <Image source={require('../Img/Loyalty.jpg')} style={styles.imgBox} />
          <Text style={styles.priceText}>189</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.subHeadingTextBold}>189</Text>
            <Text style={styles.subHeadingText}> coin(s) expiring on <Text style={styles.subHeadingTextBold}>31-03-2024</Text></Text>
          </View>

          <View style={styles.historyTextBox}>
            <Text style={styles.historyText}>History</Text>
            <Icon name='chevron-right' size={16} color={'white'} />
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <FlatList
          data={Data}
          renderItem={renderData}
          horizontal={true}
        />

        <View style={styles.checkInBtn}>
          <Text style={{textAlign:'center',color:'white',fontWeight:'500'}}>Check in today to get 1 coins</Text>
        </View>


      </View>
    </View>
  )
}

export default DailyCheckIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff'
  },
  firstConntainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '100%',
    height: '60%',
    backgroundColor: '#E5AC22',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  headerText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17
  },
  imgBox: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  coinAndPriceContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    marginLeft: 20,
    color: 'white',
    fontWeight: '700',
    fontSize: 20
  },
  historyTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    width: 70,
    height: 25,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#fff3',
    backgroundColor: '#fff3',

  },
  historyText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600'
  },
  subHeadingTextBold: {
    fontSize: 13,
    color: 'white',
    fontWeight: '600'
  },
  subHeadingText: {
    fontSize: 12,
    color: 'white'
  },
  secondContainer: {
    marginTop: -100,
    width: '90%',
    backgroundColor: '#ffffffff',
    height: '30%',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#ffffffff',
    borderRadius: 3
  },
  dayBox: {
    alignItems: 'center',
    width: 40,
    height: 55,
    borderWidth: 1,
    borderRadius:3,
    borderColor: 'red',
    marginHorizontal: 10,
    marginTop: 10
  },
  checkInBtn:{
    width:'80%',
    height:30,
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'red',
    borderRadius:20,
    marginBottom:20
  }
})