import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { Header } from "./MyComponents/header";
import { TodoItem } from "./MyComponents/todoItem";
import { AddToDo } from "./MyComponents/addToDo";

export default function App() {
  const todos = [
    {
      text: "go to market",
      description: "you have to go to market to buy some vegetables",
      id: 1,
    },

    {
      text: "buy some vegetables",
      description: "buy some vegetables and come back home as soon as possible",
      id: 2,
    },
    {
      text: "back to home",
      description:
        "when you come back home after buying vegetables , eat food and go to sleep",
      id: 3,
    },
  ];
  const [todo, setTodos] = useState(todos);
  const [text, setText] = useState("");
  const [edittodo, setEditToDo] = useState(null);

  const changeHandler = (val) => {
    setText(val);
  };

  const editHandler = (item) => {
    setEditToDo(item)
     setText(item.text)
  }

  const onPresshandler = (id) => {
    const newTodos = todo.filter((item) => item.id != id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addToDoHandler = (addedTodo) => {
    if(!edittodo){
    // if (addedTodo.length > 3) {
      const newTodo = {
        id: Math.random().toString(),
        text: addedTodo,
      };
      const newTodosList = [...todo, newTodo];
      setTodos(newTodosList);
    }
    else {
      const newobjs = todo.filter((todo) => todo.id !== edittodo.id)
      let editobj = {
        id : edittodo.id,
        text : text,
      }
      let restarr = [...newobjs, editobj]
      restarr = restarr.sort((a,b)=> {
        return a.id-b.id
       })
       setTodos(restarr)
       setEditToDo(null)
    
    }
    // } 
    // else {
    //   Alert.alert("OOPS", "Please enter a valid Todo", [
    //     {
    //       text: "understood",
    //     },
    //   ]);
    // }
  };

 

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <AddToDo addToDoHandler={addToDoHandler} changeHandler ={changeHandler} text ={text}/>
        <View style={styles.list}>
          <TodoItem todos={todo} onPresshandler={onPresshandler} editHandler ={editHandler}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5,
    flex: 1,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 10,
    flex: 1,
  },
});
