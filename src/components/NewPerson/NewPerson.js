import PersonForm from "./PersonForm";
import "./NewPerson.css";
import { useState } from "react";

const NewPerson = (props) => {
  const SavePersonDataHandler = (enteredPersonData) => {
    const personData = {
      ...enteredPersonData,

      // assign id to person data object we are cloning
      id: Math.random().toString(),
    };

console.log("person data being created with id: " + personData);
 
props.onAddPerson(personData);

setIsEditing(false);
  }; // end of SavePersonDataHandler 

  // will be used to display Add new Person button value
  const [isEditing, setIsEditing] = useState(false);

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  let formLogic;

  let addNewPerson;

  if (isEditing) {
    formLogic = (
      <PersonForm
        onSavePersonData={SavePersonDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  if (!isEditing) {
    addNewPerson = (
      <button onClick={startEditingHandler}>Add New Person</button>
    );
  }

  return (
    <div className="new-person">
      {addNewPerson}
      {formLogic}
    </div>
  );
};

export default NewPerson;
