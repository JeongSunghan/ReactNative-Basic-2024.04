import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

// 내가 입력하는 단어를 피자 이모티콘으로 바꾸는
export default function PizzaTranslator() {
    const [text, setText] = useState('');
    return (
        <View>
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="문장을 입력하세요"

                    //사용자 입력이 변경될 때마다 setText 함수를 호출
                    onChangeText={newText => setText(newText)}      
                    //text 상태 변수를 지정해 앱이 재렌더링될 때마다 입력 필드에 표시되는 값을 최신반영
                    defaultValue={text}
                />
            </View>
            <Text style={{padding: 10, fontSize: 40}}>
                {/* 단어를 띄워쓰면 피자로 변환,
                    결과를 다시 띄어쓰기로 결합하여 (join)표시 */}
                {text.split(' ').map(word => word && '🍕').join(' ')}                               
            </Text>

            
        </View>
    );
};