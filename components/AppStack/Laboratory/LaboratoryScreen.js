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

class LaboratoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    componentDidMount() {

    }
    goDetails=(item)=>{
        this.props.navigation.navigate('LabDetails',{
            id: item.id ,
            name : item.name,
            address: item.address ,
            phone : item.phone ,
            LatLng : item.LatLng,
            rate : item.rate,
            worktime : item.workTime ,
            country : item.country
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
                        Laboratory
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
                                                readonly={true}
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
        backgroundColor: '#F0E6EF',
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
        name: 'sweden dental AB',
        address: 'Sveavägen 98, 113 50 Stockholm, Sweden',
        phone: ' +46 10 166 44 00',
        workTime: '8AM - 5PM',

        LatLng: {
            latitude: 59.342287 ,
            longitude : 18.057087,
        },
        rate: 5,
        country: 'SW',
    },
    {
        id: 2,
        name: 'surgical science sweden AB',
        address: 'Drakegatan 7, 412 50 Göteborg, Sweden',
        phone: '+46 31 741 65 60',
        workTime: '8AM - 5PM',
        LatLng: {
            latitude: 57.705258,
            longitude : 11.993871
        },
        country: 'SW',
        rate: 4.5,
    },
    {
        id: 3,
        name: ' ALS Scandinavia AB',
        address: 'Aurorumvägen 10, 977 75 Luleå, Sweden',
        phone: '+46 920 28 99 00',
        workTime: '8AM - 5PM',
        LatLng: {
            latitude:  65.611927,
            longitude : 22.123142
        },
        country: 'SW',
        rate: 5,
    },
    {
        id: 4,
        name: ' SYNLAB',
        country: 'SW',
        address: 'Olaus Magnus Väg 27, Box 1083, 583 30 Linköping, Sweden',
        phone: '+46 13 25 49 00',
        LatLng: {
            latitude:  58.398087,
            longitude : 15.573474
        },
        workTime: '8AM - 5PM',
        rate: 3,
    },
    {
        id: 5,
        name: 'Unilab, Chemical Laboratory Skovde',
        address: 'Skaraborgs Sjukhus, 541 85 Skövde, Sweden',
        phone: ' +46 77 140 77 40',
        workTime: '8AM - 5PM',
        LatLng: {
            latitude:   58.427063,
            longitude : 13.851829
        },
        country: 'SW',
        rate: 2.5,
    },

];
export {LaboratoryScreen};
