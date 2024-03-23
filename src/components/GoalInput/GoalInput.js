import { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');

  function handleGoalInput(value) {
    setGoal(value);
  };

  function handleAddGoal() {
    props.addGoal(goal);
    setGoal('');
    props.onClose();
  }

  return (
    <Modal
      visible={props.isOpen}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../assets/images/success.png')}
          style={styles.image}
        />
        <TextInput
          placeholder='Your course goal'
          style={styles.textInput}
          onChangeText={handleGoalInput}
          value={goal}
          placeholderTextColor="#123111"
        />
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={handleAddGoal}
              color="#b180fc"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Close"
              onPress={props.onClose}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    width: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 8,
    width: '100%',
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  }
});