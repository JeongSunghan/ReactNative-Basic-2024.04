import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginTop: 6,
    marginBottom: 6,
    minWidth: '25%',
    textAlign: 'center',
  },

  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});


export default function CounterExam() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  const handleReset = () => {
    setCount(1);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ padding: 10, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleIncrease}
        >
          <Text style={styles.buttonLabel}>증가시키기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleReset}
        >
          <Text style={styles.buttonLabel}>리셋하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}