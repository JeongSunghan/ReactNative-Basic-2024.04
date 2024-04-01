import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

export default function Count() {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        if (count >= 5) {
            setIsDisabled(true);
        }
    }, [count]);

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{count}</Text>
            <Button
                title={isDisabled ? "이젠 아니야!" : "숫자가 늘어난다"}
                onPress={handleClick}
                disabled={isDisabled}
            />
        </View>
    );
};
