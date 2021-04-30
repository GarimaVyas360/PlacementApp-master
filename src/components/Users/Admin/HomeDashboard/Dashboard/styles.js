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
            // flex:0.25,
            height:300,
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
            flexGrow:1,
        },
        newActivityCardView:{
            width:150,
            margin:5,
            marginBottom:15,
            backgroundColor:'#004d00',
            borderRadius:8,
            padding:5,
            shadowColor: 'black',
            shadowOffset: { width: 5, height: 5},
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ddd',
            opacity:1
        },
        activityCardView:{
            width:150,
            margin:5,
            marginBottom:15,
            backgroundColor:'#4d0000',
            borderRadius:8,
            padding:5,
            shadowColor: 'black',
            shadowOffset: { width: 5, height: 5},
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ddd',
            opacity:1
        },
        activityCardImage:{
            width:75,
            height:75,
            borderRadius:100,
            borderWidth:1,
            borderColor:'white',
            marginTop:25,
            alignSelf:'center',
            backgroundColor:'white',
            opacity:1
        },
        activityCardText:{
            fontWeight:'bold',
            marginTop:25,
            textAlign:'center',
            fontFamily:'monospace',
            fontSize: dimensions.font_size.normal,
            opacity:1,
            color:'white'
        },
        headerView:{
            flexDirection:'row',
            padding:5,
        },
        logoutEdit:{
            padding:5,
            color: dimensions.color.lightblack,
        },
    }
);