import React, { useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ padding: 10, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
            <View>
                <TouchableOpacity key='1'
                    onPress={() => setCount(count + 1)}
                    disabled={count >= 5}
                    >
                    <Text>증가</Text>
                </TouchableOpacity>
                <TouchableOpacity key='2'
                    onPress={() => setCount(0)}

                    >
                    <Text>리셋</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
