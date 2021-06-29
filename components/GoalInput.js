import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [entered, setEntered] = useState("");
  const inputHandler = (text) => {
    setEntered(text);
  };
  return (
    <Modal visible={props.open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.inputText}
          onChangeText={inputHandler}
          value={entered}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="CANCEL"
            color="red"
            onPress={() => {
              setEntered("");
              props.cancelModal();
            }}
          />
          <Button
            title="ADD"
            onPress={() => {
              setEntered("");
              props.goalsHandler(entered);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputText: {
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    width: "80%",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
export default GoalInput;
