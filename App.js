import React from 'react';
import {Text, View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';


const App = () =>{
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola!</Text>
        <Image source={{uri: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/02/04125951/Playas-Brasil-9.jpg'}}
        style={styles.image}/>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>Alert.alert('Hola!')} >
          <Text style={styles.textButton} >Presiona</Text>
        </TouchableOpacity>
        
    </View>
  ) 
}

const styles = StyleSheet.create({
  button: {backgroundColor: 'blue', padding: 7, marginTop: 10},
  textButton: {color:'white', fontSize: 20},
  container: {flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: 'cyan'},
  title: {fontSize: 50, color: 'white'},
  image: {height: 200, width: 200, borderRadius: 100}
})

export default App;
