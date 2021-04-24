import React from "react";
import Card from "./Card";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);

  // Esta funcion ha de ser cambiada por link
  const handleSubmit = async e => {
    console.log("Se ha clicado encima")
     window.location='/BookCard';

    ;
  }

  return (
    <div className="result">
      <View style={styles.categoria}>
        <h1>En tu bibiliteca</h1>
      </View>
      <View style={styles.bloque}>
        {data.map((item) => (
          <View style={styles.libro}>
            <Card key={item.imdbID} movie={item} />
          </View>
        )).slice(0, 4)}
      </View>
      <View style={styles.categoria}>
        <h1>Descubre </h1>
      </View>
      <View style={styles.bloque}>
        {data.map((item) => (
          <View style={styles.libro} onClick={handleSubmit}>
            <Card key={item.imdbID} movie={item} />
          </View>
        )).slice(0, 4)}
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  libro: {
    height: 45,
    width: 400,
    // marginLeft: 10
  },
  bloque: {
    
    marginBottom: 500,
    height: 45,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 250,

  },
  categoria: {
  marginTop: 20
  }
});

export default CardList;