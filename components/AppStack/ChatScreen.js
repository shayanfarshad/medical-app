import React, {Component} from 'react';
import {View, Text, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            text: '',
        };
    }
    componentDidMount(): void {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    // addItem = () => {
    //     if (this.state.text === '') {
    //         return;
    //     }
    //
    //     let Arr = this.state.chat;
    //     Arr.push(this.state.text);
    //
    //     this.setState({
    //         chat: Arr,
    //         text: '',
    //     });
    //     this.textInput.clear();
    // };



    render() {
        return (
            <View style={{flex: 1}}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                        name: 'patient 1',
                        avatar: 'https://placeimg.com/140/140/any',
                    }}
                />
            </View>
        );
    }
}


export {ChatScreen};
