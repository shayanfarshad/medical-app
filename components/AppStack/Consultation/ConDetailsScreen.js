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
import {Rating} from 'react-native-ratings';
import {Header} from '../Header';

class ConDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            name: this.props.navigation.state.params.name,
        };
    }

    componentDidMount() {

    }
    goDetails=(item)=>{
        this.props.navigation.navigate('DocDetails', {
            id : item.id ,
            name : item.doctor,
            pic : item.pic ,
            specialist : item.specialist,
            rate : item.rate
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
                    <Text style={{fontSize: 24, fontFamily: 'Comfortaa-Bold', color: '#556113'}}>
                        {this.state.name}
                    </Text>
                </View>
                <View style={styles.cureList}>
                    <SafeAreaView>
                        <FlatList
                            data={DATA}
                            horizontal={true}
                            renderItem={({item}) => {
                                return (
                                    <ScrollView>
                                        <View style={styles.listItem}>
                                            <View style={styles.picCard}>
                                                <Image source={{uri: item.pic}}
                                                       style={{width: '100%', height: 180, borderRadius: 25}}/>
                                            </View>
                                            <View style={styles.itemDesc}>
                                                <Text style={{fontFamily: 'Comforta-bold'}}>{item.doctor}</Text>
                                                <Text>{item.specialist}</Text>
                                                <Text style={{color: '#b5b3b3'}}>{item.country}</Text>
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
                                                <Text style={{color: '#949492', fontSize: 12}}>English</Text>
                                                <Text style={{color: '#949492', fontSize: 12}}>Svenska</Text>
                                                <Text style={{color: '#949492', fontSize: 12}}>عربی</Text>
                                            </View>
                                        </View>
                                        <View style={styles.selectTouch}>
                                            <TouchableOpacity onPress={() => this.goDetails(item)} style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                                                <Text>Details</Text>
                                            </TouchableOpacity>
                                        </View>
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
        height: 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '15%',
    },
    cureList: {
        width: '100%',
        flex: 0.8,
        // borderWidth: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: '#E5E6E4',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        // marginTop: '10%',
        overflow: 'hidden',
        paddingHorizontal: '5%',
        paddingTop: '2%',
    },
    listItem: {
        width: 160,
        // flex: 1,
        height: 380,
        backgroundColor:'white',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        alignItems: 'center',
        // borderWidth: 0.2,
        borderRadius: 25,
        marginTop: 50,
        elevation:2,
        marginBottom:10
    },
    selectTouch: {
        height: 40,
        backgroundColor: 'white',
        borderWidth: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '90%',
        marginLeft:'5%',
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
        height: 120,
        // flexDirection: 'row',
        // borderWidth:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: '2%',
    },

});
const DATA = [
    {
        id: 1,
        doctor: 'Dr Tom Jones',
        specialist: 'general practioner',
        rate: 3,
        country: 'GP',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OHa1e7Obt8KKSU2z0w1BcUEE6_50Z2uP0YnLJeo2KR82wMM1EQ&s',
    },
    {
        id: 2,
        doctor: 'Dr Tom Jones',
        specialist: 'general practioner',
        country: 'GP',
        rate: 1,
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OHa1e7Obt8KKSU2z0w1BcUEE6_50Z2uP0YnLJeo2KR82wMM1EQ&s',
    },
    {
        id: 3,
        doctor: ' Dr Tom Jones',
        specialist: 'general practioner',
        country: 'GP',
        rate: 5,
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OHa1e7Obt8KKSU2z0w1BcUEE6_50Z2uP0YnLJeo2KR82wMM1EQ&s',
    },
];
export {ConDetailsScreen};
