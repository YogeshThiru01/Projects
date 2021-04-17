import ClassCounter from './components/Counter';
import HookCounter from './components/HookCounter';
import PrevState from './components/PrevState';
import Array from './components/Array';
import { UserProvider } from './components/Context';
import Hover from './components/Hover';

function App() {
  return (
    <div className='App'>
      <UserProvider value='Yogesh Thiru'>
        <ClassCounter />
        <Hover />
        <HookCounter />
        <PrevState />
        <br />
        <Array />
      </UserProvider>
    </div>
  );
}

export default App;
