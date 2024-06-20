/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';

const PetNameSuggestionApp: React.FC = () => {
  const [favoriteAnimal, setFavoriteAnimal] = useState<string>('');
  const [petNameSuggestion, setPetNameSuggestion] = useState<string>('');

  const suggestPetName = () => {
    switch (favoriteAnimal.toLowerCase()) {
      case 'dog':
        setPetNameSuggestion('Beethoven');
        break;
      case 'cat':
        setPetNameSuggestion('Whiskers');
        break;
      case 'bird':
        setPetNameSuggestion('Tweetie');
        break;
      case 'fish':
        setPetNameSuggestion('Bubbles');
        break;
      default:
        setPetNameSuggestion('');
        Alert.alert('Not a Good Pet', 'Sorry, that animal wouldn\'t make a very good pet.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the pet naming app</Text>
      <Text style={styles.subTitle}>The app that helps you name your pet!</Text>
      <Image source={require('./assets/dog.jpg')} style={styles.image} />
      <TextInput
        placeholder="Enter your favorite animal"
        onChangeText={(text) => setFavoriteAnimal(text)}
        value={favoriteAnimal}
        style={styles.input}
      />
      <Button title="Suggest Pet Name" onPress={suggestPetName} />
      {petNameSuggestion ? (
        <Text style={styles.petNameText}>A possible name for your {favoriteAnimal} is {petNameSuggestion}.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FF7200'
  },
  title: {
    color: '#FFFF',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
  },
  subTitle: {
    color: '#FFFF',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  image: {
    width:500,
    height:500,
    marginTop: 30,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minWidth: 200,
    backgroundColor: '#ffff',
    marginTop: 30,
  },
  petNameText: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default PetNameSuggestionApp;
