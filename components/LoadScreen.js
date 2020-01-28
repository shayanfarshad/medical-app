import React, {Component} from 'react' ;
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

class LoadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {

                GoogleSignin.configure({
                    //It is mandatory to call this method before attempting to call signIn()
                    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
                    // Repleace with your webClientId generated from Firebase console
                    webClientId: '943374847989-o8qgk62tc1ufbckr0hjqu5jegjo3u8ff.apps.googleusercontent.com',
                }),
                    //Check if user is already signed in
                    this._isSignedIn(),
                    this.setState({isLoading: false})

                    // AsyncStorage.getItem('userpass').then(value => {
                    //     console.log(value)
                    //     if(value !== null ) {
                    //         this.props.navigation.navigate('Home')
                    //         this.setState({isLoading : false})
                    //     }else{
                    //         this.props.navigation.navigate('Auth')
                    //     }
                    // })


        }, 2000)

    };
    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            this.props.navigation.navigate('Home')
            //Get the User details as user is already signed in
            this._getCurrentUserInfo();
        } else {
            this.props.navigation.navigate('Auth')
        }
        this.setState({gettingLoginStatus: false});
    };

    _getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('User Info --> ', userInfo);
            this.setState({userInfo: userInfo});
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                // alert('Something went wrong. Unable to get user\'s info');
                console.log('Something went wrong. Unable to get user\'s info');
            }
        }
    };
    render() {
        return (
            // <SafeAreaView>
                <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
                    <LottieView
                        source={require('../assets/img/anim1.json')}
                        style={{width:200}}
                        autoSize = {true}
                        autoPlay
                        loop
                    />
                </View>
            // </SafeAreaView>
        );
    }
}

export {LoadScreen};
