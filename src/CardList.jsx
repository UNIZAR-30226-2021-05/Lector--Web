import React from "react";
import Card from "./Card";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Grid from '@material-ui/core/Grid';


function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);

  // // Esta funcion ha de ser cambiada por link
  // const handleSubmit = async e => {
  //   console.log("Se ha clicado encima")
  //   window.location = '/BookCard';

  //   ;
  // }

  return (
    <div className="result">
      <View style={styles.categoria}>
        <h1>En tu bibiliteca</h1>
      </View>
      <View style={styles.vermas}>
        <Text>Ver mas</Text>
      </View>
      <Grid item xl={4} justify = 'center'>
      <View>
        
        {data.map((item) => (
            
            <Card key={item.imdbID} movie={item} />
           
        ))}
        
      </View>
      </Grid>
     
    </div>
  );
}

const styles = StyleSheet.create({
  libro: {
    height: 30,
    width: 300,
    marginLeft: 50
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
  },
  vermas: {
    
    marginTop: -30,
    marginBottom: 0,
    // alignItems: 'left',
    alignItems: 'center',
    //alinear derecha
    marginLeft: 1000
  }
});

export default CardList;