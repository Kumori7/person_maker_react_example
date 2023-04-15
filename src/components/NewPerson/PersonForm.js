import React, { useState } from "react";
import "./PersonForm.css";

const PersonForm = (props) => {
  const [enteredName, SetEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    //console.log(event.target.value);
    SetEnteredName(event.target.value);
  };

  const dateOfBirthChangeHandler = (event) => {
    const currentYear = new Date().getFullYear();

    const dateOfBirth = new Date(event.target.value);

    const dateOfBirthYear = dateOfBirth.getFullYear();

    // console.log("dateOfBirth year: " + dateOfBirthYear);

    // console.log("current year: " + currentYear);

    // console.log("dateOfBirth: " + dateOfBirth);

    setEnteredDate(event.target.value);

    const age = currentYear - dateOfBirthYear;

    ageHandler(age);
  };

  const ageHandler = (age) => {
    setEnteredAge(age);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // allows us to combine all the multiple data stored in state as single object
    const personData = {
      name: enteredName,
      age: enteredAge,
      date: new Date(enteredDate),
    };

    console.log("personData: " + personData.name);
    console.log("personData age: " + personData.age);
    console.log("personData dob: " + personData.date);

    // after creating person data we will pass it to NewPerson component
    // after passing it to NewPerson we will store it in our app.js to put in our array
    // this allows our parent and child component to communicate with each other
    props.onSavePersonData(personData);

    // this is two way binding where we feed back the state in the input
    // so that when we change the state
    // we also change the input to reset the state and input
    // allows us to reset data by using set method in our our arrays
    SetEnteredName("");
    setEnteredDate("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-person__controls">
        <div className="new-person__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>

        <div className="new-person__control">
          <label>Date Of Birth</label>
          <input
            type="date"
            min="1990-01-01"
            max="2005-12-31"
            value={enteredDate}
            onChange={dateOfBirthChangeHandler}
          />
        </div>
      </div>

      <div className="new-person__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  ); // end of return statement
};

export default PersonForm;
