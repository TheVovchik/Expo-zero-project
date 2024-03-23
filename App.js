import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import GoalItem from './src/components/GoalItem/GoalItem';
import GoalInput from './src/components/GoalInput/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function addGoal(goal) {
    const key = uuid();

    setAllGoals(curr => ([
      ...curr,
      {
        id: key,
        data: goal,
      }
    ]));
  };

  function removeGoal(goalId) {
    setAllGoals(curr => curr.filter(item => item.id !== goalId));
  }

  function removeGoal(goalId) {
    setAllGoals(curr => curr.filter(item => item.id !== goalId));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addBtnWrapper}>
          <Button
            title="Add new Goal"
            color="#5e0acc"
            onPress={onOpen}
          />
        </View>

        {isOpen && (
          <GoalInput
            addGoal={addGoal}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}

        <View style={styles.goalsContainer}>
          {allGoals.length === 0 && <Text style={styles.emptyGoals}>List of goals...</Text>}

          {allGoals.length > 0 && <FlatList
            alwaysBounceVertical={false}
            data={allGoals}
            renderItem={({item}) => {
              return (
                <GoalItem
                  item={item}
                  removeGoal={removeGoal}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addBtnWrapper: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    justifyContent: 'center',
  },
  goalsContainer: {
    flex: 5,
  },
  emptyGoals: {
    color: '#ffffff',
  }
});
