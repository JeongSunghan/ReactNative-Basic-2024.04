import { SectionList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1 },
    SectionHeader: {
        paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 10,
        fontSize: 16, fontWeight: "bold", backgroundColor: 'rgba(247, 247, 247, 1.0)',
    },
    item: { padding: 5, fontSize: 16, height: 24, }
})

export default function SectionListBasic() {
    return (
        <View style={styles}>
            <Text style={{ fontSize: 30, padding: 15, fontWeight: "bold" }}>과일목록</Text>
            <SectionList
                // sections 생성 후, 타이틀과 타이틀에 넣을 data를 입력
                sections={[
                    { title: '토종', data: ['사과', '감', '배'] },
                    { title: '수입', data: ['Banana', 'Mango', 'Orange', 'Cherry'] }
                ]}
                // 리스트의 각 항목을 어떻게 렌더링할지 정의
                // 여기서는 각 항목(item)을 받아와서 Text 컴포넌트 안에 표시
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}

                // 섹션의 헤더를 어떻게 렌더링할지 정의
                // {section}으로부터 받아오며, 섹션의 title을 텍스트로 사용하여 Text 컴포넌트로 표시
                renderSectionHeader={({ section }) => (
                    <Text style={styles.SectionHeader}>{section.title}</Text>
                )}
                // keyExtractor: 각 항목에 대한 고유 키 값을 생성하는 함수를 정의
                // 리스트 항목이 유니크한 문자열 값을 가지고 있을때 잘 작동한다.
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};