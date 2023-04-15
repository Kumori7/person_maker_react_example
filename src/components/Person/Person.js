import { useState } from "react";
import Card from "../UI/Card";
import PersonFilter from "./PersonFilter";
import PersonList from "./PersonList";

const Person = (props) => {
  const [filteredYear, setFilteredYear] = useState("2000");

  const filterChangeHandler = (selectedYear) => {
    console.log("inside Person.js");
    console.log("yearDate:" + selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredPersonByDobYear = props.item.filter((person) =>{
    return person.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card>
        <PersonFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
        <PersonList item={filteredPersonByDobYear} />
      </Card>
    </div>
  );
};

export default Person;
