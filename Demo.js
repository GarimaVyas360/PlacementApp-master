import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, ScrollView, TouchableOpacity, TouchableNativeFeedback, ImageBackground, FlatList } from 'react-native';
import { Headline, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

const AdminChattingDashboardDesign = ({ navigation, nav_title, groupChats }) => {
    let rowHeight = 146;
    const [height, setHeight] = useState(0);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const groupChat = groupChats.slice();

    // useEffect(() => {
    //     groupChat(groupChats);
    // }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ImageBackground source={images.chat.group_bg} style={styles.imageBackground}>
                    <InvertibleScrollView contentContainerStyle={styles.scrollView} inverted>
                        {/* <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Hiii</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>Hello</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Do you know about React Native???</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>No, I think used in Mob dev's</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>Are you working</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>on</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>this</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-end', alignItems: 'flex-end' }]}>
                                <Text style={styles.name}>Garima</Text>
                                <Text style={styles.chatText}>??????</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Yes, I'm recently created an application for college....</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>Placement Application</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>i'll explain after completed my work.</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>BYE.......</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>gn</Text>
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <Text style={styles.name}>Shefali</Text>
                                <Text style={styles.chatText}>{text2}</Text>
                            </View>
                        </View> */}
                        <View style={styles.chatArea}>
                            <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                {/* <Text style={styles.name}>{text2}</Text> */}
                                {/* <Text style={styles.chatText}>{text}</Text> */}


                                {/* {groupChats.map((item, index) => {
                                    console.log("data show" + item.Message);
                                    return (
                                        <View key={item.key}> */}
                                {/* {(item.key == 1) ?<Text style={styles.name}>{item.Sender}</Text>: console.log("item:"+item.key)} */}
                                {/* <Text style={styles.name}>{item.Sender}</Text>
                                            <Text style={styles.chatText}>{item.Message}</Text>
                                        </View>
                                    );
                                })
                                } */}

                                {/* </View> */}
                                {/* </View> */}
                            </View>
                        </View>
                        <View style={styles.chatArea}>
                            {groupChat.map((item, index) => {
                                console.log("data show" + item.Message);
                                return (
                                    <View style={styles.chatArea}>
                                        <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                            <View key={item.key}>
                                                {/* {(item.key == 1) ?<Text style={styles.name}>{item.Sender}</Text>: console.log("item:"+item.key)} */}
                                                <Text style={styles.name}>{item.Sender}</Text>
                                                <Text style={styles.chatText}>{item.Message}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                            }
                            {/* //     <View style={[styles.chatTextArea, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                        //         <Text style={styles.name}>Shefali</Text>
                        //         <Text style={styles.chatText}>{text2}</Text>
                        //     </View> */}
                        </View>


                    </InvertibleScrollView>
                    <View style={styles.textArea}>
                        <View style={styles.textAreaSec1}>
                            <View style={styles.textSection}>
                                <View style={styles.textInputSection}>
                                    <TextInput
                                        autoCompleteType='off'
                                        multiline={true}
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
                                onPress={() => { alert("SEND MSG") }}
                            >
                                <Icon name="send" color="white" size={27} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </View>
    );

    // function groupChat(groupChats) {

    //     {
    //         groupChats.map((item, index) => {
    //             console.log("data show" + item.Message);
    //             // <View>
    //             //     <Text style={styles.chatText}>{item.Message}</Text>
    //             // </View>
    //             if (item.key == 1) {
    //                 console.log(item.Key);
    //                 setText(item.Message);
    //                 setText2(item.Sender);
    //             }
    //             if (item.Key == 2) {
    //                 console.log(item.Key);
    //                 setText2(item.Message);
    //             }
    //         })
    //     }

    // }
}
export default AdminChattingDashboardDesign;