import './App.css';
import { Person } from './Person';

function App() {

  return (
    <div className="App">
     <Person name='Anna' email='anna@gmail.com' age={21} isMarried={true} friends={['Inna', 'Olena', 'Vika']} />
    </div>
  );
}

export default App;
