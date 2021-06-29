import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, ScrollView, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const goalsHandler = (entered) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), value: entered },
    ]);
    setIsOpen(false)
  };

  const cancelModal=()=>{
    setIsOpen(false)
  }

  const deleteHandler = (id) => {
    setGoals((prev) => prev.filter((item) => item.id != id));
  };
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}> 
      <GoalInput
        open={isOpen}
        placeholder="enter text"
        goalsHandler={goalsHandler} 
        cancelModal={cancelModal}
      />
      <Button title="Open The modal" onPress={()=>setIsOpen(true)} />

      <FlatList
        data={goals}
        keyExtractor={(item, key) => item.id}
        renderItem={(inputField) => (
          <GoalItem
            id={inputField.item.id}
            onDelete={deleteHandler}
            value={inputField.item.value}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
