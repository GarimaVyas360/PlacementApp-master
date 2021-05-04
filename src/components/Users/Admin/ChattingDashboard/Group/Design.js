import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, ScrollView, TouchableOpacity, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Headline, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

const AdminChattingDashboardDesign = ({ navigation, submitButton, validateInput, groupChats, user, user_type }) => {
    let rowHeight = 146;
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState('');
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ImageBackground source={images.chat.group_bg} style={styles.imageBackground}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View style={styles.chatArea} >
                            {chatgroup()}
                        </View>
                    </ScrollView>
                    <View style={styles.textArea}>
                        <View style={styles.textAreaSec1}>
                            <View style={styles.textSection}>
                                <View style={styles.textInputSection}>
                                    <TextInput
                                        autoCompleteType='off'
                                        multiline={true}
                                        value={message}
                                        onChangeText={(message) => { setMessage(message); }}
                                        placeholder={"Type a message"}
                                        onContentSizeChange={(event) => { (setHeight(event.nativeEvent.contentSize.height)) }}
                                        style={[styles.textInputArea, { height: height < rowHeight ? Math.max(49, height) : (146.6666717529297) }]}
                                    />
                                </View>
                                <View style={styles.mediaInputSection}>
                                    <View style={styles.cameraInputButtonArea}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={styles.cameraInputButton}
                                            onPress={() => { alert("CAMERA OPEN") }}
                                        >
                                            <Icon name="camera" color="gray" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.textAreaSec2]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.sentMsgButton}
                                onPress={() => { submitButton(message), setMessage("") }}
                            >
                                <Icon name="send" color="white" size={27} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </View>
    );



    function chatgroup() {
        return (
            groupChats.map((item, index) => {
                console.log("data show" + item.Message);
                return (
                    <View style={styles.chatArea} key={index}>
                        { user == item.Sender ?
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-start' }]}>
                                <View>
                                    {/* {(item.key == 1) ?<Text style={styles.name}>{item.Sender}</Text>: console.log("item:"+item.key)} */}
                                    {/* <Text style={styles.name}>{item.Sender}</Text> */}
                                    <Text style={styles.chatText}>{item.Message}</Text>
                                    <Text style={styles.date}>{item.Date}  {item.Time} </Text>

                                </View>
                            </View> :
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <View>
                                    {/* {(item.key == 1) ?<Text style={styles.name}>{item.Sender}</Text>: console.log("item:"+item.key)} */}
                                    <Text style={styles.name}>{item.Sender}</Text>
                                    <Text style={styles.chatText}>{item.Message}</Text>
                                    <Text style={styles.date}>{item.Date}  {item.Time} </Text>
                                </View>
                            </View>}
                    </View>
                );
            })
        );
    }
}
export default AdminChattingDashboardDesign;