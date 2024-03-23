import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const GoalItem = (props) => {
  function handleRemoveGoal() {
    props.removeGoal(props.item.id);
  }

  return (
    <Pressable
      android_ripple={{
        color: 'red',
      }}
      style={({ pressed }) => pressed && styles.pressed}
      onPress={handleRemoveGoal}
    >
      <View
        style={styles.goalItem}
      >
        <Text
          style={styles.goalText}
        >
          {props.item.data}
        </Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  }
});