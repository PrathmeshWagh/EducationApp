import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string,
    onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ title,onPress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        width: '80%',
        height: 45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:10,
        alignSelf:'center'
    },
    btnText:{
        fontSize:16,
        fontWeight:'400',
        color:'white'
    }
})