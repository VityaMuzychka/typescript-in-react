import './App.css';
import { Person, Region} from './Person';

function App() {

  return (
    <div className="App">
     <Person name='Anna' email='anna@gmail.com' age={21} isMarried={true} friends={['Inna', 'Olena', 'Vika']}
      region={Region.Podillya} />
    </div>
  );
}

export default App;
