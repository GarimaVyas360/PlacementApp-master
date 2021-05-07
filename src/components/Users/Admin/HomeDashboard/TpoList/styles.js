import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create(
    {
        scrollView: {
            flexGrow: 1,
        },
        mainContainer: {
            flex: 1,
            // backgroundColor:'white'
        },
        container: {
            flex: 1,
        },
        activityView: {
            flex: 1,
        },
        pickerView: {
            borderColor: 'darkgray',
            borderWidth: 1.3,
            borderRadius: 4,
            backgroundColor: '#f6f6f6',
        },
        spacing5: {
            marginBottom: 5,
        },
        spacing15: {
            marginBottom: 15,
        },
        listView: {
            flex: 1,
            padding: 10,
            backgroundColor: '#f3f3f3',
        },
        listArea: {
            width: '98%',
            margin: 2,
            marginBottom: 15,
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 5,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ddd',
            alignSelf: 'center',
            flexDirection: 'row',
        },
        listData: {
            width: '70%',
            padding: 5,
        },
        listAction: {
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        listActionButton: {
            backgroundColor: 'darkred'
        },
        listDataName: {
            fontSize: dimensions.font_size.medium,
            color: 'black',
            fontWeight: 'bold',
        },
        listDataEmailView: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        listDataEmail: {
            marginLeft: 10,
            fontSize: dimensions.font_size.normal,
            color: 'gray',
            fontWeight: 'bold',
        },
        listDataContactView: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        listDataContact: {
            marginLeft: 10,
            fontSize: dimensions.font_size.small,
            color: 'navy',
            fontWeight: 'bold',
        },
        emptyListArea: {
            backgroundColor: '#f6f6f6'
        },
        emptyTextArea: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
            marginTop: "50%"
        }
    },

);