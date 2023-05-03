import React, { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";

export const AddToDo = ({ addToDoHandler, changeHandler, text }) => {
//   const [text, setText] = useState("");

//   const changeHandler = (val) => {
//     setText(val);
//   };

//   const editHandler = (inputval) => {
//      setText(inputval)
//   }
  return (
    <View style = {styles.ctnr}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new todo.."
        onChangeText={changeHandler}
      />

      <View>
        <Pressable
          style={styles.button}
          onPress={() => {
            addToDoHandler(text);
            // setText("");
          }}
        >
          <Text style = {styles.text}>Add todo</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "coral",
    width : 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  ctnr : {
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center'
  }
});
