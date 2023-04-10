import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

function Home({ navigation }) {
    return (
        <>

            <View style={styles.top}>
                <Image source={require('./secure1.png')} style={styles.image} />
                {/* <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.text}>Start Bluring Your Images/Videos</Text>

                </View> */}
            </View>
            <View >
                <Text style={styles.text}> Protect Your Privacy
                    
                </Text>
            </View>

            <View style={{
                
                flex:1.8,
                backgroundColor: 'transparent',
                flexDirection: 'row', 
            }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Images')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            width: 115,
                            height: 115, 
                            marginTop: 7,
                            marginRight: 10, 
                            marginLeft: 25,
                        }}>
                        <Image source={require('./right-image.png')} style={{
                            width: 115,
                            height: 115, 
                            borderRadius: 10,
                        }} />
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Videos')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            width: 115,
                            height: 115, 
                            marginTop: 20,
                            marginRight: 20,
                            marginLeft: 25, 
                        }}>
                        <Image source={require('./Video.png')} style={{
                            width: 115,
                            height: 115, 
                            borderRadius: 10,
                        }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Record')}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            width: 190, 
                            height: 250, 
                            marginTop: 7,
                            marginLeft: 30, 
                            // marginRight: 25,
                        }}>
                        <Image source={require('./record.png')} style={{
                            width: 190,
                            height: 250, 
                            borderRadius: 10,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        padding: 13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },


    top: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '110%',
        height: '110%',
        resizeMode: 'cover',
        borderRadius: 5,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    // textContainer: {
    //     position: 'absolute',
    //     top: 20,
    //     left: 20,
    //     right: 20,
    //     backgroundColor: 'transparent',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    text: {
        marginTop:10,
        // marginRight:80,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginLeft:21,
        // backgroundColor:'black',
    },

});
export default Home