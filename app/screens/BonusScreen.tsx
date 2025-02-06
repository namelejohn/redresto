import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';
import MyButton from '../components/MyButton.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import BacktoMenuBtn from '../components/BacktoMenuBtn.tsx';

interface EventScreenProps {
  navigation: any;
}

const BonusScreen: React.FC<EventScreenProps> = props => {
  const {productStore} = useStore();
  const {addLoyalty, error, loyaltyList, clearLoyalty} = productStore;
  const [isVisible, setIsVisible] = useState(false);
  const [code, setCode] = useState('');

  function showModal() {
    setIsVisible(true);
  }
  function closeModal() {
    setIsVisible(false);
  }

  function handleAddLoyalty(_code: string) {
    const res = addLoyalty(code);
    if (res) {
      setCode('');
      closeModal();
    }
  }

  function handleClearLoyalty() {
    clearLoyalty();
    closeModal();
  }

  function navToMenu() {
    props.navigation.navigate('MenuTab');
  }

  return (
    <ScreenBg showBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {'Bonus system!\nEvery 6 burgers are free'}
          </Text>
          <View style={styles.topContainer}>
            <View style={styles.gridContainer}>
              {Array.from({length: 6}).map((_, index) => (
                <Pressable
                  onPress={showModal}
                  key={index}
                  style={[styles.gridItem]}>
                  {index === 5 ? (
                    <View style={styles.freeBurgerContainer}>
                      <Text style={styles.freeBurger}>{'FREE\nBURGER'}</Text>
                    </View>
                  ) : (
                    index < loyaltyList.length && (
                      <Image
                        source={require('../assets/burger.png')}
                        style={styles.checkIcon}
                      />
                    )
                  )}
                </Pressable>
              ))}
            </View>
          </View>
          <Text style={styles.aboutText}>
            {`U HAVE ${loyaltyList.length}/6`}
          </Text>
          <Text style={styles.aboutText}>
            We're launching a new bonus program to delight our loyal guests! Now
            every burger you order brings you closer to a free treat
          </Text>
        </View>
        <BacktoMenuBtn title={'Close bonuses'} onPress={navToMenu} />
      </SafeAreaView>
      {isVisible && (
        <ModalView
          addLoyalty={handleAddLoyalty}
          code={code}
          setCode={setCode}
          close={closeModal}
          error={error}
          isFull={loyaltyList.length === 5}
          reset={handleClearLoyalty}
        />
      )}
    </ScreenBg>
  );
};

export default observer(BonusScreen);

const ModalView = ({
  close,
  code,
  setCode,
  addLoyalty,
  error,
  isFull,
  reset,
}: any) => {
  return (
    <View style={styles.modalWrapContainer}>
      <View style={styles.modalContainer}>
        {isFull ? (
          <MyButton
            title={'Reset'}
            onPress={reset}
            containerStyle={styles.modalButton}
          />
        ) : (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize={'none'}
                style={styles.input}
                placeholder="Enter code"
                placeholderTextColor={COLORS.grayText}
                value={code}
                onChangeText={setCode}
              />
            </View>
            <Text style={styles.invalidCode}>
              {error ? 'Invalid code' : ''}
            </Text>
            <MyButton
              onPress={() => addLoyalty(code)}
              title={'Ok'}
              containerStyle={styles.modalButton}
            />
            <MyButton
              title={'Cancel'}
              onPress={close}
              containerStyle={styles.modalButton}
            />
          </>
        )}
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  cardContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 20,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: 700,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  aboutText: {
    color: COLORS.white,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubTitle: {
    color: COLORS.grayText,
    marginVertical: 10,
  },
  listTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 20,
  },
  modalButton: {
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    height: 55,
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  invalidCode: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 4,
    color: COLORS.error,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayText,
    margin: 8,
  },
  refContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: BORDER_RADIUS,
    width: '90%',
    backgroundColor: COLORS.white,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  close: {
    width: 16,
    height: 16,
  },
  refText: {
    width: '92%',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  topContainer: {
    alignItems: 'center',
  },
  presentIcon: {
    width: 198,
    height: 198,
  },
  presentItemContainer: {
    backgroundColor: COLORS.transparentBg,
    width: 115,
    height: 122,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
  gridItem: {
    width: 100,
    height: 100,
    backgroundColor: '#FFD4D4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 50,
    height: 50,
    tintColor: '#7C2828',
  },
  giftIcon: {
    width: 70,
    height: 70,
    tintColor: COLORS.primary,
  },
  modalWrapContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 99999,
    elevation: 1000,
    width: width,
    height: height,
    paddingHorizontal: 8,
  },
  modalContainer: {
    backgroundColor: '#FFAEAE',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    color: COLORS.white,
    marginLeft: 10,
  },
  freeBurger: {
    textAlign: 'center',
    color: '#4E0404',
    fontSize: 15,
    fontWeight: '600',
  },
  freeBurgerContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFD4D4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
