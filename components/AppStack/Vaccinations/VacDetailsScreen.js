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
import {Rating, AirbnbRating} from 'react-native-ratings';
import Modal from 'react-native-modal';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Header} from '../Header';

class VacDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastposition: null,
            modalVisible: false,
            search: '',
            name: this.props.navigation.state.params.name,
            phone: this.props.navigation.state.params.phone,
            address: this.props.navigation.state.params.address,
            worktime: this.props.navigation.state.params.worktime,
            rate: this.props.navigation.state.params.rate,
            logo: this.props.navigation.state.params.logo,
            LatLng: this.props.navigation.state.params.LatLng,
        };

    }

    watchID: ?number = null;

    componentDidMount() {
        // Geolocation.getCurrentPosition(
        //         position => {
        //             console.log(position)
        //             const initialPosition = JSON.stringify(position);
        //             this.setState({region : initialPosition});
        //         },
        //         error => alert('Error', JSON.stringify(error)),
        //         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        //     );
        //     this.watchID = Geolocation.watchPosition(position => {
        //         const lastPosition = JSON.stringify(position);
        //         this.setState({lastPosition});
        //     });
    }


    openModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    };
    closeModal = () => {
        this.setState({modalVisible: false});
    };

    render() {
        const {navigation} = this.props ;
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <StatusBar backgroundColor="#9fa0a1"/>
                <Header navigation={navigation} />
                <View style={styles.cureList}>
                    <View style={{
                        width: '100%',
                        flex: 0.4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        paddingHorizontal: '2%',
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            width: '70%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            height: 200,
                            // marginTop: 10,
                        }}>
                            <Text style={{fontFamily: 'Comfortaa-Bold'}}>{this.state.name}</Text>
                            <Text>Address : {this.state.address}</Text>
                            <Text>Phone : {this.state.phone}</Text>
                            <Text>Work Time :{this.state.worktime}</Text>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                                <Rating
                                    type='custom'
                                    // ratingImage={WATER_IMAGE}
                                    ratingColor='#ffe70d'
                                    ratingBackgroundColor='#c8c7c8'
                                    // defaultRating={item.rate}
                                    startingValue={this.state.rate}
                                    ratingCount={5}
                                    imageSize={15}
                                    isDisabled={true}
                                    readonly={true}
                                    onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical: 10}}
                                />
                                <Modal
                                    isVisible={this.state.modalVisible}
                                    onBackButtonPress={this.closeModal}
                                    onBackdropPress={this.closeModal}>
                                    <View style={{
                                        flex: 1,
                                        width: '80%',
                                        marginLeft: '10%',
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}>
                                        <MapView
                                            style={MapStyle}
                                            region={{
                                                latitude: this.state.LatLng.latitude,
                                                longitude: this.state.LatLng.longitude,
                                                latitudeDelta : 0.05 ,
                                                longitudeDelta: 0.05
                                            }}
                                            // onRegionChange={this.onRegionChange}
                                            showsUserLocation={true}
                                        >
                                            <Marker
                                                coordinate={this.state.LatLng}
                                                title={this.state.name}
                                            />
                                        </MapView>
                                    </View>
                                </Modal>
                                <TouchableOpacity onPress={this.openModal} style={{
                                    width: '50%',
                                    height: 30,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    elevation: 2,
                                    borderRadius: 5,
                                }}>
                                    <Icon name='map-marker-alt' type='FontAwesome5' style={{fontSize: 15}}/>
                                    <Text>Location</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}>
                            <Image source={{uri: this.state.logo}} style={{width: '100%', height: '100%'}}/>
                        </View>
                    </View>
                    <View style={{width: '95%', flex: 0.6, marginHorizontal: '2.5%'}}>
                        <FlatList
                            data={DrugCat}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.listItem}>
                                    <View style={{width: 50, height: 50, borderRadius: 25}}>
                                        <Image source={{uri: item.logo}} style={{width: '100%', height: '100%'}}/>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        flex: 0.1,
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginHorizontal: '4%',
    },
    search: {
        flex: 0.1,
        width: '86%',
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        marginHorizontal: '7%',
        borderRadius: 15,
    },
    header: {
        width: '100%',
        flex: 0.15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '15%',
    },
    cureList: {
        width: '100%',
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        marginTop: 20,
        overflow: 'hidden',
        paddingHorizontal: '5%',
        // paddingTop: '2%',
    },
    listItem: {
        // flex:1,
        width: '95%',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: '5%',
        marginBottom: '1%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        marginHorizontal: '2.5%',
        alignItems: 'center',
        // borderWidth: 0.2,
        borderRadius: 25,
        marginTop: 20,
        elevation: 2,
    },
    selectTouch: {
        height: 40,
        backgroundColor: '#2ec7ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 160,
        marginTop: 10,
        marginBottom: 10,
    },
    picCard: {
        width: '90%',
        // flex:0.6,
        height: 180,
        borderRadius: 25,
        marginTop: -40,
        paddingBottom: 40,
        elevation: 2, shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    itemDesc: {
        width: '85%',
        height: 100,
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 25,
        paddingHorizontal: '2%',
    },


});

const MapStyle = {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 15,
};
const DrugCat = [
    {
        id: 1,
        name: 'Antibiotics',
        logo: 'https://hhp-blog.s3.amazonaws.com/2017/02/bad-bugs.jpg',
    },
    {
        id: 2,
        name: 'Antibiotics',
        logo: 'https://hhp-blog.s3.amazonaws.com/2017/02/bad-bugs.jpg',
    },
    {
        id: 3,
        name: 'Antibiotics',
        logo: 'https://hhp-blog.s3.amazonaws.com/2017/02/bad-bugs.jpg',
    },
    {
        id: 4,
        name: 'Antibiotics',
        logo: 'https://hhp-blog.s3.amazonaws.com/2017/02/bad-bugs.jpg',
    },
    {
        id: 5,
        name: 'Antibiotics',
        logo: 'https://hhp-blog.s3.amazonaws.com/2017/02/bad-bugs.jpg',
    },
];

export {VacDetailsScreen};
