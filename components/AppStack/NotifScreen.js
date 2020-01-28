import React , {Component} from 'react';
import {View , Text , FlatList} from 'react-native';

class NotifScreen extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }


    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    data={DATA}
                    keyExtractor={item=> item.id}
                    renderItem={({item})=>(
                        <View style={{width:'90%' , flex:0.2 , justifyContent:'flex-start' , alignItems:'flex-start', backgroundColor:'white', borderRadius:10, elevation:2, marginHorizontal:'5%', marginTop:10 , paddingHorizontal:'2%'}}>
                            <Text style={{fontFamily:'Comfortaa-Bold', fontSize:22}}>{item.name}</Text>
                            <Text>{item.describe}</Text>
                        </View>
                    ) }
                >
                </FlatList>
            </View>
        )
    }
}

const DATA = [
    {
        id:1,
        name : 'example notif',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    },
    {
        id:2,
        name : 'example notif',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    },
    {
        id:3,
        name : 'example notif',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    }
]

export {NotifScreen};
