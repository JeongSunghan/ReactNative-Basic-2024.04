import React from "react";
import { Text, View } from "react-native";

export default function HelloWorld() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Try editing me! 🎉</Text>
            <Text>안녕하세요.</Text>
        </View>
    );
};