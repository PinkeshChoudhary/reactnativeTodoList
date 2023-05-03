import React from 'react'
import { View , Text, StyleSheet} from 'react-native'

export const Header = () => {
  return (
    <View style= {styles.heading}>
        <Text style = {styles.headingText}>ToDo App</Text>
    </View>
  )
}


const styles = StyleSheet.create(
    {
      heading : {
        height : 80,
        // paddingTop : 38,
        backgroundColor : 'coral',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
        
      } ,

      headingText : {
        fontSize : 20,
        fontWeight : 600,
      }
    }
)