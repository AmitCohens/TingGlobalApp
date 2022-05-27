import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MessageHistory from './AllChats';

const ChatScreen = ({route, nav}) => {
    const [messages, setMessages] = useState([]);
    // console.log(route.params.db);
    useEffect(() => {
        setMessages(route.params.db.msg_history)
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const { _id, createdAt, text, user,} = messages[0]



        console.log(messages[0]);
        // console.log(MessageHistory);

        // addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        style={{marginBottom: 5, marginRight: 5}}
                        size={32}
                        color="#2e64e5"
                    />
                </View>
            </Send>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0082ff',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#ffffff',
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return(
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
    }

    return (
        <GiftedChat
            messages={messages}
            showUserAvatar={true}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{ //DB - Get signed in user's details
                _id: "u1",
                name: "Gad",
                avatar: 'https://placeimg.com/140/140/any'
            }}
            renderBubble={renderBubble}
            renderUsernameOnMessage={true}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
