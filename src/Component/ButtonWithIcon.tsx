import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface Props {
  title: string,
  onPress: () => void
}
const ButtonWithIcon: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.btnBox}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.arrowbox}>
        <Icon name='arrow-right' size={24} color={'black'} />
      </View>
    </Pressable>
  )
}

export default ButtonWithIcon

const styles = StyleSheet.create({
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    borderRadius: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    position: 'relative', 
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center', 
    flex: 1, 
  },
  arrowbox: {
    position: 'absolute',
    right: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff',
  }
})
