import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

function AddEvent(props) {
    return (
        <KeyboardAvoidingView style={{width: '100%', flexDirection: 'row', position: 'absolute', bottom: 50, justifyContent: 'space-around', alignItems: 'center'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput value={props.eventValue} onChangeText={props.onChangeText} style={{width: 250, height: 50, borderWidth: 1, borderColor: 'dodgerblue', padding: 10, borderRadius: 10, fontSize: 17}} placeholder='Add an event' placeholderTextColor={'dodgerblue'} />
            <TouchableOpacity onPress={props.addEvent} style={{width: 60, height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0E0E0'}}>
                <Text style={{fontSize: 18}}>Add</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default AddEvent;