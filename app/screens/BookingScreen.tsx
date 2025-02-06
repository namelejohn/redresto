import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MyButton from '../components/MyButton.tsx';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import {Calendar} from 'react-native-calendars';
import {MarkedDates} from 'react-native-calendars/src/types';
import {Dropdown} from 'react-native-element-dropdown';

const ReservationSchema = Yup.object().shape({
  guests: Yup.number()
    .required('Required')
    .min(1, 'Минимум 1 гость')
    .max(8, 'Максимум 8 гостей'),
  time: Yup.string().required('Required'),
  table: Yup.string().required('Required'),
});

const BookingScreen = ({navigation}: any) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [guests, setGuests] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  const timeData = [
    {label: '12:00', value: '12:00'},
    {label: '13:00', value: '13:00'},
    {label: '14:00', value: '14:00'},
    {label: '15:00', value: '15:00'},
    {label: '16:00', value: '16:00'},
    {label: '17:00', value: '17:00'},
    {label: '18:00', value: '18:00'},
    {label: '19:00', value: '19:00'},
    {label: '20:00', value: '20:00'},
    {label: '21:00', value: '21:00'},
  ];

  const tableData = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '8'},
    {label: '8', value: '8'},
  ];

  const onSelectDate = (date: any) => {
    const dateString = date.dateString;
    setSelectedDate(dateString);

    // Очищаем предыдущие отметки
    const newMarkedDates: MarkedDates = {};
    newMarkedDates[dateString] = {
      selected: true,
      selectedColor: COLORS.primary,
    };
    setMarkedDates(newMarkedDates);
  };

  const handleSubmit = () => {
    navigation.navigate('BookingConfirmation', {table: selectedTable});
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}>
          <Calendar
            style={styles.calendar}
            theme={{
              calendarBackground: '#FFBCBC',
              selectedDayBackgroundColor: '#A55151',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#A55151',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              monthTextColor: '#2d4150',
              textMonthFontWeight: 'bold',
              arrowColor: '#2d4150',
            }}
            onDayPress={onSelectDate}
            markedDates={markedDates}
            minDate={new Date().toISOString().split('T')[0]}
          />

          <View style={styles.formContainer}>
            <View style={styles.guestsContainer}>
              <View style={styles.guestsControl}>
                <Text style={styles.labelGuest}>Guests</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.guestButton}
                    onPress={() => guests > 0 && setGuests(guests - 1)}>
                    <Text style={styles.guestButtonText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.guestsCount}>{guests}</Text>
                  <TouchableOpacity
                    style={styles.guestButton}
                    onPress={() => guests < 8 && setGuests(guests + 1)}>
                    <Text style={styles.guestButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>Time</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={timeData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="00:00"
                value={selectedTime}
                onChange={item => {
                  setSelectedTime(item.value);
                }}
              />
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>Table number</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={tableData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="-"
                value={selectedTable}
                onChange={item => {
                  setSelectedTable(item.value);
                }}
              />
            </View>
          </View>
          <MyButton
            onPress={handleSubmit}
            title={'Book now'}
            containerStyle={{marginHorizontal: 20}}
          />
        </ScrollView>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.black,
    marginLeft: 20,
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 10,
  },
  formContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 15,
  },
  guestsContainer: {
    marginBottom: 20,
  },
  guestsControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFB6C1',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  guestButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA3A3',
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  guestButtonText: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: 500,
  },
  guestsCount: {
    fontSize: 16,
    color: COLORS.black,
    paddingHorizontal: 10,
  },
  timeSection: {
    marginBottom: 20,
  },
  timeSlots: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  timeSlot: {
    backgroundColor: '#FFBCBC',
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  timeSlotSelected: {
    backgroundColor: COLORS.primary,
  },
  timeSlotText: {
    color: COLORS.black,
    fontSize: 16,
  },
  timeSlotTextSelected: {
    color: COLORS.white,
  },
  tableSection: {
    marginBottom: 20,
  },
  tablesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tableButton: {
    backgroundColor: '#FFBCBC',
    width: '30%',
    aspectRatio: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tableButtonSelected: {
    backgroundColor: COLORS.primary,
  },
  tableButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  tableButtonTextSelected: {
    color: COLORS.white,
  },
  buttonContainer: {
    marginTop: 20,
  },
  labelGuest: {
    fontSize: 16,
    fontWeight: 600,
    color: '#A55151',
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFA3A3',
    marginBottom: 4,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    backgroundColor: '#FFB6C1',
    borderRadius: 21,
    paddingHorizontal: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000000',
  },
});

export default BookingScreen;
