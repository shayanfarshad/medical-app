import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            enter: 'BankId',
            modalVisible: false,
            userInfo: null,
        };
    }

    componentDidMount() {

    };

    _signIn = async () => {
        try {
            console.log('try');
            await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
            // google services are available
            const userInfo = await GoogleSignin.signIn();
            this.setState({userInfo: userInfo});
            console.log(userInfo);
            this.props.navigation.navigate('Home');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('not available');
            } else {
                console.log('other');
            }
        }
    };

    loginUser = () => {
        console.log(this.state.user);
        AsyncStorage.setItem('userpass', `${this.state.user}`);
        console.log('stored');
        if (this.state.user !== '' && this.state.pass !== '') {
            this.props.navigation.navigate('Home');
        } else {
            alert('مقادیر را وارد کنید');
        }
        this.username.clear();
        this.password.clear();
    };

    LoginShow = () => {
        const enter = this.state.enter;
        if (enter == 'BankId') {
            return (
                <View style={styles.inputLogin}>
                    <Text style={{color: 'white', fontFamily: 'Comfortaa-Bold'}}>
                        Bank ID
                    </Text>
                    <TextInput
                        style={styles.textinput}
                        ref={input => {
                            this.BankId = input;
                        }}
                        onChangeText={text => this.setState({bankId: text})}
                    />
                </View>
            );

        } else if (enter == 'PhoneNumber') {
            return (
                <View style={styles.inputLogin}>
                    <Text style={{color: 'white', fontFamily: 'Comfortaa-Bold'}}>
                        Phone Number
                    </Text>
                    <TextInput
                        style={styles.textinput}
                        ref={input => {
                            this.BankId = input;
                        }}
                        onChangeText={text => this.setState({phoneNumber: text})}
                    />
                </View>
            );
        } else if (enter == 'Email') {

            return (
                <View style={styles.emailModal}>
                    <Modal
                        isVisible={this.state.modalVisible}
                        animationIn='slideInUp'
                        animationOut='slideInUp'
                        // hasBackdrop = {true}
                        onBackButtonPress={() => this.setState({modalVisible: false})}
                        onBackdropPress={() => this.setState({modalVisible: false})}
                    >
                        <View style={styles.modalView}>
                            <Text>I am the modal content!</Text>
                        </View>

                    </Modal>
                </View>
            );
        } else if (enter == 'UserPass') {
            return (
                <View style={styles.inputLogin}>
                    <View style={{width: '100%'}}>
                        <Text style={{color: 'white', fontFamily: 'Comfortaa-Bold'}}>
                            username
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            ref={input => {
                                this.username = input;
                            }}
                            onChangeText={text => this.setState({user: text})}
                        />
                    </View>
                    <View style={{width: '100%'}}>
                        <Text style={{color: 'white', fontFamily: 'Comfortaa-Bold'}}>
                            password
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            ref={input => {
                                this.password = input;
                            }}
                            onChangeText={text => this.setState({pass: text})}
                        />
                    </View>
                </View>
            );
        }
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white'}}>
                <View style={{flex: 1, position: 'absolute', top: 0}}>
                    <LottieView
                        source={require('../../assets/img/anim3.json')}
                        style={{width: 250}}
                        autoSize={true}
                        autoPlay
                        loop
                    />
                </View>
                <View style={styles.loginform}>
                    <View style={{flex: 0.3, width: '70%'}}>
                        {this.LoginShow()}
                    </View>
                    <View style={{flex: 0.5, width: '70%', justifyContent: 'space-around'}}>
                        <Text style={{color: 'white', fontFamily: 'Comfortaa-Bold'}}>Sign in with : </Text>
                        <TouchableOpacity style={styles.typeButton} onPress={() => this.setState({enter: 'BankId'})}>
                            <Text>Bank Id</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // style={{width: '100%', height: 45}}
                            style={[styles.typeButton, {flexDirection: 'row'}]}
                            onPress={() => this._signIn()}
                            disabled={this.state.isSigninInProgress}>
                            <Icon name='logo-googleplus' type='Ionicons' style={{marginRight: 5}}/>
                            <Text>Google Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeButton}
                                          onPress={() => this.setState({enter: 'PhoneNumber'})}>
                            <Text>Phone Number</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeButton} onPress={() => this.setState({enter: 'UserPass'})}>
                            <Text>User and Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.2,
                        justifyContent: 'center',
                        width: '70%',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            onPress={this.loginUser}
                            style={{
                                width: 100,
                                height: 40,
                                backgroundColor: '#72a0fc',
                                borderRadius: 4,
                                elevation: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{color: 'white'}}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginform: {
        width: '70%',
        flex: 0.7,
        marginBottom: '5%',
        backgroundColor: '#314970',
        borderRadius: 15,
        paddingTop: 10,
        elevation: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputLogin: {
        width: '100%',
        // height:100,
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textinput: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 4,
        elevation: 1,
        marginTop: '1%',
    },
    typeButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        marginTop: 4,

    },
    emailModal: {
        width: '80%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 0.7,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: '10%',
        borderRadius: 10,
    },
});

export {LoginScreen};
