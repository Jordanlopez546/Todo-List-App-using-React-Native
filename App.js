import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import AddEvent from './components/AddEvent';
import EventItems from './components/EventItems';

export default function App() {
  
  const [event, setEvent] = useState("");
  const [eventList, setEventList] = useState([]);
  const [itemsPresent, setItemsPresent] = useState(false);

  const addEvent = () => {
    Keyboard.dismiss();
    if (!event) {
      return;
    }
    else setEventList([event,...eventList ]); setEvent(""); setItemsPresent(true);
  }

  const onChangeText = (text) => {
    setEvent(text)
  }

  const deleteTasks = (index) => {
    let eventCopyArray = [...eventList];
    eventCopyArray.splice(index, 1);
    setEventList(eventCopyArray);
  }

  const deleteAllTasks = (index) => {
    let eventCopyArray = [...eventList];
    eventCopyArray.splice(index, eventCopyArray.length);
    setEventList(eventCopyArray);
  }
  
  useEffect(() =>{
    if (eventList.length === 0){
      setItemsPresent(false);
    }
  })

  const renderItems = ({item}) => {
        return (
          <View>
            <EventItems eventList={eventList} item={item} deleteTasks={deleteTasks} deleteAllTasks={deleteAllTasks} />
          </View>
        )
    }

  return (
    <View style={styles.container}>
      <Header/>
      { itemsPresent ? <TouchableOpacity onPress={deleteAllTasks}>
        <Text style={{textAlign: 'center', fontSize: 23, marginBottom:10}}>Click to Clear all Tasks</Text>
      </TouchableOpacity> : <Text style={{textAlign: 'center', fontSize: 23, marginBottom:10}}>No tasks to do!</Text>}
      <FlatList data={eventList} keyExtractor={(index, item) => index+item} renderItem={renderItems} />
      <AddEvent addEvent={addEvent} eventValue={event} onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E0E0E0',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
