import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import con from '../../assets/img/consultation.jpg'
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    componentDidMount() {
    }

    goToScreen = (id) => {
        console.log('umadim tush');
        if (id == 1) {
            this.props.navigation.navigate('Consultation');
        } else if (id == 2) {
            this.props.navigation.navigate('Doctors');
        } else if (id == 3) {
            this.props.navigation.navigate('Laboratory');
        } else if (id == 4) {
            this.props.navigation.navigate('DrugStore');
        } else if (id == 5) {
            this.props.navigation.navigate('Vaccinations');
        }
    };

    render() {
        return (
            <View style={styles.homeMain}>
                <StatusBar backgroundColor="#9fa0a1"/>
                <View style={{flex: 1, width: '90%', marginLeft: '5%',marginRight:'5%', overflow: 'hidden'}}>
                    <View style={{flexDirection:'row' , flex:0.25 , borderBottomLeftRadius:15 , borderBottomRightRadius:15,overflow:'hidden' }}>
                        <LinearGradient colors={['#03d7fc', '#2582b0','#0a3a52']} style={{width:'100%' ,flex:1 ,justifyContent:'flex-start', alignItems:'flex-start' , paddingHorizontal:'5%', paddingTop:20}} start={{x: 0.0, y: 1}} end={{x: 1, y: 0.2}}
                                        locations={[0.2,0.8,1]} >
                            <Text style={{fontSize:20}}>Welcome Mr.Mohammadi</Text>
                            <Text style={{fontSize:16}}>Cash : 28.65 $</Text>
                            <Text style={{fontSize:16}}>Gender : Male</Text>
                            <Text style={{fontSize:16}}>Age : 32</Text>
                        </LinearGradient>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Consultation')} style={{ width:'90%',flexDirection:'row',marginLeft:'5%' , flex:0.25 ,borderRadius:15, marginTop:-20, overflow:'hidden' , elevation:5}}>
                        <ImageBackground source={require('../../assets/img/consultation.jpg')} style={{width:'100%' , height:'100%'}}>
                            <View style={{width:'100%' ,flex:1 , opacity:0.7,backgroundColor: '#03d7fc',justifyContent:'flex-end', alignItems:'flex-start' , paddingHorizontal:'10%', paddingBottom:20}}>
                            </View>
                            <Text style={{fontWeight:'bold' , fontSize:22,color:'#072e52',position:'absolute' , top:'60%' , left: 20 }}>Consultation</Text>
                            <Icon name='comment-medical' type='FontAwesome5' style={{color:'#072e52' , position:'absolute',top:'75%' , left: 20}} />
                        </ImageBackground>
                    </TouchableOpacity>
                        <View style={{flexDirection:'row', flex:0.50, justifyContent:'space-between'}}>
                            <View style={{width:'48%' , marginTop:15}}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Doctors')} style={{width:'90%',marginLeft:'10%', flex:0.4 , borderRadius:15,marginBottom:15 , overflow:'hidden' , elevation:5}}>
                                    <ImageBackground source={require('../../assets/img/doctors.jpeg')} style={{width:'100%' , height:'100%'}}>
                                        <View style={{width:'100%' ,flex:1 , opacity:0.7,backgroundColor: '#03d7fc',justifyContent:'flex-end', alignItems:'flex-start' , paddingHorizontal:'10%', paddingBottom:20}}>
                                        </View>
                                        <Text style={{fontWeight:'bold' , fontSize:22,color:'#072e52',position:'absolute' , top:'45%' , left: 20 }}>Doctors</Text>
                                        <Icon name='user-md' type='FontAwesome5' style={{color:'#072e52' , position:'absolute',top:'65%' , left: 20}} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Vaccinations')} style={{width:'90%',marginLeft:'10%', flex:0.6, borderRadius:15,marginBottom:15 , elevation:5 , overflow:'hidden'}}>
                                    <ImageBackground source={require('../../assets/img/vaccine.jpg')} style={{width:'100%' , height:'100%'}}>
                                        <View style={{width:'100%' ,flex:1 , opacity:0.7,backgroundColor: '#03d7fc',justifyContent:'flex-end', alignItems:'flex-start' , paddingHorizontal:'10%', paddingBottom:20}}>
                                        </View>
                                        <Text style={{fontWeight:'bold' , fontSize:22,color:'#072e52',position:'absolute' , top:'60%' , left: 20 }}>Vaccinations</Text>
                                        <Icon name='syringe' type='FontAwesome5' style={{color:'#072e52' , position:'absolute',top:'75%' , left: 20}} />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'48%', marginTop:15}}>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Laboratory')} style={{width:'90%', flex:0.6 , borderRadius:15 , marginBottom:15, elevation:5 , overflow:'hidden'}}>
                                    <ImageBackground source={require('../../assets/img/laboratory.jpg')} style={{width:'100%' , height:'100%'}}>
                                        <View style={{width:'100%' ,flex:1 , opacity:0.7,backgroundColor: '#03d7fc',justifyContent:'flex-end', alignItems:'flex-start' , paddingHorizontal:'10%', paddingBottom:20}}>
                                        </View>
                                        <Text style={{fontWeight:'bold' , fontSize:22,color:'#072e52',position:'absolute' , top:'55%' , left: 20 }}>Laboratory</Text>
                                        <Icon name='microscope' type='FontAwesome5' style={{color:'#072e52' , position:'absolute',top:'70%' , left: 20}} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrugStore')} style={{width:'90%', flex:0.4 , borderRadius:15,marginBottom:15 ,elevation:5 , overflow:'hidden'}}>
                                    <ImageBackground source={require('../../assets/img/drugStore.jpg')} style={{width:'100%' , height:'100%'}}>
                                        <View style={{width:'100%' ,flex:1 , opacity:0.7,backgroundColor: '#03d7fc',justifyContent:'flex-end', alignItems:'flex-start' , paddingHorizontal:'10%', paddingBottom:20}}>
                                        </View>
                                        <Text style={{fontWeight:'bold' , fontSize:22,color:'#072e52',position:'absolute' , top:'50%' , left: 20 }}>DrugStore</Text>
                                        <Icon name='pills' type='FontAwesome5' style={{color:'#072e52' , position:'absolute',top:'70%' , left: 20}} />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        );
    }
}

const back = {
    medical: [
        'rgb(75, 190, 150)',
        'rgb(110, 205, 245)',
    ],
};
const styles = StyleSheet.create({
    homeMain: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // flexWrap: 'nowrap',
    },
});
const Menu = [
    {
        id: 1,
        name: 'Consultation',
        pic: require('../../assets/img/consultation.png')
    },
    {
        id: 2,
        name: 'Doctors',
        pic: require('../../assets/img/doctor.png')
    },
    {
        id: 3,
        name: 'Laboratory',
        pic: require('../../assets/img/lab.png')
    },
    {
        id: 4,
        name: 'DrugStore',
        pic: require('../../assets/img/pharmacist.png')
    },
    {
        id: 5,
        name: 'Vaccinations',
        pic: require('../../assets/img/vaccine.png')
    },
];

export {HomeScreen};
