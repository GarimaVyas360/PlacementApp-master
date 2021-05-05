import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create(
    {
        scrollView: {
            flexGrow: 1,
            paddingTop: 1,
            paddingBottom: 5,
        },
        mainContainer: {
            backgroundColor: 'white',
            flex: 1,
        },
        container: {
            flex: 1,
        },
        imageBackground: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        chatArea: {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,

        },
        chatTextArea: {
            backgroundColor: '#f7f7f7',
            maxWidth: '80%',
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            alignSelf: 'center'
        },
        chatText: {
            alignItems: 'center',
            alignSelf: 'center',

        },
        name: {
            color: 'tomato',
            fontWeight: 'bold',
            fontSize: dimensions.font_size.small_x,
        },
        textArea: {
            margin: 5,
            flexDirection: 'row',
        },
        textAreaSec1: {
            width: '85%',
        },
        textSection: {
            width: '100%',
            flexDirection: 'row',
            padding: 5,
        },
        textInputSection: {
            width: '87%',
        },
        textInputArea: {
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            fontSize: dimensions.font_size.medium,
        },
        mediaInputSection: {
            width: '13%',
            backgroundColor: 'white',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 7.5,
        },
        cameraInputButtonArea: {
            backgroundColor: 'lightgray',
            borderRadius: 50,
        },
        cameraInputButton: {
            backgroundColor: '#f2f2f2',
            padding: 4,
            borderRadius: 50,
        },
        textAreaSec2: {
            width: '15%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 5,
        },
        sentMsgButton: {
            backgroundColor: '#09776a',
            padding: 5,
            width: 48,
            height: 48,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1,
        },
    }
);