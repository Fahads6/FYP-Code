import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';

const RecordAndBlur = () => {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const video = useRef(null);

  const [status, setStatus] = useState({});

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      console.log(cameraStatus.status);

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  }, []);

  const takeVideo = async () => {
    if (camera && !isRecording) {
      setIsRecording(true);
      const data = await camera.recordAsync({
        maxDuration: 10
      });
      setRecord(data.uri);
      console.log(data.uri);
      setIsRecording(false);
      setShowVideo(true);
      setCamera(null);
    }
  }

  const stopVideo = async () => {
    if (camera && isRecording) {
      setIsRecording(false);
      camera.stopRecording();
    }
  }

  const handleNext = () => {
    // Handle next button functionality here
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        backgroundColor: '#151F28',
        width: "100%",
        height: "20%",
        marginBottom: 30,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderBottomLeftRadius: 110,
        borderBottomRightRadius: 110,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: 50,
          color: 'white',
        }}>Blur Videos</Text>
      </View>
      {showVideo ? (
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: record,
          }}
          useNativeControls
          resizeMode='contain'
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          ratio={'4:3'}
        />
      ) : (
        <View style={styles.cameraContainer}>
          <Camera
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio}
            type={Camera.Constants.Type.back}
            ratio={'4:3'}
          />
        </View>
      )}
      {showVideo && (
        <View style={styles.buttons}>


          <TouchableOpacity
            style={{
              backgroundColor: '#151F28',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={() => {
              if (status.isPlaying) {
                video.current.pauseAsync();
                setStatus({ ...status, isPlaying: false });
              } else {
                video.current.playAsync();
                setStatus({ ...status, isPlaying: true });
              }
            }}
          >
            <Text style={styles.buttonText}>{status.isPlaying ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {!showVideo && (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonContainer}

            onPress={() => takeVideo()}
          ><Text style={styles.buttonText}>Start Recording</Text></TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}

            onPress={() => stopVideo()}
          ><Text style={styles.buttonText}>Stop Recording</Text></TouchableOpacity>
        </View>
      )}
      {showVideo && (
        <View>
          <TouchableOpacity onPress={() => handleNext()} >
            <Text style={{
              height: 40,
              width: 160,
              fontSize:25,
              marginLeft:95,
              color:'white',
              backgroundColor: '#151F28',
              // justifyContent: 'center',
              // alignItems: 'center',
              textAlign:'center',
              borderRadius: 5,
              marginBottom: 10,
            }}>Start Bluring</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonContainer: {
    height: 40,
    width: 160,
    backgroundColor: '#151F28',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 20,
    color: 'white',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: "50%",
  },
  buttons: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hidden: {
    display: 'none',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center'
  }
});

export default RecordAndBlur;