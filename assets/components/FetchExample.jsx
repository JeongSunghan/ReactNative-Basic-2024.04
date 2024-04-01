import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


export default function FetchExample() {    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //네트워크를 받아올 때 처리하는 통상적인 방법?
    // 화면에 나타날 때 외부 api 호출
    useEffect(() => {
        // fetch 함수 사용 => 링크에서 데이터 가져옴
        fetch('https://reactnative.dev/movies.json')            
            .then(res => res.json())        //응답을 json형태로 파싱
            // 파싱된 객체에서 영화데이터를 setData에 저장
            .then(obj => {  
                console.log(obj);       // {title, releaseYear}
                setData(obj.movies);
            })
            //try - catch 느낌과 비슷하다.
            .catch(error => {console.error(error);})
            //데이터 로딩이 끝난 후, 성공 or 실패든 로딩 상태를 false로 설정하여 로딩이 완료
            .finally(setLoading(false));
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30, padding: 15, fontWeight: "bold" }}>내가 좋아하는 과일</Text>
            <FlatList
                data={[
                    { key: 'Apple' },
                    { key: 'Banana' },
                    { key: 'Cherry' },
                    { key: 'Cherry' },
                    { key: 'Orange' },
                    { key: 'Mango' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}

            />
        </View>
    );
};