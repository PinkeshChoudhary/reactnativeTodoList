import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { EditToDo } from "./editToDo";
import { MaterialIcons } from '@expo/vector-icons';

export const TodoItem = ({ todos, onPresshandler, editHandler }) => {
  return (
    <View>
      {todos.length != 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              
            >
             <View style ={styles.listItem} >
             <MaterialIcons name="delete" size={24} color="red" onPress={() => {
                onPresshandler(item.id);
              }} />
              <Text style ={styles.item} >{item.text}</Text>
              <EditToDo item ={item} editHandler ={editHandler}/>
              
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>no todos to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    display : 'flex',
    flexDirection : 'row',
  },
  item : {
    marginLeft :20,
    marginRight : 20,
  },
  editctnr : {
    display : 'flex',
    flexDirection : 'row'
  }
});
