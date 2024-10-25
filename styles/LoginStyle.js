// src/styles/welcomeStyles.js
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Importing the library functions

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00272B',
    },
    backgroundImage: {
        position: 'absolute',
        width: wp('100%'), // Responsive width
        height: hp('100%'), // Responsive height
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp('5%'), // Responsive padding
    },
    title: {
        fontSize: wp('9%'), // Responsive font size
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: wp('4%'), // Responsive font size
        color: 'white',
        marginBottom: hp('5%'), // Responsive margin bottom
    },
    formContainer: {
        width: '100%',
        padding: wp('5%'), // Responsive padding
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: wp('5%'), // Responsive border radius
    },
    welcome: {
        fontSize: wp('6%'), // Responsive font size
        fontWeight: 'bold',
        color: 'black',
        marginBottom: hp('2%'), // Responsive margin bottom
    },
    signInText: {
        fontSize: wp('5%'), // Responsive font size
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: hp('.5%'), // Responsive margin bottom
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: wp('3%'), // Responsive border radius
        padding: wp('3%'), // Responsive padding
        marginBottom: hp('2.5%'), // Responsive margin bottom
        borderWidth: 1,
        borderColor: '#00A19D',
    },
    icon: {
        marginRight: wp('2%'), // Responsive margin right
    },
    input: {
        flex: 1,
        fontSize: wp('4%'), // Responsive font size
        color: 'black',
    },
    forgotPasswordText: {
        color: '#00A19D',
        textAlign: 'right',
        marginBottom: hp('2.5%'), // Responsive margin bottom
    },
    signInButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A19D',
        padding: wp('4%'), // Responsive padding
        borderRadius: wp('3%'), // Responsive border radius
        height: hp('8%'),
    },
    signInTextButton: {
        color: 'white',
        fontSize: wp('4.5%'), // Responsive font size
        marginRight: wp('2%'), // Responsive margin right
    },
    createAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('2.5%'), // Responsive margin top
    },
    createAccountText: {
        color: 'black',
        fontSize: wp('4%'), // Responsive font size
    },
    createText: {
        color: '#00A19D',
        fontWeight: 'bold',
        fontSize: wp('4%'), // Responsive font size
    },
    arrow:{
        position: 'absolute',
        right: wp('22%'),
        alignContent: 'center',
    }
});

export default LoginStyle;