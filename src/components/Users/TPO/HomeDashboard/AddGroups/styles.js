import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create(
    {
        scrollView: {
            flexGrow: 1,
        },
        mainContainer: {
            flex: 1,
        },
        container: {
            flex: 1,
        },
        activityView: {
            flex: 1,
            padding: 15,
        },
        activityHeadingView: {
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            height: 40,
        },
        activityHeadingText: {
            fontSize: dimensions.font_size.large_x,
            color: dimensions.color.lightblack,
        },
        activityHeadingIcon: {
            fontSize: dimensions.font_size.large_xx,
            color: dimensions.color.lightblack,
            position: 'absolute',
            right: 0,
        },
        activityListView: {
            marginTop: 25,
            padding: 10,
        },
        submitButton: {
            marginTop: 20,
            marginBottom: 10,
            alignSelf: 'center',
        },
        loginButton: {

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
        textInputFieldRadio: {
            marginBottom: 5,
            flexDirection: 'row',
        },
        textInputFieldRadioButtonView: {
            marginBottom: 5,
            flexDirection: 'row',
            marginRight: 25,
            alignItems: 'center',
        },
        textSection: {
            width: '100%',
            flexDirection: 'row',
            padding: 5,
        },
    }
);