// src/styles/welcomeStyles.js
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Importing the library functions

const SignupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00101a', // Dark background similar to the image
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 30,
    },
    welcome: {
        fontSize: wp('6%'), // Responsive font size
        fontWeight: 'bold',
        color: 'white',
        marginTop: hp('5%'),
        marginBottom: hp('2%'), // Responsive margin bottom
        right: wp('27%'),
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#00a0a0', // Similar to the text input fields background in the image
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#fff',
        marginBottom: 15,
    },
    orText: {
        color: '#fff',
        marginVertical: 10,
    },
    googleButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    googleButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        color: '#fff',
        marginBottom: 30,
    },
    loginLink: {
        fontWeight: 'bold',
        color: '#00a0a0',
        marginTop: 30,
    },
    createButton: {
        width: 70,
        height: 70,
        backgroundColor: '#00a0a0',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SignupStyle;