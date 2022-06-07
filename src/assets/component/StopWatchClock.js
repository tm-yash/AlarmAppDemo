import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import {Images} from '../images/Images';

const Data = [
  {
    id: '0',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '1',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '2',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '3',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '4',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '5',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '6',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '7',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
  {
    id: '8',
    number:"01",
    title: '00:03.00',
    time: '+00:03.20',
  },
];

const StopWatchClock = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.PresetFlatLIstStyle}>
          <Text style={{fontSize: 18}}>{item.number}</Text>
          <Text style={{fontSize: 18}}>{item.title}</Text>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{item.time}</Text>
        </View>
        <View style={{height:1,width:'100%',backgroundColor:"#F2F2F2"}}/>
        </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>
          Example of React Native Timer and Stopwatch
        </Text> */}
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={time => {
              console.log(time);
            }}
          />
            <View style={{marginTop:10,height:182}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:200}}>
        
          <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}>
              {/* <Text style={styles.buttonText}>RESET</Text> */}
              <Image style={{width:30,height:30}} source={Images.ResetIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
              {/* <Text style={styles.buttonText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text> */}

              <Image source={!isStopwatchStart ? Images.Push : Images.Play} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{width:30,height:30}} source={Images.Flag} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StopWatchClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // padding: 20,
  },
  sectionStyle: {
    flex: 1,
    // marginTop: 32,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
  PresetFlatLIstStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    width: 350,
    marginVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 19,
  },
});

const options = {
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
    // width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    // color: '#FFF',
    marginLeft: 7,
  },
 
};
