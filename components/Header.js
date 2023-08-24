import React from 'react';
import { Text, View } from 'react-native';

function Header(props) {
    return (
        <View style={{marginVertical: 40, marginHorizontal: 30}}>
            <Text style={{fontSize: 30, color: 'dodgerblue', fontWeight: 'bold'}} >Your Todo Tasks!</Text>
        </View>
    );
}

export default Header;