import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

function EventItems(props) {
    const {item, deleteTasks, deleteAllTasks} = props;
    return (
        <View style={{backgroundColor: '#fff', width: 350, padding: 15, alignSelf: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'dodgerblue', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical:10}}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={{width: 24, height: 24, backgroundColor: 'dodgerblue', marginRight: 10, borderRadius: 5}} ></View>
                <Text style={{maxWidth: '85%', fontSize: 18}}>{item}</Text>
            </View>
            <TouchableOpacity onPress={deleteTasks} style={{width: 60, height: 30, backgroundColor: 'dodgerblue', marginRight: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18,}}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

export default EventItems;