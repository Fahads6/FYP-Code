import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function BlurFromImage() {
  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setStep(2); // move to the next step after selecting an image
    }
  };

  const startBlurring = () => {
    // TODO: Implement image blurring logic
    setStep(3); // move to the next step after starting blurring
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#151F28',
            width: '100%',
            height: '30%',
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            borderBottomLeftRadius: 110,
            borderBottomRightRadius: 110,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 50,
              color: 'white',
            }}>
            Blur Image
          </Text>
        </View>
        {step === 1 && (
          <View style={styles.step}>
           
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Choose Image</Text>
            </TouchableOpacity>
          </View>
        )}
        {step === 2 && (
          <View style={styles.step}>
            
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={startBlurring}>
              <Text style={styles.buttonText}>Start Blurring</Text>
            </TouchableOpacity>
          </View>
        )}
        {step === 3 && (
          <View style={styles.step}>
            <Text style={styles.stepTitle}>Blur Button</Text>
            {/* TODO: Add the blurred image */}
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  step: {
    marginBottom: 20,
  },
  // stepTitle: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  button: {
    backgroundColor: '#151F28',
    height: 50,
    marginTop:10,
    marginLeft:10,
    width: 160,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default BlurFromImage;
