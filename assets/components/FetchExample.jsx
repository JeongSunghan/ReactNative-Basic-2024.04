import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";


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
        <View style={{flex: 1, padding: 10}}>
            {isLoading ? (
                //로딩이 true일 경우, ActivityIndicator 컴포넌트 렌더링하여 로딩 중임을 시각적으로 알리고
                <ActivityIndicator />                
            ) : (
                // false로 변경되면(로딩이 끝나면), FlatList컴포넌트를 사용하여 데이터를 리스트로 표현
                <FlatList 
                    data={data}         //플랫리스트에 표시할 데이터 지정
                    keyExtractor={({id}) => id}     //id속성을 키값으로 사용 및 추출

                    //  데이터의 각 아이템을 어떻게 렌더링할지 정의
                    // 영화 아이템의 title과 releaseYear를 text 컴포넌트 안에 표시
                    renderItem={({item}) => (       
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
        /*  정리!!
                데이터가 로딩 중일 때는 로딩 인디케이터를 보여주고, 로딩이 완료되면 
                API로부터 받은 데이터를 리스트로 표시
        */
        
    );
};