import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet } from 'react-native';
import HelloWorld from './assets/components/HelloWorld';
import Cat from './assets/components/Cat';
import State from './assets/components/State';
import PizzaTranslator from './assets/components/PizzaTranslator';
import FlatListBasic from './assets/components/FlatListBasic';
import SectionListBasic from './assets/components/SectionListBasic';
import FetchExample from './assets/components/FetchExample';
import CountExam from './assets/components/CountExam';
import Counter from './assets/components/Counter';
import ExamList from './assets/components/ExamList';
import CounterExam from './assets/components/CounterExam';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

export default function App() {   //메인 컴포넌트
  return (
    <ScrollView>
      <Image source={logo} />
      <CounterExam />
      <Image source={logo} />
      <ExamList />
      {/* <Image source={logo} />
      <Counter />
      <Image source={logo} />
      <CountExam />
      <Image source={logo} />
      <FetchExample />
      <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasic />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name='Hwang' />
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Run Tom Tugger' num='2' /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
