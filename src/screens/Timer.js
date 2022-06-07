import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StopWatchClock from '../assets/component/StopWatchClock';
import DatePicker from 'react-native-date-picker';
import {Images} from '../assets/images/Images';

const Data = [
  {
    id: '0',
    title: 'Lorem',
    time: '00:03:00',
  },
  {
    id: '1',
    title: 'Lorem',
    time: '00:03:00',
  },
  {
    id: '2',
    title: 'Lorem',
    time: '00:03:00',
  },
];

const Timer = () => {
  const [date, setDate] = useState(new Date());

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.PresetFlatLIstStyle}>
          <Text style={{fontSize: 16}}>{item.title}</Text>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Container}>
        <View style={styles.Heading}>
          <View>
            <Text style={{fontSize: 40, fontWeight: '500'}}>Timer</Text>
          </View>
          <View style={styles.Icon}>
            <Icon
              name="ellipsis-vertical"
              size={25}
              style={{fontWeight: '100'}}
            />
          </View>
        </View>
        <View>
          <View>
            <DatePicker date={date} onDateChange={setDate} mode="time" />
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: '90%',
            backgroundColor: 'gray',
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 350,
            paddingVertical: 12,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Preset</Text>
          <Text style={{fontSize: 18, color: 'red'}}>Add</Text>
        </View>
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View
        style={{
          marginTop: 130,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 60, height: 60, position: 'absolute'}}
          resizeMode={'cover'}
          source={Images.Play}
        />
      </View>
    </SafeAreaView>
  );
};

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
  PresetFlatLIstStyle: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    width: 350,
    marginVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 19,
  },
});

export default Timer;
