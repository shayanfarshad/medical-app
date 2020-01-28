import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import {Icon} from 'native-base';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Header} from '../Header';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

class DocDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibile : false ,
            selected: new Map(),
            step: 1,
            selectedStartDate: null,
            modalVisible: false,
            search: '',
            name: this.props.navigation.state.params.name,
            pic: this.props.navigation.state.params.pic,
            specialist: this.props.navigation.state.params.specialist,
            rate: this.props.navigation.state.params.rate,
        };
    }


    openModal = () => {
        this.setState({modalVisible: !this.state.modalVisible, step: 1, selectedStartDate: '', selected : new Map()});
    };

    onDateChange = (date) => {
        console.log('date', date);
        var selectdate = moment(date).format('YYYY/MM/DD');
        this.setState({
            selectedStartDate: selectdate,
        });
    };
    nextStep = () => {
        if (this.state.selectedStartDate == '') {
            this.setState({
                visible : true
            } , () => {
                this.hideToast();
            },)
        } else {
            this.setState({step: this.state.step + 1});
        }
    };
    hideToast = () => {
        this.setState({
            visible: false,
        });
    };
    selectTime = (id , time) => {
        console.log(time)
        this.setState({selectedTime : time})
        this.setState((state) => {

            //create new Map object, maintaining state immutability
            const selected = new Map(state.selected);
            //remove key if selected, add key if not selected
            this.state.selected.has(id) ? selected.delete(id, !selected.get(id)) : selected.set(id, !selected.get(id));
            return {selected};
        });
    };

    showViewModal = () => {
        if (this.state.step == 1) {
            return (
             <View style={{height:'100%' , width:'90%', marginHorizontal:'5%' , justifyContent:'flex-end', alignItems:'center'}}>
                 <CalendarPicker
                     onDateChange={this.onDateChange}
                     selectedDayColor="#301b5c"
                     selectedDayTextColor={'white'}
                     minDate={new Date()}
                     todayBackgroundColor={'#36cfba'}
                     scaleFactor={410}
                     startFromMonday={true}
                 />
                 <TouchableOpacity onPress={this.nextStep} style={{
                     backgroundColor: 'white',
                     borderRadius: 10,
                     elevation: 2,
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '30%',
                     height: 40,
                     marginBottom: 10,
                     alignSelf: 'flex-end',
                     marginRight: '4%',
                 }}>
                     <Text>next</Text>
                 </TouchableOpacity>
             </View>
            );
        } else if (this.state.step == 2) {
            return (
                <View style={{
                    width: '90%',
                    flex: 1,
                    marginHorizontal:'5%',
                    justifyContent: 'space-around',
                    alignItems: 'flex-start',
                    // borderWidth: 1,
                }}>
                    <View style={{flex: 0.2, marginHorizontal: '5%', marginTop: 10}}>
                        <Text>date : {this.state.selectedStartDate}</Text>
                    </View>
                    <View style={{flex: 0.8}}>
                        <FlatList
                            data={TimeTable}
                            numColumns={2}
                            extraData={this.state.selected}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => {
                                if (item.ok == true) {
                                    return (
                                        <TouchableOpacity
                                            selected={!!this.state.selected.get(item.id)}
                                            onPress={() => this.selectTime(item.id , item.time)}
                                            style={[styles.timeSelect, {backgroundColor: this.state.selected.has(item.id) ? '#187a36' : 'white'}]}>
                                            <Text
                                                style={{color: this.state.selected.has(item.id) ? 'white' : 'black'}}>{item.time}</Text>
                                        </TouchableOpacity>
                                    );
                                } else {
                                    return (
                                        <TouchableOpacity
                                            disabled={true}
                                            selected={!!this.state.selected.get(item.id)}
                                            onPress={() => this.selectTime(item.id)}
                                            style={[styles.timeSelect, {backgroundColor: '#ad1a37'}]}>
                                            <Text style={{color: 'white'}}>{item.time}</Text>
                                        </TouchableOpacity>
                                    );
                                }
                            }}/>
                    </View>
                    <TouchableOpacity onPress={this.nextStep} style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                        height: 40,
                        marginBottom: 10,
                        alignSelf: 'flex-end',
                        marginRight: '4%',
                    }}>
                        <Text>next</Text>
                    </TouchableOpacity>
                </View>
            );
        }else if(this.state.step == 3){
            return(
                <View style={{width:'90%', flex:1 , marginHorizontal:'5%', justifyContent:'space-around', alignItems:'center'}}>
                    <Text>Doctor : {this.state.name}</Text>
                    <Text>Specialist : {this.state.specialist}</Text>
                    <Text>Date : {this.state.selectedStartDate}</Text>
                    <Text>Time : {this.state.selectedTime}</Text>
                    <TouchableOpacity style={{backgroundColor:'#308ad9' , width:'50%', height:40 , borderRadius:10 , elevation:2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white'}}>Pay Online</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#308ad9' , width:'50%', height:40 , borderRadius:10 , elevation:2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white'}}>Pay Cash</Text>
                    </TouchableOpacity>
                </View>
            )
        }else {

        }
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <Toast visible={this.state.visible} message="choose your date first" />
                <StatusBar backgroundColor="#9fa0a1"/>
                <Header navigation={navigation}/>
                <View style={styles.header}>
                    <Text style={{fontSize: 24, fontFamily: 'Comfortaa-Bold', color: '#61182d'}}>
                        Doctors
                    </Text>
                </View>
                <View style={styles.cureList}>
                    <View style={{width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{width: 150, height: 150, borderRadius: 75}}
                            source={{uri: this.state.pic}}
                        />
                    </View>
                    <View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 24,
                            color: '#61182d',
                            fontFamily: 'Comfortaa-Bold',
                        }}>{this.state.name}</Text>
                        <Text style={{fontSize: 16, color: '#61182d'}}>{this.state.specialist}</Text>
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
                        <TouchableOpacity onPress={this.openModal} style={{
                            width: '40%',
                            height: 50,
                            borderRadius: 15,
                            backgroundColor: 'white',
                            elevation: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>Appointment</Text>
                        </TouchableOpacity>
                        <Modal
                            isVisible={this.state.modalVisible}
                            onBackButtonPress={this.openModal}
                            onBackdropPress={this.openModal}
                            scrollHorizontal={true}
                        >
                            <View style={{
                                flex: 0.55,
                                width: '95%',
                                marginHorizontal: '2.5%',
                                backgroundColor: 'white',
                                borderRadius: 15,
                                justifyContent: 'space-between',
                                alignItems: 'center',

                            }}>
                                {this.showViewModal()}

                            </View>
                        </Modal>
                    </View>
                    <View style={{
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: 5,
                        flexDirection: 'row',
                        width: '100%',
                    }}>
                        <TouchableOpacity style={styles.selectTouch}>
                            <Icon name='phone' type='FontAwesome5' style={{color: '#61182d', fontSize: 20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('chatScreen')} style={styles.selectTouch}>
                            <Icon name='comment-dots' type='FontAwesome5' style={{color: '#61182d', fontSize: 20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectTouch}>
                            <Icon name='video' type='FontAwesome5' style={{color: '#61182d', fontSize: 20}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};

const styles = StyleSheet.create({
    head: {
        height: 60,
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginHorizontal: '4%',
    },
    search: {
        height: 60,
        width: '86%',
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        marginHorizontal: '7%',
        borderRadius: 15,
    },
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
        flex: 1,
        // borderWidth: 1,
        flexDirection: 'column',
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
        // marginTop: '10%',
        overflow: 'hidden',
        paddingHorizontal: '5%',
        paddingTop: '2%',
    },
    listItem: {
        width: 160,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 10,
        alignItems: 'center',
        borderWidth: 0.2,
        borderRadius: 25,
        marginTop: 50,
    },
    selectTouch: {
        height: 40,
        backgroundColor: 'white',
        borderWidth: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '30%',
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
    timeSelect: {
        borderRadius: 5,
        // backgroundColor:'white',
        elevation: 2,
        width: '45%',
        marginHorizontal: '2.5%',
        marginTop: 4,
        marginBottom: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const TimeTable = [
    {
        id: 1,
        time: '9:00 - 9:30',
        ok: true,

    },
    {
        id: 2,
        time: '9:30 - 10:00',
        ok: true,

    },
    {
        id: 3,
        time: '10:00 - 10:30',
        ok: true,

    },
    {
        id: 4,
        time: '10:30 - 11:00',
        ok: true,

    },
    {
        id: 5,
        time: '11:00 - 11:30',
        ok: true,

    },
    {
        id: 6,
        time: '11:30 - 12:00',
        ok: false,

    },
    {
        id: 7,
        time: '13:00 - 13:30',
        ok: true,

    },
    {
        id: 8,
        time: '13:30 - 14:00',
        ok: true,
    },
];

export {DocDetailsScreen};
