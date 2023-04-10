import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

// Replace the image URL with the path to your own image
const backgroundImage = require('./Welcome.png');

function WelcomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <Text style={styles.wel}>Welcome To First Privacy</Text>

                <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={styles.button}>
                    <Text style={styles.buttontext}>Start Blurring</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    wel: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: 10,
        color: '#FD6D0D',

        borderRadius: 5,
        marginBottom: "80%",

    },

    button: {
        backgroundColor: '#FD6D0D',
        height: 40,
        width: 150,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        marginRight: '50%',
        marginBottom:60 ,


    },
    buttontext: {
        fontSize: 27,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        
        fontWeight: 600,
    },

});

export default WelcomePage;
