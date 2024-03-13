import { Image, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RadioButton, Searchbar } from 'react-native-paper';
import Button from '../Component/Button';


interface Props {
  navigation: NavigationProp<ParamListBase>;
}
const SchoolMediumScreen: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
       <Header progress={0.8}  />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <View>
            <Image source={require('../Img/educationimg.jpg')} style={{width:'100%', height:250}} resizeMode='contain' />
          </View>
          <Text style={styles.headingText}>What is Your Current School Medium?</Text>

          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={styles.radioIconWithText}>
              <RadioButton value="first" />
              <Text style={styles.yearText}>English Medium</Text>
            </View>

            <View style={styles.radioIconWithText}>
              <RadioButton value="second" />
              <Text style={styles.yearText}>Hindi Medium</Text>
            </View>
          </RadioButton.Group>
        <View style={{marginBottom:10}}>
          <Searchbar
            placeholder="Find Other Medium"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{
              borderRadius: 0, backgroundColor: '#ffff', borderWidth: 0.3, marginTop: 20, height: 50,
            }}
          />
          </View>
        </View>
      </ScrollView>
       <View style={{marginBottom:20}}>
          <Button title='Continue' onPress={() =>navigation.navigate('CourseDetailScreen')} />
       </View>
    </View>
  )
}

export default SchoolMediumScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20
  },
  headingText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginVertical: 10
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