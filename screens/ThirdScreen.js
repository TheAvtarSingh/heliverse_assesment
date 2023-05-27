import { Text, StyleSheet, ImageBackground,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

const ThirdScreen = ({ navigation }) => {
  // const [count, setCount] = useState(route.params);
  const [count, setCount] = useState(1500);
  const targetValue = 4000;
  const duration = 5000;
  const step = ((targetValue - count) / duration) * 10;


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + step >= targetValue) {
          clearInterval(interval);
          return targetValue;
        } else {
          return prevCount + step;
        }
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const mainScreen = () =>{
navigation.navigate('FirstScreen');
  }
  return (
    <ImageBackground
      source={require("../assets/screen1.png")}
      style={styles.backgroundImage}
    >
      <ImageBackground
        source={require("../assets/main-heart.png")}
        style={styles.heartImage}
      >
        <Text style={styles.countText}>{count.toString()}</Text>
      </ImageBackground>
<TouchableOpacity onPress={mainScreen}>
      <Image source={require("../assets/arrow.png")} style={styles.nextImage}  />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  heartImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    marginLeft: 120,
  },
  countText: {
    fontSize: 36,
    color: "yellow",
    fontWeight: "bold",
  },
  nextImage: {
    width: 50,
    height: 50,
  },
});

export default ThirdScreen;
