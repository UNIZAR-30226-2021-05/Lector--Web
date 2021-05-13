import React from 'react';
import Navigator from './Navigator'
import {
	StyleSheet,
	Text,
	View
} from 'react-native';




const TodosLibros = () => {
	const mostrar = () => {
		// you can access the item object and the event object
	
		console.log("En mostrar")
		console.log("Todos los libros", localStorage.getItem('todosLibros'));
		
	  }
	

	return (
		<View>
			<Navigator />
		<h1>Pagina donde aparecerán todos los libros</h1>
        <View>
            <Text onClick={mostrar}>
				Press here
			</Text>
        </View>
		</View>

	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFF",
		height: 200,
	}
});

export default TodosLibros;