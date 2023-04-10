import { Video } from 'expo-av';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function BlurFromVideo() {
  const [videoSource, setVideoSource] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setVideoSource(result.assets[0].uri);
      setCurrentStep(2);
    }
  };

  const renderStep1 = () => {
    if (currentStep !== 1) {
      return null;
    }

    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Select Video You Want To Blur</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={pickVideo}>
          <Text style={styles.buttonText}>Select Video</Text>
        </TouchableOpacity>
        {/* <Button title="Select Video" onPress={pickVideo} /> */}
      </View>
    );
  };

  const renderStep2 = () => {
    if (currentStep !== 2) {
      return null;
    }

    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Your Selected Video</Text>
        <Video
          source={{ uri: videoSource }}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
          useNativeControls={true}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setCurrentStep(3)}>
          <Text style={styles.buttonText}>Start Bluring</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderStep3 = () => {
    if (currentStep !== 3) {
      return null;
    }

    // Your code to display the processed video goes here
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Blured Video Result</Text>
        <Video
          source={{ uri: videoSource }}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
          useNativeControls={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View  style={{backgroundColor:'#151F28', 
    width: "100%", 
    height: "30%",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110, 
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{
        textAlign:'center',
        fontWeight:600,
        fontSize:50,
        color:'white',
    }}>Blur Videos</Text>
    </View>
      {renderStep1()}
      {renderStep2()}
      {renderStep3()}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  stepText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FD6D0D'
  },
  buttonContainer: {
    backgroundColor: '#151F28',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default BlurFromVideo;
