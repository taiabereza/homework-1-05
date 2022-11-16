import tania from './img/tania.jpg';
import austin from './img/austin.jpg';
import theresa from './img/theresa.jpg';

import './App.css';
import Card from './components/card/js/Card';

function App() {
  const userData = [
    {
      name: "Tania Ashmore",
      age: 26,
      gender: "Female",
      balance: 250,
      picture: tania,
    },
    {
      name: "Austin Smith",
      age: 28,
      gender: "Male",
      balance: 140,
      picture: austin,
    },
    {
      name: "Theresa Dawnson",
      age: 30,
      gender: "Female",
      balance: 170,
      picture: theresa,
    },
  ];
  return (
    userData.map((user) => {
      return (
        <Card name={user.name} age={user.age} gender={user.gender} balance={user.balance} picture={user.picture} />
      )
    })
  );
}

export default App;
