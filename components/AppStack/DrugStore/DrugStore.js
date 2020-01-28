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
import {Header} from '../Header';

class DrugStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    componentDidMount() {

    }
    goDetails=(item)=>{
        this.props.navigation.navigate('StoreDetails',{
            id : item.id ,
            name : item.name,
            logo : item.logo ,
            phone : item.phone,
            worktime : item.workTime,
            address : item.address,
            rate : item.rate,
            LatLng : item.LatLng
        })
    }

    render() {
        const {navigation} = this.props ;
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <StatusBar backgroundColor="#9fa0a1"/>
                <Header navigation={navigation} />
                <View style={styles.header}>
                    <Text style={{fontSize: 25, fontFamily: 'Comfortaa-Bold', color: '#4f4e4e'}}>
                        DrugStore
                    </Text>
                </View>
                <View style={styles.cureList}>
                    <SafeAreaView>
                        <FlatList
                            data={DATA}
                            horizontal={false}
                            renderItem={({item}) => {
                                return (
                                    <ScrollView>
                                        <TouchableOpacity onPress={()=> this.goDetails(item)} style={styles.listItem}>
                                            <Text style={{fontFamily: 'Comfortaa-Bold'}}>{item.name}</Text>
                                            <Text style={{fontSize:12}}>Address : {item.address}</Text>
                                            <Text style={{fontSize:12}}>Phone : {item.phone}</Text>
                                            <Text style={{fontSize:12}}>Work Time :{item.workTime}</Text>
                                            <Rating
                                                type='custom'
                                                // ratingImage={WATER_IMAGE}
                                                ratingColor='#ffe70d'
                                                ratingBackgroundColor='#c8c7c8'
                                                // defaultRating={item.rate}
                                                startingValue={item.rate}
                                                ratingCount={5}
                                                imageSize={12}
                                                isDisabled={true}
                                                // readonly={true}
                                                onFinishRating={this.ratingCompleted}
                                                style={{paddingVertical: 10}}
                                            />
                                        </TouchableOpacity>
                                    </ScrollView>
                                );
                            }
                            }
                            keyExtractor={item => item.id}
                        >
                        </FlatList>
                    </SafeAreaView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        width: '100%',
        flex:0.1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '15%',
    },
    cureList: {
        width: '100%',
        flex: 0.6,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: '#c9d9f2',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        // marginTop: '10%',
        overflow: 'hidden',
        paddingHorizontal: '5%',
        // paddingTop: '2%',
    },
    listItem: {
        width: '95%',
        // flex: 1,
        paddingHorizontal:'5%',
        paddingTop: '2%',
        marginBottom:'1%',
        backgroundColor:'white',
        justifyContent: 'center',
        marginHorizontal: '2.5%',
        alignItems: 'flex-start',
        // borderWidth: 0.2,
        borderRadius: 25,
        marginTop: 20,
        elevation:3
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
const DATA = [
    {
        id: 1,
        name: 'Apoteket C W Scheele',
        address :'Klarabergsgatan 64, 111 81 Stockholm, Sweden',
        workTime: 'open 24 hours',
        phone : '+46 77 145 04 50',
        LatLng:{
                latitude: 59.331558,
                longitude: 18.058921 ,
         },
        rate : '4.2',
        logo : 'https://lh5.googleusercontent.com/p/AF1QipOvcCdQTVoORXoq5a5uc2OYxO1OyS4kWWYZhVUQ=w203-h152-k-no'
    },
    {
        id: 2,
        name: 'Apoteket C W Scheele',
        address :'Klarabergsgatan 64, 111 81 Stockholm, Sweden',
        workTime: 'open 24 hours',
        LatLng:{
            latitude: 59.331558,
            longitude: 18.058921 ,
        },
        phone : '+46 77 145 04 50',
        rate : '4.2',
        logo : 'https://lh5.googleusercontent.com/p/AF1QipOvcCdQTVoORXoq5a5uc2OYxO1OyS4kWWYZhVUQ=w203-h152-k-no'
    },
    {
        id: 3,
        name: 'Apoteket C W Scheele',
        address :'Klarabergsgatan 64, 111 81 Stockholm, Sweden',
        workTime: 'open 24 hours',
        LatLng:{
            latitude: 59.331558,
            longitude: 18.058921 ,
        },
        phone : '+46 77 145 04 50',
        rate : '4.2',
        logo : 'https://lh5.googleusercontent.com/p/AF1QipOvcCdQTVoORXoq5a5uc2OYxO1OyS4kWWYZhVUQ=w203-h152-k-no'
    },
    {
        id: 4,
        name: 'Apoteket C W Scheele',
        address :'Klarabergsgatan 64, 111 81 Stockholm, Sweden',
        workTime: 'open 24 hours',
        LatLng:{
            latitude: 59.331558,
            longitude: 18.058921 ,
        },
        phone : '+46 77 145 04 50',
        rate : '4.2',
        logo : 'https://lh5.googleusercontent.com/p/AF1QipOvcCdQTVoORXoq5a5uc2OYxO1OyS4kWWYZhVUQ=w203-h152-k-no'
    },
    {
        id: 5,
        name: 'Apoteket C W Scheele',
        address :'Klarabergsgatan 64, 111 81 Stockholm, Sweden',
        workTime: 'open 24 hours',
        LatLng:{
            latitude: 59.331558,
            longitude: 18.058921 ,
        },
        phone : '+46 77 145 04 50',
        rate : '4.2',
        logo : 'https://lh5.googleusercontent.com/p/AF1QipOvcCdQTVoORXoq5a5uc2OYxO1OyS4kWWYZhVUQ=w203-h152-k-no'
    },

];
export {DrugStore};
