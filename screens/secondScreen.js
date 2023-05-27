import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';

var count = 1500;

const PopupBox = ({ isVisible, toggleModal, imageSource, description }) => {
    const [slideAnim] = useState(new Animated.Value(0));
  
    useEffect(() => {
      if (isVisible) {
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }, [isVisible, slideAnim]);
  
    const slideFromRight = slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 0],
    });
  
    return (
      <Modal
        visible={isVisible}
        animationType="fade"
        onRequestClose={toggleModal}
        transparent={true}
      >
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideFromRight }] }]}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Image source={require('../assets/arrow.png')} style={styles.nextImage} />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    );
  };
  
const secondScreen = ({ navigation }) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);// to Show popup after 1 second

    const timeout = setTimeout(() => {
        navigation.navigate('ThirdScreen',{ count });
      }, 20000);
  
      return () => clearTimeout(timeout);
  }, [navigation]);

  

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    
  };

    

  return (
    <ImageBackground  source={require('../assets/screen1.png')}
    style={styles.backgroundImage}>

<ImageBackground source={require('../assets/main-heart.png')} style={styles.heartImage} >
    <Text style={styles.countText}>{count}</Text>
    </ImageBackground>



<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Next Button */}
 

      {/* Popup Box */}
      <PopupBox
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        imageSource={require('../assets/avtar2.png')}
        description="User Info."
        onPress={toggleModal}
      />
    </View>
    
  
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    heartImage:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height:200,
        marginLeft:120
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        transform: [{ translateX: 400 }], // Initial position outside the screen
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        textAlign: 'center',
      },
      nextContainer: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'transparent',
        alignItems: 'center',
      },
      nextText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
      },
      countText:{
fontSize: 36,
color:'yellow',
fontWeight:'bold'
      },
      nextImage: {
        width: 50,
        height: 50,
      },
      closeButtonText: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
      },
    });

export default secondScreen