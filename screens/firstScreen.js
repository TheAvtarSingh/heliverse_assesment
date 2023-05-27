import { ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect } from 'react'


const FirstScreen = ({ navigation }) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigation.navigate('SecondScreen');
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, [navigation]);

    // 
  
    return (
        
        <ImageBackground  source={require('../assets/splash.png')}
        style={styles.backgroundImage}>
    
        </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

export default FirstScreen