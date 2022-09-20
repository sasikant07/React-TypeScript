import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Stataus from './components/Stataus';
import Toast from './components/Toast';

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Vishwas' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Stataus  status='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo diCaprio!</Heading>
      </Oscar>
      <Greet name='Vishwas' isLoggedIn={true} />
      <Button handleClick={(event, id) => {
        console.log(`Button Clicked!`, event, id)
        }}/>

      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{border: '1px solid black', padding: '1rem'}}/>

      <Toast position='center'/>
    </div>
  );
}

export default App;
