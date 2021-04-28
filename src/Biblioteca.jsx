import React from 'react';
import Navigator from './Navigator'
import {
    StyleSheet,
    View,
  } from 'react-native';
import './App';
import './styles.css';

function Biblioteca() {



    return (
        <View>
        <Navigator />
        <View style={styles.bigTitle}>
        <h1>Biblioteca</h1>
        <View>
            
        </View>
        </View>
        </View>
    )

}

const styles = StyleSheet.create({
	bigTitle: {
		fontSize: 16,
		color: "#696969",
		marginTop: 10,
		textAlign: 'center'
	}
});

export default Biblioteca;