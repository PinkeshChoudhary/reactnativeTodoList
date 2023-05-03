import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

export const EditToDo = ({item, editHandler}) => {
  return (
    <View>
        <Pressable style = {styles.editbtn} onPress={() => editHandler(item)}>
            <Text>Edit</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    // editbtn :{
    //     padding: 10,
    //     margin : 20,
    //     backgroundColor : 'coral',
    //     borderRadius : 4,
    // }
})