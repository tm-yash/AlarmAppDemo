import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Switch,
  Pressable,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../assets/images/Images';
import DatePicker from 'react-native-date-picker';

const Data = [
  {
    id: '0',
    time: '09:00',
    Place: 'Kolkata',
    title: 'Today',
    timeDuration: 'PM',
  },
  {
    id: '1',
    time: '09:00',
    Place: 'Kolkata',
    title: 'Today',
    timeDuration: 'PM',
  },
];
const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  const [number1, onChangeNumber1] = React.useState(null);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={{paddingHorizontal: 15, paddingTop: 15}}>
          <View
            style={{
              backgroundColor: '#f9f9f9',
              height: 80,
              width: 350,
              borderRadius: 20,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text style={{fontSize: 18}}>{item.Place}</Text>
                </View>
                <View>
                  <Text style={{color: 'gray', fontSize: 16, paddingTop: 5}}>
                    {item.title}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.Container,
                  {flexDirection: 'row', alignItems: 'baseline'},
                ]}>
                {/* <Switch
                  trackColor={{false: '#767577', true: '#5ECC63'}}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#E0E0E0"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                /> */}

                <Text style={{fontSize: 33, fontWeight: '500'}}>
                  {item.time}
                </Text>
                <Text style={{color:"gray"}}>{item.timeDuration}</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Container}>
        <View style={styles.Heading}>
          <View>
            <Text style={{fontSize: 40, fontWeight: '500'}}>World Clock</Text>
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
      </View>
      <View>
        <FlatList
          // style={{}}
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={[styles.centeredView, {backgroundColor: 'rgba(0,0,0,0.6)'}]}>
            <View style={styles.modalView}>
              <View style={{}}>
                <DatePicker date={date} onDateChange={setDate} mode="time" />
              </View>
              <View
                style={{height: 1, width: '100%', backgroundColor: 'gray'}}
              />
              <View>
                <View style={{paddingTop: 20}}>
                  <Text style={{fontSize: 18}}>Ringtone</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Ringtone name"
                    keyboardType="numeric"
                  />
                </View>
                <View style={{paddingTop: 20}}>
                  <Text style={{fontSize: 18}}>Alarm title</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber1}
                    value={number1}
                    placeholder="Add Title"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 280,
                }}>
                <View>
                  <TouchableOpacity style={styles.CancelBtn}>
                    <Text
                      style={{
                        color: '#06122E',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={[styles.CancelBtn, {backgroundColor: '#212A35'}]}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {width: 10, height: 50},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                {/* <Text>closed</Text> */}
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          {/* <Text style={styles.textStyle}>Show Modal</Text> */}
          <Image
            source={Images.modelPlusIcon}
            style={{height: 30, width: 30}}
          />
        </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    marginBottom: 70,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 38,
    height: 550,
    width: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    height: 61,
    width: 61,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal:35,
    // paddingVertical:13
  },
  buttonOpen: {
    backgroundColor: '#F85A29',
    // borderRadius:12,
    position:"absolute",
    bottom:49,
    marginTop: 12,
    marginBottom:10
  },
  buttonClose: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F3F3F5',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  CancelBtn: {
    backgroundColor: '#D9D9D9',
    width: 130,
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
