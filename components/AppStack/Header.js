import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
      const  {navigation} = this.props ;
        return (
            <View style={{flex:0.2 , width:'100%'}}>
                <View style={styles.head}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Icon name={'home'} type={'FontAwesome5'} style={{color: '#4f4e4e'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', width: '40%', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.push('timerScreen')}>
                            <Icon name={'clock'} type={'FontAwesome5'} style={{color: '#4f4e4e'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={'shopping-cart'} type={'FontAwesome5'} style={{color: '#4f4e4e'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.push('notifScreen')}>
                            <Icon name={'bell'} type={'FontAwesome5'} style={{color: '#4f4e4e'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity style={{width: '15%', justifyContent: 'center'}}>
                        <Icon name={'search'} type={'FontAwesome5'} style={{color: '#8994a1', marginLeft: '15%'}}/>
                    </TouchableOpacity>
                    <View style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput
                            ref={input => {
                                this.searchInput = input;
                            }}
                            onChangeText={text => this.setState({search: text})}
                            placeholder='Search'
                            placeholderTextColor='#8994a1'
                            selectionColor='#8994a1'
                            style={{fontSize: 18, flex: 1, width: '100%'}}
                        />
                    </View>
                    <View style={{width: '15%', justifyContent: 'center'}}>
                        <TouchableOpacity>
                            <Icon name={'filter'} type={'FontAwesome5'} style={{color: '#8994a1', marginLeft: '15%'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        // height: 60
        flex: 0.5,
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginHorizontal: '4%',
    },
    search: {
        //
        flex: 0.5,
        width: '86%',
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        marginHorizontal: '7%',
        borderRadius: 15,
    },
})

export {Header};
