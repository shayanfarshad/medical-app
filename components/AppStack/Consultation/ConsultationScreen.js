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
import {Header} from '../Header';
class ConsultationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    componentDidMount() {

    }
    goDetails=(item)=>{
        console.log(item)
        this.props.navigation.navigate('ConDetails', {
            id : item.id ,
            name : item.name ,
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
                        Consultation
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
                                                       style={{width: '100%', height:160, borderRadius: 25}}/>
                                            </View>
                                            <View style={styles.itemDesc}>
                                                <Text style={{textAlign: 'center', fontSize:14}}>{item.name}</Text>
                                            </View>
                                        </View>
                                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 5, flex:0.3}}>
                                            <TouchableOpacity onPress={()=> this.goDetails(item)} style={styles.selectTouch}>
                                                <Text style={{fontSize:10}}>Select</Text>
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
        flex: 0.1,
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
        alignSelf:'flex-end',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
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
        height: '60%',
        // flex:1,
        backgroundColor:'white',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        borderWidth: 0.2,
        borderRadius: 25,
        marginTop: 50,
        elevation:2
    },
    selectTouch: {
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 100,
        marginTop: 10,
        marginBottom: 10,
        elevation:2
    },
    picCard: {
        width: '90%',
        height: 160,
        // flex:1,
        borderRadius: 25,
        marginTop: -40,
        paddingBottom: 40,
        elevation: 2, shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    itemDesc:{
        width: '50%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 15,
        marginBottom: 15,
    }


});
const DATA = [
    {
        id: 1,
        name: 'General Practitioner',
        pic: 'http://www.healthcareworkersalary.com/wp-content/uploads/2014/05/general_practitioner.jpg',
    },
    {
        id: 2,
        name: 'Ear, Nose Throat',
        pic: 'http://www.ccent.com/images/ent-otolaryngology.jpg',
    },
    {
        id: 3,
        name: 'Ear, Nose Throat',
        pic: 'http://www.ccent.com/images/ent-otolaryngology.jpg',
    },
];
export {ConsultationScreen};
