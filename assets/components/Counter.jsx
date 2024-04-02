import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8, marginBottom: 8,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginTop: 6, marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{ padding: 10, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          key='1' style={styles.button}
          onPress={() => setCount(count + 1)}
          disabled={count >= 5}
        >
          <Text style={styles.buttonLabel}>{count < 5 ? '증가시키기' : '그만해'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key='2' style={styles.button}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonLabel}>리셋</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}