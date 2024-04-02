import React, { useState } from "react";
import { Button, FlatList, Image, Text, TextInput, View, StyleSheet } from "react-native";

export default function ExamList() {
    const [textInput, setTextInput] = useState('');
    const [data, setData] = useState([]);

    const onChangeText = (text) => {
        setTextInput(text);
    };

    const addItemToList = () => {
        setData([...data, textInput]);
        setTextInput('');
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://picsum.photos/200/200',
                }}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder="과일 이름을 작성해주세요."
                value={textInput}
                onChangeText={onChangeText}
            />
            <Button
                title="리스트에 추가하기"
                onPress={addItemToList}
                style={styles.button}
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    input: {
        width: '25%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '80%',
    },
    listContainer: {
        width: '80%',
        alignItems: 'center',
    },
});
