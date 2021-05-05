import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, ScrollView, TouchableOpacity, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Headline, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

const TpoChattingDashboardDesign = ({ navigation, submitButton, validateInput, groupChats, user, user_type }) => {
    let rowHeight = 146;
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState('');
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ImageBackground source={images.chat.group_bg} style={styles.imageBackground}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Hiii</Text>
                                <Text style={styles.date}>10:30AM 30/04/2020</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-start' }]}>
                                <Text style={styles.chatText}>Hello</Text>
                                <Text style={styles.date}>10:30AM 30/04/2020</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Do you know about React Native???</Text>
                                <Text style={styles.date}>10:30AM 30/04/2020</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.chatText}>No, I think used in Mob dev's</Text>
                                <Text style={styles.date}>10:30AM 30/04/2020</Text>
                            </View>
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
}
export default TpoChattingDashboardDesign;