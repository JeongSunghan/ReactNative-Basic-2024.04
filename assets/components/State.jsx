import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";

export default function  State({name}) {
    const [isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Image 
                source ={require('../img/Hwang.jpg')}
                style={{height:200, width:300, borderRadius: 20, padding: 10}}
            />
            <Text>
                I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button 
                onPress={() => {setIsHungry(false);}}
                disabled={!isHungry}
                title={isHungry ? '제발 돈까스를 사주세요!!!' : '감사합니다!'}
            />                            
        </View>
    );
};