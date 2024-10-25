// src/styles/welcomeStyles.js
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Importing the library functions

const WelcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00272B', // Dark background
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp('5%'), // Responsive padding
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: hp('2%'), // Responsive margin bottom
    },
    title: {
        fontSize: wp('9%'), // Responsive font size
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: wp('4%'), // Responsive font size
        color: 'white',
    },
    pagination: {
        flexDirection: 'row',
        marginTop: hp('1%'), // Responsive margin top
    },
    dot: {
        width: wp('2.5%'), // Responsive width
        height: wp('2.5%'), // Responsive height
        borderRadius: wp('1.25%'), // Responsive border radius
        backgroundColor: '#00A19D', // Teal color for dots
        margin: wp('1%'), // Responsive margin
    },
    anatomyImage: {
        width: wp('75%'), // Responsive width
        height: hp('50%'), // Responsive height
        resizeMode: 'contain',
        marginBottom: hp('2.5%'), // Responsive margin bottom
    },
    arrowButton: {
        backgroundColor: '#00A19D', // Teal color for the arrow button
        padding: wp('5%'), // Responsive padding
        borderRadius: wp('10%'), // Responsive border radius
    },
    arrowText: {
        fontSize: wp('6%'), // Responsive font size
        color: 'white',
    },
});

export default WelcomeStyle;
