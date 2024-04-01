import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

export default function Cat({name, num}) {
    // const {name, num} = props;
    return (
        <View>
            {/* 부모 컴포넌트로부터 전달받은 props.name 값을 사용 */}
            <Text>Hello, I am {name}.
            </Text>
            <View>
                <Image
                // URI를 사용하는데, 문자열 안에서 props.num 값을 동적으로 삽입하려면 백틱(```)을 사용
                    source={{
                        uri: `https://reactnative.dev/docs/assets/p_cat${num}.png`,
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="이곳은 입력 영역입니다."
            />
        </View>
    );
};