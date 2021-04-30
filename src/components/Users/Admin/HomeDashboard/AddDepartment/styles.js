import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create( 
    {  
        scrollView:{
            flexGrow : 1,
        },
        mainContainer:{  
            flex:1,
        },  
        container:{
            flex:1,
        },
        activityView:{
            flex:1,
            padding:15,
        },
        activityHeadingView:{
            flexDirection:'row',
            alignItems:'center',
            alignContent:'center',
            height:40,
        },
        activityHeadingText:{
            fontSize: dimensions.font_size.large_x,
            color: dimensions.color.lightblack,
        },
        activityHeadingIcon:{
            fontSize: dimensions.font_size.large_xx,
            color: dimensions.color.lightblack,
            position:'absolute',
            right:0,
        },
        activityListView:{
            marginTop:25,
            padding:10,
        },
        submitButton:{
            marginTop:20,
            marginBottom:10,
            alignSelf:'center',
        },
        loginButton:{
           
        },
        pickerView:{
            borderColor:'darkgray',
            borderWidth:1.3,
            borderRadius:4,
            backgroundColor:'#f6f6f6',
        },

        centeredView: {
            position:'absolute',
            bottom:0,
            width:'100%',
        },
        modalView: {
            backgroundColor: "#00001a",
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            padding: 30,
            shadowColor: "black",
            shadowOffset: {
                width: 2,
                height: 2
            },
            shadowOpacity: 1,
            shadowRadius: 25,
            elevation: 50,
        },
        modalText:{
            fontSize: dimensions.font_size.large,
            color: 'white',
            fontWeight: 'bold',
        },
        modalSubTextView:{
            flexDirection: 'row',
        },
        modalSubText:{
            fontSize: dimensions.font_size.medium,
            color: 'white',
            // fontWeight: 'bold',
        },
        modalEditIcon:{
            color: 'white',
            marginLeft:15,
        },
        modalButton:{
            flexDirection:'row',
            marginTop:20,
            marginBottom:10,
            alignSelf:'center',
        },
        cancelButton:{
            marginLeft:10,
            marginRight:10,
            width: '50%',
            backgroundColor: 'gray',
        },
        deleteButton:{
            marginLeft:10,
            marginRight:10,
            width: '50%',
            backgroundColor: 'darkred',
        },
    }
);