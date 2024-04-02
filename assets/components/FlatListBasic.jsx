import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 20 },
    item: { padding: 10, fontSize: 20, height: 40, }
})

export default function FlatListBasic() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, padding: 15, fontWeight:"bold"}}>내가 좋아하는 과일</Text>
            <FlatList                
                data={[  
                    //  리스트로 표시하고자 하는 데이터의 배열을 전달
                    // key안에 식별 할 수 있는 키값을 넣기                    
                    { key: 'Apple' }, 
                    { key: 'Banana' },
                    { key: 'Cherry' },                
                    { key: 'Orange' },
                    { key: 'Mango' },
                ]}
                //  배열의 각 아이템을 통해 Text 컴포넌트를 생성
                //  각 Text 컴포넌트는 스타일이 적용된 과일 이름을 표시
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

            />
        </View>
    );
};