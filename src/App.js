import { useState } from "react";
import NewPerson from "./components/NewPerson/NewPerson";
import Person from "./components/Person/Person";

const Dummy_Persons = [
  {
    id: "p1",
    name: "Niyaz Khan",
    age: 24,
    date: new Date(1999, 0, 29),
  },
  {
    id: "p2",
    name: "Sam Parker",
    age: 23,
    date: new Date(2000, 7, 14),
  },
  {
    id: "p3",
    name: "Emma Smith",
    age: 26,
    date: new Date(1997, 10, 7),
  },
  {
    id: "p4",
    name: "Ryza Eshima",
    age: 23,
    date: new Date(2000, 8, 3),
  },
];

function App() {

  const [person, setPerson] = useState(Dummy_Persons);

  const addPersonHandler = (personItem) =>{
    console.log("in App.js");
    console.log(personItem);
    // here we are setting our person array to a new array
    // which inculdes the new item we are passing through
    // we relay on the previousd state so we add item like this

    setPerson((prevPerson) =>{
      return [personItem, ...prevPerson];
    });
  };


  return (
    <div>
      <NewPerson  onAddPerson = {addPersonHandler}/>
      <Person item={person} />
    </div>
  );
}

export default App;
