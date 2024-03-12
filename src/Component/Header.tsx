import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';



interface HeaderProps {
  progress: number,

}
const Header: React.FC<HeaderProps> = ({ progress }) => {
const {width,height} = Dimensions.get('window')
console.log(width,height)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' size={24} color={'black'} style={{ marginRight: 10 }} />
      </TouchableOpacity>
      <View style={{flex:1,width:'100%'}}>
          <Progress.Bar
            progress={progress}
            width={width / 1.25}
            height={13}
            color='green'
            unfilledColor='#e2e2e2'
            borderRadius={8}
            borderColor='#e2e2e2'
          />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',


  }
})