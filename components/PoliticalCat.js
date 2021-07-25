import React, {useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';



class politicalCat extends React.Component{
constructor()
{
super();
}


render(){
 

  const dataList = [
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    } ,
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    } ,
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    } ,
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    },
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    } ,
    {
      CatFullName:'Bhartiya Janta Party',
      CatShortName:'BJP',
      CatImage:'bjp'
    },
    {
      CatFullName:'Congres Party',
      CatShortName:'Congres',
      CatImage:'congres'
    },
    {
      CatFullName:'Bahujan Janta Party',
      CatShortName:'BSP',
      CatImage:'bsp'
    },
    {
      CatFullName:'Samajwadi Party',
      CatShortName:'SAPA',
      CatImage:'sapa'
    },
    {
      CatFullName:'AAP Party',
      CatShortName:'AAP',
      CatImage:'aap'
    }    
    ];


    var politicalView = [];

    for(let i = 0; i < dataList.length; i++){
      var CatImage = dataList[i].CatImage;
      CatImage = CatImage.toString();
      const CatShortName = dataList[i].CatShortName;

      politicalView.push(
      <View key={i} style={styles.header}>
      
        <Animatable.Image  
                       animation="bounceIn"
                       duraton="1500"
                   source={require('../assets/political/bjp.png')}
                   style={styles.picon}
                   resizeMode="stretch"
                   />
                   <Text style={styles.ptext}>{CatShortName}</Text>
                 </View> 
      )
    }
 

    return (
      
      <view>
      <Text style={styles.ptitle}>Political Banner </Text>
      <ScrollView style={styles.ViewSpace}   horizontal={true} >
{politicalView}
      </ScrollView>
      </view>
      
      );
};
};
  

export default politicalCat;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  picon : {
width:100,
height:100
  },
  ptext:{
    alignContent:'center',
    textAlign:'center',
    fontSize:17
  },
  header:{
    flex:2

  },
  phead :{
    fontSize:24
  },
  picon:{
    width:114,
    height:113
    },
    ptitle:{
      fontSize:20,
      marginLeft:10,
      color:'#333',
      fontWeight: "bold"
      
      },
      ViewSpace:{
        marginLeft:10,
        marginRight:10,
          marginTop:20,
          marginBottom:20,
    
      }

});
