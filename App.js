import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, FlatList } from 'react-native';
import {Allstyle} from './Allstyles';

export default function App() {

  const [input,setInput] = useState('');
  const [todos,setName] = useState([]);
  const [keys,setKey]  = useState(1);
  //inputChange
  const inputChange = (val)=>{
    setInput(val);
  }
  // addNewItem func
  const addNewItem = ()=>{
    if(input.length!=0){
      const obj ={
        todo: input,
        key:keys.toString()
      }
      setName([obj,...todos]);
      setKey(keys+1);
      setInput('');
    }
  }

  //deleteATodo
  const delItem = (recKey) =>{
    setName(prevTodo=>prevTodo.filter(item=>item.key!=recKey));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todos</Text>

      {/* ADD NEW */}
      <View style={styles.newTodo}>
        <TextInput 
          style={styles.input}
          value={input}
          onChangeText = {inputChange}
        />
        <TouchableOpacity onPress={addNewItem} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* SHOW TODO */}
      <View style={styles.showTodo}>
          {

            todos.length ? (
              <FlatList
                data={todos}
                renderItem = {({item})=>(
                  <View style={styles.individualTodoContainer}>
                    <View style={styles.individualTodo}>
                      <Text style={styles.mainItems}>
                        {item.todo}
                      </Text>
                      <TouchableOpacity onPress={()=>delItem(item.key)} style={styles.appButtonContainerDel}>
                        <Text style={styles.appButtonText}>Del</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            ) 
            : 
            (
              <Text style={styles.noItems}>Create a todo</Text>
            )
          
          }
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(Allstyle);
