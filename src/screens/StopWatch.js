import { View, Text ,SafeAreaView,StyleSheet,Image,FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StopWatchClock from '../assets/component/StopWatchClock';



const StopWatch = () => {

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#ffffff"}}>
    <View style={styles.Container}>
      <View style={styles.Heading}>
        <View>
          <Text style={{fontSize: 40, fontWeight: '500'}}>Stop Watch</Text>
          {/* <Text style={{color: 'gray', fontSize: 16}}>
            All alarms turned off
          </Text> */}
        </View>
        <View style={styles.Icon}>
          <Icon
            name="ellipsis-vertical"
            size={25}
            style={{fontWeight: '100'}}
          />
        </View>
      </View>
      <View style={{paddingTop:40,justifyContent:"center",alignItems:"center"}}>
        <Image 
          source={require("../assets/images/WhiteWatch.png") }
          style={{
            resizeMode: "cover",
            height: 300,
            width: 300
          }}
        />
        <StopWatchClock/>
      </View>
      <View>
        <Icon name="refresh-outline" size={30} style={{color:"red"}}/>
      </View>
    </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350,
    alignItems: 'center',
  },
  Icon: {
    backgroundColor: '#F9F9F9',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
})

export default StopWatch